import './index.scss';
import React, { useEffect, useState } from 'react';
import MCcube from '../../assets/images/minecraft-cube.gif';
import resume from '../../assets/images/CodePathCertificate.pdf';
import HashLoader from 'react-spinners/HashLoader';

function SkillsCertificates(){
  return (
    <>
    <div className = "container SkillsCertificates-page">

    <img src = {MCcube} className = "mcCube" alt = "minecraft cube"></img>
      <div className = 'Skills'>
        <ol className = 'olu'>Skills:</ol>


      </div>

      <div className = 'Certificates'>
        <ol className = 'oll'>Certificates:</ol>
        <ul className = 'ull'> <a href = {resume}>
          - (CodePath) Certificate of Achievement in iOS Development</a>
        </ul>
      </div>
    </div>

    <div className='hashLoader'>
      <HashLoader />
    </div>
    </>
  );

}
export default SkillsCertificates;