import './index.css'

function Card({picture,name,email, }){
        return(
            <div className = "card">
                <img className="card-image" src={picture} alt = "profile picture"></img>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{email}</p>
            </div>
        )

}

export default Card