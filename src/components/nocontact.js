import React from 'react'
import ContactImage from '../images/contact.png';

function NoContact(){
    return(
        <div className='flex flex-1 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img className='h-14' src = {ContactImage}></img>
                <div className='text-white font-semibold text-lg ml-2'>No Contact Found</div>
            </div>
        </div>
    );
}

export default NoContact

