import React from "react"

function IconActivity (){

    function HandleIconClick(){

        window.open('https://www.instagram.com/brunoluiis__/')
    }

    return (
        <div className={'instagram'} onClick={() => HandleIconClick()}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1C74D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        </div>
    )
}

export default IconActivity