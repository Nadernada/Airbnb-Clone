'use client'

import { User } from '@prisma/client'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useFavorite from '../hooks/useFavorite'

interface HeartButtonProps {
  listingId: string
  currentUser?: User | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {

  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser
  })  

  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className='text-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart
        size={24}
        className={
          hasFavorited ? 'text-rose-500' : 'text-neutral-500/70'
        }
      />
    </div>
  )
}

export default HeartButton