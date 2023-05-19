const Cardss = ({logo,title}) =>{
    return(
        <div className="cont9">
        <div className="cont8">
            <img src={logo} alt="html" className="img9" />
            <p className="p11">{title}</p>
        </div>
        </div>
    )
}

export default Cardss;

export const CardssHeader =()=>{
    return(
        <div className="cont10">
            <p className="p12">CORE FEATURES</p>
            <h2 className="h210">Constantly update with</h2>
            <h2 className="h211">New Features.</h2>
        </div>
    )
}