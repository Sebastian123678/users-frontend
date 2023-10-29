import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)
  
  //const baseUrl = 'https://users-crud.academlo.tech'
  const baseUrl = 'https://users-backend-dev-chgb.3.us-1.fl0.io'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users);

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div>
      <header>
        <h1>Users</h1>
        <button onClick={handleOpenForm} className='openCreateUser'>Open Form</button>
      </header>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='users'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
