import { useReducer } from 'react';

//Importing Components
import TicketForm from './components/TicketForm'
import TicketList from './components/TicketList';

// Application Reducers
import ticketReducer from './reducers/ticketReducer'

// Importing CSS
import './styles.css'

function App() {

  const initialState = {
    tickets: []
  }

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return <div className="App">
    <div className="container">
      <h1>Bug Blaster</h1>
      <TicketForm dispatch = {dispatch}/>

      {state.tickets.length > 0 && 
        <div className='results'>
          <h2>All Tickets</h2>
          <TicketList tickets={state.tickets} dispatch={dispatch}/>  
        </div>
      } 
      {/* This says that if the ticket length is greater that zero then display */}
    </div>
  </div>
}

export default App 
