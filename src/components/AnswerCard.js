export default function AnswerCard({ index, object, setState}) {
    return(
        <div className="card beige column" onClick={()=>setState(index,"closed")}>
            <h2>{object.answer}</h2>
            <div className="row">
                <div className="red" onClick={()=>setState(index,"red")}> Não lembrei </div>
                <div className="orange" onClick={()=>setState(index,"orange")}> Quase não lembrei </div>
                <div className="green" onClick={()=>setState(index,"green")}> Zap! </div>
            </div>
        </div>
    )
}          