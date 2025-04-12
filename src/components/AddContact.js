// components/ContactModal.jsx
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name: name.trim(),
        phone: phone.trim(),
      });
      onClose(); // close modal
      setName('');
      setPhone('');
    } catch (error) {
      console.error("Error adding contact:", error);
      alert("Failed to add contact.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Add Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-xl px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border rounded-xl px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-xl hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
