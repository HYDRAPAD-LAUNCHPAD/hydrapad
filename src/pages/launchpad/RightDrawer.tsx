import { Drawer } from '@material-tailwind/react'
import { IconArrowLeft } from '@tabler/icons-react'
import React, { useState } from 'react'
import RightSidebar from './RightSidebar'

const RightDrawer:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='block xl:hidden'>
      <button onClick={handleOpen} className='fixed border-2 border-green-500  right-0 top-[50%] z-[9999] bg-[#0000007a] hover:shadow-defaultShadow transition-all p-3 rounded-l-full'>
        <IconArrowLeft />
      </button>
      <Drawer open={open} placement="right" onClose={handleOpen} className='bg-bgColor'>
        <RightSidebar />
      </Drawer>
    </div>
  )
}

export default RightDrawer