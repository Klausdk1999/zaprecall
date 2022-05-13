import feliz from "./assets/media/party.png";
import triste from "./assets/media/sad.png";

export default function Resultado({erro}) {
    if(erro){
        return(
            <>
                <img src={triste}/>
                <h3>Parabénss</h3>
            </>
        );
    }else{
        return(
            <>
                <img src={feliz}/>
                <h3>Putzz...</h3>
            </>
        );
    }
}