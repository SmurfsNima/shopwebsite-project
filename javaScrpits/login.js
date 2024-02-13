const icon = document.querySelector("#icon");
const input = document.querySelector("#password");

function toggleIcon(){
    const currentClass = icon.classList.contains('fa-eye') ? 'fa-eye' : 'fa-eye-slash';
    if(input.type === "password"){
    icon.classList.remove(currentClass);
    icon.classList.add(currentClass === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye');
    input.type = 'text';
    }
    else{
        icon.classList.remove(currentClass);
        icon.classList.add("fa-eye");
        input.type='password';

    }
    
}
// icon.addEventListener('click' , toggleIcon)