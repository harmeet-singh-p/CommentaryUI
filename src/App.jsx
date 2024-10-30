import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import CommandsComponent from './components/CommandsComponent'
import { CommentaryDetails } from './components/CommentaryDetails';
import Header from './components/Header'
import AddComments from './components/AddComments';
import CommentsHistory from './components/CommentsHistory';

function App() {
  
  return (
    <MantineProvider>     
      <div className="border-solid border-2 border-indigo-600  ">
        <Header/>

        {/* Static Details component. */}
        <CommentaryDetails />
        

        {/* commands component. */}
        <div className="p-3">
          <CommandsComponent />        
        </div>      
        
        <AddComments/>

        <CommentsHistory />
        {/*   //footer. */}
        <p className='text-xs text-blue-800'>
          This is natwest property with confidentiality.
        </p>
      </div> 
    </MantineProvider>
  )
}

export default App
