import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../../Selectors/getHeroesByName';
import {useForm} from '../../Hooks/useForm'
import {HeroCard} from '../Hero/HeroCard'

export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);

  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });
  
  const { searchText } = formValue;
  const heroesFiltered = useMemo( () => getHeroesByName(q), [q]);

  const handleSearch = (e) => [
    e.preventDefault(),
    navigate(`?q=${searchText}`)
  ];
  
  return (
    <div>
      <h1>Find Your Hero </h1>
      <hr />

      <div className="row">
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <div>
              <input 
                type='text'
                placeholder='Search'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={handleInputChange}
              />
            </div>
            
            <button type='submit' className='btn btn-outline-primary mt-3' onClick={handleSearch} >
              Search...
            </button>

          </form>

        </div>{/*Fin de Col 5*/}
        
        <div className='col-7'>

          {
            (q === '')
                ? <div className='alert alert-info text-center'>  <b>Search a Hero </b>  </div>
                : (heroesFiltered.length === 0 ) && <div className='alert alert-danger text-center'> <b> No Results to: {q} </b> </div>
          }


          {
            heroesFiltered.map(hero => {
              return (
              <HeroCard
                key={hero.id}
                {...hero}
               />
            );
          })
          }

        </div>
      </div>
    </div>
  );
}
