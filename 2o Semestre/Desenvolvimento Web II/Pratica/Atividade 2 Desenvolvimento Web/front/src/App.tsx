import { CSSProperties } from "react"
import Display from "./components/Display"
import Input from "./components/Input"
import { LetterProvider } from "./contexts/LetterCtx"


function App() {

  return (
    <div style={appStyle}>
      <LetterProvider>
        <div style={componentsStyle}>
          <Input />
          <Display />
        </div>
      </LetterProvider>
    </div>
  )
}

const appStyle: CSSProperties = {
  display: 'flex',
  margin: '20px 0px 20px 80px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#242424',
  color: 'white',
  width: '1300px',
  height: '700px',
};

const componentsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #eee',
  padding: '50px',
  gap: '50px',
}

export default App 