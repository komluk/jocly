exports.config = {"status":true,"model":{"rules":{"en":"musketeer-rules.html"},"credits":{"en":"musketeer-credits.html"},"levels":[{"label":"Easy","ai":"uct","minVisitsExpand":1,"ignoreLeaf":false,"maxNodes":1000,"uncertaintyFactor":3,"name":"easy","playoutDepth":0,"c":0.6},{"uncertaintyFactor":3,"label":"Fast [1sec]","ai":"uct","maxDuration":1,"minVisitsExpand":1,"ignoreLeaf":false,"isDefault":true,"c":0.6,"name":"fast","playoutDepth":0},{"playoutDepth":0,"name":"medium","c":0.6,"ignoreLeaf":false,"maxDuration":10,"ai":"uct","minVisitsExpand":1,"label":"Medium","uncertaintyFactor":3,"maxNodes":10000},{"minVisitsExpand":1,"maxDuration":15,"ai":"uct","ignoreLeaf":false,"label":"Strong","maxNodes":20000,"uncertaintyFactor":3,"playoutDepth":0,"name":"strong","c":0.6}],"released":1469532905,"summary":"A modern Chess Variant","obsolete":false,"title-en":"Musketeer Chess","js":["base-model.js","grid-geo-model.js","musketeer-model.js"],"description":{"en":"musketeer-description.html"},"module":"chessbase","plazza":"true","gameOptions":{"preventRepeat":true,"uctTransposition":"state","uctIgnoreLoop":false,"levelOptions":[]},"thumbnail":"musketeer-thumb.png"},"view":{"skins":[{"camera":{"fov":45,"elevationAngle":60,"distMax":50,"elevationMin":0,"radius":18},"name":"skin3d","3d":true,"world":{"lightPosition":{"x":-9,"z":9,"y":9},"lightIntensity":1.3,"skyLightPosition":{"x":9,"z":9,"y":9},"lightShadowDarkness":0.55,"fog":false,"lightCastShadow":true,"ambientLightColor":2236962,"skyLightIntensity":1.2,"color":4686804},"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","image|/res/musketeer/wikipedia-fairy-musketeer-all-sprites.png","image|/res/musketeer/musketeer-select-1B.png","image|/res/musketeer/musketeer-select-2B.png","image|/res/musketeer/musketeer-select-1W.png","image|/res/musketeer/musketeer-select-2W.png","smoothedfilegeo|0|/res/fairy/pawn/pawn.js","image|/res/fairy/pawn/pawn-diffusemap.jpg","image|/res/fairy/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/fairy/knight/knight.js","image|/res/fairy/knight/knight-diffusemap.jpg","image|/res/fairy/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/fairy/bishop/bishop.js","image|/res/fairy/bishop/bishop-diffusemap.jpg","image|/res/fairy/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/fairy/king/king.js","image|/res/fairy/king/king-diffusemap.jpg","image|/res/fairy/king/king-normalmap.jpg","smoothedfilegeo|0|/res/fairy/rook/rook.js","image|/res/fairy/rook/rook-diffusemap.jpg","image|/res/fairy/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/fairy/queen/queen.js","image|/res/fairy/queen/queen-diffusemap.jpg","image|/res/fairy/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/musketeer/leopard.js","image|/res/musketeer/leopard-diffusemap.jpg","image|/res/musketeer/leopard-normalmap.jpg","smoothedfilegeo|0|/res/musketeer/fortress.js","image|/res/musketeer/fortress-diffusemap.jpg","image|/res/musketeer/fortress-normalmap.jpg","smoothedfilegeo|0|/res/musketeer/spider.js","image|/res/musketeer/spider-diffusemap.jpg","image|/res/musketeer/spider-normalmap.jpg","smoothedfilegeo|0|/res/musketeer/dragon-musketeer.js","image|/res/musketeer/dragon-musketeer-diffusemap.jpg","image|/res/musketeer/dragon-musketeer-normalmap.jpg","smoothedfilegeo|0|/res/fairy/unicorn/unicorn.js","image|/res/fairy/unicorn/unicorn-diffusemap.jpg","image|/res/fairy/unicorn/unicorn-normalmap.jpg","smoothedfilegeo|0|/res/fairy/eagle/eagle.js","image|/res/fairy/eagle/eagle-diffusemap.jpg","image|/res/fairy/eagle/eagle-normalmap.jpg","smoothedfilegeo|0|/res/fairy/elephant/elephant.js","image|/res/fairy/elephant/elephant-diffusemap.jpg","image|/res/fairy/elephant/elephant-normalmap.jpg","smoothedfilegeo|0|/res/fairy/marshall/marshall.js","image|/res/fairy/marshall/marshall-diffusemap.jpg","image|/res/fairy/marshall/marshall-normalmap.jpg","smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js","image|/res/fairy/cardinal/cardinal-diffusemap.jpg","image|/res/fairy/cardinal/cardinal-normalmap.jpg","smoothedfilegeo|0|/res/fairy/cannon/cannon.js","image|/res/fairy/cannon/cannon-diffusemap.jpg","image|/res/fairy/cannon/cannon-normalmap.jpg"],"title":"3D Classic"},{"title":"2D Classic","preload":["image|/res/images/wikipedia.png","image|/res/musketeer/wikipedia-fairy-musketeer-all-sprites.png","image|/res/musketeer/musketeer-select-1B.png","image|/res/musketeer/musketeer-select-2B.png","image|/res/musketeer/musketeer-select-1W.png","image|/res/musketeer/musketeer-select-2W.png"],"3d":false,"name":"skin2d"}],"js":["base-view.js","grid-board-view.js","fairy-set-view.js","musketeer-view.js"],"module":"chessbase","visuals":{"600x600":["res/visuals/musketeer-600x600-3d.jpg","res/visuals/musketeer-600x600-2d.jpg"]},"sounds":{"move4":"alq_move2","tac3":"alq_tac1","usermove":null,"move1":"alq_move1","promo":"promo","tac1":"alq_tac1","move2":"alq_move2","move3":"alq_move3","tac2":"alq_tac2"},"switchable":true,"useNotation":true,"useAutoComplete":true,"defaultOptions":{"moves":true,"sounds":true,"notation":false,"autocomplete":false},"preferredRatio":1,"animateSelfMoves":false,"xdView":true,"css":["chessbase.css"],"useShowMoves":true,"title-en":"Chessbase view"}}