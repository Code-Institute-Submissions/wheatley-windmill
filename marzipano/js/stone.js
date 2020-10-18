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
        "yaw": 0.002276516415644636,
        "pitch": 0.14149124793265955,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -0.01078630865462138,
          "pitch": 0.8679393409649379,
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
        "yaw": 0.025041680572092773,
        "pitch": 0.2552391139177388,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -0.7516495712282207,
          "pitch": 0.8359990066784242,
          "rotation": 5.497787143782138,
          "target": "2-damsel-side"
        },
        {
          "yaw": 0.787352280525278,
          "pitch": 0.8294633666848732,
          "rotation": 0.7853981633974483,
          "target": "4-grain-feed-side"
        },
        {
          "yaw": -3.0829909851420094,
          "pitch": 0.9238453292251414,
          "rotation": 0,
          "target": "0-loading-door"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6711419188150067,
          "pitch": -0.316994029700135,
          "title": "Loading door",
          "text": "It is thought that this door was used when grain was received. The farmer would drive his cart up to the side of the mill and lift the bags the small distance up in through this door. From there they could be hoisted up to the bin floor."
        },
        {
          "yaw": -0.37654100821251113,
          "pitch": -0.37090112771101147,
          "title": "Crown gear",
          "text": "Text"
        },
        {
          "yaw": -0.9345099177961735,
          "pitch": 0.04392310318018744,
          "title": "Damsel",
          "text": "<div>The upright lobed metal shaft which turned as the stone turned and joggled away at the shoe. So called because it never stopped chattering!</div>"
        },
        {
          "yaw": -2.553211646853864,
          "pitch": 0.9001212808865926,
          "title": "Stone case",
          "text": "<div>Around the set of millstones is the stone case. This is a wooden cylinder held together by iron bands. Its purpose is to collect the flour that comes from the millstones so that is can fall through a chute in the floor to be bagged.</div>"
        },
        {
          "yaw": -1.8877013022894484,
          "pitch": 0.018359576752231987,
          "title": "Hopper",
          "text": "Text"
        },
        {
          "yaw": -1.5116332110149422,
          "pitch": 0.7858006714251555,
          "title": "Shoe",
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
        "yaw": 3.064663298427135,
        "pitch": 0.41651730766302997,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -2.5165258849461836,
          "pitch": 0.7095637318889914,
          "rotation": 0.7853981633974483,
          "target": "1-trapdoor-side"
        },
        {
          "yaw": 2.5123896983466256,
          "pitch": 0.7574033252092676,
          "rotation": 5.497787143782138,
          "target": "3-boulter-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2350025233708273,
          "pitch": -0.05188909550075138,
          "title": "Boulter",
          "text": "<div>A large automated sieve that is used to refine the flour. It consists of a wooden frame in which an angled drum of stretched cloth rotates, powered by the mill. The milled flour is fed in at the top of the drum and the flour is spun out through three different thicknesses of cloth leaving the bran to be collected at the base of the drum. These three different qualities of refined flour are then collected in sacks beneath the machine. In effect the boulter operates in much the same way as a spin dryer.</div>"
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
        "yaw": 3.1389426574647565,
        "pitch": 0.444383361843137,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 2.1475224459343982,
          "pitch": 0.9831669026996277,
          "rotation": 5.497787143782138,
          "target": "4-grain-feed-side"
        },
        {
          "yaw": -2.246025197984233,
          "pitch": 0.9526907310466672,
          "rotation": 0.7853981633974483,
          "target": "2-damsel-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.253385888428646,
          "pitch": -0.11494030469673788,
          "title": "Grain feed",
          "text": "This structure is called a horse due to its shape when viewed from the side. It consists of a wooden frame with a hopper at one end. Beneath the hopper is a chute that is set at a shallow gradient called the shoe. The shoe slopes down from under the hopper to the just over the hole in the centre of the millstones. Just before the end of the shoe an iron spindle that has a needle like eye in it passes through it. This is called the damsel. Together this makes up the grain feed."
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
        "yaw": 2.9562168609288957,
        "pitch": 0.5487718314612913,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.568297749620566,
          "pitch": 0.5552579796695518,
          "rotation": 5.497787143782138,
          "target": "1-trapdoor-side"
        },
        {
          "yaw": 2.9104620324950794,
          "pitch": 0.43982295094148327,
          "rotation": 0.7853981633974483,
          "target": "2-damsel-side"
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
    "viewControlButtons": true
  }
};
