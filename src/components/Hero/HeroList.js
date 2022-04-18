import { useMemo } from "react"

import { HeroCard } from "./HeroCard"
import { getHeroesByPublisher } from "../../Selectors/getHeroesByPublisher"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] ); 

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__bounceInLeft">
            {
                heroes.map((hero, index) => (
                    <HeroCard key={index}
                        {...hero}
                    />
                ))
            }
        </div>
    );
}
