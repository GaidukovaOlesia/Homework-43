function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();
    let parse = response => JSON.parse(response);
    xml.addEventListener("readystatechange", () => {
        if(xml.readyState === 4 && xml.status === 200) {
            const response = parse(xml.response).children;
            callback(response);
        }
    })
}
// debugger;
let array = [];
function render(response) {
 // debugger;
    response.forEach((item) => {
        array.push(item);
    })
    console.log(array);
}

requestData("GET", "request/data.json", render);
requestData("GET", "request/data2.json", render);




