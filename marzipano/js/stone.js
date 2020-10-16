var APP_DATA = {
  "scenes": [
    {
      "id": "0-loading-door",
      "name": "Loading door",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -0.003765267686965501,
          "pitch": 0.7650715340249796,
          "rotation": 0,
          "target": "1-trapdoor-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-trapdoor-side",
      "name": "Trapdoor side",
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
        "yaw": 0.013659059479572022,
        "pitch": 0.07203062700886775,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -0.6822393223904815,
          "pitch": 0.7740151405468332,
          "rotation": 5.497787143782138,
          "target": "2-damsel-side"
        },
        {
          "yaw": 0.705264825806438,
          "pitch": 0.7736301916485253,
          "rotation": 0.7853981633974483,
          "target": "4-grain-feed-side"
        },
        {
          "yaw": -3.087817548175323,
          "pitch": 0.7001734987622328,
          "rotation": 0,
          "target": "0-loading-door"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3392505701157127,
          "pitch": -0.3796987731498689,
          "title": "Crown gear",
          "text": "Text"
        },
        {
          "yaw": 2.7934851075314544,
          "pitch": -0.57913738567294,
          "title": "Loading door",
          "text": "It is thought that this door was used when grain was received. The farmer would drive his cart up to the side of the mill and lift the bags the small distance up in through this door. From there they could be hoisted up to the bin floor."
        },
        {
          "yaw": -2.467208877870249,
          "pitch": 0.9595312581820732,
          "title": "Stone case",
          "text": "Around the set of millstones is the stone case. This is a wooden cylinder held together by iron bands. Its purpose is to collect the flour that comes from the millstones so that is can fall through a chute in the floor to be bagged.&nbsp;<div><br></div>"
        },
        {
          "yaw": -0.9138102879535328,
          "pitch": 0.14567708051444583,
          "title": "Damsel",
          "text": "The upright lobed metal shaft which turned as the stone turned and joggled away at the shoe. So called because it never stopped chattering!"
        },
        {
          "yaw": -1.3937525965745898,
          "pitch": 0.6991625761250688,
          "title": "Shoe",
          "text": "Text"
        },
        {
          "yaw": -1.8961522697749622,
          "pitch": -0.07918968444047714,
          "title": "Hopper",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-damsel-side",
      "name": "Damsel side",
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
        "yaw": 3.0550860900849823,
        "pitch": 0.45085836905555965,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -2.666689355651126,
          "pitch": 0.7860426825552445,
          "rotation": 0.7853981633974483,
          "target": "1-trapdoor-side"
        },
        {
          "yaw": 2.613959395446382,
          "pitch": 0.8126454166337798,
          "rotation": 5.497787143782138,
          "target": "3-boulter-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2624073848985535,
          "pitch": -0.035181670821588185,
          "title": "Boulter",
          "text": "A large automated sieve that is used to refine the flour. It consists of wooden frame in which an angled drum of stretched cloth rotates powered by the mill. The milled flour is fed in at the top of the drum and the flour is spun out through three different thicknesses of cloth leaving the bran to be collected at the base of the drum. These three different qualities of refined flour are then collected in sacks beneath the machine. In effect the boulter operates in much the same way as a spin dryer."
        }
      ]
    },
    {
      "id": "3-boulter-side",
      "name": "Boulter side",
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
        "yaw": -3.1394374706320907,
        "pitch": 0.5374383908123743,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -2.0470055858032286,
          "pitch": 0.9747386110640246,
          "rotation": 0.7853981633974483,
          "target": "2-damsel-side"
        },
        {
          "yaw": 2.070018598253964,
          "pitch": 0.9943735698135256,
          "rotation": 5.497787143782138,
          "target": "4-grain-feed-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.287934739571483,
          "pitch": -0.13784732106128317,
          "title": "Grain feed",
          "text": "<div>This structure is called a horse due to its shape when viewed from the side. It consists of a wooden frame with a hopper at one end. Beneath the hopper is a chute that is set at a shallow gradient called the shoe. The shoe slopes down from under the hopper to the just over the hole in the centre of the millstones. Just before the end of the shoe an iron spindle that has a needle like eye in it passes through it. This is called the damsel. Together this makes up the grain feed.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "4-grain-feed-side",
      "name": "Grain feed side",
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
        "yaw": 2.991540454302662,
        "pitch": 0.2514196763886076,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": 2.619052214528142,
          "pitch": 0.5629313696307285,
          "rotation": 5.497787143782138,
          "target": "1-trapdoor-side"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Stone Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
