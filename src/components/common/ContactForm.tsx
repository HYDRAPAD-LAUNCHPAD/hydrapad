import React from 'react'
import LabelText from './LabelText'
import CustomInput from './CustomInput'
import CustomTextarea from './CustomTextarea'
import GradientButton from './GradientButton'

const ContactForm: React.FC = () => {
  return (
    <div className='bg-lightColor p-10 pb-3 w-full h-[85vh] overflow-y-scroll'>
      <h5 className='mb-5'>CONTACT US</h5>
      <div className='mb-5'>
        <LabelText>Your Contact Details</LabelText>
        <CustomInput className='mb-3' placeholder='Name' />
        <CustomInput className='mb-3' placeholder='Telegram Handle' />
        <CustomInput className='mb-3' placeholder='Discord Handle' />
        <CustomInput className='mb-3' placeholder='Twitter Handle (optional)' />
        <CustomInput className='mb-3' placeholder='Email Address' />
      </div>
      <div className='Socials (Optional) mb-5'>
        <LabelText>Social (Optional)</LabelText>
        <CustomInput className='mb-3' placeholder='Website URL' />
        <CustomInput className='mb-3' placeholder='Twitter URL' />
        <CustomInput className='mb-3' placeholder='Telegram Group URL' />
        <CustomInput className='mb-3' placeholder='Discord URL' />
        <CustomInput className='mb-3' placeholder='Whitepaper URL' />
      </div>
      <div className='mb-5'>
        <LabelText>Message Box</LabelText>
        <CustomTextarea placeholder='Write Your Message' />
      </div>
      <div className='w-full flex justify-center'>
        <GradientButton className='px-[30px] rounded-lg'>SUBMIT</GradientButton>
      </div>
    </div>
  )
}

export default ContactForm
