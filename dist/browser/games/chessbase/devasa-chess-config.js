exports.config = {"status":true,"model":{"plazza":"true","module":"chessbase","description":{"en":"devasa-description.html"},"js":["base-model.js","hex-geo-model.js","devasa-model.js"],"thumbnail":"devasa-thumb.png","gameOptions":{"levelOptions":{"checkFactor":0.2,"distPawnPromo1Factor":0.3,"pieceValueFactor":1,"distPawnPromo2Factor":0.1,"endingDistKingFactor":0.05,"minorPiecesMovedFactor":0.1,"posValueFactor":0.1,"pieceValueRatioFactor":1,"endingKingFreedomFactor":0.01,"averageDistKingFactor":-0.01,"distKingCornerFactor":0.1,"distPawnPromo3Factor":0.05,"castleFactor":0.1},"uctIgnoreLoop":false,"preventRepeat":true,"uctTransposition":"state"},"credits":{"en":"devasa-credits.html"},"rules":{"en":"devasa-rules.html"},"released":1403189777,"levels":[{"name":"easy","playoutDepth":0,"c":0.6,"label":"Easy","ignoreLeaf":false,"minVisitsExpand":1,"ai":"uct","uncertaintyFactor":3,"maxNodes":6000},{"isDefault":true,"c":0.6,"name":"fast","playoutDepth":0,"uncertaintyFactor":3,"label":"Fast [3sec]","minVisitsExpand":1,"maxDuration":3,"ai":"uct","ignoreLeaf":false},{"c":0.6,"name":"medium","playoutDepth":0,"maxNodes":30000,"uncertaintyFactor":3,"label":"Medium","ai":"uct","maxDuration":30,"minVisitsExpand":1,"ignoreLeaf":false},{"ignoreLeaf":false,"maxDuration":45,"ai":"uct","minVisitsExpand":1,"label":"Strong","uncertaintyFactor":3,"maxNodes":60000,"playoutDepth":0,"name":"strong","c":0.6}],"summary":"Hexagonal Chess","obsolete":false,"title-en":"De Vasa Chess"},"view":{"xdView":true,"preferredRatio":1.154700538,"animateSelfMoves":false,"title-en":"Chessbase view","useShowMoves":true,"css":["chessbase.css","hex.css"],"switchable":true,"sounds":{"usermove":null,"move4":"alq_move2","tac3":"alq_tac1","tac1":"alq_tac1","move2":"alq_move2","move3":"alq_move3","tac2":"alq_tac2","move1":"alq_move1","promo":"promo"},"visuals":{"600x600":["res/visuals/devasa-600x600-3d.jpg","res/visuals/devasa-600x600-2d.jpg"]},"module":"chessbase","js":["base-view.js","hex-board-view.js","staunton-set-view.js","devasa-view.js"],"skins":[{"3d":true,"name":"skin3d","camera":{"distMax":50,"rotationAngle":80,"distMin":0,"elevationMin":0,"radius":14.5,"fov":45,"elevationAngle":45},"title":"3D Classic","world":{"fog":false,"color":4686804,"lightCastShadow":true,"ambientLightColor":2236962,"skyLightIntensity":1.2,"lightIntensity":1.3,"lightPosition":{"x":-9,"z":9,"y":9},"skyLightPosition":{"y":9,"x":9,"z":9},"lightShadowDarkness":0.55},"preload":["smoothedfilegeo|0|/res/ring-target-hexagon.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js","image|/res/staunton/pawn/pawn-diffusemap.jpg","image|/res/staunton/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/staunton/knight/knight.js","image|/res/staunton/knight/knight-diffusemap.jpg","image|/res/staunton/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/staunton/bishop/bishop.js","image|/res/staunton/bishop/bishop-diffusemap.jpg","image|/res/staunton/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/staunton/rook/rook.js","image|/res/staunton/rook/rook-diffusemap.jpg","image|/res/staunton/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/staunton/queen/queen.js","image|/res/staunton/queen/queen-diffusemap.jpg","image|/res/staunton/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/staunton/king/king.js","image|/res/staunton/king/king-diffusemap.jpg","image|/res/staunton/king/king-normalmap.jpg"]},{"title":"2D Classic","preload":["image|/res/images/wikipedia.png","image|/res/images/whitebg.png","image|/res/images/cancel.png"],"3d":false,"name":"skin2d"}],"defaultOptions":{"autocomplete":false,"notation":false,"sounds":true,"moves":true},"useAutoComplete":true,"useNotation":true}}