const logo = document.querySelector('.logo img');
const originalImage = 'imagens/logo2-menora.png';
const hoverImage = 'imagens/logo1-menor2.png';

logo.addEventListener('mouseover', function() {
  this.src = hoverImage;
});

logo.addEventListener('mouseout', function() {
  this.src = originalImage;
});




var isVideoPlaying = false;
var videoContainer = document.getElementById('video-container');
var fullscreenVideo = document.getElementById('fullscreen-video');

document.getElementById('fullscreen-button').addEventListener('click', function() {
  if (!isVideoPlaying) {
    videoContainer.style.display = 'block';
    fullscreenVideo.play();
    isVideoPlaying = true;
  } else {
    fullscreenVideo.pause();
    fullscreenVideo.currentTime = 0;
    videoContainer.style.display = 'none';
    isVideoPlaying = false;
  }
});

var arrowImage = document.getElementById("arrow-image");
  var isUp = false;

  arrowImage.addEventListener("click", function() {
    if (isUp) {
      arrowImage.src = "imagens/flecha.png";
      isUp = false;
    } else {
      arrowImage.src = "imagens/flechaup.png";
      isUp = true;
    }
  });

  // Obtém o elemento do hamburger e do dropdown
const hamburger = document.getElementById('menudrop');
const dropdown = document.querySelector('.dropdownmenu-content');

// Adiciona um evento de clique ao hamburger
hamburger.addEventListener('click', function() {
  // Alterna a exibição do dropdown
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
