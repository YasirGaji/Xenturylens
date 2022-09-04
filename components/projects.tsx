import React from 'react' 
import { ProjectBackground, ProjectContainer, ProjectLeft, ProjectRight } from './project';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import Image from 'next/image';

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
          <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Africarstruck&apos;s website</div>
        </ProjectLeft>
          <ProjectRight progress={progress}>
            <Image src="/assets/projects/ACT.png" layout='responsive' width={840} height={1620} alt='ACT'/>
          </ProjectRight>
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
