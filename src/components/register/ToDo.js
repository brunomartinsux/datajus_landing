import React from 'react'
import IconActivity from '../../Icons/activity'
import IconCheckSquare from '../../Icons/check-square'
import IconUsers from '../../Icons/users'

function ToDo(){

    return(
        <div className='todo-container'>
            <div className='todo-content-container'>
                <div className='todo-item'>
                    <IconActivity/>
                    <div className='todo-item-content'>
                        <h1>PASSO 1</h1>
                        <p>Lorem ipsum dolom sit amet, consectur adisciping elit.</p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconUsers/>
                    <div className='todo-item-content'>
                        <h1>PASSO 2</h1>
                        <p>Lorem ipsum dolom sit amet, consectur adisciping elit.</p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconCheckSquare />
                    <div className='todo-item-content'>
                        <h1>PASSO 3</h1>
                        <p>Lorem ipsum dolom sit amet, consectur adisciping elit.</p>
                    </div>
                </div>
                <div className='todo-item'>
                    <IconActivity/>
                    <div className='todo-item-content'>
                        <h1>PASSO 4</h1>
                        <p>Lorem ipsum dolom sit amet, consectur adisciping elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo