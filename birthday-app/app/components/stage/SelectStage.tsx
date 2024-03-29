// pages/index.js
"use client";
import React from 'react';
import Stage1 from './stage1';
import Stage2 from './stage2';
import Stage3 from './stage3';
import Stage4 from './stage4';
import Stage5 from './stage5';
import Stage6 from './stage6';
import Stage7 from './stage7';
import Stage8 from './stage8';

const SelectStage = ({ stage_idx=1 ,nextStage=()=>{} , info=0}) => {
  let stage;

  switch (stage_idx) {
    case 1:
      stage = <Stage1 nextStage={nextStage}/>;
      break;
    case 2:
      stage = <Stage2 nextStage={nextStage}/>;
      break;
    case 3:
      stage = <Stage3 nextStage={nextStage}/>;
      break;
    case 4:
        stage = <Stage4 nextStage={nextStage}/>;
        break;
    case 5:
        stage = <Stage5 nextStage={nextStage}/>;
        break;
    case 6:
        stage = <Stage6 nextStage={nextStage}/>;
        break;
    case 7:
        stage = <Stage7 nextStage={nextStage}/>;
        break;
    case 8:
      stage = <Stage8 nextStage={nextStage} info={info}/>;
      break;
      
        
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
