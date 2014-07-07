
var GameConfig = {

    LOG_LEVEL: 3,

    GAME_ID: 'com.tresensa.test-game',
    TITLE: 'ColorChase',
    VERSION: '1.0.0',

    ORIENTATION: 'landscape',   

    CONSTRUCTOR: 'Runner',
    SOURCE: [
        "js/game/Level.js",
	    "js/game/Runner.js",
	    
	    "js/game/ObjectClasses/Player.js",
	    "js/game/ObjectClasses/Coin.js",
	    "js/game/ObjectClasses/StationaryObstacle.js",
	    "js/game/ObjectClasses/MovingObstacle.js",
        "js/game/ObjectClasses/SafeObstacle.js",
        "js/game/ObjectClasses/ColorWord.js",
	    
	    "js/game/Screens/GameScreen.js",
	    "js/game/Screens/EndScreen.js",
	    "js/game/Screens/StartScreen.js"
    ],

    CSS: [
        "main.css"
    ],

    EXCLUDE: [
    ],

	TGL: {
		VERSION: '1.0'
	},

    TGS: {
        ENABLED: true,
        FONT_LOADER:  true,
        VERSION: '0.3'
    },

    TGE: {
        ENABLED: true,
        FONT_LOADER: false,
        VERSION: '1.0'
    }
};