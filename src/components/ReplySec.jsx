import React from 'react';

const ReplySec = ({ icon, iconText, iconTextColor, ...rest }) => {
  return (
    <div {...rest} className="flex flex-row items-center gap-1 cursor-pointer hover:opacity-60">
      <img src={icon} width={12} />
      <span className={`text-${iconTextColor}`}>{iconText}</span>
    </div>
  );
};

export default ReplySec;



