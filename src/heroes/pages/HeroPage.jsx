import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';


const HeroPage = () => {

  //te muestra los parametros que se envia en el link del HeroesRoutes
  //se obtienen los segmentos del url que ingresamos
  const { id } = useParams();

  // se hace filtro a la hora de mostrar el heroe, a la api
  //trae todos los datos de la API
  //se utiliza el Memo cuando se mantenga la informacion sin necesidad de tener que
  //volver a disparar la funcion, osea, cada vez que el id cambie
  //se dispara denuevo la funcion del memo
  const hero = useMemo(() => getHeroById(id), [id]);

  
  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1)
  }

  // Si el heroe no se encuetra, devulvete a /marvel
  if (!hero) {
    return <Navigate to={'/marvel'} />
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={`../src/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className='img-thunmnail' />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter-ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'> <b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'> <b>First appearence:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button
          className='btn btn-outline-primary'
          onClick={onReturn}>Regresar</button>
      </div>

    </div>
  )
}

export default HeroPage