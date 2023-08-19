const submit=document.getElementById('SUBMIT');
const buttons=document.querySelectorAll('.rating');
let clickedButtonValue=null;
const cardContainer=document.querySelector('.container');
let newCard=null;
const defaultCard=document.querySelector('.main-card');
defaultCard.classList.add('active');
const submitCard=document.querySelector('.submit-card');

buttons.forEach(button =>{
    button.addEventListener('click',()=>
    {
        const rating=button.getAttribute('value');
        clickedButtonValue=rating;
        resetButtons();
    });
});
function resetButtons()
{
    buttons.forEach(button =>
        {
            button.classList.remove('selected');
        })
}

submit.addEventListener('click',()=>
{
    if(clickedButtonValue !==null)
    {
    
        defaultCard.classList.remove('active');
        submitCard.classList.add('active');
        const result=
        `
        <div id="reading">
         <p id="header-p">You selected ${clickedButtonValue} out of 5</p>
        <h2 id="content-h">
            Thank you!
        </h2>
         <p id="footer-p">
            We appreciate you taking the time to give a rating. If you ever need more support,  don’t hesitate to get in touch!
        </p>
    </div>

        
        `
        updateCard(result);
    }
    else
    {
        alert(`you have not selected anything`);
        return
    }
    // updateCard(newCard);

})
function updateCard(result)
{
    submitCard.innerHTML+=`
    <div class="result">
    ${result}
    </div>`
    ;

}