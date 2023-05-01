const buttons = document.querySelectorAll('.buttonIn')
const buttons2 = document.querySelectorAll('.b1')
const input = document.querySelector('input')
const equal = document.querySelector('.eq')
console.log(equal.textContent)
let result = ""  
for(let i of buttons){
    
  i.addEventListener('click',(e)=>{
    if(e.target.textContent=="="){
      input.value = eval(result)
      
    } else if(e.target.textContent=="AC"){
      input.value = ""
      
    }else if(e.target.textContent=="DEL"){
      result = input.value.slice(0,input.value.length-1)
      input.value = result
    } 
    else{
    result =  input.value += e.target.textContent
    }
  })
      
}