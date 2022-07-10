import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface ItemDetailProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  info?: string
  link?: boolean
}

export function ItemDetail ({ Icon, info, link }: ItemDetailProps) {
  return (
    <div className='flex w-full mt-6 md:w-[45%] md:mt-4'>
        { info ? 
          <Icon weight='fill' size='20'/> 
          : 
          <Icon weight='fill' size='20' className='text-gray-400 dark:text-grey-200'/> 
        }
        
        { info ? 
          ( link ? 
            <a href={ info } target='_blank' className='text-sm ml-3 overflow-hidden text-ellipsis whitespace-nowrap'> 
              { info } 
            </a> 
              :
            <span className='text-sm ml-3 overflow-hidden text-ellipsis whitespace-nowrap'> 
              { info } 
            </span> 
          )
            :
          ( <span className='text-sm ml-3 overflow-hidden text-ellipsis whitespace-nowrap text-gray-400 dark:text-grey-200'> 
              Not Available
            </span>
          )
        }  
      </div>
  );
}