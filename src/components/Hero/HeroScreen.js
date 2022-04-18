import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../Selectors/getHeroesById';

const heroImage = require.context('../../assets', true);

export const Hero = () => {

  const {heroid} = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroid), [heroid] ) 
  
  const handleReturn = () =>{
      navigate( -1 )
  }

  if (!hero) {
     return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero

  // const imagePath = `/assets/${id}.jpg`

  return (
    
    <div className='row mt-5' >
      <div className='col-4'>
        <img src={heroImage(`./${id}.jpg`)} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        
        <ul className='list-group ' >
          <li className='list-group-item' > <b>Alter Ego:</b> {alter_ego} </li>
          <li className='list-group-item' > <b>Publisher</b> {publisher} </li>
          <li className='list-group-item' > <b>First Appearance</b> {first_appearance} </li>
        </ul>

        <h5 className='mt-3' >Characters</h5>
          {characters}
          
          <button className='btn btn-outline-info position ms-5 ' onClick={ handleReturn } > 
            Go Back 
          </button>
          
      </div> {/* End of div className Col-8 */}

    </div> /*End of Principal Div  */
  );

}

