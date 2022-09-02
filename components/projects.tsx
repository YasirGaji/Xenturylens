import React from 'react' 
import { TileBackground, TileContent, TileWrapper } from './tile'

const Projects = () => {
  return( 
    <TileWrapper numOfPages={5}>
    <TileBackground numOfPages={0}></TileBackground>
    <TileContent numOfPages={0}>Hello</TileContent>
  </TileWrapper>
  )
}


export default Projects;
