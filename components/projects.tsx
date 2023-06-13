import React from 'react' 
import { ProjectBackground, ProjectContainer, ProjectLeft, ProjectLink, ProjectRight } from './project';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import Image from 'next/image';

const Projects = () => {
  return( 
    <TileWrapper numOfPages={3}>
    <TileBackground numOfPages={0}>
      <ProjectBackground />
    </TileBackground>

    <TileContent numOfPages={1}>
<!--       <Tile page={0} renderContent={({progress}) => ( 
      <ProjectContainer progress={0} href={''}>
        <ProjectLeft progress={progress} href={''}>
          <div>We Built</div>
          <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
          <ProjectLink href='https://africarstrucks.com.ng/' progress={0}>
            Africarstruck
          </ProjectLink> 
          </div>
        </ProjectLeft>

        <ProjectRight progress={progress} href={''}>
          <Image src="/assets/projects/ACT.png" layout='responsive' width={717} height={816} alt='ACT'/>
        </ProjectRight>
      </ProjectContainer>)}></Tile> -->
        
<!--       <Tile 
        page={1} renderContent={({progress}) => (
          <ProjectContainer progress={1} href={''}>
          <ProjectLeft progress={progress} href={''}>
            <div>We Revamped</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
            <ProjectLink href='https://bafsta.com.ng/' progress={0}>
                Bafsta
              </ProjectLink> 
            </div>
          </ProjectLeft>

          <ProjectRight progress={progress} href={''}>
            <Image src="/assets/projects/bafsta.png" layout='responsive' width={717} height={816} alt='BAFSTA'/>
          </ProjectRight>
        </ProjectContainer>)}></Tile> -->

      <Tile 
        page={2} renderContent={({progress}) => (
          <ProjectContainer progress={2} href={''}>
          <ProjectLeft progress={progress} href={''}>
            <div>We Partnered with</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
              <ProjectLink href='https://wearhighstreet.com/' progress={0}>
                HighStreet
              </ProjectLink> 
            </div>
          </ProjectLeft>

          <ProjectRight progress={progress} href={''}>
            <Image src="/assets/projects/WHS.png" layout='responsive' width={717} height={816} alt='WEARHIGHSTREET'/>
          </ProjectRight>
        </ProjectContainer>)}></Tile>
    </TileContent>
  </TileWrapper>
  )
}


export default Projects;
