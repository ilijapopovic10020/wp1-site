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
}

//Dinamicki ispis navigacije
function menuWrite() {
    let ispis = "";
    let arrayLinkNames = ["Početna", "O Nama", "Destinacije", "Kontakt", "Autor"];
    let arrayLinks = ["index.html", "#aboutUs", "#destination", "#contact", "#author"];

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
    let arrayImageDescription = ["Zlatibor zaleđeno jezero", "Tara koliba samoće", "Stara planina koliba za dvoje", "Šar planina apartmani", "Golija apartmani", "Goč most ljubavi"];
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

function formWrite() {
    // Create a form dynamically
    var form = document.querySelector("#registration")
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for first Name
    var fnInp = document.createElement("input");
    var fnLbl = document.createElement("Label");
    fnLbl.setAttribute("for", "firstName");
    fnLbl.classList.add("form-label");
    var fnTn = document.createTextNode("Ime");
    fnLbl.appendChild(fnTn);
    fnInp.setAttribute("type", "text");
    fnInp.setAttribute("name", "firstName");
    fnInp.setAttribute("placeholder", "Ime");
    fnLbl.classList.add("form-label");

    form.appendChild(fnLbl);
    form.appendChild(fnInp);

    console.log("asd")


    // // Create an input element for last Name
    // var lnInp = document.createElement("input");
    // FN.setAttribute("type", "text");
    // FN.setAttribute("name", "lastName");
    // FN.setAttribute("placeholder", "Prezime");

    // // Create an input element for date of birth
    // var DOB = document.createElement("input");
    // DOB.setAttribute("type", "text");
    // DOB.setAttribute("name", "dob");
    // DOB.setAttribute("placeholder", "DOB");

    // // Create an input element for emailID
    // var EID = document.createElement("input");
    // EID.setAttribute("type", "text");
    // EID.setAttribute("name", "emailID");
    // EID.setAttribute("placeholder", "E-Mail ID");

    // // Create an input element for password
    // var PWD = document.createElement("input");
    // PWD.setAttribute("type", "password");
    // PWD.setAttribute("name", "password");
    // PWD.setAttribute("placeholder", "Password");

    // // Create an input element for retype-password
    // var RPWD = document.createElement("input");
    // RPWD.setAttribute("type", "password");
    // RPWD.setAttribute("name", "reTypePassword");
    // RPWD.setAttribute("placeholder", "ReEnter Password");

    // // create a submit button
    // var s = document.createElement("input");
    // s.setAttribute("type", "submit");
    // s.setAttribute("value", "Submit");

    // // Append the full name input to the form
    // form.appendChild(FN);

    // // Inserting a line break
    // form.appendChild(br.cloneNode());

    // // Append the DOB to the form
    // form.appendChild(DOB);
    // form.appendChild(br.cloneNode());

    // // Append the emailID to the form
    // form.appendChild(EID);
    // form.appendChild(br.cloneNode());

    // // Append the Password to the form
    // form.appendChild(PWD);
    // form.appendChild(br.cloneNode());

    // // Append the ReEnterPassword to the form
    // form.appendChild(RPWD);
    // form.appendChild(br.cloneNode());

    // // Append the submit button to the form
    // form.appendChild(s);

    // document.getElementsByTagName("body")[0]
    //     .appendChild(form);
}

function formValidation() {

}

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