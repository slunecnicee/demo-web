const Support = ({image, name})=>{
    return (
        
            <div className="supCards">
                <div className="supwrp">
                    <img src={image}alt="Sam" className="img8" />
                    <p className="p8">{name}</p>
                    <p className="p9">DreamIT Support</p>
                </div>
            </div>
    )
}

export default Support;

export const SupHeader = () =>{
return(
    <div className="cont7">
        <p className="p10">Support Team</p>
        <h2 className="h27">Our  Dedicated  Support  Team </h2>
        <h2 className="h28">For  Help  You  All  Time </h2>
    </div>
)
}