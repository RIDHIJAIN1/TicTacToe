let a = prompt("Write a name")
let b = Infinity
let arr = []

 if (a !=null){
  for(let i=0;i<=b;i++){
   let input= (prompt("Write a name"))
   arr.push(input);
    if(input===""){
      break;
    }
  }
  document.write(a + " , " +arr)
 
 }
 else{
    console.log(a + " , " +arr)
  }