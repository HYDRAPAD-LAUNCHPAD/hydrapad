import { IconTrendingUp } from '@tabler/icons-react'
import Marquee from 'react-fast-marquee'

interface bitType {
  name: string
  image: string
}

const bitArr: bitType[] = [
  { name: 'KOLZ', image: '/assets/images/bitrivals/1.png' },
  { name: 'BNOM', image: '/assets/images/bitrivals/2.png' },
  { name: 'PKC', image: '/assets/images/bitrivals/3.png' },
  { name: 'SRIVAL', image: '/assets/images/bitrivals/4.png' },
  { name: 'BDToken', image: '/assets/images/bitrivals/5.png' },
  { name: 'KLLR', image: '/assets/images/bitrivals/6.png' },
  { name: 'DBB', image: '/assets/images/bitrivals/7.png' }
]

const BitRivals: React.FC = () => {
  return (
    <div className='flex justify-between p-5 px-0 w-full mb-2 bitribals'>
      <div className='flex items-center w-full'>
        <div className='items-center hidden xl:flex'>
          <div className='flex py-2 px-3 items-center justify-center w-[170px] bg-[#15131D] rounded-[64px]'>
            {/* <img src="/assets/images/bit_rials.png" alt="bit-rials" width={28.8} height={28.8} className="rounded-full" /> */}
            <h6 className='font-bold text-greenColor'>Upcoming Presales</h6>
          </div>
          <IconTrendingUp className='ml-3 mr-8 w-[30px]' />
        </div>
        <div className='flex justify-between overflow-hidden pb-2'>
          <Marquee pauseOnHover={true}>
            {bitArr.map((item: bitType) => (
              <div
                key={item.name}
                className='flex items-center mr-12 bg-[#15131D] pr-2 rounded-[320px] cursor-pointer'
              >
                <div>
                  <div className='w-[24px] h-[24px] text-[12px] rounded-full flex justify-center items-center text-white'>
                    <img
                      src={item.image}
                      alt='bitrivals'
                      className='w-full h-full rounded-full'
                    />
                  </div>
                </div>
                <span className='text-[11px] mx-2'>{item.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
export default BitRivals
