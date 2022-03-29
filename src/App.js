import React, { useState, useEffect } from 'react';
import Form from './form';
import Member from './member';

import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () =>{
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.username) {
      setFormError("more info required!");
      setFormValues(initialFormValues);
      return;
    } else if (!newMember.email) {
      setFormError("email required");
      return;
    }else{
      setMembers([...members, newMember])
    }
  }

  return (
    <div className="App">
      <h1>Member Form</h1>
      { formError && <p className='error'>{formError}</p>}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member}/>
          )
        })
      }

    </div>
  );
}

export default App;
