import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    const products = useSelector(state => state.fetchDataReducer.products);
    const { product_id } = useParams();
    const currentProduct = products ? returnCurrentProduct() : [];
    function returnCurrentProduct() {
        let found;
        for (let product of Object.values(products)) {
            found = product.find(good => good.id === product_id);
            if (found) break
        }
        return found
    }

    return (
        <div className="productPage">
            <img src={currentProduct.pic} alt="ОШИБКА" />
            <div className="productInfo">
                <h2 className="nameHeader">{currentProduct.name}</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum obcaecati facere, sequi totam fuga, similique aspernatur inventore officia, vitae laboriosam fugit? Itaque odio soluta vel tenetur dolores aliquid a vero cupiditate pariatur, perspiciatis fugit rem dolorum. Error vitae eveniet nam quis iure nobis nesciunt, expedita dolore id, repellendus iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis laudantium eveniet animi quibusdam cumque, ea suscipit enim repudiandae earum.</p>
            </div>
        </div>
    )
}