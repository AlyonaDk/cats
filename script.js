const catImg = document.getElementById("catImg");
const catInfo = document.getElementById("catInfo");

fetch("https://cataas.com/cat").then((response) => {
  catImg.src = response.url;
});
