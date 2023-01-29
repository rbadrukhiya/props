import './App.css';
import Props from './props';
// import About from './about';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import About from './about';
import code from './img/c.jpg';
import code1 from './img/d.jpg';
import code2 from './img/e.jpg';
import code3 from './img/f.jpg';
import code4 from './img/c.jpg';




var arr_data = [

  { "name": "abc1", "email": "abc@gmail1.com" , "image": code },
  { "name": "abc2", "email": "abc@gmail2.com", "image": code1},
  { "name": "abc3", "email": "abc@gmail3.com", "image": code2},
  { "name": "abc4", "email": "abc@gmail4.com", "image": code3},
  { "name": "abc5", "email": "abc@gmail5.com", "image": code4},
  { "name": "abc6", "email": "abc@gmail6.com", "image": code1},
  { "name": "abc7", "email": "abc@gmail.7com", "image": code1}
];




function App() {
  return (
    <>

     
        {
          arr_data.map((i) =>{
            return(
              <About img={i.image}></About>
                // <img src={i.image}></img>
            )
          })
        }


    </>



  );
}

export default App;
