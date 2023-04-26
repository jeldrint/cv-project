import React, {Component} from 'react'
import GeneralInfo from './components/GeneralInfo'
import './styles/style.css'
import CVOutput from './components/CVOutput'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      job: '',
      email: '',
      phoneNum: '',
      location: '',
      desc: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }

  handleNameChange (e) {
    this.setState({
        name: e.target.value
    })
  }

  handleJobChange (e) {
    this.setState({
        job: e.target.value
    })
  }

  handleEmailChange (e) {
    this.setState({
        email: e.target.value
    })
  }

  handlePhoneChange (e) {
    this.setState({
        phoneNum: e.target.value
    })
  }

  handleLocationChange (e) {
    this.setState({
        location: e.target.value
    })
  }

  handleDescChange (e) {
    this.setState({
        desc: e.target.value
    })
  }

  render () {
    const {name,job,email,phoneNum,location, desc} = this.state;
    return(
      <div className='container'>
        <section className='cv-details'>
          <form>
              <GeneralInfo name ={name} job={job} email ={email} phoneNum ={phoneNum} location={location} desc={desc} handleNameChange={this.handleNameChange}
              handleJobChange={this.handleJobChange} handleEmailChange={this.handleEmailChange}
              handlePhoneChange={this.handlePhoneChange} handleLocationChange={this.handleLocationChange} handleDescChange={this.handleDescChange}/>
          </form>
        </section>
        <section className='cv-output'>
          <CVOutput name ={name} job={job} email ={email} phoneNum ={phoneNum} location ={location} desc={desc} />
        </section>
      </div>
    )
  }
}

export default App