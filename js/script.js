function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin=generatePin();
    const pinString=pin + '';

    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin=getPin();

    const inputField=document.getElementById('generate-input-field');
    inputField.value =pin;
})

document.getElementById('button-text-field').addEventListener('click',function(event){
    const number=event.target.innerText;

    const typedNumberField=document.getElementById('types-number');
    const previousTypedNumber=typedNumberField.value;
    console.log(number)

    if(isNaN(number)){
        if(number=== 'C'){
            typedNumberField.value='';
        }
        else if(number==='<'){
            const digits=previousTypedNumber.split('');
            digits.pop('');
            const newDigit=digits.join('');
            typedNumberField.value=newDigit;
        }
    }
    else{
        const newTypedNumber=previousTypedNumber+number;
        typedNumberField.value=newTypedNumber;
    }})

    document.getElementById('calculator').addEventListener('click', function(){
        const displayGenerateNumberField=document.getElementById('generate-input-field');
        const displayGenerateNumber=displayGenerateNumberField.value;

        const currentInputNumberField=document.getElementById('types-number');
        const currentInputNumber=currentInputNumberField.value;

        const successMessage=document.getElementById('success-message');
        const failureMessageField=document.getElementById('failure-message');
        if(displayGenerateNumber===currentInputNumber){
            successMessage.style.display='block';
            failureMessageField.style.display='none';
        }
        else {
            failureMessageField.style.display='block';
            successMessage.style.display='none';
        }
    })