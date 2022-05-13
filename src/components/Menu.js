import React from "react";
import Resultado from "./Resultado";
export default function Menu({recalls}) {
  const [done, setDone] = React.useState(false);
  let erro=false;
  let arr=[];
  for(let i=0;i<recalls.length;i++){
    //console.log(recalls[i]);
    if(recalls[i].state==='red'){
      arr.push("close-circle");
      erro=true;
    }
    if(recalls[i].state==='orange'){
      arr.push('help-circle');
      //vetor[i] => name = ion icon do laranja   dps faz map
    }
    if(recalls[i].state==='green'){
      arr.push('checkmark-circle');
    }
    
  }
  if(arr.length===8){ //verifica resultado
    setDone(true);
  }

	return (
    <>
    {!done ? 
      <>
        <div className="footer">
          <div className="column">
            <h3>{arr.length}/8 concluídos</h3>
            <div className="row"> 
            {arr.map((color,index) => (
            <ion-icon key={index} name={color}></ion-icon>
            ))}
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="footer">
          <Resultado erro={erro}/>
          <div className="column">
            <h3>{arr.length}/8 concluídos</h3>
            <div className="row"> 
              {arr.map((color,index) => (
              <ion-icon key={index} name={color}></ion-icon>
              ))}
            </div>
          </div>
        </div>
      </>
    }
    </>
  );
}