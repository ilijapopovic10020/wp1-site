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
    
}

function formValidation() {

}