import Slider from "../../components/Slider"

function MainContent(){
    return(
        <main className="mainContent">
            <Slider></Slider>
            <div className="action">
                <a href="">Всі акції →</a>
            </div>
            <h2>Рекомендації на основі ваших переглядів</h2>
        </main>
    )
}

export default MainContent;