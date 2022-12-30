import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Drink from './Drink'
import MenuHeader from './MenuHeader'
import DrinkHeader from './DrinkHeader'
import Card from './Card'
import SnacksHeader from './SnacksHeader'
import DrinkAnimation from './DrinkAnimation'
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import SnacksAnimation from './SnacksAnimation'

const Home = () => {
    const [active, setActive] = useState(1);
    const [subDrinks, setSubDrinks] = useState(false);
    const [subSnacks, setSubSnacks] = useState(false);
    const [buffets, setBuffets] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [snacks, setSnacks] = useState([]);
    const [drinksCats, setDrinksCats] = useState([]);
    const [snacksCats, setSnacksCats] = useState([]);
    const [menus, setMenus] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedType, setSelectedType] = useState("");
    const [selectedTypeItems, setSelectedTypeItems] = useState([]);
    const [buffetPrice, setBuffetPrice] = useState([]);
    const [freeItem, setFreeItem] = useState([]);
    const [type, setType] = useState("Serve on table");
    const [thumbnail, setThumbnail] = useState(null);

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const d = new Date();
    let day = weekday[d.getDay()];

    const fetchAllManu = async () => {
        let bfs = [];
        let drs = [];
        let sns = [];
        const response = await axios.get(`${API_URL}/items/index`);
        const responseMenu = await axios.get(`${API_URL}/menus/index`);
        setMenus(response.data.data);
        if (response.data) {
            response.data.data.map((d) => {
                if (d.type === "Buffet") {
                    bfs.push(d);
                } else if (d.type === "Drinks") {
                    drs.push(d);
                } else {
                    sns.push(d);
                }
            });

            if (responseMenu.data.data && responseMenu.data.data) {
                let items = responseMenu.data.data.items;
                if (items) {
                    setBuffetPrice(responseMenu.data.data.price);
                    setThumbnail(responseMenu.data.data.thumbnail);
                    setBuffets(responseMenu.data.data.items);
                    setFreeItem(responseMenu.data.data.freeItem);
                    setDrinks(drs);
                    setSnacks(sns);
                    // console.log(drs, "drrrrrrrrrr")

                }
            }
        }

    };

    useEffect(() => {
        const tableNumber = searchParams.get("table");
        tableNumber
            ? localStorage.setItem("table", tableNumber)
            : localStorage.setItem("table", 0);
    }, []);

    const fetchSubCategories = async () => {
        try {
            const response = await axios.get(`${API_URL}/subcategory/index`);

            let drs = [];
            let sns = [];
            response.data.data.map((d) => {
                if (d.category === "Drinks") {
                    drs.push(d);

                } else {
                    sns.push(d);
                }
            });
            setDrinksCats(drs);
            setSnacksCats(sns);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllManu();
        fetchSubCategories();
    }, []);

    const onChangeValue = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    };

    useEffect(() => {
        let selected = [];

        menus.map((menu) => {
            if (menu.subType == selectedType) selected.push(menu);
        });
        setSelectedTypeItems(selected);
    }, [selectedType]);


    const RenderdComponent = () => {
        if (active === 1) {
            return <Menu day={day} />
        }
        else if (active === 2) {
            return <Drink drinks={drinks} />
        }
        else if (active === 3) {
            return <Card category={snacks} SubCategories={snacksCats} />
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
    const RenderdAnimation = () => {
        if (active === 1) {
            return <SnacksAnimation />
        }
        else if (active === 2) {
            return <DrinkAnimation />
        }
        else if (active === 3) {
            return <SnacksAnimation />
        }

    }
    console.log(drinks, "drinkk")


    return (
        <>
            <div>
                <RenderdHeader />
            </div>
            <div className="row">
                <div className='col-md-2 pt-5'>
                    <div class="d-flex p-3 col-md-2" >
                        <div class="nav flex-column ps-1 pe-4 py-4 border border-2 d-sm-flex spacing fs-4 position-fixed" >
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
                    </div>
                </div>
                <div className='col-md-8'>
                    <RenderdComponent />
                </div>
                <div className='col-md-2 pt-5'>
                    <RenderdAnimation />
                </div>
            </div>
        </>
    )
}

export default Home