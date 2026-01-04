const passwords = {
  andi: "ANDI123",
  budi: "BUDI456",
  citra: "CITRA789"
};

function openVideo(name) {
  const input = prompt("Masukkan password:");
  if (input === passwords[name]) {
    const video = document.getElementById("videoPlayer");
    video.src = `videos/${name}.mp4`;
    video.style.display = "block";
    video.play();
  } else {
    alert("Password salah!");
  }
}
