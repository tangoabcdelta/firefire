var FCM=function(){function t(t,o){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&(200===this.status?bwcache.remove("fcmTokenFailure",!1):cwTracking.trackCustomData(pushNotifications.cat,"FCMPopupErrorPostUserAction",pushNotifications.platformLab+"|errorlog=failed to save user"))},e.open("POST","/api/WebNotification/",!0),e.setRequestHeader("Content-Type","application/json; charset=utf-8"),e.send(t)}function o(o){firebase.messaging().getToken().then(function(e){var a=getCookie("BWC"),i=o?isMobile?[6]:[7]:[],n=isMobile?2:1,s=JSON.stringify({bwCookie:a,fcmToken:e,topics:i,platformId:n});e&&a&&(pushNotifications.saveFCMTokenInCookie(e),t(s,!0))}).catch(function(t){bwcache.set("fcmTokenFailure",!0,!1),cwTracking.trackCustomData(pushNotifications.cat,"FCMPopupErrorPostUserAction",pushNotifications.platformLab+"|errorlog=failed to generate fcm token")})}return{saveFCMData:o}}();