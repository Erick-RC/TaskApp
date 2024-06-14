import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskModal = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = () => {
    console.log('Task saved:', { taskName, description, selectedIcon, status });
    onClose(); 
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Task Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Icon</label>
          <div className="flex items-center mt-2">
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('👨‍💻')}><span role="img" aria-label="Studi">👨‍💻</span></button>
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('💬')}><span role="img" aria-label="Text">💬</span></button>
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('☕')}><span role="img" aria-label="Morning">☕</span></button>
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('🏋️‍♂️')}><span role="img" aria-label="Exercice">🏋️‍♂️</span></button>
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('📚')}><span role="img" aria-label="Note">📚</span></button>
            <button className="bg-[#E3E8EF] px-3 py-2.5 rounded-xl mx-2 hover:bg-[#F5D565]" onClick={() => setSelectedIcon('⏰')}><span role="img" aria-label="Clock">⏰</span></button>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status...</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="wont-do">Won't Do</option>
          </select>
        </div>
        <div className="mt-8 flex justify-end font-Medium text-[14px]">
          <button
            className=" flex justify-center gap-2 mr-2 bg-[#97A3B6] hover:bg-[#8a919c] text-white px-7 py-2 rounded-2xl"
            onClick={onClose}
          >
            Delete
            <img src="./Trash.svg" alt="" />
          </button>
          <button
            className="flex justify-center gap-2  bg-[#3662E3] hover:bg-[#3e5ec0] text-white px-7 py-2 rounded-2xl"
            onClick={handleSave}
          >
            Save
            <img src="./Done_round.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;
