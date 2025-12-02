import React from 'react'
import './styles/globals.css'
import Header from './components/Header'
import Landing from './components/Landing'
import SkillsSection from './components/SkillsSection'
import EducationList from './components/EducationList'
import ProjectsList from './components/ProjectsList'
import Footer from './components/Footer'
import MouseGlow from './components/MouseGlow'

function App(){
  return (
    <>
      <MouseGlow />
      <Header />
      <main>
        <Landing />
        <SkillsSection />

        <EducationList />

        <ProjectsList />

      </main>
      <Footer />
    </>
  )
}

export default App
