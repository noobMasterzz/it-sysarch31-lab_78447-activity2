import './index.css'

function Card({name,email}){
        return(
            <div className = "card">
                <img className="card-image" src="https://staticg.sportskeeda.com/editor/2023/10/a8f7e-16970550293200-1920.jpg?w=840" alt = "profile picture"></img>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{email}</p>
            </div>
        )

}

export default Card