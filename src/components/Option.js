import React from 'react'
import BodyPart from './BodyPart';

const Option = () => {
    const [fix,setFix]=useState(" ");
  return (
    <div>
      <BodyPart fix={fix} setFix={setFix}></BodyPart>
    </div>
  )
}

export default Option
