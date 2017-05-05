exports.config = {"status":true,"model":{"title-en":"360 Chess Authoring","summary":"Inventing the 360 Chess variant on a cube","rules":{"en":"rules.html"},"module":"chessbase","plazza":"true","thumbnail":"cubic-chess-thumb.png","released":1395590178,"credits":{"en":"credits.html"},"gameOptions":{"preventRepeat":true,"uctTransposition":"state","uctIgnoreLoop":false,"levelOptions":{"checkFactor":0.2,"pieceValueFactor":1,"posValueFactor":0.1,"averageDistKingFactor":-0.01,"castleFactor":0.1,"minorPiecesMovedFactor":0.1,"pieceValueRatioFactor":1,"endingKingFreedomFactor":0.01,"endingDistKingFactor":0.05,"distKingCornerFactor":0.1,"distPawnPromo1Factor":0.3,"distPawnPromo2Factor":0.1,"distPawnPromo3Factor":0.05}},"obsolete":true,"js":["base-model.js","cubic-geo-model.js","cubic-model.js"],"levels":[{"name":"easy","label":"Easy","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":1000},{"name":"fast","label":"Fast [1sec]","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxDuration":1,"isDefault":true},{"name":"medium","label":"Medium","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":10000,"maxDuration":10},{"name":"strong","label":"Strong","ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"maxNodes":20000,"maxDuration":15}]},"view":{"title-en":"Chessbase view","js":["base-view.js","cubic-board-view.js","staunton-set-view.js","cubic-view.js"],"xdView":true,"css":["chessbase.css"],"preferredRatio":1.3333333333333,"useShowMoves":false,"useNotation":true,"module":"chessbase","defaultOptions":{"sounds":true,"moves":false,"notation":false,"autocomplete":false},"skins":[{"name":"skin3d","title":"3D Classic","3d":true,"preload":[],"world":{"lightIntensity":0,"skyLightIntensity":0,"lightCastShadow":false,"fog":false,"color":4686804,"lightPosition":{"x":9,"y":14,"z":9},"skyLightPosition":{"x":9,"y":9,"z":9},"lightShadowDarkness":0.55,"ambientLightColor":16777215},"camera":{"fov":45,"distMax":200,"radius":25,"elevationAngle":45,"elevationMin":-89,"rotationAngle":-45,"target":[0,0,0],"targetBounds":[3000,3000,6000]}},{"name":"skin2d","title":"2D Classic","3d":false,"preload":[]}],"animateSelfMoves":false,"switchable":false,"sounds":{"move1":"alq_move1","move2":"alq_move2","move3":"alq_move3","move4":"alq_move2","tac1":"alq_tac1","tac2":"alq_tac2","tac3":"alq_tac1","promo":"promo","usermove":null},"useAutoComplete":false}}