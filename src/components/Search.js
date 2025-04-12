import React, {useState} from 'react'
import SearchIcon from "../images/search.png";
import Add from '../images/add.png';
import ContactModal from './AddContact';

function Search({searchTerm, setSearch}){

    const [modalOpen, setModalOpen] = useState(false);
    

    return(
        <div className='flex justify-between'>
            <div className='relative w-full min-w-0 m-2'>
                <input 
                    value = {searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-transparent border border-white w-full h-[40px] pl-3 pr-10 rounded-xl placeholder-white placeholder-opacity-70 text-white' 
                    type="text" 
                    placeholder='Search Contact' 
                />
                <img 
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5' 
                    src={SearchIcon} 
                    alt="searchIcon" 
                />
            </div>

            <button className='w-10 mr-2' onClick={() => setModalOpen(true)}> 
                <img src={Add} /> 
            </button>

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}

export default Search;
