import { useState } from "react";

function Header() {
    const [inputValue, setInputValue] = useState('')
    const handleClearInput = () => {
        setInputValue('')
    }
    const hasText = inputValue.length > 0;

    const [isHovered, setIsHovered] = useState('')
    const handleMouseEnter = () =>{
        setIsHovered(true);
    }
    const handleMouseLeave = () =>{
        setIsHovered(false)
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="header__img">
                            <a href="sale"><img src="saleBaner.png" alt="" /></a>
                        </div>
                        <div className="header__container">
                            <div className="header__wrapper">
                                <div className="header__menu menu">
                                    <div className="menu__icon icon-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="menu__logo">
                                        <img src="/rozetkaLogo.svg" alt="" />
                                    </div>
                                    <div className="menu__catalog">
                                        <button className="menu__catalog__button">
                                            <div className="menu__catalog__boxes">
                                                <div className="menu__catalog__box"></div>
                                                <div className="menu__catalog__box"></div>
                                                <div className="menu__catalog__box"></div>
                                                <div className="menu__catalog__box"></div>
                                            </div>
                                            <div className="menu__catalog__text">
                                                Каталог
                                            </div>
                                        </button>
                                    </div>
                                    <div className="menu__input">
                                        <div className="menu__main">
                                            <img className="menu__icon__serch" src="serchIco.svg" alt="Serch" />
                                            <input className="menu__input__input" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" name="" id="" placeholder="Я шукаю..." />
                                            {hasText && 
                                            <button className="menu__icon__clear" onClick={handleClearInput}>
                                                <img className="menu__icon__cencel" src="cencel.svg" alt="" />
                                            </button>}
                                            <img className="menu__icon__micro" src="microIco.svg" alt="" />
                                            <button className="menu__serchbtn">Знайти</button>
                                        </div>
                                    </div>
                                    <div className="menu__buttons">
                                        <a href="" className="menu__buttons__link"><img src="/recomendation.svg" alt="" /></a>
                                        <a href="" className="menu__buttons__link"><img src="/nontification.svg" alt="" /></a>
                                        <a href="" className="menu__buttons__link"><img src="/compare.svg" alt="" /></a>
                                        <a href="" className="menu__buttons__link"><img src="/buyList.svg" alt="" /></a>
                                    </div>
                                    <nav className="menu__body">
                                        <ul className="menu__list">
                                            <li><a href="" className="menu__link"></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;