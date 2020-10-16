var APP_DATA = {
  "scenes": [
    {
      "id": "0-wheatley-view",
      "name": "Wheatley view",
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
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 1.6679879507313702,
          "pitch": 0.9734039791502056,
          "rotation": 0,
          "target": "2-cuddesdon-view"
        },
        {
          "yaw": -1.6386486283828852,
          "pitch": 0.9604123576852253,
          "rotation": 0,
          "target": "1-littleworth-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8921537875339993,
          "pitch": -0.588288690936416,
          "title": "Finial",
          "text": "At the apex of the cap is the finial. This a large deocrative ball made from solid oak with a lead covering. This type of cap decoration was rather common in the Oxfordshire area. The current finial is not the original, which was hit by lightning in the 1930s, and<div>when the new cap was constructed it was too decayed to be reused.</div><div><br></div><div>What was the original finial made of?</div><div>- Elm</div>"
        }
      ]
    },
    {
      "id": "1-littleworth-view",
      "name": "Littleworth view",
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
        "yaw": 0.7249382038193399,
        "pitch": 0.5006751926217525,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": -3.0640544382578145,
          "pitch": 1.238266500424821,
          "rotation": 0,
          "target": "0-wheatley-view"
        },
        {
          "yaw": -2.711159637682135,
          "pitch": 0.6938410993425776,
          "rotation": 0,
          "target": "2-cuddesdon-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.11847590639999,
          "pitch": -0.9708333605524988,
          "title": "Weather vane",
          "text": "To aid the miller in turning the sails&nbsp;into the wind, mounted above the dormer is a weather vane. The restored weather vane on Wheatley mill is in the shape of a fiddle, an instrument closely linked to the Cripps family who own the mill."
        }
      ]
    },
    {
      "id": "2-cuddesdon-view",
      "name": "Cuddesdon view",
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
        "yaw": -0.5805116859894035,
        "pitch": 0.5631906535358766,
        "fov": 1.7311870335289696
      },
      "linkHotspots": [
        {
          "yaw": 2.830917117879144,
          "pitch": 1.1445093752899052,
          "rotation": 0,
          "target": "0-wheatley-view"
        },
        {
          "yaw": 2.724372761012738,
          "pitch": 0.6744450136177313,
          "rotation": 0,
          "target": "1-littleworth-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.103670894490202,
          "pitch": -0.7033704092874942,
          "title": "Fanwheel",
          "text": "The cap of the mill was probably originally turned by hand. However, as there is no resident miller to keep the cap set into the wind, the addition of a fantail has been the best compromise. The fanwheel is turned by the wind if the cap is not facing the wind, and slowly corrects the situation. It drives via the square vertical shaft to the worm gear that can be seen just inside the cap, through a gearbox under the cover to select automatic or manual operation."
        }
      ]
    }
  ],
  "name": "Cap Tail",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
