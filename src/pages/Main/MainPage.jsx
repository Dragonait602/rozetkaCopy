import React from "react"
import Slidebar from './Slidebar'
import MainContent from './MainContent'
function MainPage(){
    return(
        <div className="mainPage">
            <Slidebar />
            <MainContent />
        </div>
    )
}
export default MainPage;