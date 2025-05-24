const reviewBtn = document.querySelectorAll('[type="button"]')
const form = document.getElementById("form");
const ratingValue = document.getElementById("rating_value");

const reviewBlock = document.getElementById("review_block");
const responseBlock = document.getElementById("response_block");

let ratingSelected = null;

reviewBtn.forEach(review =>{
    review.addEventListener('click',()=>{
        ratingSelected = review.value ;
        console.log("Rating selected inside", ratingSelected);
    });
});

function handleSubmit(e){
    e.preventDefault();
    ratingValue.innerHTML = `You selected ${ratingSelected} out of 5`;
    reviewBlock.style.display='none';
    responseBlock.style.display='';
}
form.addEventListener('submit',handleSubmit)