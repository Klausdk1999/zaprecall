import React from "react";

import Card from './Card';
import Menu from './Menu';

export default function Body() {
  const recallsbase =[
    {
      question:"O que é JSX ?",
      answer:"Uma extensão de linguagem do JavaScript",
      state:"closed"
    },{
      question:"O React é __  ",
      answer:"Uma biblioteca JavaScript para construção de interfaces",
      state:"closed"
    },{
      question:"Componentes devem iniciar com __",
      answer:"Letra maiúscula",
      state:"closed"
    },{
      question:"Podemos colocar __ dentro do JSX",
      answer:"Expressões",
      state:"closed"
    },{
      question:"O ReactDOM nos ajuda ",
      answer:"Interagindo com a DOM para colocar componentes React na mesma",
      state:"closed"
    },{
      question:"Usamos o npm para __",
      answer:"Gerenciar os pacotes necessários e suas dependências",
      state:"closed"
    },{
      question:"Usamos props para __ ",
      answer:"Passar diferentes informações para componentes ",
      state:"closed"
    },{
      question:"Usamos estado (state) para __  ",
      answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      state:"closed"
    }
  ];

  recallsbase.sort(comparador);//randomiza as posições do array

  //usado para misturar as cartas
  function comparador() { 
    return Math.random() - 0.5; 
  }

  const [recalls, setRecalls] = React.useState(recallsbase);
  const [erro, setErro] = React.useState(false);
  const [arr, setArr] = React.useState([]);

  
  function setState(index,state){
    let newArr=[...arr];
    if(state==='red'){
      newArr.push('close-circle');
      setErro(true);
    }
    if(state==='orange'){
      newArr.push('help-circle');
    }
    if(state==='green'){
      newArr.push('checkmark-circle');
    }
    setArr(newArr); 
    let newRecalls=[...recalls];
    newRecalls[index].state=state;
    setRecalls(newRecalls);
  }

  //pegar states para enviar no menu
	return (
    <>
      <div className="app">
        <div className="header"> 
          <img src="./media/logo.png" alt="Logo Zap" />
          <h1>ZapRecall</h1>
        </div>
        {recalls.map((recall,index) => (
          <Card index={index} object={recall} setState={setState}/>
        ))}
      </div>
      <Menu arr={arr} recalls={recalls} erro={erro}/>
    </>
  );
}