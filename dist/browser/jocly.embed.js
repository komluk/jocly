"use strict";function ReceiveMessage(e){function t(t){t=t||{},window.parent.postMessage({joclyEmbeddedGameId:matchId,replyId:e.data.replyId,message:t},"*")}function a(e){"object"==(void 0===e?"undefined":_typeof(e))&&(e={message:e.message,fileName:e.fileName,lineNumber:e.lineNumber,stack:e.stack}),t({type:"error",error:e})}if((e.origin||e.originalEvent.origin)==new URL(window.location).origin){var o=e.data.message;switch(o.type){case"init":matchId=o.id;var n=document.getElementById("area");Jocly.createMatch(o.gameName).then(function(e){function c(){e.game.AttachElement(n).then(function(){e.area=n,e.game.GameInitView(),e.game.DisplayBoard(),t()}).catch(a)}gMatch=e,e.game.Load({playedMoves:o.playedMoves}),"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?c():window.addEventListener("DOMContentLoaded",function(){c()})}).catch(a);break;case"method":try{gMatch[o.methodName].apply(gMatch,o.args).then(function(){t({args:Array.from(arguments)})},a)}catch(e){a(e)}break;case"destroy":var c=gMatch.game.mPlayedMoves;gMatch.destroy().then(function(){t({playedMoves:c})})}}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},matchId,gMatch;window.addEventListener("message",ReceiveMessage,!1);