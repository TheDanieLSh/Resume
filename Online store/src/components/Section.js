import { Routes, Route } from 'react-router-dom';
import GoodsList from './GoodsList';
import Pages from './Pages';

export default function Section() {
    return (
        <Routes>
            <Route path='/' element={<>
                <section className="pageContent" data-main="true">
                    <h2>Новинки</h2>
                    <GoodsList goods="novelties" />
                    <h2>Топ продаж</h2>
                    <GoodsList goods="hot" />
                </section>
            </>} />
            <Route path='/:section/:page_number' element={<>
                <section className='pageContent'>
                    <GoodsList />
                    <Pages />
                </section>
            </>} />
            <Route path='/search/:search_item/:page_number' element={<>
                <section className='pageContent'>
                    <GoodsList />
                    <Pages />
                </section>
            </>} />
        </Routes>
    )
}