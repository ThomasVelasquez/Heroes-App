import React from 'react';
import { Link } from "react-router-dom"
import { heroImage } from '../../Helpers/heroImages';
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    return (
        <div className="col animated__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImage(`./${id}.jpg`)} className='card-img-top' alt={superhero} />
                    </div>{/* End Of Col-4 */}

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {(alter_ego !== characters) && <p className="text-muted"> {characters} </p>}
                            <p className="text-muted">{first_appearance}</p>
                            <Link to={`/hero/${id}`} > Mas... </Link>
                        </div>{/* End Of card Body */}

                    </div>{/* End of Col-8 */}
                </div>

            </div>{/* End Of card Tag */}
        </div>
    )
}
