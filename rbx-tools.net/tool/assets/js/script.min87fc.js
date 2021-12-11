document.addEventListener("DOMContentLoaded",(function(){AOS.init();[].slice.call(document.querySelectorAll("[data-bss-hover-animate]")).forEach((function(t){t.addEventListener("mouseenter",(function(t){t.target.classList.add("animated",t.target.dataset.bssHoverAnimate)})),t.addEventListener("mouseleave",(function(t){t.target.classList.remove("animated",t.target.dataset.bssHoverAnimate)}))}))}),!1),jQuery(document).ready((function(){"use strict";jQuery(".sticker").sticky({topSpacing:0}),jQuery('.navbar-nav li a[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=jQuery(this.hash);if((t=t.length?t:jQuery("[name="+this.hash.slice(1)+"]")).length)return jQuery("html, body").animate({scrollTop:t.offset().top},1e3),!1}}))})),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){var e=Array.prototype.slice,n=Array.prototype.splice,i={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},r=t(window),s=t(document),o=[],a=r.height(),c=function(){for(var e=r.scrollTop(),n=s.height(),i=n-a,c=e>i?i-e:0,p=0,d=o.length;p<d;p++){var l=o[p],u=l.stickyWrapper.offset().top-l.topSpacing-c;if(l.stickyWrapper.css("height",l.stickyElement.outerHeight()),e<=u)null!==l.currentTop&&(l.stickyElement.css({width:"",position:"",top:"","z-index":""}),l.stickyElement.parent().removeClass(l.className),l.stickyElement.trigger("sticky-end",[l]),l.currentTop=null);else{var h,m=n-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;if(m<0?m+=l.topSpacing:m=l.topSpacing,l.currentTop!==m)l.getWidthFrom?h=t(l.getWidthFrom).width()||null:l.widthFromWrapper&&(h=l.stickyWrapper.width()),null==h&&(h=l.stickyElement.width()),l.stickyElement.css("width",h).css("position","fixed").css("top",m).css("z-index",l.zIndex),l.stickyElement.parent().addClass(l.className),null===l.currentTop?l.stickyElement.trigger("sticky-start",[l]):l.stickyElement.trigger("sticky-update",[l]),l.currentTop===l.topSpacing&&l.currentTop>m||null===l.currentTop&&m<l.topSpacing?l.stickyElement.trigger("sticky-bottom-reached",[l]):null!==l.currentTop&&m===l.topSpacing&&l.currentTop<m&&l.stickyElement.trigger("sticky-bottom-unreached",[l]),l.currentTop=m;var g=l.stickyWrapper.parent();l.stickyElement.offset().top+l.stickyElement.outerHeight()>=g.offset().top+g.outerHeight()&&l.stickyElement.offset().top<=l.topSpacing?l.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):l.stickyElement.css("position","fixed").css("top",m).css("bottom","").css("z-index",l.zIndex)}}},p=function(){a=r.height();for(var e=0,n=o.length;e<n;e++){var i=o[e],s=null;i.getWidthFrom?i.responsiveWidth&&(s=t(i.getWidthFrom).width()):i.widthFromWrapper&&(s=i.stickyWrapper.width()),null!=s&&i.stickyElement.css("width",s)}},d={init:function(e){return this.each((function(){var n=t.extend({},i,e),r=t(this),s=r.attr("id"),a=s?s+"-"+i.wrapperClassName:i.wrapperClassName,c=t("<div></div>").attr("id",a).addClass(n.wrapperClassName);r.wrapAll((function(){if(0==t(this).parent("#"+a).length)return c}));var p=r.parent();n.center&&p.css({width:r.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===r.css("float")&&r.css({float:"none"}).parent().css({float:"right"}),n.stickyElement=r,n.stickyWrapper=p,n.currentTop=null,o.push(n),d.setWrapperHeight(this),d.setupChangeListeners(this)}))},setWrapperHeight:function(e){var n=t(e),i=n.parent();i&&i.css("height",n.outerHeight())},setupChangeListeners:function(t){window.MutationObserver?new window.MutationObserver((function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&d.setWrapperHeight(t)})).observe(t,{subtree:!0,childList:!0}):window.addEventListener?(t.addEventListener("DOMNodeInserted",(function(){d.setWrapperHeight(t)}),!1),t.addEventListener("DOMNodeRemoved",(function(){d.setWrapperHeight(t)}),!1)):window.attachEvent&&(t.attachEvent("onDOMNodeInserted",(function(){d.setWrapperHeight(t)})),t.attachEvent("onDOMNodeRemoved",(function(){d.setWrapperHeight(t)})))},update:c,unstick:function(e){return this.each((function(){for(var e=t(this),i=-1,r=o.length;r-- >0;)o[r].stickyElement.get(0)===this&&(n.call(o,r,1),i=r);-1!==i&&(e.unwrap(),e.css({width:"",position:"",top:"",float:"","z-index":""}))}))}};window.addEventListener?(window.addEventListener("scroll",c,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",c),window.attachEvent("onresize",p)),t.fn.sticky=function(n){return d[n]?d[n].apply(this,e.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.sticky"):d.init.apply(this,arguments)},t.fn.unstick=function(n){return d[n]?d[n].apply(this,e.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.sticky"):d.unstick.apply(this,arguments)},t((function(){setTimeout(c,0)}))}));