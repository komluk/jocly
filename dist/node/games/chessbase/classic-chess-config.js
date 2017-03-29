exports.config = {"status":true,"model":{"title-en":"Chess","summary":"Regular Orthodox Classic Western Chess","released":1389887778,"levels":[{"label":"Easy","minVisitsExpand":1,"ai":"uct","ignoreLeaf":false,"maxNodes":1000,"uncertaintyFactor":3,"name":"easy","playoutDepth":0,"c":0.6},{"playoutDepth":0,"name":"fast","isDefault":true,"c":0.6,"ignoreLeaf":false,"maxDuration":1,"ai":"uct","minVisitsExpand":1,"label":"Fast [1sec]","uncertaintyFactor":3},{"uncertaintyFactor":3,"maxNodes":10000,"label":"Medium","ignoreLeaf":false,"maxDuration":10,"minVisitsExpand":1,"ai":"uct","c":0.6,"name":"medium","playoutDepth":0},{"name":"strong","playoutDepth":0,"c":0.6,"label":"Strong","ai":"uct","maxDuration":15,"minVisitsExpand":1,"ignoreLeaf":false,"maxNodes":20000,"uncertaintyFactor":3}],"credits":{"en":"credits.html","fr":"credits-fr.html"},"rules":{"en":"rules.html","fr":"rules-fr.html"},"thumbnail":"knight-thumbnail.png","gameOptions":{"uctIgnoreLoop":false,"levelOptions":{"minorPiecesMovedFactor":0.1,"endingDistKingFactor":0.05,"posValueFactor":0.1,"pieceValueFactor":1,"distPawnPromo1Factor":0.3,"checkFactor":0.2,"distPawnPromo2Factor":0.1,"distKingCornerFactor":0.1,"distPawnPromo3Factor":0.05,"castleFactor":0.1,"pieceValueRatioFactor":1,"averageDistKingFactor":-0.01,"endingKingFreedomFactor":0.01},"uctTransposition":"state","preventRepeat":true},"plazza":"true","module":"chessbase","js":["base-model.js","grid-geo-model.js","classic-model.js","classic-db.min.js"]},"view":{"preferredRatio":1,"animateSelfMoves":false,"xdView":true,"css":["chessbase.css"],"useShowMoves":true,"title-en":"Chessbase view","js":["base-view.js","grid-board-view.js","staunton-set-view.js","extruded-set-view.js","classic-view.js"],"skins":[{"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js","image|/res/staunton/pawn/pawn-diffusemap.jpg","image|/res/staunton/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/staunton/knight/knight.js","image|/res/staunton/knight/knight-diffusemap.jpg","image|/res/staunton/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/staunton/bishop/bishop.js","image|/res/staunton/bishop/bishop-diffusemap.jpg","image|/res/staunton/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/staunton/rook/rook.js","image|/res/staunton/rook/rook-diffusemap.jpg","image|/res/staunton/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/staunton/queen/queen.js","image|/res/staunton/queen/queen-diffusemap.jpg","image|/res/staunton/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/staunton/king/king.js","image|/res/staunton/king/king-diffusemap.jpg","image|/res/staunton/king/king-normalmap.jpg"],"world":{"lightCastShadow":true,"ambientLightColor":2236962,"skyLightIntensity":1.2,"color":4686804,"fog":false,"lightShadowDarkness":0.55,"lightPosition":{"x":-9,"z":9,"y":9},"lightIntensity":1.3,"skyLightPosition":{"z":9,"x":9,"y":9}},"title":"3D Classic","camera":{"distMax":50,"radius":18,"elevationMin":0,"fov":45,"elevationAngle":60},"name":"skin3d","3d":true},{"name":"skin3dflat","camera":{"elevationMin":0,"radius":18,"distMax":50,"elevationAngle":89,"fov":45},"3d":true,"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","image|/res/extruded/wood.jpg","image|/res/extruded/wikipedia-pieces-diffuse-white.jpg","image|/res/extruded/wikipedia-pieces-diffuse-black.jpg","smoothedfilegeo|0|/res/extruded/flat3dpieces-king.js","smoothedfilegeo|0|/res/extruded/flat3dpieces-queen.js","smoothedfilegeo|0|/res/extruded/flat3dpieces-pawn.js","smoothedfilegeo|0|/res/extruded/flat3dpieces-rook.js","smoothedfilegeo|0|/res/extruded/flat3dpieces-knight.js","smoothedfilegeo|0|/res/extruded/flat3dpieces-bishop.js"],"world":{"fog":false,"lightCastShadow":true,"ambientLightColor":2236962,"skyLightIntensity":1.2,"color":4686804,"lightPosition":{"z":9,"x":-9,"y":9},"lightIntensity":1.3,"skyLightPosition":{"y":9,"z":9,"x":9},"lightShadowDarkness":0.55},"title":"3D Flat"},{"name":"skin2dfull","3d":false,"preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/images/wikipedia.png"],"title":"2D Classic"},{"title":"2D Wood","preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/images/wikipedia.png","image|/res/images/woodenpieces2d2.png","image|/res/images/wood.jpg"],"3d":false,"name":"skin2dwood"}],"module":"chessbase","visuals":{"600x600":["res/visuals/classic-chess-600x600-3d.jpg","res/visuals/classic-chess-600x600-2d.jpg"]},"sounds":{"move1":"alq_move1","promo":"promo","move2":"alq_move2","move3":"alq_move3","tac1":"alq_tac1","tac2":"alq_tac2","move4":"alq_move2","tac3":"alq_tac1","usermove":null},"switchable":true,"useNotation":true,"useAutoComplete":true,"defaultOptions":{"notation":false,"autocomplete":false,"moves":true,"sounds":true}}}