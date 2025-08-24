import React from "react"
import Slidebar from './Slidebar'
import MainContent from './MainContent'
function MainPage(){
    return(
        <div className="mainPage">
            <div className="mainPage__slidebar">
                <Slidebar />
            </div>
            <div className="mainPage__content">
                <MainContent />
            </div>
        </div>
    )
}
export default MainPage;