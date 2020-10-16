var APP_DATA = {
  "scenes": [
    {
      "id": "0-triangular-bin-side",
      "name": "Triangular bin side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.7431315887958156,
        "pitch": 0.3582739686978762,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -0.8427931432742177,
          "pitch": 0.8060293109895547,
          "rotation": 0.7853981633974483,
          "target": "2-sack-hoist-side"
        },
        {
          "yaw": -2.2362998900233517,
          "pitch": 0.9719187059711292,
          "rotation": 5.497787143782138,
          "target": "1-lathe-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1529689540254182,
          "pitch": -0.10063740839448165,
          "title": "Main shaft",
          "text": "A large vertical shaft of solid wood and the drive shaft of the mill. It runs down the centre of the mill from the base of the cap to the ceiling of the ground floor. Its purpose is to take the power supplied by the sails and to transmit it to all of the mill machinery.&nbsp;<div><br><div>Can you name the gears at both ends of the main shaft?<br><div><br></div></div></div>"
        }
      ]
    },
    {
      "id": "1-lathe-side",
      "name": "Lathe side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -3.100114166351293,
        "pitch": 0.43759827887829417,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -2.053691601566463,
          "pitch": 0.8603597982346383,
          "rotation": 0.7853981633974483,
          "target": "0-triangular-bin-side"
        },
        {
          "yaw": 2.395771871889604,
          "pitch": 1.0706409374113761,
          "rotation": 5.497787143782138,
          "target": "3-rectangular-bin-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3586695621386191,
          "pitch": 0.20441142733836415,
          "title": "Lathe",
          "text": "Used to make things to provide an income when not milling. It was probably not powered by the mill, but by the foot-operated treadle underneath."
        }
      ]
    },
    {
      "id": "2-sack-hoist-side",
      "name": "Sack hoist side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.01593554052658952,
        "pitch": 0.3495666125395118,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 0.6722464057625785,
          "pitch": 0.9263453227502492,
          "rotation": 0.7853981633974483,
          "target": "3-rectangular-bin-side"
        },
        {
          "yaw": -0.63750014450493,
          "pitch": 0.9317691636858321,
          "rotation": 5.497787143782138,
          "target": "0-triangular-bin-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2657208423730939,
          "pitch": -0.32973217241401187,
          "title": "Grain bins",
          "text": "When sacks of grain were brought up via the sack hoist they would be emptied into the grain bins. These large wooden box-like structures were built above a hopper. These hoppers funnelled the grain into two chutes that passed through the floor and ended above the small hopper on the millstone's grain feed."
        },
        {
          "yaw": -2.9964653083997455,
          "pitch": -0.32957675054464275,
          "title": "Sack hoist",
          "text": "Used to bring the sacks of grain up from below through trapdoors in each floor. It is powered by a friction drive from the underside of the wallower above, and controlled by a rope that goes all the way back down to the ground floor. The miller knew that the grain had arrived when he heard the second set of doors ban shut."
        }
      ]
    },
    {
      "id": "3-rectangular-bin-side",
      "name": "Rectangular bin side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -2.983991411154676,
        "pitch": -0.015209935002957309,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 2.8277784787581615,
          "pitch": 0.6012560475167614,
          "rotation": 5.497787143782138,
          "target": "2-sack-hoist-side"
        },
        {
          "yaw": -2.4383372138625248,
          "pitch": 0.5392265533678611,
          "rotation": 0.7853981633974483,
          "target": "1-lathe-side"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bin Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
