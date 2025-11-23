import { FaUser } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillPicture } from "react-icons/ai";

import './css/Steps.css'

const Steps = ({currentStep}) => {
  return (
    <div className="steps">
        <div className='step active'>
          <FaUser />
            <p id="internop">Perfil</p>
        </div>
        <div className={`step ${currentStep >=1 ? 'active' : ''}`}>
            <FaFingerprint />
            <p id="internop">Pessoal</p>
        </div>
        <div className={`step ${currentStep >=2 ? 'active' : ''}`}>
            <IoIosMail />
            <p id="internop">Contato</p>
        </div>
        <div className={`step ${currentStep >=3 ? 'active' : ''}`}>
            <AiFillPicture />
            <p id="internop">Foto</p>
        </div>
    </div>
  )
}

export default Steps