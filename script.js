// https://restcountries.com/v2/all

const grid = document.getElementById("main-grid");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
        const result = JSON.parse(request.responseText);
        result.forEach(country => {

            const card = document.createElement("div");
            const cardHeader = document.createElement("div");
            const flag = document.createElement("img");
            const cardBody = document.createElement("div");
            const name = document.createElement("H4");
            const icon = document.createElement("i");
            const currency = document.createElement("span");

            icon.setAttribute("class", "fa-solid fa-money-bill-wave");
            cardBody.setAttribute("class", "card-body");
            cardHeader.setAttribute("class", "card-header");
            flag.setAttribute("src", country.flags.png);
            card.setAttribute("class", "card");
            name.innerText = country.name;
            try {
                currency.innerText = country.currencies[0].code + " ";
            } catch (e) {
                currency.innerText = "No Currency ";
            }

            currency.appendChild(icon);
            cardHeader.appendChild(flag);
            cardBody.appendChild(name);
            cardBody.appendChild(currency);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            grid.appendChild(card);

        });

    }
}