import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

export default function Pages() {
    const params = useParams();
    const products = useSelector(state => state.fetchDataReducer.products);
    let currentProduct = [];
    const pageLinks = [];
    const searchedProducts = useSelector(state => state.searchReducer.foundItems);

    if (!document.location.pathname.includes('/search/')) {
        currentProduct = products ? products[params.section] : [];
    } else {
        currentProduct = searchedProducts;
    }

    const numberOfPages = () => {
        if ((currentProduct.length / 8) % 1 == 0) {
            return currentProduct.length / 8
        }
        else return Math.floor((currentProduct.length / 8) + 1)
    }

    for (let x = 1; x < (numberOfPages() + 1); x++) {
        pageLinks.push(<Link to={`/${params.section}/${x}`} className="pageLink" key={x}>{x}</Link>);
    }
    
    return (
        <div className="pageList">
            {pageLinks}
        </div>
    )
}