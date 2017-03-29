exports.config = {"status":true,"model":{"summary":"10x10 Chess","title-en":"Shako","rules":{"fr":"shako-rules-fr.html","en":"shako-rules.html"},"credits":{"en":"shako-credits.html","fr":"shako-credits-fr.html"},"levels":[{"playoutDepth":0,"name":"easy","c":0.6,"ignoreLeaf":false,"minVisitsExpand":1,"ai":"uct","label":"Easy","uncertaintyFactor":3,"maxNodes":6000},{"isDefault":true,"c":0.6,"playoutDepth":0,"name":"fast","uncertaintyFactor":3,"ignoreLeaf":false,"maxDuration":3,"minVisitsExpand":1,"ai":"uct","label":"Fast [3sec]"},{"c":0.6,"playoutDepth":0,"name":"medium","maxNodes":30000,"uncertaintyFactor":3,"minVisitsExpand":1,"maxDuration":30,"ai":"uct","ignoreLeaf":false,"label":"Medium"},{"label":"Strong","ignoreLeaf":false,"minVisitsExpand":1,"maxDuration":45,"ai":"uct","uncertaintyFactor":3,"maxNodes":60000,"name":"strong","playoutDepth":0,"c":0.6}],"released":1396536978,"gameOptions":{"levelOptions":{"averageDistKingFactor":-0.01,"endingKingFreedomFactor":0.01,"pieceValueRatioFactor":1,"castleFactor":0.1,"distKingCornerFactor":0.1,"pieceValueFactor":1,"checkFactor":0.2,"minorPiecesMovedFactor":0.1,"endingDistKingFactor":0.05,"posValueFactor":0.1},"uctIgnoreLoop":false,"preventRepeat":true,"uctTransposition":"state"},"thumbnail":"shako-thumb.png","description":{"fr":"shako-description-fr.html","en":"shako-description.html"},"js":["base-model.js","grid-geo-model.js","shako-model.js"],"module":"chessbase","plazza":"true"},"view":{"animateSelfMoves":false,"preferredRatio":1,"xdView":true,"css":["chessbase.css"],"title-en":"Chessbase view","useShowMoves":true,"module":"chessbase","visuals":{"600x600":["res/visuals/shako-600x600-3d.jpg","res/visuals/shako-600x600-2d.jpg"]},"sounds":{"usermove":null,"tac3":"alq_tac1","move4":"alq_move2","tac2":"alq_tac2","move2":"alq_move2","move3":"alq_move3","tac1":"alq_tac1","promo":"promo","move1":"alq_move1"},"skins":[{"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png"],"world":{"fog":false,"ambientLightColor":2236962,"lightCastShadow":true,"skyLightIntensity":1.2,"color":4686804,"skyLightPosition":{"y":9,"x":9,"z":9},"lightPosition":{"y":9,"x":-9,"z":9},"lightIntensity":1.3,"lightShadowDarkness":0.55},"title":"3D Classic","camera":{"fov":45,"elevationAngle":60,"distMax":50,"elevationMin":0,"radius":18},"name":"skin3d","3d":true},{"preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/images/wikipedia.png"],"title":"2D Classic","name":"skin2d","3d":false}],"js":["base-view.js","grid-board-view.js","fairy-set-view.js","shako-view.js"],"switchable":true,"useNotation":true,"defaultOptions":{"autocomplete":false,"notation":false,"sounds":true,"moves":true},"useAutoComplete":true}}