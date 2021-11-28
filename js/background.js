const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];


const chsenImage = images[Math.floor(Math.random() * images.length)];

// const img = document.body.appendChild(chsenImage); // html 요소 추가
document.body.style.backgroundImage = `url("/img/${chsenImage}")`;
// <style>
//     body {
//       background-image: url('img/3.jpg');
//       background-size: cover;
//     }
//   </style>
// const bgImage = document.createElement("img"); // html 태그 추가
// bgImage.src = `img/${chsenImage}`;