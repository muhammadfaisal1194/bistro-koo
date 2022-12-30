import React, { useState } from 'react'
import Menu from './Menu'
import MobileDrink from './MobileDrink'
import MenuHeader from './MenuHeader'
import DrinkHeader from './DrinkHeader'
import SnacksHeader from './SnacksHeader'
import MobileCard from './MobileCard'

const MobileHome = () => {
    const [active, setActive] = useState(1)

    const RenderdComponent = () => {
        if (active === 1) {
            return <Menu />
        }
        else if (active === 2) {
            return <MobileDrink />
        }
        else if (active === 3) {
            return <MobileCard />
        }
    }
    const RenderdHeader = () => {
        if (active === 1) {
            return <MenuHeader />
        }
        else if (active === 2) {
            return <DrinkHeader />
        }
        else if (active === 3) {
            return <SnacksHeader />
        }

    }

    return (
        <>
            <div>
                <RenderdHeader />
            </div>
            <div className="d-flex justify-content-around">
                <div onClick={() => setActive(1)} class={`tab-menu py-2 px-4 ${active === 1 ? 'tab-menu-active' : ''}`}>
                    Menu
                </div>
                <div onClick={() => setActive(2)} class={`tab-menu py-2 px-4 ${active === 2 ? 'tab-menu-active' : ''}`}>
                    Drinks
                </div>
                <div onClick={() => setActive(3)} class={`tab-menu py-2 px-4 ${active === 3 ? 'tab-menu-active' : ''}`}>
                    Snacks
                </div>
            </div>
            <div className='mt-2 d-flex justify-content-center'>
                <RenderdComponent />
            </div>
        </>
    )
}

export default MobileHome