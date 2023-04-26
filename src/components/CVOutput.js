import React, {Component} from 'react'
import imgEmail from '../images/icon-email.png'
import imgLoc from '../images/icon-loc.png'
import imgPhone from '../images/icon-phone.png'

class CVOutput extends Component {
    render () {
        const {name,job,email,phoneNum, location,desc} = this.props;
        return (
            <div>
                <div className='header'>
                    <div className='header-left'>
                        <div className='name'>{name}</div>
                        <div className='job'>{job}</div>
                    </div>
                    <div className='header-right'>
                        <div className='email'>
                            <img src={imgEmail} class='header-thumbnails'/>
                            {email}
                        </div>
                        <div className='phoneNum'>
                            <img src={imgPhone} class='header-thumbnails'/>
                            {phoneNum}
                        </div>
                        <div className='location'>
                            <img src={imgLoc} class='header-thumbnails'/>                      
                            {location}
                        </div>
                    </div>
                </div>

                <div className='body-section'>
                    <div className='description'>
                        {desc}
                    </div>
                </div>
            </div>
        )
    }
}

export default CVOutput