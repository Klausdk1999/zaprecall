import React from "react";

import ClosedCard from './ClosedCard';

export default function Body() {
  const recalls =[
    {
      question:"O que é JSX ?",
      answer:"Uma extensão de linguagem do JavaScript"
    },{
      question:"O React é __  ",
      answer:"Uma biblioteca JavaScript para construção de interfaces"
    },{
      question:"Componentes devem iniciar com __",
      answer:"Letra maiúscula"
    },{
      question:"Podemos colocar __ dentro do JSX",
      answer:"Expressões"
    },{
      question:"O ReactDOM nos ajuda ",
      answer:"Interagindo com a DOM para colocar componentes React na mesma"
    },{
      question:"Usamos o npm para __",
      answer:"Gerenciar os pacotes necessários e suas dependências"
    },{
      question:"Usamos props para __ ",
      answer:"Passar diferentes informações para componentes "
    },{
      question:"Usamos estado (state) para __  ",
      answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

  //setTasks([...tasks, task]);
  const [text, setText] = React.useState(recalls);

  recalls.sort(comparador);//randomiza as posições do array
  //usado para misturar as cartas
  function comparador() { 
    return Math.random() - 0.5; 
  }

  function showAnswer(index){
    // return (
    //   <>
    //     {recalls[index] => ((<Card onClick={() => showAnswer(index)} text={recalls.question} answer={recalls.answer} />))}
    //   </>
    // );
  }


  function showQuestion(index){
    return (
      <>
        {recalls.map((recalls) => (<ClosedCard onClick={() => showAnswer(index)} text={recalls.question} answer={recalls.answer} />))}
      </>
    )
  }


	return (
    <>
      <div class="app">
        <div class="row"> 
          <img src="./media/logo.png"/>
          <h1>ZapRecall</h1>
        </div>
        {recalls.map((recalls,index) => (<ClosedCard onClick={() => showQuestion(index)} index={index}/>))}
      </div>
    </>
  );
}