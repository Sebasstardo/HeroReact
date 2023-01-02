import React, { useMemo } from 'react'
import { heroes } from '../data/heroes';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroeList = ({publisher}) => {

    const heroes = useMemo (()=> getHeroesByPublisher(publisher), [publisher] );

  return (
    <div className="row rows-col-1 row-cols-md-3 g-3">
        {
            heroes.map(hero =>(

                <HeroCard key={hero.id} hero={hero}/>
               
            ))
        }
    </div>
  )
}

export default HeroeList