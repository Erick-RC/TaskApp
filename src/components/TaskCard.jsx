import React from 'react';
import PropTypes from 'prop-types';

const TaskCard = ({ bgColor, icon, title, description, rightIcon, iconBgColor }) => (
  <div className={`bg-[${bgColor}] py-3 px-4 w-full mt-2 rounded-xl font-semibold text-[20px] flex items-center justify-between hover:brightness-90 cursor-pointer transition`}>
    <span className='flex items-center'>
      <span className='bg-white px-2.5 py-2 rounded-xl mx-4'>{icon}</span>
      <span className='flex flex-col'>
        <span>{title}</span>
        {description && <span className='font-medium text-[14px]'>{description}</span>}
      </span>
    </span>
    {rightIcon && (
      <img className={`bg-[${iconBgColor}] p-3 rounded-xl mx-4`} src={rightIcon} alt="" />
    )}
  </div>
);

TaskCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  rightIcon: PropTypes.string,
  iconBgColor: PropTypes.string,
};

export default TaskCard;
