import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';

export const DefaultBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-xl flex flex-col items-center gap-4 mt-8'>
        <div className='w-full flex items-center justify-start mb-4'>
          <img src="./Logo.svg" alt="logo" className='mr-2' />
          <div className='flex flex-col'>
            <span className='font-Regular text-[40px]'>My Task Board</span>
            <span className='font-Regular text-[16px]'>Tasks to keep organised</span>
          </div>
          <img src="./Edit_duotone.svg" alt="edit" className='ml-2' />
        </div>
        <TaskCard
          bgColor="#F5D565"
          icon="⏰"
          title="Task in Progress"
          rightIcon="./Time_atack_duotone.svg"
          iconBgColor="#E9A23B"
        />
        <TaskCard
          bgColor="#A0ECB1"
          icon="🏋️‍♂️"
          title="Task Completed"
          rightIcon="./Done_round_duotone.svg"
          iconBgColor="#32D657"
        />
        <TaskCard
          bgColor="#F7D4D3"
          icon="☕"
          title="Task Won’t Do"
          rightIcon="./close_ring_duotone.svg"
          iconBgColor="#DD524C"
        />
        <TaskCard
          bgColor="#E3E8EF"
          icon="📚"
          title="Task To Do"
          description="Work on a Challenge on devChallenges.io, learn TypeScript."
        />
        <div className='bg-[#F5E8D5] py-4 px-4 w-full mt-2 rounded-xl flex items-center font-semibold text-[20px] hover:bg-[#eacca1] cursor-pointer transition'
          onClick={openModal}
        >
          <img className='bg-[#E9A23B] p-3 rounded-xl mx-4' src="./Add_round_duotone.svg" alt="Add" />
          <span>Add new task</span>
        </div>
        <TaskModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};
