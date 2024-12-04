import Pagination from '@/components/common/Pagination'
import NFTCard, { NFTCardType } from './NFTCard'
import { presaleData } from '@/components/utils/constants'

interface PropsType {
  step: string
}

const NFTList: React.FC<PropsType> = props => {
  return (
    <div className='overflow-y-scroll cursor- h-[calc(100vh-318.55px)] -mx-5'>
      <div className='flex flex-wrap '>
        {presaleData
          .filter((item: NFTCardType) => item.step === props.step)
          .map((item: NFTCardType, index: number) => (
            <div key={index} className={'px-5 w-full md:w-1/2 2xl:w-1/3'}>
              <NFTCard {...item} />
            </div>
          ))}
      </div>
      <div className='w-full flex justify-center'>
        <Pagination pageCount={5} />
      </div>
    </div>
  )
}
export default NFTList
