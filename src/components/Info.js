import React from 'react'
import '../index.scss'

 function Info () {
    return <div className='info--me'>
        <img className='my-photo' src='../my-photo.jpg' alt='my-photo' />
        <h1>Ekpedeme Emmanuel</h1>
        <h3>Frontend Developer</h3>
        <p>frankemmy.website</p>
        <a href='' className='mail-button info-link-button'><img className='mail-icon' src='../mail.png' alt='email-logo' />Email</a>
        <a href='' className='linkedin-button info-link-button'><img className='linkedin-icon' src='../linkedin-app.png' alt='linkedin-logo' />LinkedIn</a>
        </div>
}

export default Info