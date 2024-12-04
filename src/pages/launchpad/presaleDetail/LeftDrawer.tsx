import { Drawer } from '@material-tailwind/react'
import { IconArrowRight } from '@tabler/icons-react'
import React, { useState } from 'react'
import LeftSidebar from './LeftSideBar'

const LeftDrawer:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='block xl:hidden'>
      <button onClick={handleOpen} className='fixed left-0 top-[50%] z-[9999] bg-[#0000007a] hover:shadow-defaultShadow transition-all p-5 rounded-r-full'>
        <IconArrowRight />
      </button>
      <Drawer open={open} onClose={handleOpen} className='bg-bgColor' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <LeftSidebar />
      </Drawer>
    </div>
  )
}

export default LeftDrawer