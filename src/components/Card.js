
export default function Card({ index, object, state1, setState1}) {
    
    //props.state[props.index]="question";
    
    //props.setState(props.state);
    
    // function stateQuestion(i){
    //     console.log("stateQuestion "+i+"props "+props.index);
    //     props.state[i]="question";
    //     props.setState1(props.state);
    // }
    //rops.setState1("question")

    if(state1==="closed"){ //pergunta x
        return(
        <>
            <div className="card">
                <div className="row" onClick={()=> setState1("question")}>
                    <h2>Pergunta {index+1} </h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>  
            </div>
        </>
        );
    }

    if(state1==="question"){//Mostra pergunta
        return(
        <>
            <div onClick={()=> setState1("answer")} className="card beige">
                <h2>{object.question}</h2>
            </div>
        </>
        );
    }

    if(state1==="answer"){//Mostra resposta
        return( 
        <>
            <div className="card beige" onClick={()=> setState1("closed")}>
                <h2>{object.answer}</h2>
            </div>
        </>
        );
    }

}
