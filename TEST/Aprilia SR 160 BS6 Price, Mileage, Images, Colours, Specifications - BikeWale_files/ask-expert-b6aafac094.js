var askExpert=function(){function e(){o=document.querySelector(".js-ask-expert"),n=document.querySelector(".js-ask-expert-close-btn")}function s(){e(),null!=o&&(t(),n.addEventListener("click",a))}function t(){i()}function a(){o.classList.remove("ask-expert--active"),localStorage.setItem("hideSlug",1)}function i(){curSessionId==sessionIdStatus.NoSession?o.classList.add("ask-expert--active"):curSessionId==sessionIdStatus.NewSession?(localStorage.setItem("hideSlug","0"),o.classList.add("ask-expert--active")):curSessionId==sessionIdStatus.RevisitingSession?(o.classList.add("ask-expert--active"),localStorage.setItem("hideSlug",0)):"1"!=c&&o.classList.add("ask-expert--active")}var o,n,c=(window.localStorage.getItem("sessionId"),window.localStorage.getItem("hideSlug"));return{registerEvents:s}}();docReady(function(){askExpert.registerEvents()});