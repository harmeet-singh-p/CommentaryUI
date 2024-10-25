import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import CommandsComponent from './components/CommandsComponent'
import Header from './components/header'

function App() {
  
  return (
    <MantineProvider>
      <Header/>
      {/* //header component.

      //commands component. */}
      <div className="card">
        <CommandsComponent />        
      </div>

      {/* //Static Details component.

      //Add Comments component.

      //Grid to  show history of comments.

      //footer. */}
      <p className="read-the-docs">
        This is natwest property with confidentiality.
      </p>
    </MantineProvider>
  )
}

export default App
