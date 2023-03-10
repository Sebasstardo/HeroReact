import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ hero }) => {

    const heroImageUrl = `./src/assets/heroes/${hero.id}.jpg`;
    const charactersByHero =  (<p>{hero.characters}</p>);


    return (
        <div className='col'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className='card-img' alt={hero.superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>
                                {hero.superhero}
                            </h5>
                            <p className='card-text'>
                                {hero.alter_ego}
                            </p>
                            {/* si el alter ego = al caracter, entonces muestrame  */}
                            {
                                (hero.alter_ego !== hero.characters) && charactersByHero
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{hero.first_appearance}</small>                                
                            </p>
                            
                            <Link to={`/hero/${hero.id}`}>
                                Mas..
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard