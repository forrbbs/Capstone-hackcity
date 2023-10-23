const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productSize = document.getElementById('productSize');
const productQty = document.getElementById('productQty');
const productAddBtn = document.getElementById('productAdd');
const productTable = document.getElementById('productTable')



const addTableVal = ()=>{
    let tbody = document.createElement('tbody')
    let row = document.createElement('tr')
    let cell = document.createElement('td')
    const spanBtn = document.createElement('span')
    spanBtn.innerHTML = '<i class="fa fa-times-circle"></i>'
    cell.appendChild(spanBtn)
    row.appendChild(cell)
    tbody.appendChild(row)

    let row1 = document.createElement('tr')
    let cell1 = document.createElement('td')
    const cellVal = document.createTextNode(productName)
    cell.appendChild(cellVal)
    row.appendChild(cell1)
    tbody.appendChild(row1)

    let row2 = document.createElement('tr')
    let cell2 = document.createElement('td')
    const cellVal2 = document.createTextNode(productPrice.value)
    cell.appendChild(cellVal2)
    row.appendChild(cell2)
    tbody.appendChild(row2)

    let row3 = document.createElement('tr')
    let cell3 = document.createElement('td')
    const cellVal3 = document.createTextNode(productSize.value)
    cell.appendChild(cellVal3)
    row.appendChild(cell3)
    tbody.appendChild(row3)

    let row4 = document.createElement('tr')
    let cell4 = document.createElement('td')
    const cellVal4 = document.createTextNode(productQty.value)
    cell.appendChild(cellVal4)
    row.appendChild(cell4)
    tbody.appendChild(row4)

   console.log(productTable)

}


productAddBtn.addEventListener('click', ()=>{
    addTableVal()
})