exports.config = {"status":true,"model":{"released":1402671377,"levels":[{"playoutDepth":0,"name":"easy","c":0.6,"ignoreLeaf":false,"ai":"uct","minVisitsExpand":1,"label":"Easy","uncertaintyFactor":3,"maxNodes":1000},{"label":"Fast [1sec]","ai":"uct","maxDuration":1,"minVisitsExpand":1,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"fast","playoutDepth":0,"isDefault":true,"c":0.6},{"uncertaintyFactor":3,"maxNodes":10000,"ignoreLeaf":false,"ai":"uct","maxDuration":10,"minVisitsExpand":1,"label":"Medium","c":0.6,"playoutDepth":0,"name":"medium"},{"playoutDepth":0,"name":"strong","c":0.6,"ignoreLeaf":false,"minVisitsExpand":1,"maxDuration":15,"ai":"uct","label":"Strong","uncertaintyFactor":3,"maxNodes":20000}],"credits":{"en":"smess-credits.html"},"rules":{"en":"smess-rules.html"},"obsolete":false,"title-en":"Smess","summary":"The Ninny's Chess (1970)","plazza":"true","module":"chessbase","description":{"en":"smess-description.html"},"js":["base-model.js","smess-geo-model.js","smess-model.js"],"thumbnail":"smess-thumb.png","gameOptions":{"uctTransposition":"state","preventRepeat":true,"levelOptions":{"distKingCornerFactor":0.1,"distPawnPromo3Factor":0.1,"castleFactor":0.1,"pieceValueRatioFactor":1,"averageDistKingFactor":-0.01,"endingKingFreedomFactor":0.01,"distPawnPromo5Factor":0.03,"posValueFactor":0.1,"endingDistKingFactor":0.05,"minorPiecesMovedFactor":0.1,"checkFactor":0.2,"distPawnPromo1Factor":0.3,"pieceValueFactor":1,"distPawnPromo4Factor":0.05,"distPawnPromo2Factor":0.2},"uctIgnoreLoop":false}},"view":{"switchable":true,"visuals":{"600x600":["res/visuals/smess-600x600-3d.jpg","res/visuals/smess-600x600-2d.jpg"]},"module":"chessbase","sounds":{"tac3":"alq_tac1","move4":"alq_move2","usermove":null,"move1":"alq_move1","promo":"promo","tac1":"alq_tac1","move2":"alq_move2","move3":"alq_move3","tac2":"alq_tac2"},"skins":[{"title":"3D Classic","preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","smoothedfilegeo|0|/res/smess/token.js","image|/res/smess/promo.png","image|/res/smess/arrow-top.png","image|/res/smess/arrow-top-left.png","image|/res/images/wood-chipboard-4.jpg","image|/res/smess/playera-bg.png","image|/res/smess/playerb-bg.png","image|/res/smess/smess-pieces-sprites.png"],"world":{"fog":false,"ambientLightColor":2236962,"lightCastShadow":true,"skyLightIntensity":1.2,"color":4686804,"skyLightPosition":{"y":9,"x":9,"z":9},"lightPosition":{"z":9,"x":-9,"y":9},"lightIntensity":1.3,"lightShadowDarkness":0.55},"3d":true,"camera":{"fov":45,"elevationAngle":60,"distMax":50,"elevationMin":0,"radius":18},"name":"skin3d"},{"title":"2D Classic","preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/smess/promo.png","image|/res/smess/arrow-top.png","image|/res/smess/arrow-top-left.png","image|/res/images/wood-chipboard-4.jpg","image|/res/smess/smess-pieces-sprites-a.png","image|/res/smess/smess-pieces-sprites-b.png"],"3d":false,"name":"skin2d"}],"js":["base-view.js","grid-board-view.js","smess-set-view.js","smess-view.js"],"defaultOptions":{"moves":true,"sounds":true,"notation":false,"autocomplete":false},"useAutoComplete":true,"useNotation":true,"xdView":true,"preferredRatio":1,"animateSelfMoves":false,"title-en":"Chessbase view","useShowMoves":true,"css":["chessbase.css"]}}