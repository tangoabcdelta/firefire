function processAdSlots(){if(googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){if(e.isEmpty){var d=e.slot.getSlotElementId(),t=document.getElementById(d);t.parentElement.classList.contains("ad-slot")&&(t.parentElement.style.display="none"),"function"==typeof $.fn.lazyload&&$("img.lazy").lazyload({skip_invisible:!0})}})}),"undefined"!=typeof adSlot){var e=document.querySelectorAll("div[id^=div-gpt-ad]");googletag.cmd.push(function(){googletag.display();for(var d=0;d<e.length;d++)"true"==e[d].getAttribute("data-load-immediate")?immediateAds.push(adSlot[e[d].id]):deferredAds.push(adSlot[e[d].id]);immediateAds.length>0&&googletag.pubads().refresh(immediateAds)});var d=function(){googletag.cmd.push(function(){deferredAds.length>0&&googletag.pubads().refresh(deferredAds)}),window.removeEventListener("scroll",d,!1)};window.addEventListener("scroll",d,!1)}}var immediateAds=[],deferredAds=[];"/m/"===window.location.pathname.slice(0,3)?window.addEventListener("load",processAdSlots,!1):docReady(processAdSlots);