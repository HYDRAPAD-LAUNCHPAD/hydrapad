import { Outlet } from 'react-router'
import BitRivals from './BitRivals'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Popup from './Popup'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import Footer from '@/components/home/footer'
import { Dialog } from '@material-tailwind/react'
import ContactForm from '../../components/common/ContactForm'
import { useState } from 'react'

const LaunchPad: React.FC = () => {
  const [contactVisible, setContactVisible] = useState(false);
  return (
    <>
      <div className="relative">
        <div className='flex 2xl:h-[calc(100vh-88px)] xl:h-[calc(100vh-84px)] h-[calc(100vh-80px)] justify-between'>
          <LeftDrawer setContactVisible={setContactVisible} />
          <div className='border-borderColor border-r hidden xl:block w-[20vw] lg:w-[17vw]'>
            <LeftSidebar contactVisible={contactVisible} setContactVisible={setContactVisible} />
          </div>
          <div className='pt-3 px-4 w-full xl:w-[66vw] border-borderColor border-r'>
            <BitRivals />
            <Outlet />
          </div>
          <div className='hidden xl:block w-[20vw] lg:w-[17vw] px-1'>
            <RightSidebar />
          </div>
          <RightDrawer />
          <Popup />
        </div>
        <Footer />
      </div>
      <Dialog open={contactVisible} handler={setContactVisible} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <ContactForm />
      </Dialog>
    </>
  )
}
export default LaunchPad
