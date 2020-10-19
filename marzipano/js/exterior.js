var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate-view",
      "name": "Gate view",
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
          "yaw": -0.0975875940213875,
          "pitch": 0.5751805268768102,
          "rotation": 0,
          "target": "1-path-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-path-view",
      "name": "Path view",
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
          "yaw": -0.07141974073016755,
          "pitch": 0.33937884781066785,
          "rotation": 0,
          "target": "2-south-side"
        },
        {
          "yaw": 3.0663613530759193,
          "pitch": 0.2896917956497518,
          "rotation": 0,
          "target": "0-gate-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-south-side",
      "name": "South side",
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
        "yaw": -0.0030174643006386503,
        "pitch": -0.35480491564833727,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -0.3621182194672592,
          "pitch": 0.3458968285354551,
          "rotation": 5.497787143782138,
          "target": "3-west-side"
        },
        {
          "yaw": 0.33069168654031955,
          "pitch": 0.3568991253126512,
          "rotation": 0.7853981633974483,
          "target": "5-east-side"
        },
        {
          "yaw": 2.9838329725045565,
          "pitch": 0.47465960944043495,
          "rotation": 0,
          "target": "1-path-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-west-side",
      "name": "West side",
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
        "yaw": -3.1028965872804424,
        "pitch": -0.4336412767069824,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": -2.571406596086561,
          "pitch": 0.24683295306491004,
          "rotation": 0.7853981633974483,
          "target": "2-south-side"
        },
        {
          "yaw": 2.7214573133275604,
          "pitch": 0.25434911882218536,
          "rotation": 5.497787143782138,
          "target": "4-north-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1028965872804424,
          "pitch": -0.4336412767069824,
          "title": "Sails",
          "text": "The mill has four sails, which are known as \"common\" sails. These consist of a wooden frame attached to the large cross timbers called stocks, which are covered in a canvas-like material when the mill is in operation."
        }
      ]
    },
    {
      "id": "4-north-side",
      "name": "North side",
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
        "yaw": -0.004059067574623043,
        "pitch": -0.3736696107794266,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": 0.7220302125891642,
          "pitch": 0.273654642889932,
          "rotation": 0.7853981633974483,
          "target": "3-west-side"
        },
        {
          "yaw": -0.6738457905401773,
          "pitch": 0.2687983363197368,
          "rotation": 5.497787143782138,
          "target": "5-east-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-east-side",
      "name": "East side",
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
        "yaw": -3.135604225353603,
        "pitch": -0.41980166149294007,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": 3.116941514183374,
          "pitch": 0.38180633549911747,
          "rotation": 0,
          "target": "6-main-door-approach"
        },
        {
          "yaw": 2.47940357709696,
          "pitch": 0.28430826705032075,
          "rotation": 5.497787143782138,
          "target": "2-south-side"
        },
        {
          "yaw": -2.637912557199142,
          "pitch": 0.2968146358571566,
          "rotation": 0.7853981633974483,
          "target": "4-north-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-door-approach",
      "name": "Main door approach",
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
        "yaw": 0.10016672228836399,
        "pitch": 0.21075627902598626,
        "fov": 1.8167724812240134
      },
      "linkHotspots": [
        {
          "yaw": 1.3436656879117894,
          "pitch": 0.3642005248160771,
          "rotation": 0,
          "target": "4-north-side"
        },
        {
          "yaw": -2.7156897647580394,
          "pitch": 0.43302162537529476,
          "rotation": 0,
          "target": "5-east-side"
        },
        {
          "yaw": -1.1444873092967587,
          "pitch": 0.30570589437111195,
          "rotation": 0,
          "target": "2-south-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7794689580916572,
          "pitch": -0.18196122201701925,
          "title": "Doors",
          "text": "Provided access for the miller and to take the milled flour out of the mill. The doors are on opposing faces so that no matter which direction the sails were set one door would remain unobstructed and would be safe to use."
        }
      ]
    }
  ],
  "name": "Exterior",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
