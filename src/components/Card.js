import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";

export default function Card({ index, object, setState}) { 

    let name="close-circle";
    let crasse="colorGreen";

    if(object.state==="closed"){ //pergunta n
        return(
        <>
            <div className="card" onClick={()=>setState(index,"question")}>
                <h2>Pergunta {index+1} </h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
        );
    }

    if(object.state==="question"){//Mostra pergunta
        return(
            <QuestionCard index={index} object={object} setState={setState}/>
        );
    }

    if(object.state==="answer"){//Mostra resposta
        return( 
            <AnswerCard index={index} object={object} setState={setState}/>
        );
    }

    if(object.state==="red"){
        name="close-circle";
        crasse="colorRed";
    }
    
    if(object.state==="orange"){
        name="help-circle";
        crasse="colorOrange";
    }

    if(object.state==="green"){
        name="checkmark-circle";
        crasse="colorGreen";
    }
    //if(object.state==="closed"){ //pergunta n
    return(
        <>
            <div className="card" onClick={()=>setState(index,"question")}>
                <h2 className={crasse} >Pergunta {index+1} </h2>
                <ion-icon key={index} className={crasse} name={name}></ion-icon>
            </div>
        </>
    );
    //}
}
