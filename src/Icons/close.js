import React from "react"

function IconClose (props){

    const {menu, setMenu} = props

    function HandleIconClick(){ 

    menu? setMenu(false):setMenu(true)
        
    }

    return (
        <div className={'instagram'} onClick={() => HandleIconClick()}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </div>
    )
}

export default IconClose