import { Outlet } from 'react-router'
import BitRivals from './BitRivals'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Popup from './Popup'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import Footer from '@/components/home/footer'

const LaunchPad: React.FC = () => {
  return (
    <div className="relative">
      <div className='flex 2xl:h-[calc(100vh-88px)] xl:h-[calc(100vh-84px)] h-[calc(100vh-80px)] justify-between'>
        <LeftDrawer />
        <div className='border-borderColor border-r hidden xl:block w-[20vw] lg:w-[17vw]'>
          <LeftSidebar />
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
  )
}
export default LaunchPad
