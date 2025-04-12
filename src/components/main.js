import React, {useState} from 'react';
import Firebase from '../images/firebase.svg';
import Search from './Search';
import ContactList from './ContactList.js';
function Main(){
    const [searchTerm , setSearchTerm] = useState("");
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center bg-gray-900">
            <div className='w-96 h-[600px] bg-gray-700 flex flex-col border rounded-xl border-solid'>

                {/* Header */}
                <div className='p-2 m-2 border rounded-lg bg-white flex justify-center'>
                    <div className='mr-2'><img src={Firebase} alt="image"/></div>
                    <div className='text-xl font-semibold '>Firebase Contact App</div>
                </div>
                
                <Search toSearch = {searchTerm} setSearch = {setSearchTerm}/>

                <ContactList searchTerm = {searchTerm}/>
            </div>
        </div>
    );
}

export default Main;