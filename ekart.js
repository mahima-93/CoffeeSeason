// alert("Welcome to Ekart"); 
//  var item=document.getElementsByClassName('name')[i].textContent

var totalamount = 0;
function myCart(elem) {

  var l = Number(elem.id)
  console.log(typeof (l))
  var i = Number(elem.id);

  var str = document.getElementsByClassName('price')[i].textContent;
  var itemname = document.getElementsByClassName('name')[i].textContent;

  if (confirm("\nItem:  " + itemname + "\n\nPrice:  " + str + "\n\nYour Item is added to the Cart. \n\n Continue your Shopping...\n")) {
    var node1 = document.createElement("LI");
    var textnode1 = document.createTextNode(document.getElementsByClassName('name')[i].textContent);
    node1.appendChild(textnode1);
    document.getElementById("cartitem").appendChild(node1);

    var node1 = document.createElement("LI");
    var textnode1 = document.createTextNode(document.getElementsByClassName('price')[i].textContent);
    node1.appendChild(textnode1);
    document.getElementById("cartprice").appendChild(node1);
    // var itemname = document.getElementsByClassName('name')[i].textContent;
    // var str = document.getElementsByClassName('price')[i].textContent;
    var str1 = str.substring(1);
    var str2 = str1.replace(',', '');
    console.log(str2);
    console.log(typeof (str2))
    var itemprice = Number(str2)

    console.log(itemprice);
    console.log(typeof (itemprice))
    totalamount = totalamount + itemprice;
    var amount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalamount);
    console.log(amount);
    document.getElementById("totamt").innerHTML = "₹" + amount;
  }


}


function buyItems() {
  var amountalert = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalamount);
  if (totalamount > 0)
    alert("Thanks for Shopping. \nYour Total Amount to be paid is ₹" + amountalert);
  else
    alert("You have not purchased Anything...");
}

function funcbuy() {
  confirm("Buy Successful, Please wait till the  bill loads.. \nThanks for Shopping");
}



