import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setValue } from '../redux/searchReducer';
import { useEffect } from 'react';

export default function GoodsList(props) {
    const params = useParams();

    const goods = returnGoods();
    function returnGoods() {
        if (document.location.pathname == "/") {
            return props.goods
        } else if (document.location.pathname.includes('/search/')) {
            return 'search'
        }
        return params.section
    }

    const products = useSelector(state => state.fetchDataReducer.products);

    const firstProduct = (params.page_number - 1) * 8;
    const lastProduct = firstProduct + 8;
    let currentPageProducts = [];

    if (goods != 'search') {
        if (products) {
            if (products[goods].length > 8) {
                currentPageProducts = products[goods].slice(firstProduct, lastProduct);
            } else {
                currentPageProducts = products[goods];
            }
        }
    } else {
        if (products) {
            let searchItem = params.search_item.split('_').join(' ');
            for (let key of Object.keys(products)) {
                products[key].forEach(good => {
                    if ((good.name.toLowerCase().includes(searchItem)) && (key != 'novelties') && (key != 'hot')) {
                        currentPageProducts.push(good);
                    }
                })
            }
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setValue(currentPageProducts));
    })

    return (
        <div className="list">
            {products && currentPageProducts.map((good, i) => (
                <div className="productCard" key={i}>
                    <div className="productPicture">
                        <Link to={"/" + "product" + "/" + good.id}><img src={good.pic} alt="ОШИБКА" /></Link>
                    </div>
                    <div className="productNameBlock">
                        <Link to={"/" + "product" + "/" + good.id}><p className="productName">{good.name}</p></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}