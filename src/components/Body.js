import React from "react";

import Card from './Card';

export default function Body() {
  const recalls =[
    {
      question:"O que é JSX ?",
      answer:"Uma extensão de linguagem do JavaScript",
    },{
      question:"O React é __  ",
      answer:"Uma biblioteca JavaScript para construção de interfaces",
    },{
      question:"Componentes devem iniciar com __",
      answer:"Letra maiúscula",
    },{
      question:"Podemos colocar __ dentro do JSX",
      answer:"Expressões",
    },{
      question:"O ReactDOM nos ajuda ",
      answer:"Interagindo com a DOM para colocar componentes React na mesma",
    },{
      question:"Usamos o npm para __",
      answer:"Gerenciar os pacotes necessários e suas dependências",
    },{
      question:"Usamos props para __ ",
      answer:"Passar diferentes informações para componentes ",
    },{
      question:"Usamos estado (state) para __  ",
      answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    }
  ];

  recalls.sort(comparador);//randomiza as posições do array
  //usado para misturar as cartas
  function comparador() { 
    return Math.random() - 0.5; 
  }
  // const states=["closed","closed","closed","closed","closed","closed","closed","closed"];
  // const [state, setState] = React.useState("states");
  //fazer um state pra cada
  
  // const [state2, setState2] = React.useState("closed");
  // const [state3, setState3] = React.useState("closed");
  // const [state4, setState4] = React.useState("closed");
  // const [state5, setState5] = React.useState("closed");


  // function stateQuestion(index){
  //   console.log("changestate "+index);
  //   states[index]="question";
  //   setState(states);
  // }

  // function answerType(answer){
  //   if(answer==="green"){

  //   }
  //   if(answer==="orange"){
      
  //   }
  //   if(answer==="red"){
      
  //   }
  // }

  const [state1, setState1] = React.useState("closed");
 
	return (
    <>
      <div class="app">
        <div class="row"> 
          <img src="./media/logo.png" alt="Logo Zap" />
          <h1>ZapRecall</h1>
        </div>
        {recalls.map((recall,index) => (
          <Card index={index} object={recall} state1={state1} setState1={setState1}/>
        ))}
      </div>
    </>
  );
}