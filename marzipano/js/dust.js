var APP_DATA = {
  "scenes": [
    {
      "id": "0-dormer",
      "name": "Dormer",
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
        "yaw": 0.03414774623466954,
        "pitch": 0.2691107114260909,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -0.002802707455305864,
          "pitch": 0.7800434807134184,
          "rotation": 0,
          "target": "1-windshaft"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4255440595584314,
          "pitch": 0.3065835036152116,
          "title": "Brake lever",
          "text": "Fitted at one end to a pivot so that when the free end is raised it releases tension on the brake band. When it is allowed to fall the band is constricted around the wheel stopping its motion (in a similar way to a drum brake on a car). This is achieved by the weight of the brake lever alone. Once set it can be held in the off position via the use of a hitch. It can then be applied remotely via a rope that hangs outside down the back of mill and that passed into the mill cap to be attached to the top of the lever via a pulley."
        },
        {
          "yaw": 0.6391027907533235,
          "pitch": -0.15284061079887934,
          "title": "Brake",
          "text": "Attached to the windshaft is a large, almost vertical wheel called the brake wheel. Placed around the outside of this wheel is the brake band. This consists of a ring of wood surrounded by a metal band. One end of the band is attached to the cap frame, the other is attached to the brake lever."
        }
      ]
    },
    {
      "id": "1-windshaft",
      "name": "Windshaft",
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
        "yaw": 1.5320955477289324,
        "pitch": 0.46331447852459107,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 0.41826066364899184,
          "pitch": 0.9080717987542499,
          "rotation": 4.71238898038469,
          "target": "2-brake-lever-side"
        },
        {
          "yaw": 2.8096057234604856,
          "pitch": 0.7100148800366952,
          "rotation": 1.5707963267948966,
          "target": "3-worm-gear-side"
        },
        {
          "yaw": -1.7112060878274882,
          "pitch": 0.976364328707426,
          "rotation": 0,
          "target": "0-dormer"
        },
        {
          "yaw": -0.1646614149396406,
          "pitch": 1.2161516282054627,
          "rotation": 4.71238898038469,
          "target": "4-ladder-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7159876755817987,
          "pitch": -0.3538895125270489,
          "title": "Brake wheel",
          "text": "A very large cogged wheel mounted midway along the windshaft so that it stands almost vertically in the cap. It serves two purposes. The first is to translate the horizontal rotation of the windshaft into the vertical rotation of the main shaft. To do this the cogs on the brake wheel mesh with the cogs of the wallower which is mounted on the top of the main shaft. The second function is to provide a method to stop the sails turning. To this end the brake wheel is surrounded by a brake band which is tightened to grip the wheel and thus stop its rotation."
        }
      ]
    },
    {
      "id": "2-brake-lever-side",
      "name": "Brake lever side",
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
        "yaw": 3.087215805363714,
        "pitch": 0.5230847028203272,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 3.048671773363602,
          "pitch": 1.170677452467995,
          "rotation": 0,
          "target": "1-windshaft"
        },
        {
          "yaw": 3.087215805363714,
          "pitch": 0.5230847028203272,
          "rotation": 0,
          "target": "3-worm-gear-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.605078537198626,
          "pitch": 0.4602085514950751,
          "title": "Windshaft",
          "text": "A large shaft of wood reinforced by iron bands in which the metal sail boss is embedded in one end. It is mounted into a brass bearing at a small angle off the horizontal in the cap. The sail boss (cast by the Eagle foundry in 1784) is embedded into the windshaft and protrudes out of the front of the cap. It is to this that the sails are connected. The job of the windshaft is to take the rotational motion of the sails into the cap where it can be transferred to the main shaft to power the mill machinery. In order to do this mounted midway along the windshaft is the brake wheel."
        }
      ]
    },
    {
      "id": "3-worm-gear-side",
      "name": "Worm gear side",
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
        "yaw": 3.0451029446943796,
        "pitch": 0.6678699356230773,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -2.7510714127126725,
          "pitch": 0.8678394448071352,
          "rotation": 0,
          "target": "1-windshaft"
        },
        {
          "yaw": -3.0998834186989086,
          "pitch": 0.4460027914721376,
          "rotation": 0,
          "target": "2-brake-lever-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1311767293170885,
          "pitch": 0.8192196077263318,
          "title": "Worm gear",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-ladder-side",
      "name": "Ladder side",
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
        "yaw": 1.6186031715234162,
        "pitch": -0.027743381947580303,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 1.7828534718131648,
          "pitch": -0.9208486579431199,
          "rotation": 0,
          "target": "1-windshaft"
        },
        {
          "yaw": 2.343795968685468,
          "pitch": 0.49046682976005407,
          "rotation": 0.7853981633974483,
          "target": "5-cogged-wheel-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.791975593210214,
          "pitch": 0.04096041155107244,
          "title": "Side thrust rollers",
          "text": "Keep the cap centrally located."
        },
        {
          "yaw": -1.3613043679453227,
          "pitch": -0.04822798599241196,
          "title": "Cast iron rollers",
          "text": "The cap is supported by cast iron rollers running in cast iron tracks."
        }
      ]
    },
    {
      "id": "5-cogged-wheel-side",
      "name": "Cogged wheel side",
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
        "yaw": 2.9730006368421673,
        "pitch": 0.3981913569865263,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -2.2440441809022644,
          "pitch": 0.5506279998783192,
          "rotation": 0.7853981633974483,
          "target": "6-wallower-side"
        },
        {
          "yaw": 1.976919522000153,
          "pitch": 0.49358065293749576,
          "rotation": 5.497787143782138,
          "target": "4-ladder-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.45300894808802106,
          "pitch": 0.3239549952348675,
          "title": "Cast iron gears",
          "text": "The fan wheel drives the whole cap through 360 degrees by a series of cast iron gears that engage with timber teeth or cogs situated all around the kerb of the static masonry tower. The cap does not spin around, but just creeps according to any change in wind direction."
        }
      ]
    },
    {
      "id": "6-wallower-side",
      "name": "Wallower side",
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
        "yaw": 1.4548371873055714,
        "pitch": -0.17559920348886848,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 0.6779137164549311,
          "pitch": 0.3643607841358598,
          "rotation": 5.497787143782138,
          "target": "5-cogged-wheel-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7113118799966198,
          "pitch": 0.6897400121089419,
          "title": "Wallower",
          "text": "A large cogged wheel that is set horizontally and fixed to the top of the main shaft in the base of the cap. The cogs on the wheel mesh with the cogs on the brake wheel, thus windshaft power is transmitted via these wheels to the main shaft and the rest of the mill. As these wheels are set at an angle to each other the horizontal rotational movement of the sails is transmitted into vertical rotation movement. The wallower is held in place by a hash-shaped frame called the clasp arm."
        }
      ]
    }
  ],
  "name": "Dust Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
