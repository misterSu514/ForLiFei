// pages/index.js
"use client";
import React from 'react';
import Stage1 from './stage1';

const SelectStage = ({ stage_idx=1 ,nextStage=()=>{}}) => {
  let stage;

  switch (stage_idx) {
    case 1:
      stage = <Stage1 nextStage={nextStage}/>;
      break;
    case 2:
      stage = <div>test2</div>;
      break;
    case 3:
      stage = <div>test3</div>;
      break;
    // ... 可以添加更多的 case，視你的需求而定
    default:
      stage = <></>;
  }

  return (
    <>
      {stage}
    </>
  );
};

export default SelectStage;
