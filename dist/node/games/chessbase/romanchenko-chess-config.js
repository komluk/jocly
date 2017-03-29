exports.config = {"status":true,"model":{"title-en":"Romanchenko's Chess","obsolete":false,"summary":"Shifted 8x8 chess variant by V. Romanchenko","released":1403535377,"levels":[{"c":0.6,"playoutDepth":0,"name":"easy","uncertaintyFactor":3,"maxNodes":1000,"ignoreLeaf":false,"ai":"uct","minVisitsExpand":1,"label":"Easy"},{"label":"Fast [1sec]","ai":"uct","maxDuration":1,"minVisitsExpand":1,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"fast","playoutDepth":0,"c":0.6,"isDefault":true},{"name":"medium","playoutDepth":0,"c":0.6,"label":"Medium","maxDuration":10,"minVisitsExpand":1,"ai":"uct","ignoreLeaf":false,"maxNodes":10000,"uncertaintyFactor":3},{"playoutDepth":0,"name":"strong","c":0.6,"ignoreLeaf":false,"maxDuration":15,"ai":"uct","minVisitsExpand":1,"label":"Strong","uncertaintyFactor":3,"maxNodes":20000}],"credits":{"en":"romanchenko-credits.html"},"rules":{"en":"romanchenko-rules.html"},"thumbnail":"romanchenko-thumb.png","gameOptions":{"uctTransposition":"state","preventRepeat":true,"levelOptions":{"endingKingFreedomFactor":0.01,"averageDistKingFactor":-0.01,"pieceValueRatioFactor":1,"castleFactor":0.1,"distKingCornerFactor":0.1,"pieceValueFactor":1,"checkFactor":0.2,"posValueFactor":0.1,"endingDistKingFactor":0.05,"minorPiecesMovedFactor":0.1},"uctIgnoreLoop":false},"module":"chessbase","plazza":"true","description":{"en":"romanchenko-description.html"},"js":["base-model.js","grid-geo-model.js","romanchenko-model.js"]},"view":{"xdView":true,"preferredRatio":1,"animateSelfMoves":false,"useShowMoves":true,"title-en":"Chessbase view","css":["chessbase.css"],"switchable":true,"js":["base-view.js","grid-board-view.js","staunton-set-view.js","romanchenko-view.js"],"skins":[{"title":"3D Classic","world":{"fog":false,"color":4686804,"lightCastShadow":true,"ambientLightColor":2236962,"skyLightIntensity":1.2,"skyLightPosition":{"y":9,"z":9,"x":9},"lightIntensity":1.3,"lightPosition":{"z":9,"x":-9,"y":9},"lightShadowDarkness":0.55},"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js","image|/res/staunton/pawn/pawn-diffusemap.jpg","image|/res/staunton/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/staunton/knight/knight.js","image|/res/staunton/knight/knight-diffusemap.jpg","image|/res/staunton/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/staunton/bishop/bishop.js","image|/res/staunton/bishop/bishop-diffusemap.jpg","image|/res/staunton/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/staunton/rook/rook.js","image|/res/staunton/rook/rook-diffusemap.jpg","image|/res/staunton/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/staunton/queen/queen.js","image|/res/staunton/queen/queen-diffusemap.jpg","image|/res/staunton/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/staunton/king/king.js","image|/res/staunton/king/king-diffusemap.jpg","image|/res/staunton/king/king-normalmap.jpg"],"3d":true,"camera":{"radius":18,"elevationMin":0,"distMax":50,"elevationAngle":60,"fov":45},"name":"skin3d"},{"name":"skin2d","3d":false,"preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/images/wikipedia.png"],"title":"2D Classic"}],"visuals":{"600x600":["res/visuals/romanchenko-600x600-3d.jpg","res/visuals/romanchenko-600x600-2d.jpg"]},"module":"chessbase","sounds":{"tac1":"alq_tac1","move3":"alq_move3","move2":"alq_move2","tac2":"alq_tac2","move1":"alq_move1","promo":"promo","usermove":null,"tac3":"alq_tac1","move4":"alq_move2"},"useAutoComplete":true,"defaultOptions":{"moves":true,"sounds":true,"notation":false,"autocomplete":false},"useNotation":true}}