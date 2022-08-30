import React, { useRef, useContext, ReactNode } from 'react';

interface WrapperProps {
  numOfPages: number;
  children?: ReactNode
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages
}) => {
  return (
    <div className='relative bg-black text-white'>Tile</div>
  )
}

