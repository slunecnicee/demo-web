const Cards = ({logo,text}) => {
    return(
        <div className="card2">
            <div className="round">
                <img src={logo} alt="windows" className="img6" />

            </div>
            <p className="cardsP">{text}</p>
        </div>
    )
}

export default Cards;


export const Imgs2 = () => {
    return(
        <div className="cont6">
            <img src="https://html.ditsolution.net/techno-preview/assets/images/inner/6.jpg" alt="img" className="img7" />
            <img src="https://html.ditsolution.net/techno-preview/assets/images/inner/7.jpg" alt="img" className="img7" />
        </div>
    )
}