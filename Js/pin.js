function getPin(){
    const pin = pinGenaretor();
    const pinString = pin + '';
    if(pinString.length === 4){
      return  pin;
    }
    else{
        // console.log('pin not 4 digit found');
        return getPin();
    }
}

function pinGenaretor (){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin-btn').addEventListener('click', function(){
  const pin = getPin();
  const displayPinElement = document.getElementById('display-pin');
  displayPinElement.value = pin;
  

})
document.getElementById('calculator').addEventListener('click', function(event){
  const typedNumberFlied = document.getElementById('typed-number');
  const previousTypedNumber = typedNumberFlied.value;
  const number = event.target.innerText;
  if(isNaN(number)){
    if(number === 'C'){
      typedNumberFlied.value = '';
    }
    else if(number === '<'){
      const digits = previousTypedNumber.split('');
      digits.pop();
      const remingDigits = digits.join('');
      typedNumberFlied.value = remingDigits;
          
    }
    // console.log(number);
  }
  else{
    
    const newTypeNumber = previousTypedNumber + number;
    typedNumberFlied.value = newTypeNumber;
  }

});
document.getElementById('btn-submit').addEventListener('click', function(){
  const displayPinElement = document.getElementById('display-pin');
  const displayInputFliedNumber = displayPinElement.value;

  const  typedNumberFlied = document.getElementById('typed-number');
  const  typedNumber = typedNumberFlied.value;

  const pinSuccessMessage = document.getElementById('pin-success');
  const pinFileureMessage = document.getElementById('pin-failure');
 
  if(typedNumber === displayInputFliedNumber){
  
   pinSuccessMessage.style.display = 'block';
   pinFileureMessage.style.display = 'none';
  }
  else{
  
   pinFileureMessage.style.display = 'block';
   pinSuccessMessage.style.display = 'none';
    
  }
})





