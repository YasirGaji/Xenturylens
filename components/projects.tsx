import React from 'react' 
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'

const Projects = () => {
  return( 
    <TileWrapper numOfPages={5}>
    <TileBackground numOfPages={0}></TileBackground>
    <TileContent numOfPages={1}>
      <Tile 
        page={0} renderContent={({progress}) => 
        <span className='text-9xl'>Hello 
          {progress}
      </span>}></Tile>

      <Tile 
        page={1} renderContent={({progress}) => 
        <span className='text-9xl'>How are you 
          {progress}
      </span>}></Tile>

      <Tile 
        page={2} renderContent={({progress}) => 
        <span className='text-9xl'>See anything wey you fit do over there 
          {progress}
      </span>}></Tile>
    </TileContent>
  </TileWrapper>
  )
}


export default Projects;
