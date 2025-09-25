// function catchfish(event) {
//   let fish = document.getElementById("fish");
//   console.log([fish]);

//   let arr = event.target.classList;
//   //   let str = event.target.className;
//   if (arr.length == 1) {
//     arr.add("top", "left");
//   } else {
//     if (arr.contains("top") && arr.contains("left")) {
//       arr.remove("left");
//     } else if (arr.contains("top") && arr.contains("right")) {
//       arr.remove("top");
//       console.log(arr);
//     } else if (arr.contains("top")) {
//       arr.add("right");
//     } else if (arr.contains("right") && arr.contains("bottom")) {
//       arr.remove("right");
//     } else if (arr.contains("right")) {
//       arr.add("bottom");
//     } else if (arr.contains("left") && arr.contains("bottom")) {
//       arr.remove("bottom");
//     } else if (arr.contains("bottom")) {
//       arr.add("left");
//     } else {
//       arr.remove("left");
//     }
//   }
// }

// function catchfish(event) {
//   let f = document.getElementById("fish");
//   let str = f.className.replace("fish", "").trim();
//   let arr = f.classList;

//   switch (str) {
//     case "top left":
//       arr.remove("left");
//       //str = f.className;
//       break;
//     case "top":
//       arr.add("right");
//       //str = f.className;
//       break;
//     case "top right":
//       arr.remove("top");
//       //str = f.className;
//       break;
//     case "right":
//       arr.add("bottom");
//       //str = f.className;
//       break;
//     case "right bottom":
//       arr.remove("right");
//       //str = f.className;
//       break;
//     case "bottom":
//       arr.add("left");
//       //str = f.className;
//       break;
//     case "bottom left":
//       arr.remove("bottom");
//       //str = f.className;
//       break;
//     case "left":
//       arr.remove("left");
//       //str = f.className;
//       break;
//     default:
//       arr.add("top", "left");
//       //str = f.className;
//       break;
//   }
// }
function catchfish(event) {
  let f = document.getElementById("fish");
  let t = document.getElementById("taunt");
  let str = f.className;
  let arr = f.classList;

  let rd = Math.round(Math.random(10) * 10);
  console.log(rd);
  t.innerText = "";
  if ((rd == 2 || rd == 8) && str !== "") {
    taunt(rd, t);
  }

  switch (str) {
    case "fish top left":
      arr.remove("left");
      //str = f.className;
      break;
    case "fish top":
      arr.add("right");
      //str = f.className;
      break;
    case "fish top right":
      arr.remove("top");
      //str = f.className;
      break;
    case "fish right":
      arr.add("bottom");
      //str = f.className;
      break;
    case "fish right bottom":
      arr.remove("right");
      //str = f.className;
      break;
    case "fish bottom":
      arr.add("left");
      //str = f.className;
      break;
    case "fish bottom left":
      arr.remove("bottom");
      //str = f.className;
      break;
    case "fish left":
      arr.remove("left");
      //str = f.className;
      break;
    default:
      arr.add("top", "left");
      //str = f.className;
      break;
  }
}

function taunt(rd, t) {
  if (rd == 2) {
    t.innerText = "LOSER!!";
  } else {
    t.innerText = "GO HOME!!";
  }
}
