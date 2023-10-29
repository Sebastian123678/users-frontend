import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css';

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])

  const submit = data => {
    if(infoUpdate){
      // Edit
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate() // Resetearlo para volver a crear
    } else {
      // Create
      createUser('/users', data)
    }
    // Resetear los input
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formUser_container ${closeForm && 'close-form'}`}>
      <form onClick={e => e.stopPropagation()} className="formUser" onSubmit={handleSubmit(submit)}>
        <h2 className="formUser_title">{ infoUpdate ? 'Edit' : 'Create' }</h2>
        <div onClick={handleCloseForm} className="formUser_close">x</div>
        <div className="formUser_group">
          <label className="formUser_label" htmlFor="email">Email</label>
          <input className="formUser_input" {...register('email')} type="email" id="email" placeholder="user@email.com" />
        </div>
        <div className="formUser_group">
          <label className="formUser_label" htmlFor="password">Password</label>
          <input className="formUser_input" {...register('password')} type="password" id="password" />
        </div>
        <div className="formUser_group">
          <label className="formUser_label" htmlFor="first_name">First name</label>
          <input className="formUser_input" {...register('first_name')} type="text" id="first_name" placeholder="Name"/>
        </div>
        <div className="formUser_group">
          <label className="formUser_label" htmlFor="last_name">Last name</label>
          <input className="formUser_input" {...register('last_name')} type="text" id="last_name" placeholder="Last name"/>
        </div>
        <div className="formUser_group">
          <label className="formUser_label" htmlFor="birthday">Birthday</label>
          <input className="formUser_input" {...register('birthday')} type="date" id="birthday" />
        </div>
        <button className="formUser_btn">{ infoUpdate ? 'Edit' : 'Create' }</button>
      </form>
    </div>
  )
}

export default FormUser