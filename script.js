document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.querySelector(".add form input");
    const addBtn = document.querySelector(".fa-check");
    const plusBtn = document.querySelector(".add .btn i");
    const form = document.querySelector(".add form")
    const emails = document.querySelector(".emails");

    let eField = document.getElementById("email_field");
    let eError = document.getElementById("email_error");
    
    plusBtn.addEventListener("click", ()=> {
        form.classList.toggle('active');
        plusBtn.classList.toggle('active');
    });

    addBtn.addEventListener("click", () => {
        // validateEmail()
            eError.classList.add("active");

        if(!eField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            eError.innerHTML = "Please enter a valid email";
            eError.classList.add("active");
            return false;
        }   
        eError.classList.remove("active");
        addItem();
        return true;
     
});
    
    function addItem(){
        console.log("ok");
        if(inputBox.value === ''){
            alert("Name item to add");
        } else {
            let div = document.createElement("div");
            div.innerHTML = `
            <p>${inputBox.value}</p>
            <i class="fa-solid fa-ellipsis"></i>
            `;
            div.classList.add('item');
            emails.appendChild(div);
            inputBox.value = '';
        }
    }

});



