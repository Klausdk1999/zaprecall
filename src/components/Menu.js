import React from "react";

export default function Menu({recalls}) {
  
  let arr=[];
  for(let i=0;i<recalls.length;i++){
    //console.log(recalls[i]);
    if(recalls[i].state==='red'){
      arr.push('red');
    }
    if(recalls[i].state==='orange'){
      arr.push('orange');
      //vetor[i] => name = ion icon do laranja   dps faz map
    }
    if(recalls[i].state==='green'){
      arr.push('green');
    }
    
  }

	return (
    <>
      <div className="footer">
        <h3>{arr.length}/8 concluídos</h3>
      </div>
    </>
  );
}