import { useState, useEffect } from 'react';

export default function TicketForm({dispatch, editingTicket}){

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('1');

  useEffect(()=> {
      if(editingTicket){
          setTitle(editingTicket.title)
          setDesc(editingTicket.desc)
          setPriority(editingTicket.priority)
      }
      else{
        // eslint-disable-next-line react-hooks/immutability
        clearForm();
      }

    }, [editingTicket])

  const priorityLabels = {
    1: 'Low', 
    2: 'Medium',
    3: 'High'
  }

  function handleSubmit(e){
    e.preventDefault(); // This make sure that our web page doesnt reloads.

    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      desc,
      priority
    }

    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData
    })

    clearForm();
  }

  function clearForm () {
    setTitle("");
    setDesc("");
    setPriority("1");
  }

  function handleEditCancel(){
    dispatch({
      type: "CLEAR_EDITING_TICKET"
    })
    clearForm();
  }

  return <>
    <form action="" className='ticket-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" 
                className="form-input" 
                value={title}  
                onChange={e => setTitle(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Description:</label>
        <textarea type="text" 
                  className="form-input" 
                  value={desc} 
                  onChange={e => setDesc(e.target.value)} />
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {
          Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className='priority-label'>
              <input type="radio" value={value}
                      checked={priority === value} 
                      className='priority-input'
                      onChange={(e) => setPriority(e.target.value)}
                      />
              {label}
            </label>
          ))
        }
      </fieldset>

      <input type="submit" className='button' />

      {editingTicket && (
        <button className='button' onClick={handleEditCancel}>Cancel Button</button>
      )}
    </form>
  </> 
} 