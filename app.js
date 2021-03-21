let animalNoisePlaying = false;
let animalAudioSource = null;
let videoAsset = null;
let isVideoPlaying1 = false;

const earthVideoArray = [{
    title: "A climate change solution that's right under our feet",
    speaker: "Asmeret Asefaw Berhe",
    path: "./assets/videos/earth/AsmeretAsefawBerhe.mp4 ",
    power: "earth",
  },
  {
    title: "How trees talk to each other",
    speaker: "Suzanne Simard",
    path: " ./assets/videos/earth/SuzanneSimard.mp4",
    power: "earth",
  },
  {
    title: "How climate change could make our food less nutritious",
    speaker: "Kristie Ebi",
    path: " ./assets/videos/earth/KristieEbi.mp4",
    power: "earth",
  },
  {
    title: "The beautiful tricks of flowers",
    speaker: "Jonathan Drori",
    path: " ./assets/videos/earth/JonathanDrori.mp4",
    power: "earth",
  },
  {
    title: "How one tree grows 40 different kinds of fruit",
    speaker: "Sam Van Aken",
    path: " ./assets/videos/earth/SamVanAken.mp4 ",
    power: "earth",
  },
  {
    title: "Lessons from fungi on markets and economics",
    speaker: "Toby Kiers",
    path: "./assets/videos/earth/TobyKiers.mp4 ",
    power: "earth",
  },
  {
    title: "The mysterious microbes living deep inside the earth — and how they could help humanity",
    speaker: "Karen Lloyd",
    path: " ./assets/videos/earth/KarenLloyd.mp4",
    power: "earth",
  },
  {
    title: "The global movement to restore nature's biodiversity",
    speaker: "Thomas Crowther",
    path: "./assets/videos/earth/ThomasCrowther.mp4 ",
    power: "earth",
  },
  {
    title: "The true cost of oil",
    speaker: "Garth Lenz",
    path: "./assets/videos/earth/GarthLenz.mp4 ",
    power: "earth",
  },
  {
    title: "How supercharged plants could slow climate change",
    speaker: "Joanne Chory",
    path: "./assets/videos/earth/JoanneChory.mp4 ",
    power: "earth",
  },
  {
    title: "Hopeful lessons from the battle to save rainforests",
    speaker: "Tasso Azevedo",
    path: "./assets/videos/earth/TassoAzevedo.mp4 ",
    power: "earth",
  },
];

const airVideoArray = [{
    title: "5 steps for clean air in India",
    speaker: "Arunabha Ghosh",
    path: "./assets/videos/air/ArunabhaGhosh.mp4 ",
    power: "air",
  },
  {
    title: "How carbon capture networks could help curb climate help curb climate change",
    speaker: "Bas Sudmeijer",
    path: "./assets/videos/air/BasSudmeijer.mp4 ",
    power: "air",
  },
  {
    title: "The emergent patterns of climate change",
    speaker: "Gavin Schmidt",
    path: "./assets/videos/air/GavinSchmidt.mp4 ",
    power: "air",
  },
  {
    title: "Ecology From The Air",
    speaker: "Greg Asner",
    path: "./assets/videos/air/GregAsner.mp4 ",
    power: "air",
  },
  {
    title: "How You Can help save the monarch butterfly and the planet",
    speaker: "Mary Ellen Hannibal",
    path: "./assets/videos/air/MaryEllenHannibal.mp4 ",
    power: "air",
  },
  {
    title: "This is your brain on air pollution",
    speaker: "Maria Neira",
    path: "./assets/videos/air/MariaNeira.mp4 ",
    power: "air",
  },
  {
    title: "Can we solve global warming lessons from how we protected the ozone layer",
    speaker: "Sean Davis",
    path: "./assets/videos/air/SeanDavis.mp4 ",
    power: "air",
  },
  {
    title: "Can we stop climate change by removing co2 from the air",
    speaker: "Tim Kruger",
    path: "./assets/videos/air/TimKruger.mp4 ",
    power: "air",
  },
  {
    title: "For the love of birds",
    speaker: "Washington Wachira",
    path: "./assets/videos/air/WashingtonWachira.mp4 ",
    power: "air",
  },
  {
    title: "How we could change the planet's climate future",
    speaker: "David Wallace-Wells",
    path: "./assets/videos/air/DavidWallaceWells.mp4 ",
    power: "air",
  },
];

const waterVideoArray = [{
  speaker: "Alasdair Harris",
  path: "./assets/videos/water/AlasdairHarris.mp4 ",
  power: "water",
}, {
  title: "A radical plan to end plastic waste",
  speaker: "Andrew Forrest",
  path: "./assets/videos/water/AndrewForrest.mp4 ",
  power: "water",
}, {
  title: "What ocean microbes reveal about the changing climate",
  speaker: "Angelicque White",
  path: "./assets/videos/water/AngelicqueWhite.mp4 ",
  power: "water",
}, {
  title: "The magic of the Amazon: A river that flows invisibly all around us",
  speaker: "Antonio Donato Nobre",
  path: "./assets/videos/water/AntonioDonatoNobre.mp4 ",
  power: "water",
}, {
  title: "A love story for the coral reef crisis",
  speaker: "Ayana Elizabeth Johnson",
  path: "./assets/videos/water/AyanaElizabethJohnson.mp4 ",
  power: "water",
}, {
  title: "Let's turn the high seas into the world's largest nature reserve",
  speaker: "Enric Sala",
  path: "./assets/videos/water/EnricSala.mp4 ",
  power: "water",
}, {
  title: "How we wrecked the ocean",
  speaker: "Jeremy Jackson",
  path: "./assets/videos/water/JeremyJackson.mp4 ",
  power: "water",
}, {
  title: "How human noise affects ocean habitats",
  speaker: "Kate Stafford",
  path: "./assets/videos/water/KateStafford.mp4 ",
  power: "water",
}, {
  title: "What rivers can tell us about the earth's history",
  speaker: "Liz Hajek",
  path: "./assets/videos/water/LizHajek.mp4 ",
  power: "water",
}, {
  title: "The dead zone of the Gulf of Mexico",
  speaker: "Nancy Rabalais",
  path: "./assets/videos/water/NancyRabalais.mp4 ",
  power: "water",
}, {
  title: "How to keep rivers and streams flowing",
  speaker: "Rob Harmon",
  path: "./assets/videos/water/RobHarmon.mp4 ",
  power: "water",
}, {
  title: "Can seaweed help curb global warming?",
  speaker: "Tim Flannery",
  path: "./assets/videos/water/TimFlannery.mp4 ",
  power: "water",
}, {
  title: "How pollution is changing the ocean's chemistry",
  speaker: "Triona McGrath",
  path: "./assets/videos/water/TrionaMcGrath.mp4 ",
  power: "water",
}, ];

AFRAME.registerComponent('cursor-listener-switch-earth-video', {
  init: function () {
    const videoAsset = document.querySelector('#AsmeretAsefawBerhe');
    const earthPlayButton = document.getElementById('videoPlayButton');

    let lastIndex = -1;
    let title = "";
    let speaker = "";

    this.el.addEventListener('click', function (evt) {
      videoAsset.pause();
      videoAsset.currentTime = 0;
      lastIndex = (lastIndex + 1) % earthVideoArray.length;

      if (lastIndex === 8) { // there are 8 speakers for earth
        lastIndex = -1;
      }

      title = earthVideoArray[lastIndex + 1].title;
      speaker = earthVideoArray[lastIndex + 1].speaker;

      let power = earthVideoArray[lastIndex + 1].power;
      changeTitleScreen(lastIndex, power);

      videoAsset.setAttribute('src', earthVideoArray[lastIndex + 1].path);
      videoAsset.load();

      const isVideoPlaying = !!(videoAsset.currentTime > 0 && !videoAsset.paused && !videoAsset.ended && videoAsset.readyState > 2);

      if (!isVideoPlaying) { // if video is playing, 
        earthPlayButton.setAttribute('visible', 'true');
      } else if (isVideoPlaying) {
        videoAsset.play();
      }

    });
  }
});

AFRAME.registerComponent('cursor-listener-play-earth-video', {
  init: function () {
    videoAsset = document.querySelector('#AsmeretAsefawBerhe');
    const earthPlayButton = document.getElementById('earthVideoPlayButton');
    videoAsset.load();

    this.el.addEventListener('click', function (evt) {

      isVideoPlaying1 = !!(videoAsset.currentTime > 0 && !videoAsset.paused && !videoAsset.ended && videoAsset.readyState > 2);

      if (isVideoPlaying1) {
        videoAsset.pause();
        earthPlayButton.setAttribute("visible", true);
      } else {
        videoAsset.play();
        earthPlayButton.setAttribute("visible", false);
        isVideoPlaying1 = true;
        if (animalNoisePlaying) {
          animalAudioSource.pause();
        }
      }
    });
  }
});

AFRAME.registerComponent('cursor-listener-animal-noise', {
  init: function () {
    let currentElement = "";
    this.el.addEventListener('click', function (evt) {
      console.log(' click happened');
      currentElement = evt.srcElement.id;
      if (currentElement === 'blue_whaleModel') {
        animalAudioSource = document.querySelector("#whale1Audio");
      }
      if (currentElement === 'killer_whaleModel') {
        animalAudioSource = document.querySelector("#whale2Audio");
      }
      if (currentElement === 'frog1Model') {
        animalAudioSource = document.querySelector("#frogAudio");
      }
      if (currentElement === 'snakeModel') {
        animalAudioSource = document.querySelector("#snakeAudio");
      }
      if (currentElement === 'earthModel') {
        console.log('earth click');
        animalAudioSource = document.querySelector("#paleBlueDotAudio");
        if (isVideoPlaying1) {
          console.log(' video is playing and should be stopped')
          videoAsset.pause();
        }
      }
      if (!animalNoisePlaying) {
        animalAudioSource.play();
      } else {
        animalAudioSource.pause();
        animalAudioSource.currentTime = 0;
      }
      animalNoisePlaying = !animalNoisePlaying;
    });
  }
});

const changeTitleScreen = (index, power) => {
  if (power === 'earth') {
    if (index === 8) { // there are 8 speakers
      index = 0;
    }
    const earthTitlePlaneOld = document.getElementById('earthTitlePlane'); // find the current earth title plane
    earthTitlePlaneOld.parentNode.removeChild(earthTitlePlaneOld); // delete it

    const earthTitleScreen = document.getElementById('earth-title-Screen');
    console.log(' in changeTitleScreen index is ', index);
    let titleImagePathEarthVideo = '././assets/img/titleScreens/earthTitleScreen' + (index + 2) + '.jpg';
    console.log('titleImagePathEarthVideo', titleImagePathEarthVideo);
    earthTitleScreen.setAttribute("src", titleImagePathEarthVideo);

    const earthTitlePlane = document.createElement('a-plane'); // create plane
    earthTitlePlane.setAttribute("id", "titlePlane");
    earthTitlePlane.setAttribute('height', '1');
    earthTitlePlane.setAttribute('width', '2');
    earthTitlePlane.setAttribute('depth', '.01');
    earthTitlePlane.setAttribute('position', '1.41834 1.12485 -22.21711');
    earthTitlePlane.setAttribute('rotation', '0 0 0');
    earthTitlePlane.setAttribute('scale', '2 2 1');

    earthTitlePlane.setAttribute('material', "shader: flat; src: #earth-title-Screen; side: front")
    sceneEl = document.querySelector("a-scene");
    sceneEl.appendChild(earthTitlePlane);
  }

  if (power === 'air') {
    if (index === 10) { // there are 10 speakers for air
      index = 0;
    }
    const airTitlePlaneOld = document.getElementById('airTitlePlane'); // find the current air title plane
    airTitlePlaneOld.parentNode.removeChild(airTitlePlaneOld); // delete it

    const airTitleScreen = document.getElementById('air-title-Screen');
    let titleImagePathAirVideo = '././assets/img/titleScreens/airTitleScreen' + (index + 2) + '.jpg';
    console.log(' titleImagePathAirVideo', titleImagePathAirVideo)
    airTitleScreen.setAttribute("src", titleImagePathAirVideo);

    const airTitlePlane = document.createElement('a-plane'); // create plane

    airTitlePlane.setAttribute("id", "airTitlePlane");
    airTitlePlane.setAttribute('height', '1');
    airTitlePlane.setAttribute('width', '2');
    airTitlePlane.setAttribute('depth', '.01');
    airTitlePlane.setAttribute('position', '-21.814 2.0289 -1.3383');
    airTitlePlane.setAttribute('rotation', '0 90 0');
    airTitlePlane.setAttribute('scale', '2 2 1');

    airTitlePlane.setAttribute('material', "shader: flat; src: #air-title-Screen; side: front")
    sceneEl = document.querySelector("a-scene");
    sceneEl.appendChild(airTitlePlane);
  }

  if (power === 'water') {
    if (index === 13) { // there are 13 speakers for water
      index = 0;
    }
    const waterTitlePlaneOld = document.getElementById('waterTitlePlane'); // find the current water title plane
    waterTitlePlaneOld.parentNode.removeChild(waterTitlePlaneOld); // delete it

    const waterTitleScreen = document.getElementById('water-title-Screen');
    let titleImagePathWaterVideo = '././assets/img/titleScreens/waterTitleScreen' + (index + 2) + '.jpg';
    waterTitleScreen.setAttribute("src", titleImagePathWaterVideo);

    const waterTitlePlane = document.createElement('a-plane'); // create plane
    waterTitlePlane.setAttribute("id", "waterTitlePlane");
    waterTitlePlane.setAttribute('height', '1');
    waterTitlePlane.setAttribute('width', '2');
    waterTitlePlane.setAttribute('depth', '.01');
    waterTitlePlane.setAttribute('position', '23.56772 2.05979 -0.66655');
    waterTitlePlane.setAttribute('rotation', '0 -90 0');
    waterTitlePlane.setAttribute('scale', '2 2 1');

    waterTitlePlane.setAttribute('material', "shader: flat; src: #water-title-Screen; side: front");
    sceneEl = document.querySelector("a-scene");
    sceneEl.appendChild(waterTitlePlane);
  }

};

AFRAME.registerComponent('determinedevice', {
  init: function () {
    let device = null;
    document.querySelector('a-scene').addEventListener('enter-vr', function () {
      console.log("ENTERED VR");
      device = 'vr_headset';
    });

    if (AFRAME.utils.device.isMobile() === true) {
      device = 'phone';
      const fullScreenMobileUI = document.getElementById("fullScreenMobileUI");
      fullScreenMobileUI.style.display = "block";
      // toggle UI visibility of a full screen image
    }
    if (!AFRAME.utils.device.checkHeadsetConnected()) {
      device = 'desktop';
      // not sure if this is right..
    }
  }
});

AFRAME.registerComponent('loaded', {
  init: function () {
    $('#body').animate({
      opacity: 1,
    }, 10000, function () {});
  }
});