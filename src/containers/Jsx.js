

let name  ='shivam';
function CheckEvenOrOddbySWitch(num){
  switch(num%2){
    case 0:
       return <div>even</div>
      break;
      case 1:
       return <div>Odd</div>
  }
      function checkAlphabet(char){
     switch(char){
      case 'a' :return <div>{char} vowel</div>
      break;
      case 'e' :return <div>{char} vowel</div>
      break;
      case 'i' :return <div>{char} vowel</div>
      break;
      case 'o' :return <div>{char} vowel</div>
      break;
      case 'u' :return <div>{char} vowel</div>
      break;
      default :return <div> {char} consonant</div>
      
    }
    

  }
}
function CheckEvenOrOdd(num){
if(num%2==0){
  return <div>Even</div>
}
else{
  return <div>Odd</div>
}
}
let num=4;
//const user =4;
const users=[
{name:'mohan',age:25},
{name:'shivam',age:19}
]
function Jsx() {
  return (
    <div >
      <h2>Hello {name}</h2>
      <div>{
         CheckEvenOrOdd(5)
      }
     {
       num%2===0 
       ? <div>even num</div>
       : <div>Odd</div>
     }
     <h3>if statement</h3>
     
     
     {
      num%2==0&&<div>Even</div>
     }
     {
      num%2>0 && <div>Odd number</div>
     }
     <h3>loop</h3>{
      users.map((items,index)=>{
        return <div key ={index}>{items.name}-{items.age}
        </div>
      })
     }
     <h5>Switch case</h5>
     {
      CheckEvenOrOddbySWitch(num)
     }
     <h5>Vowel consonant</h5>
     
     
      </div>
    </div>
  );
}

export default Jsx;
export function Greet(){
    return <h1>Hello world</h1>
}