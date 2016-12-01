!function($){$.color={},$.color.make=function(t,i,e,o){var n={};return n.r=t||0,n.g=i||0,n.b=e||0,n.a=null!=o?o:1,n.add=function(t,i){for(var e=0;e<t.length;++e)n[t.charAt(e)]+=i;return n.normalize()},n.scale=function(t,i){for(var e=0;e<t.length;++e)n[t.charAt(e)]*=i;return n.normalize()},n.toString=function(){return n.a>=1?"rgb("+[n.r,n.g,n.b].join(",")+")":"rgba("+[n.r,n.g,n.b,n.a].join(",")+")"},n.normalize=function(){function t(t,i,e){return i<t?t:i>e?e:i}return n.r=t(0,parseInt(n.r),255),n.g=t(0,parseInt(n.g),255),n.b=t(0,parseInt(n.b),255),n.a=t(0,n.a,1),n},n.clone=function(){return $.color.make(n.r,n.b,n.g,n.a)},n.normalize()},$.color.extract=function(t,i){var e;do{if(e=t.css(i).toLowerCase(),""!=e&&"transparent"!=e)break;t=t.parent()}while(t.length&&!$.nodeName(t.get(0),"body"));return"rgba(0, 0, 0, 0)"==e&&(e="transparent"),$.color.parse(e)},$.color.parse=function(i){var e,o=$.color.make;if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i))return o(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10));if(e=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return o(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),parseFloat(e[4]));if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i))return o(2.55*parseFloat(e[1]),2.55*parseFloat(e[2]),2.55*parseFloat(e[3]));if(e=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return o(2.55*parseFloat(e[1]),2.55*parseFloat(e[2]),2.55*parseFloat(e[3]),parseFloat(e[4]));if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))return o(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16));if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i))return o(parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16));var n=$.trim(i).toLowerCase();return"transparent"==n?o(255,255,255,0):(e=t[n]||[0,0,0],o(e[0],e[1],e[2]))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function($){function t(t,i){var e=i.children("."+t)[0];if(null==e&&(e=document.createElement("canvas"),e.className=t,$(e).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(i),!e.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");e=window.G_vmlCanvasManager.initElement(e)}this.element=e;var o=this.context=e.getContext("2d"),n=window.devicePixelRatio||1,a=o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;this.pixelRatio=n/a,this.resize(i.width(),i.height()),this.textContainer=null,this.text={},this._textCache={}}function i(i,o,n,a){function r(t,i){i=[xt].concat(i);for(var e=0;e<t.length;++e)t[e].apply(this,i)}function l(){for(var i={Canvas:t},e=0;e<a.length;++e){var o=a[e];o.init(xt,i),o.options&&$.extend(!0,nt,o.options)}}function s(t){$.extend(!0,nt,t),t&&t.colors&&(nt.colors=t.colors),null==nt.xaxis.color&&(nt.xaxis.color=$.color.parse(nt.grid.color).scale("a",.22).toString()),null==nt.yaxis.color&&(nt.yaxis.color=$.color.parse(nt.grid.color).scale("a",.22).toString()),null==nt.xaxis.tickColor&&(nt.xaxis.tickColor=nt.grid.tickColor||nt.xaxis.color),null==nt.yaxis.tickColor&&(nt.yaxis.tickColor=nt.grid.tickColor||nt.yaxis.color),null==nt.grid.borderColor&&(nt.grid.borderColor=nt.grid.color),null==nt.grid.tickColor&&(nt.grid.tickColor=$.color.parse(nt.grid.color).scale("a",.22).toString());var e,o,n,a=i.css("font-size"),l=a?+a.replace("px",""):13,s={style:i.css("font-style"),size:Math.round(.8*l),variant:i.css("font-variant"),weight:i.css("font-weight"),family:i.css("font-family")};for(n=nt.xaxes.length||1,e=0;e<n;++e)o=nt.xaxes[e],o&&!o.tickColor&&(o.tickColor=o.color),o=$.extend(!0,{},nt.xaxis,o),nt.xaxes[e]=o,o.font&&(o.font=$.extend({},s,o.font),o.font.color||(o.font.color=o.color),o.font.lineHeight||(o.font.lineHeight=Math.round(1.15*o.font.size)));for(n=nt.yaxes.length||1,e=0;e<n;++e)o=nt.yaxes[e],o&&!o.tickColor&&(o.tickColor=o.color),o=$.extend(!0,{},nt.yaxis,o),nt.yaxes[e]=o,o.font&&(o.font=$.extend({},s,o.font),o.font.color||(o.font.color=o.color),o.font.lineHeight||(o.font.lineHeight=Math.round(1.15*o.font.size)));for(nt.xaxis.noTicks&&null==nt.xaxis.ticks&&(nt.xaxis.ticks=nt.xaxis.noTicks),nt.yaxis.noTicks&&null==nt.yaxis.ticks&&(nt.yaxis.ticks=nt.yaxis.noTicks),nt.x2axis&&(nt.xaxes[1]=$.extend(!0,{},nt.xaxis,nt.x2axis),nt.xaxes[1].position="top",null==nt.x2axis.min&&(nt.xaxes[1].min=null),null==nt.x2axis.max&&(nt.xaxes[1].max=null)),nt.y2axis&&(nt.yaxes[1]=$.extend(!0,{},nt.yaxis,nt.y2axis),nt.yaxes[1].position="right",null==nt.y2axis.min&&(nt.yaxes[1].min=null),null==nt.y2axis.max&&(nt.yaxes[1].max=null)),nt.grid.coloredAreas&&(nt.grid.markings=nt.grid.coloredAreas),nt.grid.coloredAreasColor&&(nt.grid.markingsColor=nt.grid.coloredAreasColor),nt.lines&&$.extend(!0,nt.series.lines,nt.lines),nt.points&&$.extend(!0,nt.series.points,nt.points),nt.bars&&$.extend(!0,nt.series.bars,nt.bars),null!=nt.shadowSize&&(nt.series.shadowSize=nt.shadowSize),null!=nt.highlightColor&&(nt.series.highlightColor=nt.highlightColor),e=0;e<nt.xaxes.length;++e)m(ht,e+1).options=nt.xaxes[e];for(e=0;e<nt.yaxes.length;++e)m(ft,e+1).options=nt.yaxes[e];for(var c in mt)nt.hooks[c]&&nt.hooks[c].length&&(mt[c]=mt[c].concat(nt.hooks[c]));r(mt.processOptions,[nt])}function c(t){ot=h(t),x(),g()}function h(t){for(var i=[],e=0;e<t.length;++e){var o=$.extend(!0,{},nt.series);null!=t[e].data?(o.data=t[e].data,delete t[e].data,$.extend(!0,o,t[e]),t[e].data=o.data):o.data=t[e],i.push(o)}return i}function f(t,i){var e=t[i+"axis"];return"object"==typeof e&&(e=e.n),"number"!=typeof e&&(e=1),e}function u(){return $.grep(ht.concat(ft),function(t){return t})}function d(t){var i={},e,o;for(e=0;e<ht.length;++e)o=ht[e],o&&o.used&&(i["x"+o.n]=o.c2p(t.left));for(e=0;e<ft.length;++e)o=ft[e],o&&o.used&&(i["y"+o.n]=o.c2p(t.top));return void 0!==i.x1&&(i.x=i.x1),void 0!==i.y1&&(i.y=i.y1),i}function p(t){var i={},e,o,n;for(e=0;e<ht.length;++e)if(o=ht[e],o&&o.used&&(n="x"+o.n,null==t[n]&&1==o.n&&(n="x"),null!=t[n])){i.left=o.p2c(t[n]);break}for(e=0;e<ft.length;++e)if(o=ft[e],o&&o.used&&(n="y"+o.n,null==t[n]&&1==o.n&&(n="y"),null!=t[n])){i.top=o.p2c(t[n]);break}return i}function m(t,i){return t[i-1]||(t[i-1]={n:i,direction:t==ht?"x":"y",options:$.extend(!0,{},t==ht?nt.xaxis:nt.yaxis)}),t[i-1]}function x(){var t=ot.length,i=-1,e;for(e=0;e<ot.length;++e){var o=ot[e].color;null!=o&&(t--,"number"==typeof o&&o>i&&(i=o))}t<=i&&(t=i+1);var n,a=[],r=nt.colors,l=r.length,s=0;for(e=0;e<t;e++)n=$.color.parse(r[e%l]||"#666"),e%l==0&&e&&(s=s>=0?s<.5?-s-.2:0:-s),a[e]=n.scale("rgb",1+s);var c=0,h;for(e=0;e<ot.length;++e){if(h=ot[e],null==h.color?(h.color=a[c].toString(),++c):"number"==typeof h.color&&(h.color=a[h.color].toString()),null==h.lines.show){var u,d=!0;for(u in h)if(h[u]&&h[u].show){d=!1;break}d&&(h.lines.show=!0)}null==h.lines.zero&&(h.lines.zero=!!h.lines.fill),h.xaxis=m(ht,f(h,"x")),h.yaxis=m(ft,f(h,"y"))}}function g(){function t(t,i,e){i<t.datamin&&i!=-o&&(t.datamin=i),e>t.datamax&&e!=o&&(t.datamax=e)}var i=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,o=Number.MAX_VALUE,n,a,l,s,c,h,f,d,p,m,x,g,b,v,k,y;for($.each(u(),function(t,o){o.datamin=i,o.datamax=e,o.used=!1}),n=0;n<ot.length;++n)h=ot[n],h.datapoints={points:[]},r(mt.processRawData,[h,h.data,h.datapoints]);for(n=0;n<ot.length;++n){if(h=ot[n],k=h.data,y=h.datapoints.format,!y){if(y=[],y.push({x:!0,number:!0,required:!0}),y.push({y:!0,number:!0,required:!0}),h.bars.show||h.lines.show&&h.lines.fill){var w=!!(h.bars.show&&h.bars.zero||h.lines.show&&h.lines.zero);y.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:w}),h.bars.horizontal&&(delete y[y.length-1].y,y[y.length-1].x=!0)}h.datapoints.format=y}if(null==h.datapoints.pointsize){h.datapoints.pointsize=y.length,d=h.datapoints.pointsize,f=h.datapoints.points;var M=h.lines.show&&h.lines.steps;for(h.xaxis.used=h.yaxis.used=!0,a=l=0;a<k.length;++a,l+=d){v=k[a];var T=null==v;if(!T)for(s=0;s<d;++s)g=v[s],b=y[s],b&&(b.number&&null!=g&&(g=+g,isNaN(g)?g=null:g==1/0?g=o:g==-(1/0)&&(g=-o)),null==g&&(b.required&&(T=!0),null!=b.defaultValue&&(g=b.defaultValue))),f[l+s]=g;if(T)for(s=0;s<d;++s)g=f[l+s],null!=g&&(b=y[s],b.autoscale!==!1&&(b.x&&t(h.xaxis,g,g),b.y&&t(h.yaxis,g,g))),f[l+s]=null;else if(M&&l>0&&null!=f[l-d]&&f[l-d]!=f[l]&&f[l-d+1]!=f[l+1]){for(s=0;s<d;++s)f[l+d+s]=f[l+s];f[l+1]=f[l-d+1],l+=d}}}}for(n=0;n<ot.length;++n)h=ot[n],r(mt.processDatapoints,[h,h.datapoints]);for(n=0;n<ot.length;++n){h=ot[n],f=h.datapoints.points,d=h.datapoints.pointsize,y=h.datapoints.format;var C=i,S=i,W=e,z=e;for(a=0;a<f.length;a+=d)if(null!=f[a])for(s=0;s<d;++s)g=f[a+s],b=y[s],b&&b.autoscale!==!1&&g!=o&&g!=-o&&(b.x&&(g<C&&(C=g),g>W&&(W=g)),b.y&&(g<S&&(S=g),g>z&&(z=g)));if(h.bars.show){var I;switch(h.bars.align){case"left":I=0;break;case"right":I=-h.bars.barWidth;break;default:I=-h.bars.barWidth/2}h.bars.horizontal?(S+=I,z+=I+h.bars.barWidth):(C+=I,W+=I+h.bars.barWidth)}t(h.xaxis,C,W),t(h.yaxis,S,z)}$.each(u(),function(t,o){o.datamin==i&&(o.datamin=null),o.datamax==e&&(o.datamax=null)})}function b(){i.css("padding",0).children().filter(function(){return!$(this).hasClass("flot-overlay")&&!$(this).hasClass("flot-base")}).remove(),"static"==i.css("position")&&i.css("position","relative"),at=new t("flot-base",i),rt=new t("flot-overlay",i),st=at.context,ct=rt.context,lt=$(rt.element).unbind();var e=i.data("plot");e&&(e.shutdown(),rt.clear()),i.data("plot",xt)}function v(){nt.grid.hoverable&&(lt.mousemove(V),lt.bind("mouseleave",X)),nt.grid.clickable&&lt.click(Y),r(mt.bindEvents,[lt])}function k(){bt&&clearTimeout(bt),lt.unbind("mousemove",V),lt.unbind("mouseleave",X),lt.unbind("click",Y),r(mt.shutdown,[lt])}function y(t){function i(t){return t}var e,o,n=t.options.transform||i,a=t.options.inverseTransform;"x"==t.direction?(e=t.scale=dt/Math.abs(n(t.max)-n(t.min)),o=Math.min(n(t.max),n(t.min))):(e=t.scale=pt/Math.abs(n(t.max)-n(t.min)),e=-e,o=Math.max(n(t.max),n(t.min))),n==i?t.p2c=function(t){return(t-o)*e}:t.p2c=function(t){return(n(t)-o)*e},a?t.c2p=function(t){return a(o+t/e)}:t.c2p=function(t){return o+t/e}}function w(t){for(var i=t.options,e=t.ticks||[],o=i.labelWidth||0,n=i.labelHeight||0,a=o||("x"==t.direction?Math.floor(at.width/(e.length||1)):null),r=t.direction+"Axis "+t.direction+t.n+"Axis",l="flot-"+t.direction+"-axis flot-"+t.direction+t.n+"-axis "+r,s=i.font||"flot-tick-label tickLabel",c=0;c<e.length;++c){var h=e[c];if(h.label){var f=at.getTextInfo(l,h.label,s,null,a);o=Math.max(o,f.width),n=Math.max(n,f.height)}}t.labelWidth=i.labelWidth||o,t.labelHeight=i.labelHeight||n}function M(t){var i=t.labelWidth,e=t.labelHeight,o=t.options.position,n="x"===t.direction,a=t.options.tickLength,r=nt.grid.axisMargin,l=nt.grid.labelMargin,s=!0,c=!0,h=!0,f=!1;$.each(n?ht:ft,function(i,e){e&&(e.show||e.reserveSpace)&&(e===t?f=!0:e.options.position===o&&(f?c=!1:s=!1),f||(h=!1))}),c&&(r=0),null==a&&(a=h?"full":5),isNaN(+a)||(l+=+a),n?(e+=l,"bottom"==o?(ut.bottom+=e+r,t.box={top:at.height-ut.bottom,height:e}):(t.box={top:ut.top+r,height:e},ut.top+=e+r)):(i+=l,"left"==o?(t.box={left:ut.left+r,width:i},ut.left+=i+r):(ut.right+=i+r,t.box={left:at.width-ut.right,width:i})),t.position=o,t.tickLength=a,t.box.padding=l,t.innermost=s}function T(t){"x"==t.direction?(t.box.left=ut.left-t.labelWidth/2,t.box.width=at.width-ut.left-ut.right+t.labelWidth):(t.box.top=ut.top-t.labelHeight/2,t.box.height=at.height-ut.bottom-ut.top+t.labelHeight)}function C(){var t=nt.grid.minBorderMargin,i,e;if(null==t)for(t=0,e=0;e<ot.length;++e)t=Math.max(t,2*(ot[e].points.radius+ot[e].points.lineWidth/2));var o={left:t,right:t,top:t,bottom:t};$.each(u(),function(t,i){i.reserveSpace&&i.ticks&&i.ticks.length&&("x"===i.direction?(o.left=Math.max(o.left,i.labelWidth/2),o.right=Math.max(o.right,i.labelWidth/2)):(o.bottom=Math.max(o.bottom,i.labelHeight/2),o.top=Math.max(o.top,i.labelHeight/2)))}),ut.left=Math.ceil(Math.max(o.left,ut.left)),ut.right=Math.ceil(Math.max(o.right,ut.right)),ut.top=Math.ceil(Math.max(o.top,ut.top)),ut.bottom=Math.ceil(Math.max(o.bottom,ut.bottom))}function S(){var t,i=u(),e=nt.grid.show;for(var o in ut){var n=nt.grid.margin||0;ut[o]="number"==typeof n?n:n[o]||0}r(mt.processOffset,[ut]);for(var o in ut)"object"==typeof nt.grid.borderWidth?ut[o]+=e?nt.grid.borderWidth[o]:0:ut[o]+=e?nt.grid.borderWidth:0;if($.each(i,function(t,i){var e=i.options;i.show=null==e.show?i.used:e.show,i.reserveSpace=null==e.reserveSpace?i.show:e.reserveSpace,W(i)}),e){var a=$.grep(i,function(t){return t.show||t.reserveSpace});for($.each(a,function(t,i){z(i),I(i),A(i,i.ticks),w(i)}),t=a.length-1;t>=0;--t)M(a[t]);C(),$.each(a,function(t,i){T(i)})}dt=at.width-ut.left-ut.right,pt=at.height-ut.bottom-ut.top,$.each(i,function(t,i){y(i)}),e&&L(),G()}function W(t){var i=t.options,e=+(null!=i.min?i.min:t.datamin),o=+(null!=i.max?i.max:t.datamax),n=o-e;if(0==n){var a=0==o?1:.01;null==i.min&&(e-=a),null!=i.max&&null==i.min||(o+=a)}else{var r=i.autoscaleMargin;null!=r&&(null==i.min&&(e-=n*r,e<0&&null!=t.datamin&&t.datamin>=0&&(e=0)),null==i.max&&(o+=n*r,o>0&&null!=t.datamax&&t.datamax<=0&&(o=0)))}t.min=e,t.max=o}function z(t){var i=t.options,o;o="number"==typeof i.ticks&&i.ticks>0?i.ticks:.3*Math.sqrt("x"==t.direction?at.width:at.height);var n=(t.max-t.min)/o,a=-Math.floor(Math.log(n)/Math.LN10),r=i.tickDecimals;null!=r&&a>r&&(a=r);var l=Math.pow(10,-a),s=n/l,c;if(s<1.5?c=1:s<3?(c=2,s>2.25&&(null==r||a+1<=r)&&(c=2.5,++a)):c=s<7.5?5:10,c*=l,null!=i.minTickSize&&c<i.minTickSize&&(c=i.minTickSize),t.delta=n,t.tickDecimals=Math.max(0,null!=r?r:a),t.tickSize=i.tickSize||c,"time"==i.mode&&!t.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");if(t.tickGenerator||(t.tickGenerator=function(t){var i=[],o=e(t.min,t.tickSize),n=0,a=Number.NaN,r;do r=a,a=o+n*t.tickSize,i.push(a),++n;while(a<t.max&&a!=r);return i},t.tickFormatter=function(t,i){var e=i.tickDecimals?Math.pow(10,i.tickDecimals):1,o=""+Math.round(t*e)/e;if(null!=i.tickDecimals){var n=o.indexOf("."),a=n==-1?0:o.length-n-1;if(a<i.tickDecimals)return(a?o:o+".")+(""+e).substr(1,i.tickDecimals-a)}return o}),$.isFunction(i.tickFormatter)&&(t.tickFormatter=function(t,e){return""+i.tickFormatter(t,e)}),null!=i.alignTicksWithAxis){var h=("x"==t.direction?ht:ft)[i.alignTicksWithAxis-1];if(h&&h.used&&h!=t){var f=t.tickGenerator(t);if(f.length>0&&(null==i.min&&(t.min=Math.min(t.min,f[0])),null==i.max&&f.length>1&&(t.max=Math.max(t.max,f[f.length-1]))),t.tickGenerator=function(t){var i=[],e,o;for(o=0;o<h.ticks.length;++o)e=(h.ticks[o].v-h.min)/(h.max-h.min),e=t.min+e*(t.max-t.min),i.push(e);return i},!t.mode&&null==i.tickDecimals){var u=Math.max(0,-Math.floor(Math.log(t.delta)/Math.LN10)+1),d=t.tickGenerator(t);d.length>1&&/\..*0$/.test((d[1]-d[0]).toFixed(u))||(t.tickDecimals=u)}}}}function I(t){var i=t.options.ticks,e=[];null==i||"number"==typeof i&&i>0?e=t.tickGenerator(t):i&&(e=$.isFunction(i)?i(t):i);var o,n;for(t.ticks=[],o=0;o<e.length;++o){var a=null,r=e[o];"object"==typeof r?(n=+r[0],r.length>1&&(a=r[1])):n=+r,null==a&&(a=t.tickFormatter(n,t)),isNaN(n)||t.ticks.push({v:n,label:a})}}function A(t,i){t.options.autoscaleMargin&&i.length>0&&(null==t.options.min&&(t.min=Math.min(t.min,i[0].v)),null==t.options.max&&i.length>1&&(t.max=Math.max(t.max,i[i.length-1].v)))}function F(){at.clear(),r(mt.drawBackground,[st]);var t=nt.grid;t.show&&t.backgroundColor&&N(),t.show&&!t.aboveData&&D();for(var i=0;i<ot.length;++i)r(mt.drawSeries,[st,ot[i]]),O(ot[i]);r(mt.draw,[st]),t.show&&t.aboveData&&D(),at.render(),Q()}function P(t,i){for(var e,o,n,a,r=u(),l=0;l<r.length;++l)if(e=r[l],e.direction==i&&(a=i+e.n+"axis",t[a]||1!=e.n||(a=i+"axis"),t[a])){o=t[a].from,n=t[a].to;break}if(t[a]||(e="x"==i?ht[0]:ft[0],o=t[i+"1"],n=t[i+"2"]),null!=o&&null!=n&&o>n){var s=o;o=n,n=s}return{from:o,to:n,axis:e}}function N(){st.save(),st.translate(ut.left,ut.top),st.fillStyle=et(nt.grid.backgroundColor,pt,0,"rgba(255, 255, 255, 0)"),st.fillRect(0,0,dt,pt),st.restore()}function D(){var t,i,e,o;st.save(),st.translate(ut.left,ut.top);var n=nt.grid.markings;if(n)for($.isFunction(n)&&(i=xt.getAxes(),i.xmin=i.xaxis.min,i.xmax=i.xaxis.max,i.ymin=i.yaxis.min,i.ymax=i.yaxis.max,n=n(i)),t=0;t<n.length;++t){var a=n[t],r=P(a,"x"),l=P(a,"y");if(null==r.from&&(r.from=r.axis.min),null==r.to&&(r.to=r.axis.max),null==l.from&&(l.from=l.axis.min),null==l.to&&(l.to=l.axis.max),!(r.to<r.axis.min||r.from>r.axis.max||l.to<l.axis.min||l.from>l.axis.max)){r.from=Math.max(r.from,r.axis.min),r.to=Math.min(r.to,r.axis.max),l.from=Math.max(l.from,l.axis.min),l.to=Math.min(l.to,l.axis.max);var s=r.from===r.to,c=l.from===l.to;if(!s||!c)if(r.from=Math.floor(r.axis.p2c(r.from)),r.to=Math.floor(r.axis.p2c(r.to)),l.from=Math.floor(l.axis.p2c(l.from)),l.to=Math.floor(l.axis.p2c(l.to)),s||c){var h=a.lineWidth||nt.grid.markingsLineWidth,f=h%2?.5:0;st.beginPath(),st.strokeStyle=a.color||nt.grid.markingsColor,st.lineWidth=h,s?(st.moveTo(r.to+f,l.from),st.lineTo(r.to+f,l.to)):(st.moveTo(r.from,l.to+f),st.lineTo(r.to,l.to+f)),st.stroke()}else st.fillStyle=a.color||nt.grid.markingsColor,st.fillRect(r.from,l.to,r.to-r.from,l.from-l.to)}}i=u(),e=nt.grid.borderWidth;for(var d=0;d<i.length;++d){var p=i[d],m=p.box,x=p.tickLength,g,b,v,k;if(p.show&&0!=p.ticks.length){for(st.lineWidth=1,"x"==p.direction?(g=0,b="full"==x?"top"==p.position?0:pt:m.top-ut.top+("top"==p.position?m.height:0)):(b=0,g="full"==x?"left"==p.position?0:dt:m.left-ut.left+("left"==p.position?m.width:0)),p.innermost||(st.strokeStyle=p.options.color,st.beginPath(),v=k=0,"x"==p.direction?v=dt+1:k=pt+1,1==st.lineWidth&&("x"==p.direction?b=Math.floor(b)+.5:g=Math.floor(g)+.5),st.moveTo(g,b),st.lineTo(g+v,b+k),st.stroke()),st.strokeStyle=p.options.tickColor,st.beginPath(),t=0;t<p.ticks.length;++t){var y=p.ticks[t].v;v=k=0,isNaN(y)||y<p.min||y>p.max||"full"==x&&("object"==typeof e&&e[p.position]>0||e>0)&&(y==p.min||y==p.max)||("x"==p.direction?(g=p.p2c(y),k="full"==x?-pt:x,"top"==p.position&&(k=-k)):(b=p.p2c(y),v="full"==x?-dt:x,"left"==p.position&&(v=-v)),1==st.lineWidth&&("x"==p.direction?g=Math.floor(g)+.5:b=Math.floor(b)+.5),st.moveTo(g,b),st.lineTo(g+v,b+k))}st.stroke()}}e&&(o=nt.grid.borderColor,"object"==typeof e||"object"==typeof o?("object"!=typeof e&&(e={top:e,right:e,bottom:e,left:e}),"object"!=typeof o&&(o={top:o,right:o,bottom:o,left:o}),e.top>0&&(st.strokeStyle=o.top,st.lineWidth=e.top,st.beginPath(),st.moveTo(0-e.left,0-e.top/2),st.lineTo(dt,0-e.top/2),st.stroke()),e.right>0&&(st.strokeStyle=o.right,st.lineWidth=e.right,st.beginPath(),st.moveTo(dt+e.right/2,0-e.top),st.lineTo(dt+e.right/2,pt),st.stroke()),e.bottom>0&&(st.strokeStyle=o.bottom,st.lineWidth=e.bottom,st.beginPath(),st.moveTo(dt+e.right,pt+e.bottom/2),st.lineTo(0,pt+e.bottom/2),st.stroke()),e.left>0&&(st.strokeStyle=o.left,st.lineWidth=e.left,st.beginPath(),st.moveTo(0-e.left/2,pt+e.bottom),st.lineTo(0-e.left/2,0),st.stroke())):(st.lineWidth=e,st.strokeStyle=nt.grid.borderColor,st.strokeRect(-e/2,-e/2,dt+e,pt+e))),st.restore()}function L(){$.each(u(),function(t,i){var e=i.box,o=i.direction+"Axis "+i.direction+i.n+"Axis",n="flot-"+i.direction+"-axis flot-"+i.direction+i.n+"-axis "+o,a=i.options.font||"flot-tick-label tickLabel",r,l,s,c,h;if(at.removeText(n),i.show&&0!=i.ticks.length)for(var f=0;f<i.ticks.length;++f)r=i.ticks[f],!r.label||r.v<i.min||r.v>i.max||("x"==i.direction?(c="center",l=ut.left+i.p2c(r.v),"bottom"==i.position?s=e.top+e.padding:(s=e.top+e.height-e.padding,h="bottom")):(h="middle",s=ut.top+i.p2c(r.v),"left"==i.position?(l=e.left+e.width-e.padding,c="right"):l=e.left+e.padding),at.addText(n,l,s,r.label,a,null,null,c,h))})}function O(t){t.lines.show&&R(t),t.bars.show&&E(t),t.points.show&&H(t)}function R(t){function i(t,i,e,o,n){var a=t.points,r=t.pointsize,l=null,s=null;st.beginPath();for(var c=r;c<a.length;c+=r){var h=a[c-r],f=a[c-r+1],u=a[c],d=a[c+1];if(null!=h&&null!=u){if(f<=d&&f<n.min){if(d<n.min)continue;h=(n.min-f)/(d-f)*(u-h)+h,f=n.min}else if(d<=f&&d<n.min){if(f<n.min)continue;u=(n.min-f)/(d-f)*(u-h)+h,d=n.min}if(f>=d&&f>n.max){if(d>n.max)continue;h=(n.max-f)/(d-f)*(u-h)+h,f=n.max}else if(d>=f&&d>n.max){if(f>n.max)continue;u=(n.max-f)/(d-f)*(u-h)+h,d=n.max}if(h<=u&&h<o.min){if(u<o.min)continue;f=(o.min-h)/(u-h)*(d-f)+f,h=o.min}else if(u<=h&&u<o.min){if(h<o.min)continue;d=(o.min-h)/(u-h)*(d-f)+f,u=o.min}if(h>=u&&h>o.max){if(u>o.max)continue;f=(o.max-h)/(u-h)*(d-f)+f,h=o.max}else if(u>=h&&u>o.max){if(h>o.max)continue;d=(o.max-h)/(u-h)*(d-f)+f,u=o.max}h==l&&f==s||st.moveTo(o.p2c(h)+i,n.p2c(f)+e),l=u,s=d,st.lineTo(o.p2c(u)+i,n.p2c(d)+e)}}st.stroke()}function e(t,i,e){for(var o=t.points,n=t.pointsize,a=Math.min(Math.max(0,e.min),e.max),r=0,l,s=!1,c=1,h=0,f=0;;){if(n>0&&r>o.length+n)break;r+=n;var u=o[r-n],d=o[r-n+c],p=o[r],m=o[r+c];if(s){if(n>0&&null!=u&&null==p){f=r,n=-n,c=2;continue}if(n<0&&r==h+n){st.fill(),s=!1,n=-n,c=1,r=h=f+n;continue}}if(null!=u&&null!=p){if(u<=p&&u<i.min){if(p<i.min)continue;d=(i.min-u)/(p-u)*(m-d)+d,u=i.min}else if(p<=u&&p<i.min){if(u<i.min)continue;m=(i.min-u)/(p-u)*(m-d)+d,p=i.min}if(u>=p&&u>i.max){if(p>i.max)continue;d=(i.max-u)/(p-u)*(m-d)+d,u=i.max}else if(p>=u&&p>i.max){if(u>i.max)continue;m=(i.max-u)/(p-u)*(m-d)+d,p=i.max}if(s||(st.beginPath(),st.moveTo(i.p2c(u),e.p2c(a)),s=!0),d>=e.max&&m>=e.max)st.lineTo(i.p2c(u),e.p2c(e.max)),st.lineTo(i.p2c(p),e.p2c(e.max));else if(d<=e.min&&m<=e.min)st.lineTo(i.p2c(u),e.p2c(e.min)),st.lineTo(i.p2c(p),e.p2c(e.min));else{var x=u,g=p;d<=m&&d<e.min&&m>=e.min?(u=(e.min-d)/(m-d)*(p-u)+u,d=e.min):m<=d&&m<e.min&&d>=e.min&&(p=(e.min-d)/(m-d)*(p-u)+u,m=e.min),d>=m&&d>e.max&&m<=e.max?(u=(e.max-d)/(m-d)*(p-u)+u,d=e.max):m>=d&&m>e.max&&d<=e.max&&(p=(e.max-d)/(m-d)*(p-u)+u,m=e.max),u!=x&&st.lineTo(i.p2c(x),e.p2c(d)),st.lineTo(i.p2c(u),e.p2c(d)),st.lineTo(i.p2c(p),e.p2c(m)),p!=g&&(st.lineTo(i.p2c(p),e.p2c(m)),st.lineTo(i.p2c(g),e.p2c(m)))}}}}st.save(),st.translate(ut.left,ut.top),st.lineJoin="round";var o=t.lines.lineWidth,n=t.shadowSize;if(o>0&&n>0){st.lineWidth=n,st.strokeStyle="rgba(0,0,0,0.1)";var a=Math.PI/18;i(t.datapoints,Math.sin(a)*(o/2+n/2),Math.cos(a)*(o/2+n/2),t.xaxis,t.yaxis),st.lineWidth=n/2,i(t.datapoints,Math.sin(a)*(o/2+n/4),Math.cos(a)*(o/2+n/4),t.xaxis,t.yaxis)}st.lineWidth=o,st.strokeStyle=t.color;var r=B(t.lines,t.color,0,pt);r&&(st.fillStyle=r,e(t.datapoints,t.xaxis,t.yaxis)),o>0&&i(t.datapoints,0,0,t.xaxis,t.yaxis),st.restore()}function H(t){function i(t,i,e,o,n,a,r,l){for(var s=t.points,c=t.pointsize,h=0;h<s.length;h+=c){var f=s[h],u=s[h+1];null==f||f<a.min||f>a.max||u<r.min||u>r.max||(st.beginPath(),f=a.p2c(f),u=r.p2c(u)+o,"circle"==l?st.arc(f,u,i,0,n?Math.PI:2*Math.PI,!1):l(st,f,u,i,n),st.closePath(),e&&(st.fillStyle=e,st.fill()),st.stroke())}}st.save(),st.translate(ut.left,ut.top);var e=t.points.lineWidth,o=t.shadowSize,n=t.points.radius,a=t.points.symbol;if(0==e&&(e=1e-4),e>0&&o>0){var r=o/2;st.lineWidth=r,st.strokeStyle="rgba(0,0,0,0.1)",i(t.datapoints,n,null,r+r/2,!0,t.xaxis,t.yaxis,a),st.strokeStyle="rgba(0,0,0,0.2)",i(t.datapoints,n,null,r/2,!0,t.xaxis,t.yaxis,a)}st.lineWidth=e,st.strokeStyle=t.color,i(t.datapoints,n,B(t.points,t.color),0,!1,t.xaxis,t.yaxis,a),st.restore()}function j(t,i,e,o,n,a,r,l,s,c,h){var f,u,d,p,m,x,g,b,v;c?(b=x=g=!0,m=!1,f=e,u=t,p=i+o,d=i+n,u<f&&(v=u,u=f,f=v,m=!0,x=!1)):(m=x=g=!0,b=!1,f=t+o,u=t+n,d=e,p=i,p<d&&(v=p,p=d,d=v,b=!0,g=!1)),u<r.min||f>r.max||p<l.min||d>l.max||(f<r.min&&(f=r.min,m=!1),u>r.max&&(u=r.max,x=!1),d<l.min&&(d=l.min,b=!1),p>l.max&&(p=l.max,g=!1),f=r.p2c(f),d=l.p2c(d),u=r.p2c(u),p=l.p2c(p),a&&(s.fillStyle=a(d,p),s.fillRect(f,p,u-f,d-p)),h>0&&(m||x||g||b)&&(s.beginPath(),s.moveTo(f,d),m?s.lineTo(f,p):s.moveTo(f,p),g?s.lineTo(u,p):s.moveTo(u,p),x?s.lineTo(u,d):s.moveTo(u,d),b?s.lineTo(f,d):s.moveTo(f,d),s.stroke()))}function E(t){function i(i,e,o,n,a,r){for(var l=i.points,s=i.pointsize,c=0;c<l.length;c+=s)null!=l[c]&&j(l[c],l[c+1],l[c+2],e,o,n,a,r,st,t.bars.horizontal,t.bars.lineWidth)}st.save(),st.translate(ut.left,ut.top),st.lineWidth=t.bars.lineWidth,st.strokeStyle=t.color;var e;switch(t.bars.align){case"left":e=0;break;case"right":e=-t.bars.barWidth;break;default:e=-t.bars.barWidth/2}var o=t.bars.fill?function(i,e){return B(t.bars,t.color,i,e)}:null;i(t.datapoints,e,e+t.bars.barWidth,o,t.xaxis,t.yaxis),st.restore()}function B(t,i,e,o){var n=t.fill;if(!n)return null;if(t.fillColor)return et(t.fillColor,e,o,i);var a=$.color.parse(i);return a.a="number"==typeof n?n:.4,a.normalize(),a.toString()}function G(){if(null!=nt.legend.container?$(nt.legend.container).html(""):i.find(".legend").remove(),nt.legend.show){for(var t=[],e=[],o=!1,n=nt.legend.labelFormatter,a,r,l=0;l<ot.length;++l)a=ot[l],a.label&&(r=n?n(a.label,a):a.label,r&&e.push({label:r,color:a.color}));if(nt.legend.sorted)if($.isFunction(nt.legend.sorted))e.sort(nt.legend.sorted);else if("reverse"==nt.legend.sorted)e.reverse();else{var s="descending"!=nt.legend.sorted;e.sort(function(t,i){return t.label==i.label?0:t.label<i.label!=s?1:-1})}for(var l=0;l<e.length;++l){var c=e[l];l%nt.legend.noColumns==0&&(o&&t.push("</tr>"),t.push("<tr>"),o=!0),t.push('<td class="legendColorBox"><div style="border:1px solid '+nt.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+c.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+c.label+"</td>")}if(o&&t.push("</tr>"),0!=t.length){var h='<table style="font-size:smaller;color:'+nt.grid.color+'">'+t.join("")+"</table>";if(null!=nt.legend.container)$(nt.legend.container).html(h);else{var f="",u=nt.legend.position,d=nt.legend.margin;null==d[0]&&(d=[d,d]),"n"==u.charAt(0)?f+="top:"+(d[1]+ut.top)+"px;":"s"==u.charAt(0)&&(f+="bottom:"+(d[1]+ut.bottom)+"px;"),"e"==u.charAt(1)?f+="right:"+(d[0]+ut.right)+"px;":"w"==u.charAt(1)&&(f+="left:"+(d[0]+ut.left)+"px;");var p=$('<div class="legend">'+h.replace('style="','style="position:absolute;'+f+";")+"</div>").appendTo(i);if(0!=nt.legend.backgroundOpacity){var m=nt.legend.backgroundColor;null==m&&(m=nt.grid.backgroundColor,m=m&&"string"==typeof m?$.color.parse(m):$.color.extract(p,"background-color"),m.a=1,m=m.toString());var x=p.children();$('<div style="position:absolute;width:'+x.width()+"px;height:"+x.height()+"px;"+f+"background-color:"+m+';"> </div>').prependTo(p).css("opacity",nt.legend.backgroundOpacity)}}}}}function _(t,i,e){var o=nt.grid.mouseActiveRadius,n=o*o+1,a=null,r=!1,l,s,c;for(l=ot.length-1;l>=0;--l)if(e(ot[l])){var h=ot[l],f=h.xaxis,u=h.yaxis,d=h.datapoints.points,p=f.c2p(t),m=u.c2p(i),x=o/f.scale,g=o/u.scale;if(c=h.datapoints.pointsize,f.options.inverseTransform&&(x=Number.MAX_VALUE),u.options.inverseTransform&&(g=Number.MAX_VALUE),h.lines.show||h.points.show)for(s=0;s<d.length;s+=c){var b=d[s],v=d[s+1];if(null!=b&&!(b-p>x||b-p<-x||v-m>g||v-m<-g)){var k=Math.abs(f.p2c(b)-t),y=Math.abs(u.p2c(v)-i),w=k*k+y*y;w<n&&(n=w,a=[l,s/c])}}if(h.bars.show&&!a){var M,T;switch(h.bars.align){case"left":M=0;break;case"right":M=-h.bars.barWidth;break;default:M=-h.bars.barWidth/2}for(T=M+h.bars.barWidth,s=0;s<d.length;s+=c){var b=d[s],v=d[s+1],C=d[s+2];null!=b&&(ot[l].bars.horizontal?p<=Math.max(C,b)&&p>=Math.min(C,b)&&m>=v+M&&m<=v+T:p>=b+M&&p<=b+T&&m>=Math.min(C,v)&&m<=Math.max(C,v))&&(a=[l,s/c])}}}return a?(l=a[0],s=a[1],c=ot[l].datapoints.pointsize,{datapoint:ot[l].datapoints.points.slice(s*c,(s+1)*c),dataIndex:s,series:ot[l],seriesIndex:l}):null}function V(t){nt.grid.hoverable&&q("plothover",t,function(t){return 0!=t.hoverable})}function X(t){nt.grid.hoverable&&q("plothover",t,function(t){return!1})}function Y(t){q("plotclick",t,function(t){return 0!=t.clickable})}function q(t,e,o){var n=lt.offset(),a=e.pageX-n.left-ut.left,r=e.pageY-n.top-ut.top,l=d({left:a,top:r});l.pageX=e.pageX,l.pageY=e.pageY;var s=_(a,r,o);if(s&&(s.pageX=parseInt(s.series.xaxis.p2c(s.datapoint[0])+n.left+ut.left,10),s.pageY=parseInt(s.series.yaxis.p2c(s.datapoint[1])+n.top+ut.top,10)),nt.grid.autoHighlight){for(var c=0;c<gt.length;++c){var h=gt[c];h.auto!=t||s&&h.series==s.series&&h.point[0]==s.datapoint[0]&&h.point[1]==s.datapoint[1]||K(h.series,h.point)}s&&J(s.series,s.datapoint,t)}i.trigger(t,[l,s])}function Q(){var t=nt.interaction.redrawOverlayInterval;return t==-1?void U():void(bt||(bt=setTimeout(U,t)))}function U(){bt=null,ct.save(),rt.clear(),ct.translate(ut.left,ut.top);var t,i;for(t=0;t<gt.length;++t)i=gt[t],i.series.bars.show?it(i.series,i.point):tt(i.series,i.point);ct.restore(),r(mt.drawOverlay,[ct])}function J(t,i,e){if("number"==typeof t&&(t=ot[t]),"number"==typeof i){var o=t.datapoints.pointsize;i=t.datapoints.points.slice(o*i,o*(i+1))}var n=Z(t,i);n==-1?(gt.push({series:t,point:i,auto:e}),Q()):e||(gt[n].auto=!1)}function K(t,i){if(null==t&&null==i)return gt=[],void Q();if("number"==typeof t&&(t=ot[t]),"number"==typeof i){var e=t.datapoints.pointsize;i=t.datapoints.points.slice(e*i,e*(i+1))}var o=Z(t,i);o!=-1&&(gt.splice(o,1),Q())}function Z(t,i){for(var e=0;e<gt.length;++e){var o=gt[e];if(o.series==t&&o.point[0]==i[0]&&o.point[1]==i[1])return e}return-1}function tt(t,i){var e=i[0],o=i[1],n=t.xaxis,a=t.yaxis,r="string"==typeof t.highlightColor?t.highlightColor:$.color.parse(t.color).scale("a",.5).toString();if(!(e<n.min||e>n.max||o<a.min||o>a.max)){var l=t.points.radius+t.points.lineWidth/2;ct.lineWidth=l,ct.strokeStyle=r;var s=1.5*l;e=n.p2c(e),o=a.p2c(o),ct.beginPath(),"circle"==t.points.symbol?ct.arc(e,o,s,0,2*Math.PI,!1):t.points.symbol(ct,e,o,s,!1),ct.closePath(),ct.stroke()}}function it(t,i){var e="string"==typeof t.highlightColor?t.highlightColor:$.color.parse(t.color).scale("a",.5).toString(),o=e,n;switch(t.bars.align){case"left":n=0;break;case"right":n=-t.bars.barWidth;break;default:n=-t.bars.barWidth/2}ct.lineWidth=t.bars.lineWidth,ct.strokeStyle=e,j(i[0],i[1],i[2]||0,n,n+t.bars.barWidth,function(){return o},t.xaxis,t.yaxis,ct,t.bars.horizontal,t.bars.lineWidth)}function et(t,i,e,o){if("string"==typeof t)return t;for(var n=st.createLinearGradient(0,e,0,i),a=0,r=t.colors.length;a<r;++a){var l=t.colors[a];if("string"!=typeof l){var s=$.color.parse(o);null!=l.brightness&&(s=s.scale("rgb",l.brightness)),null!=l.opacity&&(s.a*=l.opacity),l=s.toString()}n.addColorStop(a/(r-1),l)}return n}var ot=[],nt={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,
barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},at=null,rt=null,lt=null,st=null,ct=null,ht=[],ft=[],ut={left:0,right:0,top:0,bottom:0},dt=0,pt=0,mt={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},xt=this;xt.setData=c,xt.setupGrid=S,xt.draw=F,xt.getPlaceholder=function(){return i},xt.getCanvas=function(){return at.element},xt.getPlotOffset=function(){return ut},xt.width=function(){return dt},xt.height=function(){return pt},xt.offset=function(){var t=lt.offset();return t.left+=ut.left,t.top+=ut.top,t},xt.getData=function(){return ot},xt.getAxes=function(){var t={},i;return $.each(ht.concat(ft),function(i,e){e&&(t[e.direction+(1!=e.n?e.n:"")+"axis"]=e)}),t},xt.getXAxes=function(){return ht},xt.getYAxes=function(){return ft},xt.c2p=d,xt.p2c=p,xt.getOptions=function(){return nt},xt.highlight=J,xt.unhighlight=K,xt.triggerRedrawOverlay=Q,xt.pointOffset=function(t){return{left:parseInt(ht[f(t,"x")-1].p2c(+t.x)+ut.left,10),top:parseInt(ft[f(t,"y")-1].p2c(+t.y)+ut.top,10)}},xt.shutdown=k,xt.destroy=function(){k(),i.removeData("plot").empty(),ot=[],nt=null,at=null,rt=null,lt=null,st=null,ct=null,ht=[],ft=[],mt=null,gt=[],xt=null},xt.resize=function(){var t=i.width(),e=i.height();at.resize(t,e),rt.resize(t,e)},xt.hooks=mt,l(xt),s(n),b(),c(o),S(),F(),v();var gt=[],bt=null}function e(t,i){return i*Math.floor(t/i)}var o=Object.prototype.hasOwnProperty;$.fn.detach||($.fn.detach=function(){return this.each(function(){this.parentNode&&this.parentNode.removeChild(this)})}),t.prototype.resize=function(t,i){if(t<=0||i<=0)throw new Error("Invalid dimensions for plot, width = "+t+", height = "+i);var e=this.element,o=this.context,n=this.pixelRatio;this.width!=t&&(e.width=t*n,e.style.width=t+"px",this.width=t),this.height!=i&&(e.height=i*n,e.style.height=i+"px",this.height=i),o.restore(),o.save(),o.scale(n,n)},t.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},t.prototype.render=function(){var t=this._textCache;for(var i in t)if(o.call(t,i)){var e=this.getTextLayer(i),n=t[i];e.hide();for(var a in n)if(o.call(n,a)){var r=n[a];for(var l in r)if(o.call(r,l)){for(var s=r[l].positions,c=0,h;h=s[c];c++)h.active?h.rendered||(e.append(h.element),h.rendered=!0):(s.splice(c--,1),h.rendered&&h.element.detach());0==s.length&&delete r[l]}}e.show()}},t.prototype.getTextLayer=function(t){var i=this.text[t];return null==i&&(null==this.textContainer&&(this.textContainer=$("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),i=this.text[t]=$("<div></div>").addClass(t).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),i},t.prototype.getTextInfo=function(t,i,e,o,n){var a,r,l,s;if(i=""+i,a="object"==typeof e?e.style+" "+e.variant+" "+e.weight+" "+e.size+"px/"+e.lineHeight+"px "+e.family:e,r=this._textCache[t],null==r&&(r=this._textCache[t]={}),l=r[a],null==l&&(l=r[a]={}),s=l[i],null==s){var c=$("<div></div>").html(i).css({position:"absolute","max-width":n,top:-9999}).appendTo(this.getTextLayer(t));"object"==typeof e?c.css({font:a,color:e.color}):"string"==typeof e&&c.addClass(e),s=l[i]={width:c.outerWidth(!0),height:c.outerHeight(!0),element:c,positions:[]},c.detach()}return s},t.prototype.addText=function(t,i,e,o,n,a,r,l,s){var c=this.getTextInfo(t,o,n,a,r),h=c.positions;"center"==l?i-=c.width/2:"right"==l&&(i-=c.width),"middle"==s?e-=c.height/2:"bottom"==s&&(e-=c.height);for(var f=0,u;u=h[f];f++)if(u.x==i&&u.y==e)return void(u.active=!0);u={active:!0,rendered:!1,element:h.length?c.element.clone():c.element,x:i,y:e},h.push(u),u.element.css({top:Math.round(e),left:Math.round(i),"text-align":l})},t.prototype.removeText=function(t,i,e,n,a,r){if(null==n){var l=this._textCache[t];if(null!=l)for(var s in l)if(o.call(l,s)){var c=l[s];for(var h in c)if(o.call(c,h))for(var f=c[h].positions,u=0,d;d=f[u];u++)d.active=!1}}else for(var f=this.getTextInfo(t,n,a,r).positions,u=0,d;d=f[u];u++)d.x==i&&d.y==e&&(d.active=!1)},$.plot=function(t,e,o){var n=new i($(t),e,o,$.plot.plugins);return n},$.plot.version="0.8.3",$.plot.plugins=[],$.fn.plot=function(t,i){return this.each(function(){$.plot(this,t,i)})}}(jQuery);