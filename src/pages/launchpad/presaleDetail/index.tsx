import BitRivals from '@/pages/launchpad/BitRivals'
import LeftSidebar from './LeftSideBar'
import RightSidebar from './RightSideBar'
import Transactions from './Transactions'
import TradingViewWidget from '@/components/trading-view'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import { useParams } from 'react-router'

const ManagePosition: React.FC = () => {
  const {isRegular} = useParams()
  return (
    <>
      <div className='flex 2xl:h-[calc(100vh-85px)] xl:h-[calc(100vh-83px)] sm:h-[calc(100vh-80px)] h-[calc(100vh-63px)] justify-between'>
        <div className='hidden xl:block'>
          <LeftSidebar isRegular={isRegular} />
        </div>
        <LeftDrawer />
        <div className='pt-3 px-4 w-full xl:w-[66vw] border-borderColor border-r '>
          <BitRivals />
          <div className='h-[calc(100vh-177px)] overflow-y-scroll -mx-4'>
            <div className='h-[500px] mb-4 px-4'>
              <TradingViewWidget />
            </div>
            <Transactions />
          </div>
        </div>
        <div className=' hidden xl:block'>
          <RightSidebar isRegular={isRegular} />
        </div>
        <RightDrawer />
      </div>
    </>
  )
}
export default ManagePosition
