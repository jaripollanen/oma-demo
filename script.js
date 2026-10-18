const kurssi = "Johdatus sovelluskehitykseen";
let osallistujat = 25;
console.log("Hei maailma! Kurssi:", kurssi);
console.log("Osallistujamäärä:", osallistujat);

let ostoskori = 65;
if (ostoskori >= 50) {
    console.log("Tilaus ylittää 50 €: Toimitus on ilmainen!");
} else {
    console.log("Toimituskulu lisätään: 5.90 €");
}

function laskeVerollinenHinta(verotonHinta) {
    let verollinen = verotonHinta * 1.255;
    return verollinen.toFixed(2);
}
console.log("Hinta verolla:", laskeVerollinenHinta(100));
console.log("Hinta verolla:", laskeVerollinenHinta(40));

const tuotteet = [
    "Läppäri",
    "Hiiri",
    "Näppäimistö",
    "Näyttö"
];
for (let i = 0; i < tuotteet.length; i++) {
    console.log("Tuote varastossa:", tuotteet[i]);
}

const nappi = document.getElementById("nappi");
nappi.addEventListener("click", function () {
    console.log("Nappia painettiin!");
    alert("Hei! Nappi toimii.");
});

const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");

haeNappi.addEventListener("click", () => {
    tulosTeksti.innerText = "Haetaan neuvoa rajapinnasta...";
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            console.log("Rajapinnan vastaus:", data);
            tulosTeksti.innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            tulosTeksti.innerText = "Tiedon hakeminen epäonnistui!";
        });
});

const kaupunki = document.getElementById("kaupunki");
const saaNappi = document.getElementById("saaNappi");
const saaTeksti = document.getElementById("saaTeksti");

saaNappi.addEventListener("click", () => {
    saaTeksti.innerText = "Haetaan säätietoa...";
    fetch("https://api.open-meteo.com/v1/forecast?" + kaupunki.value + "&current_weather=true")
        .then(response => response.json())
        .then(data => {
            console.log("Säärajapinnan vastaus:", data);
            saaTeksti.innerText = "Lämpötila: " + data.current_weather.temperature + " °C";
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            saaTeksti.innerText = "Säätiedon hakeminen epäonnistui!";
        });
});

const kissaNappi = document.getElementById("kissaNappi");
const kissaTeksti = document.getElementById("kissaTeksti");

kissaNappi.addEventListener("click", () => {
    kissaTeksti.innerText = "Haetaan kissafaktaa...";
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            console.log("Kissafakta:", data);
            kissaTeksti.innerText = data.fact;
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            kissaTeksti.innerText = "Kissafaktan hakeminen epäonnistui!";
        });
});
