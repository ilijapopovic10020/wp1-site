window.onload = function () {
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',

        skin: 'minimal',
        radius: 0,
        padding: 0,
        border_w: 0,
    });
    galleryWrite();
    menuWrite();
    authorLangsWrite();
    scrollNav();
    formWrite();
    usefullLinks();

    $(document).on("click", "#register", () => formValidation());

    let i = 0;

    setInterval(() => {

        i++;
        i = i > 2 ? 0 : i;

        let slides = document.querySelectorAll('.slide');

        slides.forEach(slide => {
            slide.style.transform = `translateX(-${i * 100}%)`;
        });

    }, 3500);
}
var arrayLinkNames = ["Početna", "O Nama", "Destinacije", "Rezervacija", "Autor"];
var arrayLinks = ["index.html", "#aboutUs", "#destination", "#contact", "#author"];


//Dinamicki ispis navigacije
function menuWrite() {
    let ispis = "";

    let navigation = document.querySelector("#navigation");

    for (let i = 0; i < arrayLinkNames.length; i++) {
        ispis += `<li class="nav-item">
                    <a class="nav-link" href="${arrayLinks[i]}">${arrayLinkNames[i]}</a>
                </li>`
    }
    navigation.innerHTML = ispis;
}


var arrayImageTitle = ["Zlatibor", "Tara", "Stara Planina", "Šar Planina", "Golija", "Goč"];

//Dimanicko ispisivanje slika za galeriju
function galleryWrite() {
    let ispis = "";
    let arrayImages = ["landscape.jpg", "tara.jpg", "staraplanina.jpg", "sarplanina.jpg", "golija.jpg", "goc.jpg"];
    let arrayImageDescription = ["Zlatibor zaleđeno jezero", "Tara pejzaž", "Stara planina apartmani", "Šar planina najviši vrh - Titov vrh", "Golija apartmani", "Goč jezero Selište"];
    let arrayImageAuthor = ["Petar Dašić", "Ivana Jovanović", "Dejan Stević", "Jovana Mandić", "Dušan Marić", "Gojko Milićević"];

    let destination = document.querySelector("#destinationImages")

    for (let i = 0; i < arrayImages.length; i++) {
        ispis += `
        <div class="col-12 col-sm-6 col-lg-4">
            <a class="elem"
                href="assets/images/${arrayImages[i]}"
                title="${arrayImageTitle[i]}"
                data-lcl-txt="${arrayImageDescription[i]}"
                data-lcl-author="${arrayImageAuthor[i]}"
                data-lcl-thumb="assets/images/${arrayImages[i]}">
                <span style="background-image: url(assets/images/${arrayImages[i]});"></span>
            </a>
        </div>`
    }

    destination.innerHTML = ispis;
}

//Dinamicki ispis za autora
function authorLangsWrite() {
    let ispis = "";
    var arrayLangs = ["C#", "C/C++", "HTML", "CSS", "JavaScript", "Java"];
    var langs = document.querySelector("#lang");

    for (let i = 0; i < arrayLangs.length; i++) {
        ispis += `<li>${arrayLangs[i]}</li>`
    }

    langs.innerHTML = ispis;
}

//Dinamicki ispis forme
var form = document.querySelector("#registration");
function formWrite() {

    let ispis = "";

    var arrayAttr = ["firstName", "lastName", "email", "phNumber", "ppl", "room", "day"];
    var arrayCol = [6, 6, 6, 6, 2, 2, 2];
    var arrayLblN = ["Ime", "Prezime", "Email", "Broj Telefona", "Broj osoba", "Broj soba", "Broj dana"];
    var arrayType = ["text", "text", "text", "tel", "number", "number", "number"];
    var arrayPlaceholder = ["Ilija, Ana Marija", "Popović, Milinković Savić", "ilija.popovic01@gmail.com", "+381607871265"];

    var form = document.querySelector("#registration");
    form.setAttribute("method", "");

    for (let i = 0; i < arrayAttr.length; i++) {

        ispis += `<div class="form-group col-md-${arrayCol[i]}">
                    <label for="${arrayAttr[i]}" class="form-label ps-2">${arrayLblN[i]}</label>
                    <input type="${arrayType[i]}" `

        if (i > 2) {
            ispis += `min="1"`
        }

        ispis += ` class="form-control" name="${arrayAttr[i]}" id="${arrayAttr[i]}"`;

        if (i < 4) {
            ispis += `placeholder="${arrayPlaceholder[i]}"`;
        }

        ispis += `/><p class="errorText"><p></div>`;
    }

    form.innerHTML = ispis;
    ispis = "";

    var div = document.createElement("div");
    var fnLbl = document.createElement("label");

    div.classList.add("col-md-6", "form-group");
    fnLbl.setAttribute("for", "location");
    fnLbl.classList.add("form-label", "ps-2");
    var fnTn = document.createTextNode("Lokacija za odmor");
    fnLbl.appendChild(fnTn);

    ispis += `<select id="location" name="location" class="form-select">
        <option value="0"> Izaberite...</option>`;
    for (let i = 0; i < arrayImageTitle.length; i++) {
        ispis += `<option value="${[i + 1]}">${arrayImageTitle[i]}</option>`
    }

    ispis += `</select><p class="errorText"><p>`;

    form.appendChild(div);
    div.appendChild(fnLbl);
    div.innerHTML += ispis;

    ispis = "";

    var div1 = document.createElement("div");
    div1.classList.add("col-md-12", "form-group");
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "register");
    btn.classList.add("btn", "btn-primary");
    var btnTn = document.createTextNode("Potvrdi");
    btn.appendChild(btnTn);
    var tagP = document.createElement("p");
    tagP.className = "errorText";

    form.appendChild(div1);
    div1.appendChild(btn);
    div1.appendChild(tagP)
}

function formValidation() {
    let objFirstName, objLastName, objEmail, objPhNumber, objPpl, objRoom, objDay, objLocation;
    let error = false;

    objFirstName = document.querySelector("#firstName");
    objLastName = document.querySelector("#lastName");
    objEmail = document.querySelector("#email");
    objPhNumber = document.querySelector("#phNumber");
    objPpl = document.querySelector("#ppl");
    objRoom = document.querySelector("#room");
    objDay = document.querySelector("#day");
    objLocation = document.querySelector("#location");
    let location = objLocation.options[objLocation.selectedIndex].value;

    let regImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,14})*$/;
    let regEmail = /^[a-z|A-Z][a-z|A-Z+.|0-9]{2,40}[a-z|A-Z|0-9][@]([a-z]{3,12}[.])*[a-z]{2,4}$/;
    let regPhNumber = /^(\+381|[0])6[0-79][\d]{6,7}$/;

    if (!regImePrezime.test(objFirstName.value)) {
        objFirstName.classList.add("border", "border-3", "border-danger");
        objFirstName.nextElementSibling.innerHTML = "Ime mora početi velikim slovom i mora imati barem tri karaktera!"
        error = true;
    } else {
        objFirstName.classList.remove("border-danger");
        objFirstName.nextElementSibling.innerHTML = "";
    }

    if (!regImePrezime.test(objLastName.value)) {
        objLastName.classList.add("border", "border-3", "border-danger");
        objLastName.nextElementSibling.innerHTML = "Prezime mora početi velikim slovom i mora imati barem tri karaktera!";
        error = true;
    } else {
        objLastName.classList.remove("border-danger");
        objLastName.nextElementSibling.innerHTML = "";
    }

    if (!regEmail.test(objEmail.value)) {
        objEmail.classList.add("border", "border-3", "border-danger");
        objEmail.nextElementSibling.innerHTML = "Email mora biti u formatu primer@mail.domain, u delu 'primer' moze imati slova, brojeve i tačku!";
        error = true;
    } else {
        objEmail.classList.remove("border-danger");
        objEmail.nextElementSibling.innerHTML = "";
    }

    if (!regPhNumber.test(objPhNumber.value)) {
        objPhNumber.classList.add("border", "border-3", "border-danger");
        objPhNumber.nextElementSibling.innerHTML = "Broj telefona mora biti u formatu +381607871265!";
        error = true;
    } else {
        objPhNumber.classList.remove("border-danger");
        objPhNumber.nextElementSibling.innerHTML = "";
    }

    if (!objPpl.value) {
        objPpl.classList.add("border", "border-3", "border-danger");
        objPpl.nextElementSibling.innerHTML = "Polje broj osoba je obavezno!";
        error = true;
    } else {
        objPpl.classList.remove("border-danger");
        objPpl.nextElementSibling.innerHTML = "";
    }

    if (!objRoom.value) {
        objRoom.classList.add("border", "border-3", "border-danger");
        objRoom.nextElementSibling.innerHTML = "Polje broj soba je obavezno!";
        error = true;
    } else {
        objRoom.classList.remove("border-danger");
        objRoom.nextElementSibling.innerHTML = "";
    }

    if (!objDay.value) {
        objDay.classList.add("border", "border-3", "border-danger");
        objDay.nextElementSibling.innerHTML = "Polje broj dana je obavezno!";
        error = true;
    } else {
        objDay.classList.remove("border-danger");
        objDay.nextElementSibling.innerHTML = "";
    }

    if (location == "0") {
        objLocation.classList.add("border", "border-3", "border-danger");
        objLocation.nextElementSibling.innerHTML = "Polje za odabir lokacije je obavizno!";
        error = true;
    } else {
        objLocation.classList.remove("border-danger");
        objLocation.nextElementSibling.innerHTML = "";
    }

    if (!error) {
        form.reset();
    }
}

//Promena boje prilikom skolovanja navigacionog menia
window.onscroll = function () { scrollNav() };

var header = document.querySelector("nav");
var fixed = header.offsetTop;

function scrollNav() {
    if (window.pageYOffset > fixed) {
        header.classList.add("fixed-top");
        header.style.backgroundColor = "rgb(0, 0, 0, 0.75)";
        header.style.transition = "0.3s";
    } else {
        header.classList.remove("fixed-top");
        header.style.backgroundColor = "";
        header.style.transtition = "0.3s";
    }
}