import queryString from 'query-string';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByPublisher, getHeroesByName } from '../helpers';
import { useForm } from '../hooks/useForm';
import  HeroCard  from '../components/HeroCard';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q)

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit=(e)=>{
    e.preventDefault();
    navigate(`?q=${searchText}`)  
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder='Search a Hero'
              className='form-control'
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete='off' />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a Hero
          </div>
          <div className="alert alert-danger">
            There's no results <b>{q}</b>
          </div>
          {
            heroes.map(hero =>(
             <HeroCard key={hero.id} hero={hero}/> 

            ))
          }

        </div>
      </div>


    </>
  )
}

export default SearchPage