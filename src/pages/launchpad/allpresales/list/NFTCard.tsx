import { getStepColor } from '@/components/utils/func'
import {
  Card,
  CardBody,
  CardFooter,
  Progress
} from '@material-tailwind/react'
import {
  IconBellFilled,
  IconBrandX,
  IconHeart,
  IconMessageFilled,
  IconPlus,
  IconSend,
  IconWorld
} from '@tabler/icons-react'
import clsx from 'clsx'
import { useNavigate } from 'react-router'

export interface NFTCardType {
  id: string
  step: string
  avatar: string
  name: string
  type: string
  progress: number
}

const NFTCard: React.FC<NFTCardType> = props => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/presale-detail/' + props.id + "/"+(props.type === "Regular Presale" ? 1:0))
  }

  return (
    <Card
      className='w-full overflow-hidden bg-lightColor rounded-[15px] mb-14 hover:shadow-md hover:shadow-gray-700 cursor-pointer'
      style={{ transition: '0.3s' }}
      onClick={handleClick}
    >
      <CardBody className='p-5 pb-0'>
        <div className='flex justify-between'>
          <div className='flex items-center text-white'>
            <div
              className={clsx(
                'w-[8px] h-[8px] rounded-full mr-2',
                getStepColor(props.step)
              )}
            ></div>
            <span className='text-[12px] mr-3'>
              SALE {props.step.toUpperCase()}
            </span>
            <span className='text-[12px]'>6:23:32:44</span>
          </div>
          <div>
            <div className='flex gap-1'>
              <span className='rounded-sm text-[11px] px-2 border border-green-700 bg-green-700'>
                DAO
              </span>
              <span className='rounded-sm text-[11px] px-2 border border-purple-700 bg-purple-700'>
                Defi
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center mb-4 mt-7'>
          <div className='relative'>
            <img className='absolute -top-[2px] rounded-full -left-[2px] w-[24px] h-[24px]' alt='' src="/assets/images/1027.png" />
            {/* <img src="/assets/images/status/1.png" alt="status" className="absolute -top-[10px] -left-[10px] w-[28px] h-[28px]" /> */}
            <img
              src={props.avatar}
              alt='avatar'
              className='mr-4 rounded-full w-[51px] h-[51px]'
            />
          </div>
          <div className='text-white'>
            <p className='text-[12px]'>{props.name}</p>
            <p className='text-[11.5px]'>{props.type}</p>
            {/* <p className="text-[11.5px]">Spots Left 2499990</p> */}
          </div>
        </div>
        <div>
          <div className='flex justify-between text-[12px]'>
            <span>Progress</span>
            <span>Intended Raise</span>
          </div>
          <Progress
            color='green'
            style={{ backgroundColor: '#99999940' }}
            value={80}
            variant='gradient'
            className='my-1'
          />
          <div className='flex justify-between text-[12px]'>
            <span>2100 SOL</span>
            <span>100%</span>
            <span>2100 SOL</span>
          </div>
        </div>
        <div className='flex justify-between mt-5 px-2'>
          <p className='border-b border-borderColor text-[11.5px]'>
            Rate <span className='ml-1 text-orange-500'>111.111 $RIVAL</span>
          </p>
          <p className='border-b border-borderColor text-[11.5px]'>
            LOCK <span className='ml-1 text-orange-500'>Manual</span>
          </p>
        </div>
      </CardBody>
      <CardFooter className='flex items-center justify-between px-5 pb-3 pt-4'>
        <div className='flex items-center'>
          <IconWorld color='#919EAB' className='cursor-pointer w-[16px] mx-1' />
          <IconSend color='#919EAB' className='cursor-pointer w-[16px] mx-1' />
          <IconBrandX
            color='#919EAB'
            className='cursor-pointer w-[16px] mx-1'
          />
        </div>
        <IconPlus color='#919EAB' className='cursor-pointer w-[16px] mx-1' />
        <div className='flex items-center'>
          <IconMessageFilled
            color='#919EAB'
            className='cursor-pointer w-[16px] mx-1'
          />
          <IconBellFilled
            color='#919EAB'
            className='cursor-pointer w-[16px] mx-1'
          />
          <IconHeart color='#919EAB' className='cursor-pointer w-[16px] mx-1' />
        </div>
      </CardFooter>
    </Card>
  )
}

export default NFTCard
