import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar3.jpg'
import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setcurrentPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')
  const [confirmNewPassword, setconfirmNewPassword] = useState('')

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            {/* Form to update avatar */}
            <form className="avatar__form">
              <input type="file" name="avatar" id="avatar" 
              onChange={e => setAvatar(e.target.files[0])}
              accept='png, jpg, jpeg'/>
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck/>
            </button>
          </div>
          <h1>Kay David</h1>
          {/* Form to update user details */}
          <form className="form profile__form">
            <p className='form__error-message'>This is an error message</p>
            <input type="text" placeholder='Full Name' value={name}
            on
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile