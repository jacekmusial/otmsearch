
function search() {
    const searchValue = document.getElementById('search_field').value;

    let gogo_url = "https://gogoprivate.com/search?#gsc.q=" + searchValue;
    let gogo_search = document.getElementById("GoGo");
    gogo_search.setAttribute("src", gogo_url);

    let google_url = "https://www.google.com/search?q=" + searchValue + "&igu=1";
    let google_search = document.getElementById("Google");
    google_search.setAttribute("src", google_url);

    let bing_url = "https://www.bing.com/search?q=" + searchValue;
    let bing_search = document.getElementById("Bing");
    bing_search.setAttribute("src", bing_url);
}
