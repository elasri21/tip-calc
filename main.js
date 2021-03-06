let inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(input => {
    input.addEventListener('focus', function(){
        this.value = '';
    })
})
let spans = document.querySelectorAll('.percent')
spans.forEach(span => {
    span.addEventListener('click', function(){
        let num = parseInt(this.textContent)
        let bill = parseFloat(document.getElementById('bill-field').value)
        let numOfPeople = parseInt(document.getElementById('num-of-people').value)
        const tip1 = document.querySelector('.tip-1')
        let tipAmount = (num * bill)/(100 * numOfPeople)
        tip1.textContent = `$ ${tipAmount.toFixed(2)}`
        //total 
        const total1 = document.querySelector('.total-1')
        total1.textContent = `$ ${(((tipAmount * numOfPeople) + bill) / numOfPeople).toFixed(2)}`;
    })
})
const custom = document.getElementById('num-of-people');
custom.addEventListener('blur', function(){
    let num = parseFloat(document.querySelector('.custom').value)
    let bill = parseFloat(document.getElementById('bill-field').value)
    let numOfPeople = parseInt(this.value)
    const tip1 = document.querySelector('.tip-1')
    tip1.innerHTML = `$ ${(num/numOfPeople).toFixed(2)}`
    //
    const total1 = document.querySelector('.total-1')
    total1.textContent = ((num + bill) / numOfPeople).toFixed(2);

})

const reset = document.getElementById("reset");
reset.addEventListener("click", function(e){
    e.preventDefault();
    window.location.reload();
})




