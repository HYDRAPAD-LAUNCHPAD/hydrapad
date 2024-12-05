import React from 'react'
import LabelText from './LabelText'
// import CustomInput from './CustomInput'
// import CustomTextarea from './CustomTextarea'
// import GradientButton from './GradientButton'
import { Props } from '@/types'

const MessageBox: React.FC<Props> = ({ setContactVisible }) => {
  return (
    <div className='bg-lightColor p-10 pb-3 w-full overflow-y-scroll'>
      <h5 className='mb-5 text-center'>Success</h5>
        <LabelText className='text-center'>You sent email to us successfully. We will reply you back...</LabelText>
        <div className='w-full flex justify-center mt-5'>
        <button className='px-[30px] py-2 bg-green-500 text-white rounded-lg' onClick={() => setContactVisible(false)}>
          Ok
        </button>
      </div>
    </div>
  )
}

export default MessageBox