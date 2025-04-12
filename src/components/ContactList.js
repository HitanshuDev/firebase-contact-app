import React, { useEffect, useState } from "react";
import { collection, onSnapshot , deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path based on your folder structure
import NoContact from './nocontact.js';
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import DeleteContact from "./DeleteContact.js";
import { MdEdit } from "react-icons/md";
import EditContact from "./EditContact.js";

function ContactList({searchTerm}) {
  const [contacts, setContacts] = useState([]);
  const [delPopUp , setDelPopUp] = useState(false);
  const [selectedId, setSelectedId] = useState(null); 
  const [EditContactModal, setEditContactModal] = useState(false); 
  const [ContactToEdit, setContactToEdit] = useState(null);
  

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    function handleEdit(contact){
        setEditContactModal(true);
        setContactToEdit(contact);
    }

  function handleDelete(response){
    if(response === "yes" && selectedId){
        deleteContact(selectedId);
    }else{
        setDelPopUp(false);
        setSelectedId(null);
    }
  }

    useEffect(() => {
        const contactsRef = collection(db, "contacts");

        // Realtime listener
        const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
        const contactsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setContacts(contactsData);
        });

        // Clean up the listener when component unmounts
        return () => unsubscribe();
    } , []);

    const deleteContact = async(id) => {
        try{
            await deleteDoc(doc(db, "contacts", id));
        }catch (error){
            console.error("Error deleting contacts:", error);
        }finally{
            setDelPopUp(false);
            setSelectedId(null);
        }
    }

   
        return (<>
            <h2 className="text-white px-4 pt-4 text-xl mb-1 font-bold">Saved Contacts</h2>
            <div className="text-white p-4 overflow-auto">
            {contacts.length === 0 ? (
                <NoContact />
            ) : (
                <ul>
                {filteredContacts.map((contact) => (
                    <div className="bg-white rounded-xl border-0 p-1 mb-2">
                        <li key={contact.id} className="">

                            <div className="flex justify-between">
                                <div className=" flex flex-col items-start">
                                    {/* Name */}
                                    <div className="font-semibold text-black px-2 flex">
                                        <div className="p-1"><CiUser /></div>
                                        <div>{contact.name}</div>
                                    </div>  

                                    {/* Phone Number */}
                                    <div className="font-semibold text-black px-2 flex">
                                        <div className="p-1"><IoCallOutline /></div>
                                        <div>{contact.phone}</div>
                                    </div> 
                                </div>

                                {/* Delete Button */}
                                <div className= 'text-black items-end flex flex-col justify-between mr-1'>
                                    <button onClick = {() => {
                                        setSelectedId(contact.id);
                                        setDelPopUp(true);
                                    }} >
                                        <MdDelete />
                                    </button>

                                    <button onClick={() => handleEdit(contact)}><MdEdit /></button>
                                </div>

                                

                            </div>  
                        </li>
                    </div>
                ))}
                </ul>
            )}
            </div>

            {delPopUp && <DeleteContact DelCont={handleDelete} />}
            {EditContactModal && <EditContact 
            setEditContactModal = {() => setEditContactModal(false)} 
            contact = {ContactToEdit}
            />}
            
            </>
        );
    

    
}

export default ContactList;
