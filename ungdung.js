let arrProduct = [
    ["Iphone 12", "20.000.000"],
    ["Iphone 11", "15.000.000"],
    ["SamSung", "14.000.000"],
    ["LG", "10.000.000"],
    ["Xiaomi", "11.000.000"],

];

function showList() {
    let html = '';
    for (let i = 0; i < arrProduct.length; i++) {
        html += "<tr>";
        for (let j = 0; j < arrProduct[i].length; j++) {
            html += "<td>";
            html += arrProduct[i][j];
            html += "</td>";
        }
        html += "<td>";
        html += '<button onclick="removeProduct('+ i +')" id="delete-product">Delete</button>'
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById("list-product").innerHTML = html;
    document.getElementById('total-product').innerHTML = "So san pham " + arrProduct.length ;

    console.log(html)
}
showList();
function removeProduct(index) {
    if (confirm('Are you sure?')) {
        arrProduct.splice(index, deleteCount: 1)
        showList();
    }

}
function add() {
    let name = document.getElementById('name-product').value;
    let price = document.getElementById('price-product').value;
}