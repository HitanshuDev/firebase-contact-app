import React, {useState} from 'react'
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";

function EditContact({setEditContactModal, contact}){
    const [name, setName] = useState(contact?.name || "");
    const [phone, setPhone] = useState(contact?.phone || "");

    async function handleSubmit(e){
        e.preventDefault();

        if(!contact.id){
            console.error("Contact ID not found");
            return;
        }

        try {
            const contactRef = doc(db, "contacts", contact.id); // "contacts" is your Firestore collection name
            await updateDoc(contactRef, {
              name,
              phone
            });

            console.log("Contact updated successfully");
        } catch (error) {
            console.error("Error updating contact:", error);
        }
        setEditContactModal(false);
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Contact</h2>
        <form onSubmit className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-xl px-3 py-2"
            value = {name}
            onChange = {(e) => setName(e.target.value)} 
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border rounded-xl px-3 py-2"
            value ={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick = {setEditContactModal}
              className="bg-gray-300 text-black px-4 py-2 rounded-xl hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}

export default EditContact;