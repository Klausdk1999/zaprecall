export default function AnswerCard({ index, object, setState}) {
    return(
        <div className="card beige column">
            <h2>{object.answer}</h2>
            <div className="row">
                <div className="red button" onClick={()=>setState(index,"red")}> <h3>Não lembrei</h3> </div>
                <div className="orange button" onClick={()=>setState(index,"orange")}> <h3> Quase não lembrei </h3> </div>
                <div className="green button" onClick={()=>setState(index,"green")}> <h3>Zap!</h3> </div>
            </div>
        </div>
    )
}          