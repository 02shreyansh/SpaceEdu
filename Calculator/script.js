const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".display .input");

const display_output = document.querySelector(".display .output");
let input="";
for (let key of keys){
    const value=key.dataset.key;
    key.addEventListener("click",() => {
        if(value == "clear"){
            input="";
            display_input.innerHTML ="";
            display_output.innerHTML="";

        }else if(value=="del"){
            input=input.slice(0,-1);
            display_input.innerHTML=cleaninput(input);
        }else if(value=="="){
            let result=eval(PrepareInput(input));
            display_output.innerHTML=cleanOutput(result);
        }else if(value =="brackets"){
            if(
                input.indexOf("(")==-1 || 
                input.indexOf("(")!= -1 && 
                input.indexOf(")") != -1 && 
                input.lastIndexOf("(") <input.lastIndexOf(")")){

                input+="(";

            }
            else if(
                input.indexOf("(")!=-1 && 
                input.indexOf(")") ==-1 || 
                input.indexOf("(")!= -1 && 
                input.indexOf(")")!=-1 && 
                input.lastIndexOf("(")> input.lastIndexOf(")")){

                input +=")";
            }

            display_input.innerHTML=cleaninput(input);

        }else{
            if(ValidateInput(value)){
                input+=value;
                display_input.innerHTML=cleaninput(input);
            }
            
        }
    })
}

function cleaninput(input){
    let input_array=input.split("");
    let input_array_length=input_array.length;
    for(let i=0;i< input_array_length;i++){
        if(input_array[i] =="*"){
            input_array[i]=' <span class="operator">x</span> ';
        }else if(input_array[i]=="/"){
            input_array[i]=' <span class="operator">/</span> ';
        }
        else if(input_array[i]=="+"){
            input_array[i]=' <span class="operator">+</span> ';
        }
        else if(input_array[i]=="-"){
            input_array[i]=' <span class="operator">-</span> ';
        }
        else if(input_array[i]=="("){
            input_array[i]='<span class="brackets">(</span>';
        }
        else if(input_array[i]==")"){
            input_array[i]='<span class="brackets">)</span>';
        }
        else if(input_array[i]=="%"){
            input_array[i]='<span class="percent">%</span>';
        }


    }
    return input_array.join("");
}
function cleanOutput(output){
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string= output_string.split(".")[0];

    let output_array=output_string.split("");
    if(output_array.length > 3){
        for(let i=output_array.length - 3 ; i>0 ;i-=3){
            output_array.splice(i,0,",");

        }
    }
    if (decimal){
        output_array.push(".");
        output_array.push(decimal);
    }
    return output_array.join("");
}
function ValidateInput(value){
    let last_input = input.slice(-1);
    let operators = ["+","-","*","/"];

    if(value == "." && last_input == "."){
        return false;
    }
    if(operators.includes(value)){
        if(operators.includes(last_input)){
            return false;
        }
        else{
            return true;
        }
    }
    return true;
}
function  PrepareInput(input){
    let input_array = input.split("");
    for(let i=0 ;i<input_array.length;i++){
        if(input_array[i] =="%"){
            input_array[i]= "/100";
        }
    }
    return input_array.join("");
}
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    updateThemeIcon();
});
