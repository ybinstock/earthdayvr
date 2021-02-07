AFRAME.registerComponent('cursor-listener-switch-video', {
  init: function () {
    const videoAsset = document.querySelector('#SuzanneSimard');
    const earthVideoArray = ['./assets/videos/earth/AsmeretAsefawBerhe.mp4', "./assets/videos/earth/GarthLenz.mp4", ' ./assets/videos/earth/JoanneChory.mp4', "./assets/videos/earth/JonathanDrori.mp4", "./assets/videos/earth/KarenLloyd.mp4", "./assets/videos/earth/KristieEbi.mp4", ' ./assets/videos/earth/SamVanAken.mp4',
      './assets/videos/earth/SuzanneSimard.mp4', ' ./assets/videos/earth/TassoAzevedo.mp4', "./assets/videos/earth/ThomasCrowther.mp4", "./assets/videos/earth/TobyKiers.mp4"
    ];
    const waterVideoArray = ['./assets/videos/water/AlasdairHarris.mp4', './assets/videos/water/AndrewForrest.mp4', ' ./assets/videos/water/AngelicqueWhite.mp4', './assets/videos/water/AntonioDonatoNobre.mp4', ' ./assets/videos/water/AyanaElizabethJohnson.mp4', './assets/videos/water/EnricSala.mp4',
      './assets/videos/water/JeremyJackson.mp4', ' ./assets/videos/water/KateStafford.mp4', ' ./assets/videos/water/LizHajek.mp4', ' ./assets/videos/water/NancyRabalais.mp4', './assets/videos/water/RobHarmon.mp4', ' ./assets/videos/water/TimFlannery.mp4', ' ./assets/videos/water/TrionaMcGrath.mp4'
    ];

    const airVideoArray = [' ./assets/videos/air/ArunabhaGhosh.mp4', ' ./assets/videos/air/BasSudmeijer.mp4', ' ./assets/videos/air/DavidWallaceWells.mp4', ' ./assets/videos/air/GavinSchmidt.mp4', ' ./assets/videos/air/GregAsner.mp4', ' ./assets/videos/air/MariaNeira.mp4', './assets/videos/air/MaryEllenHannibal.mp4',
      './assets/videos/air/SeanDavis.mp4', ' ./assets/videos/air/TimKruger.mp4', ' ./assets/videos/air/WashingtonWachira.mp4'
    ];

    var lastIndex = -1;

    this.el.addEventListener('click', function (evt) {
      console.log(' should switch video')
      videoAsset.pause();
      videoAsset.currentTime = 0;
      lastIndex = (lastIndex + 1) % earthVideoArray.length;
      videoAsset.setAttribute('src', earthVideoArray[lastIndex]);
      videoAsset.load();
    });
  }
});

AFRAME.registerComponent('cursor-listener-animal-noise', {
  init: function () {
    let playing = false;
    let audio = document.querySelector("#animalgrowl");
    this.el.addEventListener('click', function () {
      if (!playing) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      playing = !playing;
    });
  }
});