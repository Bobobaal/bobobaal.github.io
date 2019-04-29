/*
OLD FILE, NOT BEING USED

Voegt de juiste class toe aan tr door de titels (1ste td in tr)
te vergelijken die aangeduid zijn met class show
const titles = document.getElementsByClassName("show");
for (const show of titles) {
    switch (show.textContent) {
        case "Arrow":
            show.parentElement.classList.add("success");
            break;
        case "Supergirl":
            show.parentElement.classList.add("danger");
            break;
        case "The Flash":
            show.parentElement.classList.add("warning");
            break;
        case "DC Legends Of Tomorrow":
            show.parentElement.classList.add("info");
            break;
    }
}
*/

//Voegt de juiste class toe aan tr door alle tbodies te gaan
//daar alle child tr's te nemen en de textValue van de eerste
//td te vergelijken, waardoor niet meer afhankelijk van de show class

const tbodyl = document.getElementsByTagName("tbody").length;
const tbodies = document.getElementsByTagName("tbody");
for (let i = 0; i < tbodyl; i++) {
    const trl = tbodies[i].children.length;
    const trs = tbodies[i].children;
    for (let j = 0; j < trl; j++) {
        const show = trs[j].children[0];
        switch (show.textContent) {
            case "Arrow":
                show.parentElement.classList.add("success");
                break;
            case "Supergirl":
                show.parentElement.classList.add("danger");
                break;
            case "The Flash":
                show.parentElement.classList.add("warning");
                break;
            case "DC Legends Of Tomorrow":
                show.parentElement.classList.add("info");
                break;
        }
    }
}