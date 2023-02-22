// 1-Masala

/* const a = +prompt("Tug'ilgan yilingizni kiriting");

if (a > 2023) {
  console.log("siz hali tug'ilmagansiz");
} else if (a >= 2000) {
  console.log("Siz 21 arsda tug'ilgansiz");
} else if (a >= 1900) {
  console.log("siz 20-sarda tugilgansiz");
} else if (a < 0) {
  console.log("manfiy yosh bulmaydi");
} else if (a < 1900) {
  console.log("😳 Siz 220 yoshdan oshgansiz 😳");
}  */

// 2-Masala

/* const x = +prompt("birinchi sonni kiriting");
const y = +prompt("ikkinchi sonni kiriting");
const s = +prompt("yig'indini yozing");

if (x + y === s) {
  console.log("to'g'ri");
} else {
  console.log("not'g'ri");
}  */

// 3-Masala

const s = +prompt("pul miqdoringizni so'mda kiriting");

const x = 500;
const y = 250;
const z = 120;

console.log(
  "Borish-kelish samaliyot bilete " + x + " $ = " + x * 11000 + " so'm"
);
console.log("Mexmonxona to'lovi " + y + " $ = " + y * 11000 + " so'm");
console.log(
  "Muzey va ko'ngil ochar joylar uchun to'lov " +
    z +
    " yevro = " +
    z * 12000 +
    " so'm"
);
console.log("jami xarajatlar " + (x * 11000 + y * 11000 + z * 12000) + " so'm");

if (s >= x * 11000 + y * 11000 + z * 12000) {
  console.log("Oq yo'l Alisher");
} else if (s > 0) {
  console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan");
} else {
  console.log("siz pul miqdorini kiritmadingiz");
}
