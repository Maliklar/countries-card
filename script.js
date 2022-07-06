// https://restcountries.com/v2/all

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onreadystatechange = () => {
    console.log(request.readyState);
}