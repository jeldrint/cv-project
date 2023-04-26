import React, {Component} from "react";
import '../styles/style.css'

class GeneralInfo extends Component {
    constructor (props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this.props)
    }

    render() {
        const {name,job,email,phoneNum,location,desc, handleNameChange, handleJobChange, handleEmailChange, handlePhoneChange, handleLocationChange, handleDescChange} = this.props;

        return (
            <div className='name-input'>
                <div>
                    <label>Personal Details</label>
                    <input type='text' placeholder='Full Name' value={name} onChange={handleNameChange}/>
                    <input type='text' placeholder='Current Position / Job' value={job} onChange={handleJobChange}/>
                    <input type='email' placeholder='Email Address' value={email} onChange={handleEmailChange}/>
                    <input type='tel' placeholder='Phone Number' value={phoneNum} onChange={handlePhoneChange}/>
                    <input type='text' placeholder='Location' value={location} onChange={handleLocationChange}/>
                    <textarea type='text' placeholder='Description' value={desc} onChange={handleDescChange}/>
                </div>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
        )    
    }
}

export default GeneralInfo