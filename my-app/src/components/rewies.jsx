const Reviews =({logo,name})=>{
    return(
        <div className="reviewCard">
           <div className="img-Name">
            <img src={logo} alt="powerpuff" className="img12" />
            <p className="name">{name} <br />🌟🌟🌟🌟🌟 </p>
           </div>
           <p className="p16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dignissimos enim maxime facilis nemo et in laboriosam ipsum corrupti quasi.</p>

        </div>
    )
}

export default Reviews;


export const LastPage = ()=>{
    return(
        <div className="lastPage">
            <div className="circle"></div>
            <h2 className="h2last">What are you waiting for?</h2>
            <button className="btn3">Buy The Techno Now</button>
            <p className="plast">© Copyright M.K 2023, Prototype of Original with React functional Components.</p>
            <ul className="ul4">
                <li className="li4">About</li>
                <li className="li4">Servise</li>
                <li className="li4">Support</li>
                <li className="li4">Contact</li>
            </ul>
        </div>
    )
}