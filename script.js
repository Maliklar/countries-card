const grid = document.getElementById("main-grid");
const request = new XMLHttpRequest();
const loadingScreen = document.getElementById("loading-screen");

request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
        // Removing Loading Screen
        loadingScreen.style.display = "none";

        const result = JSON.parse(request.responseText);
        result.forEach(country => {

            const card = document.createElement("div");
            const cardHeader = document.createElement("div");
            const flag = document.createElement("img");
            const cardBody = document.createElement("div");
            const name = document.createElement("H4");
            const icon = document.createElement("i");
            const language = document.createElement("span");
            const divider = document.createElement("div");


            icon.setAttribute("class", "fa-solid fa-language");
            cardBody.setAttribute("class", "card-body");
            cardHeader.setAttribute("class", "card-header");
            flag.setAttribute("src", country.flags.png);
            flag.setAttribute("alt", country.name + " Flag")
            flag.setAttribute("class", "flag-img");
            card.setAttribute("class", "card");
            divider.setAttribute("class", "divider");
            name.innerText = country.name;
            try {
                language.innerText = country.languages[0].name + " ";
            } catch (e) {
                // For Antartica Only
                language.innerText = "No Language ";
            }

            language.appendChild(icon);
            cardHeader.appendChild(flag);
            cardBody.appendChild(name);
            cardBody.appendChild(divider);
            cardBody.appendChild(language);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            grid.appendChild(card);
        });
    }
}