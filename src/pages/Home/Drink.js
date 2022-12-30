import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'



const Drink = ({drinks}) => {
    console.log(drinks,"drinkkkkkkkk")

    const [active, setActive] = useState(1)

    const RenderComponent = () => {
        if (active === 1) {
            return <Card />
        }
        else if (active === 2) {
            return <Card />
        }
        else if (active === 3) {
            return <Card />
        }
        else if (active === 4) {
            return <Card />
        }
        else if (active === 5) {
            return <Card />
        }
    }

    return (
        <>
            <div className=" d-flex justify-content-center spacing ">
                <div onClick={() => setActive(1)} class={`tab-drink text-center  ${active === 1 ? 'tab-drink-active' : ''}`}>
                    <div>
                        <FontAwesomeIcon icon={faWineBottle} />
                    </div>
                    <div>
                        Soft Drink
                    </div>

                </div>
                <div onClick={() => setActive(2)} class={`tab-drink text-center ${active === 2 ? 'tab-drink-active' : ''}`}>
                    <div>
                        <FontAwesomeIcon icon={faGlassCheers} />
                    </div>
                    <div>Cocktails</div>
                </div>
                <div onClick={() => setActive(3)} class={`tab-drink text-center ${active === 3 ? 'tab-drink-active' : ''}`}>

                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <div>Hot Drinks</div>
                </div>
                <div onClick={() => setActive(4)} class={`tab-drink text-center ${active === 4 ? 'tab-drink-active' : ''}`}>
                    <div>
                        <FontAwesomeIcon icon={faWineGlass} />
                    </div>
                    <div>Alcohols</div>
                </div>
                <div onClick={() => setActive(5)} class={`tab-drink text-center ${active === 5 ? 'tab-drink-active' : ''}`}>
                    <div>
                        <FontAwesomeIcon icon={faWineGlass} />
                    </div>
                    <div>Cold Drinks</div>
                </div>
            </div>
            <div className=" ">
                <RenderComponent />
            </div>
        </>
    )
}

export default Drink