'use client';
import styled from 'styled-components';
import TrimInput from './components/TrimInput';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  return (
    <Main>
      <h2>TODO</h2>
      <TrimInput label='할일'/>
    </Main>
  )
}