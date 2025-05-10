const  btnBars =  document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');



btnBars.addEventListener('click' , () => myFunc('open'));
btnTimes.addEventListener('click' , () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
        SideNav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
}

//

$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        $("#myCanvasContainer");
    }
})

// Contact section //

const nameInput =  document.querySelector('.name')
const emailInput =  document.querySelector('.email')
const subjectInput =  document.querySelector('.subject')
const textareaInput =  document.querySelector('.textarea')

const contactForm =  document.querySelector('.contact-form')

contactForm.addEventListener("submit" , (evt) => {
    evt.preventDefault()
    validateInput()
})

const validateInput = () => {
    let email = emailInput.value
    let textarea = textareaInput.value

    if (!email && !textarea){
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage('Please fill in the required fields')
    } else if (!email && textarea){
        setError(emailInput.parentElement)
        showMessage("Oops Email can't be empty")
    } else if (!textarea && email){
        setError(textareaInput.parentElement)
            showMessage('Please write a message')
    } else if (email && textarea){
        emailjs.sendForm(
            'service_a3in75a', 
            'template_p8gm75n',
            contactForm,
            'SyXp4Kt1KBZToF36w',
        )
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage('Message sent successfully', "green")
        textareaInput.value = ''
        emailInput.value = ''
        nameInput.value = ''
        subjectInput.value = ''
    }
}
const setError = (input) => {
    if(input.classList.contains("success")){
        input.classList.remove("success")
    }else{
        input.classList.add("error")
    }
}
const setSuccess = (input) => {
    if(input.classList.contains("error")){
        input.classList.remove("error")
    }else{
        input.classList.add("success")
    }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add('message-content')
    divContent.style.backgroundColor =  updateColor
    messageDiv.prepend(divContent)

    messageDiv.style.transform = `translate(${(0, 0)}%)`
    setTimeout(() => {
        divContent.classList.add('hide')
        divContent.addEventListener("transitioned", () => {
            divContent.remove()
        })
    }, 5000)
}