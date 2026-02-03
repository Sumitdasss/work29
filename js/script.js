// frist part start
// login secition start

let divone=document.getElementById("divone")
let inputtwo=document.getElementById("inputtwo")
let innputone=document.getElementById("innputone")
let buttonone=document.getElementById("buttonone")
let errorone=document.getElementById("errorone")
let divtwo=document.getElementById("divtwo")
let showButton=document.getElementById("showButton")

showButton.addEventListener("click",()=>{
    if(innputone.type=="password"){
        innputone.type="text"
        showButton.innerHTML=`<i class="fa-solid fa-eye"></i>`
    }
    else{
                innputone.type="password"
        showButton.innerHTML=`<i class="fa-solid fa-eye-slash"></i>`
    }
})


buttonone.addEventListener("click",()=>{

if(innputone.value==="" || inputtwo.value===""){
errorone.style.display="block"
 
setTimeout(() => {
    errorone.style.display="none"
 }, 1500);
}
else if(innputone.value === "1234" && inputtwo.value === "1234" ){
divone.style.display="none"
divtwo.style.display="block"

}
else{
errorone.style.display="block"
setTimeout(() => {
    errorone.style.display="none"
 }, 1500);
}

})

// login secition start

// divtwo part start


let addMoneydiv=document.getElementById("addMoneydiv")
let buttontwo=document.getElementById("buttontwo")
let latestPaymentdiv=document.getElementById("latestPaymentdiv")
let logOut=document.getElementById("logOut")
logOut.addEventListener("click",()=>{
    divone.style.display="block"
    divtwo.style.display="none"
})

buttontwo.addEventListener("click",()=>{
addMoneydiv.style.display="block"
latestPaymentdiv.style.display="none"
cashOutdiv.style.display="none"
tranferDiv.style.display="none"
bounsDiv.style.display="none"
  payBildiv.style.display="none"
  transactionsDiv.style.display="none"
  tranjectionpart.style.display="none"
     addmoneyPart.style.display="none"
           cashoutPart.style.display="none"
           transferPart.style.display="none"
           paybillPart.style.display="none"
           walletDiv.style.display="none"
           walletDivtwo.style.display="none"
           walletDivthree.style.display="none"
})
// add money dive starrt


let selector=document.getElementById("selector")
let addMoneyinputone=document.getElementById("addMoneyinputone")
let addMoneyinputtwo=document.getElementById("addMoneyinputtwo")
let addMoneyinputthree=document.getElementById("addMoneyinputthree")
let buttonthre=document.getElementById("addbutton")
let errortwo=document.getElementById("errortwo")
let addMoney=document.getElementById("addMoney")
let addmoneyPart=document.getElementById("addmoneyPart")
let amountOne=document.getElementById("amountOne")
let backButtonone=document.getElementById("backButtonone")
let addAmount=document.getElementById("addAmount")


let chekWallet=document.getElementById("chekWallet")
let walletDiv=document.getElementById("walletDiv")
let backButtonfive=document.getElementById("backButtonfive")

 let balanceText = document.getElementById('balanceText');
        let balanceHidden = document.getElementById('balanceHidden');
        let toggleBtn = document.getElementById('toggleBtn');

        toggleBtn.addEventListener('click', () => {
            balanceText.classList.toggle('hidden');
            balanceHidden.classList.toggle('hidden');
        });





backButtonfive.addEventListener("click",()=>{
divtwo.style.display="block"
walletDiv.style.display="none"
latestPaymentdiv.style.display="block"
})


chekWallet.addEventListener("click",()=>{
addmoneyPart.style.display="none"
walletDiv.style.display="block"

latestPaymentdiv.style.display="none"
})
backButtonone.addEventListener("click",()=>{
addmoneyPart.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})

buttonthre.addEventListener("click",()=>{
    if( addMoneyinputone.value==="" || addMoneyinputtwo.value==="" || addMoneyinputthree.value===""){
        errortwo.style.display="block"
        setTimeout(()=>{
            errortwo.style.display="none"
        },1500)
    }
    else{
        errortwo.style.display="none"
        addmoneyPart.style.display="block"
     
        addMoneydiv.style.display="none"
        
        
    }
let value= 45000;

if(addMoneyinputtwo.value !==""){
 
   value + Number(addMoneyinputtwo.value);

addMoney.innerText= value + Number(addMoneyinputtwo.value);
amountOne.innerText= value + Number(addMoneyinputtwo.value);
balanceText.innerText= value + Number(addMoneyinputtwo.value);
}
addAmount.innerText=addMoneyinputtwo.value;

})
// add money dive starrt
// divtwo part start



// cashout div  starrt

let cashOutdiv=document.getElementById("cashOutdiv")
let cashOutinputone=document.getElementById("cashOutinputone")
let cashOutinputtwo=document.getElementById("cashOutinputtwo")
let cashOutinputthree=document.getElementById("cashOutinputthree")
let cashOutbutton=document.getElementById("cashOutbutton")
let errorthree=document.getElementById("errorthree")
let cashWithdraw=document.getElementById("cashWithdraw")

let cashoutPart=document.getElementById("cashoutPart")
let cashoutAmount=document.getElementById("cashoutAmount")
let cashoutAmountone=document.getElementById("cashoutAmountone")
let backButtontwo=document.getElementById("backButtontwo")

let walletDivtwo=document.getElementById("walletDivtwo")
let backButtonSix=document.getElementById("backButtonSix")
let chekWalletone=document.getElementById("chekWalletone")

let balanceTexttwo=document.getElementById("balanceTexttwo")
let balanceHiddentwo=document.getElementById("balanceHiddentwo")
let toggleBtntwolet=document.getElementById("toggleBtntwo") 
let cashouterror=document.getElementById("cashouterror") 
   let value= 45000;



cashOutbutton.addEventListener("click",()=>{
    addMoneydiv.style.display="none"
    latestPaymentdiv.style.display="none"
    cashOutdiv.style.display="block"
    tranferDiv.style.display="none"
    bounsDiv.style.display="none"
      payBildiv.style.display="none"
      transactionsDiv.style.display="none"
      tranjectionpart.style.display="none"
         addmoneyPart.style.display="none"
         addmoneyPart.style.display="none"
         paybillPart.style.display="none"
         walletDiv.style.display="none"
         walletDivtwo.style.display="none"
         walletDivthree.style.display="none"
         cashoutPart.style.display="none"
    
})
toggleBtntwo.addEventListener('click', () => {
            balanceTexttwo.classList.toggle('hidden');
            balanceHiddentwo.classList.toggle('hidden');
        });

backButtonSix.addEventListener("click",()=>{
cashoutPart.style.display="none"
divtwo.style.display="block"
walletDivtwo.style.display="none"

latestPaymentdiv.style.display="block"
})
chekWalletone.addEventListener("click",()=>{
cashoutPart.style.display="none"
walletDivtwo.style.display="block"

latestPaymentdiv.style.display="none"
})
backButtontwo.addEventListener("click",()=>{
cashoutPart.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})
cashWithdraw.addEventListener("click",()=>{

    
    if( cashOutinputone.value==="" || cashOutinputtwo.value==="" || cashOutinputthree.value===""){
        errorthree.style.display="block"
        setTimeout(()=>{
            errorthree.style.display="none"
        },1500)
    }


else if (Number(cashOutinputtwo.value) > 45000) {
    let needAmount= value - Number(cashOutinputtwo.value);
    cashouterror.innerText = `Insufficient balance! you need more ${needAmount}`;
    cashouterror.style.display = "block";
    setTimeout(() => {
        cashouterror.style.display = "none";
    }, 1500);
}


    else{
        errorthree.style.display="none"
        cashOutdiv.style.display="none"
        cashoutPart.style.display="block"
        cashouterror.style.display="none"
  
   
 if(cashOutinputtwo.value !==""){
 
   value - Number(cashOutinputtwo.value);

addMoney.innerText= value - Number(cashOutinputtwo.value);
cashoutAmountone.innerText= value - Number(cashOutinputtwo.value);
balanceTexttwo.innerText= value - Number(cashOutinputtwo.value);
}
cashoutAmount.innerText=cashOutinputtwo.value;  


        
    }
   
})
// cashout div  starrt

// transfer div  starrt
let tranferButton =document.getElementById("tranferButton")
let tranferDiv=document.getElementById("tranferDiv")


tranferButton.addEventListener("click",()=>{
    addMoneydiv.style.display="none"
    latestPaymentdiv.style.display="none"
    cashOutdiv.style.display="none"
    tranferDiv.style.display="block"
    bounsDiv.style.display="none"
 payBildiv.style.display="none"
 transactionsDiv.style.display="none"
 tranjectionpart.style.display="none"
    addmoneyPart.style.display="none"
          cashoutPart.style.display="none"
          paybillPart.style.display="none"
          walletDiv.style.display="none"
          walletDivtwo.style.display="none"
          walletDivthree.style.display="none"
          
})


let  tranferInputone=document.getElementById("tranferInputone")
let tranferInputtwo=document.getElementById("tranferInputtwo")
let tranferInputthree=document.getElementById("tranferInputthree")
let sendButton=document.getElementById("sendButton")
let errorfour=document.getElementById("errorfour")

let transferPart=document.getElementById("transferPart")
let transferAmount=document.getElementById("transferAmount")
let transferAmounttwo=document.getElementById("transferAmounttwo")
let backButtontthree=document.getElementById("backButtontthree")

let walletDivthree=document.getElementById("walletDivthree")
let balanceTextthree=document.getElementById("balanceTextthree")
let balanceHiddenthree=document.getElementById("balanceHiddenthree")
let toggleBtnthree=document.getElementById("toggleBtnthree")
let backButtonSeven=document.getElementById("backButtonSeven")
let chekWallettwo=document.getElementById("chekWallettwo")
let tranferError=document.getElementById("tranferError")

toggleBtnthree.addEventListener("click",()=>{
    balanceTextthree.classList.toggle("hidden")
balanceHiddenthree.classList.toggle("hidden")
})

backButtonSeven.addEventListener("click",()=>{
    walletDivthree.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})
chekWallettwo.addEventListener("click",()=>{
    transferPart.style.display="none"
walletDivthree.style.display="block"

latestPaymentdiv.style.display="none"
})
backButtontthree.addEventListener("click",()=>{
    transferPart.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})

sendButton.addEventListener("click",()=>{

    
    if( tranferInputone.value==="" || tranferInputtwo.value==="" || tranferInputthree.value===""){
        errorfour.style.display="block"
        setTimeout(()=>{
            errorfour.style.display="none"
        },1500)
    }
else if (Number(tranferInputtwo.value) > 45000) {
    let needAmountone= value - Number(tranferInputtwo.value);
    tranferError.innerText = `Insufficient balance! you need more ${needAmountone}`;
    tranferError.style.display = "block";
    setTimeout(() => {
        tranferError.style.display = "none";
    }, 1500);
}


    else{
        errorfour.style.display="none"
transferPart.style.display="block"

tranferDiv.style.display="none"
       
   let value= 45000;

if(tranferInputtwo.value !==""){
 
   value - Number(tranferInputtwo.value);

addMoney.innerText= value - Number(tranferInputtwo.value);
transferAmounttwo.innerText= value - Number(tranferInputtwo.value);
balanceTextthree.innerText= value - Number(tranferInputtwo.value);
}
transferAmount.innerText=tranferInputtwo.value     
        
    }

})
// transfer div  starrt


let bonusbutton=document.getElementById("bonusbutton")
let bounsDiv=document.getElementById("bounsDiv")

bonusbutton.addEventListener("click",()=>{
    addMoneydiv.style.display="none"
    latestPaymentdiv.style.display="none"
    cashOutdiv.style.display="none"
    tranferDiv.style.display="none"
    bounsDiv.style.display="block"
      payBildiv.style.display="none"
      transactionsDiv.style.display="none"
      tranjectionpart.style.display="none"
         addmoneyPart.style.display="none"
               cashoutPart.style.display="none"
               transferPart.style.display="none"
               paybillPart.style.display="none"
               walletDiv.style.display="none"
               walletDivtwo.style.display="none"
               walletDivthree.style.display="none"
    
})
let bonusInputone=document.getElementById("bonusInputone")
let bonusButtontwo=document.getElementById("bonusButtontwo")
let errorfive=document.getElementById("errorfive")
bonusButtontwo.addEventListener("click",()=>{

    
    if( bonusInputone.value==="" ){
        errorfive.style.display="block"
        setTimeout(()=>{
            errorfive.style.display="none"
        },1500)
    }
    else{
        errorfive.style.display="none"

       
        
        
    }
let value= 45000;

if(bonusInputone.value !==""){
 
   value - Number(bonusInputone.value);

addMoney.innerText= value + Number(bonusInputone.value);
}

})

//  paybil div start 
let paybutton=document.getElementById("payBildiv")
let payBillbutton=document.getElementById("payBillbutton")

payBillbutton.addEventListener("click",()=>{


     addMoneydiv.style.display="none"
    latestPaymentdiv.style.display="none"
    cashOutdiv.style.display="none"
    tranferDiv.style.display="none"
    bounsDiv.style.display="none"
   payBildiv.style.display="block"
   transactionsDiv.style.display="none"
   tranjectionpart.style.display="none"
      addmoneyPart.style.display="none"
            cashoutPart.style.display="none"
            transferPart.style.display="none"
            walletDiv.style.display="none"
            walletDivtwo.style.display="none"
            walletDivthree.style.display="none"
  
})

let payInputone=document.getElementById("payInputone")
let payInputtwo=document.getElementById("payInputtwo")
let payInputthree=document.getElementById("payInputthree")
let paybuttonone=document.getElementById("paybuttonone")
let errorsix=document.getElementById("errorsix")

let paybillPart=document.getElementById("paybillPart")
let payAmount=document.getElementById("payAmount")
let payAmounttwo=document.getElementById("payAmounttwo")
let backButtonfour=document.getElementById("backButtonfour") 

let walletDivfour=document.getElementById("walletDivfour")
let balanceTextfour=document.getElementById("balanceTextfour")
let balanceHiddenfour=document.getElementById("balanceHiddenfour")
let toggleBtnfour=document.getElementById("toggleBtnfour")
let backButtonEightlet =document.getElementById("backButtonEight")
let chekWalletthree =document.getElementById("chekWalletthree")
let payerroe =document.getElementById("payerroe")


toggleBtnfour.addEventListener("click",()=>{
    balanceTextfour.classList.toggle("hidden")
balanceHiddenfour.classList.toggle("hidden")
})

chekWalletthree.addEventListener("click",()=>{
    paybillPart.style.display="none"
walletDivfour.style.display="block"
latestPaymentdiv.style.display="none"
})
backButtonEight.addEventListener("click",()=>{
    walletDivfour.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})
backButtonfour.addEventListener("click",()=>{
    paybillPart.style.display="none"
divtwo.style.display="block"
latestPaymentdiv.style.display="block"
})

paybuttonone.addEventListener("click",()=>{

    
    if( payInputone.value==="" || payInputtwo.value==="" || payInputthree.value===""){
        errorsix.style.display="block"
        setTimeout(()=>{
            errorsix.style.display="none"
        },1500)
    }

else if (Number(payInputtwo.value) > 45000) {
    let needAmountthree= value - Number(payInputtwo.value);
    payerroe.innerText = `Insufficient balance! you need more ${needAmountthree}`;
    payerroe.style.display = "block";
    setTimeout(() => {
        payerroe.style.display = "none";
    }, 1500);
}
    
    else{
        errorsix.style.display="none"
        paybillPart.style.display="block"
        
        payBildiv.style.display="none"

       
        let value= 45000;

if(payInputtwo.value !==""){
 
   value - Number(payInputtwo.value);

addMoney.innerText= value - Number(payInputtwo.value);
payAmounttwo.innerText= value - Number(payInputtwo.value);
balanceTextfour.innerText= value - Number(payInputtwo.value);
}
payAmount.innerText=payInputtwo.value;
        
    }

})

//  paybil div start 
//  paybil div start 

let transactionsButton=document.getElementById("transactionsButton")
let transactionsDiv=document.getElementById("transactionsDiv")

transactionsButton.addEventListener("click",()=>{


     addMoneydiv.style.display="none"
    latestPaymentdiv.style.display="none"
    cashOutdiv.style.display="none"
    tranferDiv.style.display="none"
    bounsDiv.style.display="none"
   payBildiv.style.display="none"
   transactionsDiv.style.display="block"
      addmoneyPart.style.display="none"
            cashoutPart.style.display="none"
            transferPart.style.display="none"
            paybillPart.style.display="none"
            walletDiv.style.display="none"
            walletDivtwo.style.display="none"
            walletDivthree.style.display="none"
 
   
  
})

let cardOne=document.getElementById("cardOne")
let cardTwo=document.getElementById("cardTwo")
let cardThree=document.getElementById("cardThree")
let cardFour=document.getElementById("cardFour")
let cardFive=document.getElementById("cardFive")
let cardSix=document.getElementById("cardSix")
let cardSeven=document.getElementById("cardSeven")
let cardEight=document.getElementById("cardEight")
let cardNine=document.getElementById("cardNine")
let cardTen=document.getElementById("cardTen")
let viewButton=document.getElementById("viewButton")

viewButton.addEventListener("click",()=>{

    if(cardOne.classList.contains("hidden")){
cardOne.classList.remove("hidden")
cardTwo.classList.remove("hidden")
cardThree.classList.remove("hidden")
cardFour.classList.remove("hidden")
cardFive.classList.remove("hidden")
cardSix.classList.remove("hidden")
    }
    else{
        cardOne.classList.add("hidden")
        cardTwo.classList.add("hidden")
        cardThree.classList.add("hidden")
        cardFour.classList.add("hidden")
        cardFive.classList.add("hidden")
        cardSix.classList.add("hidden")
    }
    // second methode 
//     cardOne.classList.toggle("hidden")
// cardTwo.classList.toggle("hidden")
// cardThree.classList.toggle("hidden")
// cardFour.classList.toggle("hidden")
// cardFive.classList.toggle("hidden")
// cardSix.classList.toggle("hidden")
    // second methode 



})

let Ditels=document.getElementById("Ditels")
let Delete=document.getElementById("Delete")
let Ditelsone=document.getElementById("Ditelsone")
let Deleteone=document.getElementById("Deleteone")
let DitelsTwo=document.getElementById("DitelsTwo")
let DeleteTwo=document.getElementById("DeleteTwo")
let DitelsThree=document.getElementById("DitelsThree")
let DeleteThree=document.getElementById("DeleteThree")
let DitelsFour=document.getElementById("DitelsFour")
let DeleteFour=document.getElementById("DeleteFour")
let DitelsFive=document.getElementById("DitelsFive")
let DeleteFive=document.getElementById("DeleteFive")
let DitelsSix=document.getElementById("DitelsSix")
let DeleteSix=document.getElementById("DeleteSix")
let DitelsSeven=document.getElementById("DitelsSeven")
let DeleteSeven=document.getElementById("DeleteSeven")
let DitelsEight=document.getElementById("DitelsEight")
let DeleteEight=document.getElementById("DeleteEight")
let DitelsNine=document.getElementById("DitelsNine")
let DeleteNine=document.getElementById("DeleteNine")
let tranjectionpart=document.getElementById("tranjectionpart")
let backButton=document.getElementById("backButton")



Ditels.addEventListener("click",()=>{
    tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
    


})
backButton.addEventListener("click",()=>{
    
    transactionsDiv.style.display="block"
    tranjectionpart.style.display="none"
    


})
Ditelsone.addEventListener("click",()=>{
     tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"

})
DitelsTwo.addEventListener("click",()=>{
  tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsThree.addEventListener("click",()=>{
  tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsFour.addEventListener("click",()=>{
 tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsFive.addEventListener("click",()=>{
 tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsSix.addEventListener("click",()=>{
 tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsSeven.addEventListener("click",()=>{
  tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsEight.addEventListener("click",()=>{
 tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})
DitelsNine.addEventListener("click",()=>{
 tranjectionpart.style.display="block"
    transactionsDiv.style.display="none"
})



 Delete.addEventListener("click",()=>{
   
cardSeven.classList.add("hidden")
})

 Deleteone.addEventListener("click",()=>{
cardEight.classList.add("hidden")
 })
 DeleteTwo.addEventListener("click",()=>{
cardNine.classList.add("hidden")
 })
 DeleteThree.addEventListener("click",()=>{
cardTen.classList.add("hidden")
 })
 DeleteFour.addEventListener("click",()=>{
cardOne.classList.add("hidden")
 })
 DeleteFive.addEventListener("click",()=>{
cardTwo.classList.add("hidden")
 })
 DeleteSix.addEventListener("click",()=>{
cardThree.classList.add("hidden")
 })
 DeleteSeven.addEventListener("click",()=>{
cardFour.classList.add("hidden")
 })
 DeleteEight.addEventListener("click",()=>{
cardFive.classList.add("hidden")
 })
 DeleteNine.addEventListener("click",()=>{
cardSix.classList.add("hidden")
 })


//  paybil div start 

// frist part end
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
// frist part start
