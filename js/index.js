
function search() {
    console.log('hello!');
    const searchValue = document.getElementById('search_field').value;

    let gogo_search = document.getElementById("GoGo");
    let srcstring = "https://gogoprivate.com/search?#gsc.q=" + searchValue;
    gogo_search.setAttribute("src", srcstring);

}
