import React from 'react' 
import { TileBackground, TileContent, TileWrapper } from './tile'

const Projects = () => {
  return( 
    <TileWrapper numOfPages={5}>
    <TileBackground numOfPages={0}></TileBackground>
    <TileContent numOfPages={0}>Hello</TileContent>
    <TileContent numOfPages={0}>Hi</TileContent>
  </TileWrapper>
  )
}


export default Projects;
