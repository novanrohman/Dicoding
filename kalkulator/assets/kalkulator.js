// console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
// alert("Terimakasih");

// var firstName = "Harry";
// console.log(firstName);

// firstName = "Ron";
// console.log(firstName);

// let language = "Indonesia";
// let greeting = "Selamat Pagi!";

// if(language === "Indonesia"){
//     greeting = "Selamat Pagi!";
// }

// console.log(greeting);

// const myArray = ["Harry", "Ron", "Hermione", "Tom"];
 
// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

const firstName = prompt ("Masukkan nama depanmu!");
const lastName = prompt ("Masukkan nama belakangmu!");
const language = prompt ("Bisa berbahasa apa?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language
};

if (user.language === "Inggris") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Jawa"){
    alert("Seneng ketemu koe " + user.name.first + " " + user.name.last + "!");
} else {
    alert("Senang bertemu dengan anda " + user.name.first + " " + user.name.last + "!");
}