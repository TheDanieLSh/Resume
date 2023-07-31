import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

let searchItem;
let foundItems = [];
let listVisability = false;
let searchLink = window.location.href;

export default function SearchBar() {
    const [inputRerender, doInputRerender] = useState(null);
    const products = useSelector(state => state.fetchDataReducer.products);
    function handleChange(e) {
        searchItem = e.target.value.toLowerCase();
        searchLink = searchItem.split(' ').join('_');
        foundItems = [];
        for (let key of Object.keys(products)) {
            products[key].forEach(good => {
                if ((good.name.toLowerCase().includes(searchItem)) && (searchItem !== "") && (key != 'novelties') && (key != 'hot')) {
                    foundItems.push(good);
                }
            })
        }
        const searchList = document.querySelector('.searchList');
        if ((foundItems.length > 0) && (searchItem.length > 1)) {
            listVisability = true;
            searchList.classList.add('searchList_appearance');
        } else {
            listVisability = false;
            searchList.classList.remove('searchList_appearance');
        }
        doInputRerender(searchItem);
    }

    return (
        <div className="searchBar_block">
            <div className="searchBar">
                <form className="searchForm">
                    <input type="text" onChange={handleChange} className="theInputField" />
                    <Link to={'/' + 'search' + '/' + searchLink + '/' + '1'}>
                        <button type="submit">Поиск</button>
                    </Link>
                </form>
                <div className="searchList_block">
                    <div className="searchList">
                        {listVisability === true && foundItems.map((item, i) => (
                            <Link to={"/" + "product" + "/" + item.id} key={i}>
                                <div className="searchListItemBlock">
                                    <div className="searchListItem">{item.name}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}