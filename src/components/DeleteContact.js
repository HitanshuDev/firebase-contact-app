import React , {useState} from 'react';

function DeleteContact({ DelCont }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
          <h2 className="text-xl font-bold mb-4 text-center">
            Are you sure you want to delete this contact?
          </h2>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => DelCont("yes")}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Yes
            </button>
            <button
              onClick={() => DelCont("no")}
              className="bg-gray-300 text-black px-4 py-2 rounded-xl hover:bg-gray-400"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
  

export default DeleteContact;