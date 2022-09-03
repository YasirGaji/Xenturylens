import React from 'react' 
import { ProjectBackground, ProjectContainer, ProjectLeft } from './project';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'

const Projects = () => {
  return( 
    <TileWrapper numOfPages={3}>
    <TileBackground numOfPages={0}>
      <ProjectBackground />
    </TileBackground>

    <TileContent numOfPages={1}>
      <Tile page={0} renderContent={({progress}) => ( 
      <ProjectContainer progress={0}>
        <ProjectLeft progress={progress}>
          <div>We Built</div>
        </ProjectLeft>
          <span className='text-9xl'>Hello 
            {progress}
          </span>
      </ProjectContainer>)}></Tile>
        
      <Tile 
        page={1} renderContent={({progress}) => (
          <ProjectContainer progress={1}>
          <ProjectLeft progress={progress}>
            <div>The Best</div>
          </ProjectLeft>
            <span className='text-9xl'>How are you
              {progress}
            </span>
        </ProjectContainer>)}></Tile>

      <Tile 
        page={2} renderContent={({progress}) => (
          <ProjectContainer progress={2}>
          <ProjectLeft progress={progress}>
            <div>Blockchain Product</div>
          </ProjectLeft>
            <span className='text-9xl'>Hello 
              {progress}
            </span>
        </ProjectContainer>)}></Tile>
    </TileContent>
  </TileWrapper>
  )
}


export default Projects;
