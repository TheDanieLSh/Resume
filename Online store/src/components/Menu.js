import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Menu() {
    const { section } = useParams();
    let sectionName;
    switch (section) {
        case 'figures':
            sectionName = 'Фигурки';
            break
        case 'dakimakuras':
            sectionName = 'Дакимакуры';
            break
        case 'manga':
            sectionName = 'Манга';
            break
        case 'other':
            sectionName = 'Прочий мерч'
            break
        default:
            sectionName = 'Главная'
            break
    }

    const allSections = [null, 'figures', 'dakimakuras', 'manga', 'other'];
    const currentSections = allSections.filter(sec => sec != section);
    const currentList = currentSections.map(item => {
        function returnRussian() {
            switch (item) {
                case 'figures':
                    return 'Фигурки';
                case 'dakimakuras':
                    return 'Дакимакуры';
                case 'manga':
                    return 'Манга';
                case 'other':
                    return 'Прочий мерч';
                default:
                    return 'Главная';
            }
        }
        return {
            "url": item ? (item + '/1') : '',
            "russian": returnRussian(),
        }
    })

    useEffect(() => {
        document.body.addEventListener('click', e => {
            const mobileMenu = document.querySelector('.mobile_menu');
            if (e.target.closest('.mobile_menu')) {
                mobileMenu.classList.toggle('has-open');
                console.log('pizda');
            } else {
                mobileMenu.classList.remove('has-open')
            }
    
            //СКРЫТИЕ НАЙДЕННЫХ ТОВАРОВ ПОД СЁРЧБАРОМ
            const searchList = document.querySelector('.searchList');
            if (e.target.closest('.theInputField')) {
                if (!searchList.classList.contains('searchList_appearance')) {
                    searchList.classList.add('searchList_appearance')
                }
            } else {
                if (searchList.classList.contains('searchList_appearance')) {
                    searchList.classList.remove('searchList_appearance')
                }
            }
        })
    }, [])

    return (
        <nav className='menu'>
            <div className='desktop_menu'>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/figures/1">Фигурки</Link>
                    </li>
                    <li>
                        <Link to="/dakimakuras/1">Дакимакуры</Link>
                    </li>
                    <li>
                        <Link to="/manga/1">Манга</Link>
                    </li>
                    <li>
                        <Link to="/other/1">Прочий мерч</Link>
                    </li>
                </ul>
            </div>
            <div className='mobile_menu'>
                <div className='currentSection'>{sectionName}</div>
                <ul className='menuList'>
                    {currentList.map(item => <li key={item.url}><Link to={'/' + item.url}>{item.russian}</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}