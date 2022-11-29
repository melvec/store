import React ,  {useState, useEffect} from 'react';
import {generate} from 'shortid'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MyForm from './MyForm';
import { MyTable } from './MyTable';
import { ActionSettingsRemote } from 'material-ui/svg-icons';
 
// interface MyObj {
//   myString: string;
//   myNumber: number;
// }

const App = ()=> {

  // const initialState =  () => localStorage.getItem('myList');
  // const [count, setCount] = useState(initialState);

  // const addAmount = (amount: any) => {
  //   setCount(count + amount)
  // }
 
  // useEffect(()=>{
  //   localStorage.setItem('myList', JSON.stringify(count))
  // }, [count]

  // )


  const initialState =  () => localStorage.getItem('myList');

  const [rows, setRows] = useState([{
    id: '1',
    firstName: 'Mel',
    lastName: 'V',
    email: 'mskms'
  }]);

useEffect(()=> {
    
    localStorage.setItem("myList", JSON.stringify(rows));
    setRows(rows);
    
  }, []);

  useEffect(()=> {
    const data = localStorage.getItem('myList');
    if (data){
      console.log('yes data')
      setRows(JSON.parse(data));
    }
  }, [])

  

  return (



  <div style={{ textAlign: "center"}}>


<MyForm onSubmit={(data)=>{
    setRows(currentRows => [
      {
        id: generate(),
        ...data
      },
      ...currentRows,
      
    ])
    
  }} />
  <MyTable 
    rows={rows }
    />



  </div> )
  
}

export default App;
