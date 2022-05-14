export default function Start({setInit}) {
    
    return (
        <>
        <div className="margin-top"> </div>
        <div className="app">
            <img height="160px" src="./media/logo.png" alt="Logo Zap" />
            <h4>ZapRecall</h4>
            <button className="startButton" onClick={() => setInit(true)}> Vamos zapear! </button>
        </div>
        </>
      );

}