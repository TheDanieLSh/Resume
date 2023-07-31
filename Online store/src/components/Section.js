import { Routes, Route } from 'react-router-dom';
import GoodsList from './GoodsList';
import Pages from './Pages';

export default function Section() {
    return (
        <Routes>
            <Route path='/' element={<>
                <div className="pageContent" data-main="true">
                    <p>Новинки</p>
                    <GoodsList goods="novelties" />
                    <p>Топ продаж</p>
                    <GoodsList goods="hot" />
                </div>
            </>} />
            <Route path='/:section/:page_number' element={<>
                <div className='pageContent'>
                    <GoodsList />
                    <Pages />
                </div>
            </>} />
            <Route path='/search/:search_item/:page_number' element={<>
                <div className='pageContent'>
                    <GoodsList />
                    <Pages />
                </div>
            </>} />
        </Routes>
    )
}