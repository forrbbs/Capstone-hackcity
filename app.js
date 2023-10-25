const bar = document.getElementById("bar")
const nav = document.getElementById('navbar')
const close = document.getElementById('close')



if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}



// const productName = document.getElementById('productName');
// const productPrice = document.getElementById('productPrice');
// const productSize = document.getElementById('productSize');
// const productQty = document.getElementById('productQty');
// const productAddBtn = document.getElementById('productAdd');



// this.productTable = document.getElementById('productTable')
// this.productBody = document.getElementById('productBody')



// function addTableVal(){
//     let row = document.createElement('tr')
//     let cell = document.createElement('td')
//     const spanBtn = document.createElement('span')
//     spanBtn.innerHTML = '<i class="fa fa-times-circle"></i>'
//     cell.appendChild(spanBtn)
//     row.appendChild(cell)


//     let cell1 = document.createElement('td')
//     const cellVal = document.createTextNode(productName)
//     cell.appendChild(cellVal)
//     row.appendChild(cell1)


//     let cell2 = document.createElement('td')
//     const cellVal2 = document.createTextNode(productPrice.value)
//     cell.appendChild(cellVal2)
//     row.appendChild(cell2)


//     let cell3 = document.createElement('td')
//     const cellVal3 = document.createTextNode(productSize.value)
//     cell.appendChild(cellVal3)
//     row.appendChild(cell3)


//     let cell4 = document.createElement('td')
//     const cellVal4 = document.createTextNode(productQty.value)
//     cell.appendChild(cellVal4)
//     row.appendChild(cell4)

//     productBody.appendChild(row)
//     productTable.appendChild(productBody)


// }


// productAddBtn.addEventListener('click', ()=>{
//     addTableVal()
    
// })