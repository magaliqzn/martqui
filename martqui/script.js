"use strict";

//photo slides
let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

/* SEND BOOKING TO MAIL

//Send book
function book() {
  //prevent multiple submit
  document.getElementById("bookGo").disabled = true;

  //collect form data
  let data = new FormData(document.getElementById("bookForm"));
//I DONT KNOW FROM HERE 
  //send
  fetch("/agender", { method: "POST", body: data })
    .then((res) => {
      if (res.status == 200) {
        location.href = "/Gracias";
      } else {
        alert("Ocurrio un error.");
      }
    })
    .catch((err) => {
      alert("Ocurrio un error.");
    });
  return false;
}
window.onload = () => {
  //min selecatble date is today
  let datepick = document.getElementsByName("date")[0];
  datepick.min = new Date().toISOString().split("T")[0];

  //enable form
  document.getElementById("bookGo").disabled = false;
};

//server.js
//load required module
//pnm i express nodemailer body-parse multer

const express = require("express"),
bodyParser = require("body-parser"),
nodemailer=require("nodemailer"),
multer=require("multer"),
path=require("path");

//setting 
const portHTTP = 5500,
// https://ricardoquinonez.com/mailSet =
{
    port: 25,
    host: "localhost",
    /* auth:{
        user: email/user,
        pass: password
    },
    tls:{rejectUnauthorized: false}
},
mailFrom = "sys@mail.com"
mailAdmin = "ricardo-quinonez@hotmail.com",
mailSubject = "Reservation"
mailTxt = "Booking request received";
//node mailer
const mailtransport = nodemailer.createTransport(mailSet);

//express server
const app= express(),
forms = multer();
app.use(forms.array());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

//express handlers
//home page- booking form
app.get("/", (req, res) => {
    //mail message
    let msg = mailTxt + "<br>";
    for (const [k,v] of Object.entries(req.body)){
        msg += `${k}: ${v}<br>`;
    }

    //send
    mailtransport.sendMail({
        from: mailFrom,
        to:mailAdmin,
        subject: mailSubject,
        html : `<p>${msg}</p>`
    }, (error, info)=> {
        if(error){
            //console.log(error);
            res.sendStatus(500);
        } else{
            //console.log(req.body);
            res.sendStatus(200);
        }
    });
});
//thank you
app.get("/gracias", (req, res) => {
    res.sendFile(path.join(__dirname, "2-thank.you.html"))
});
//start
app.lister(portHTTP);
*/
