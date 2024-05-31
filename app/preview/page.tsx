'use client'
import React from 'react'
import '@/app/globals.css'
import Preview from '@/components/Preview'
import { RecoilRoot } from 'recoil'
import BackButton from '@/components/BackButton'
function App() {
  return (
    <>
      <RecoilRoot>
        <BackButton />
        <Preview />
      </RecoilRoot>
    </>
  )
}

export default App
