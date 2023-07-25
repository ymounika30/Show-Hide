import {Component} from 'react';
import './index.css'

class ShowHide extends Component{
    state={isShowFirstName: true, isShowLastName: true}
    firstName=()=>{
        this.setState(prevState=>({isShowFirstName: !prevState.isShowFirstName}))
    }
    lastName=()=>{
        this.setState(prevState=>({isShowLastName: !prevState.isShowLastName}))
    }
    render(){
        const{isShowFirstName,isShowLastName}=this.state
        return(
            <div className='card-container'>
                <h1 className='heading'>Show/Hide</h1>
                <div className='button-card-container'>
                    <div className='button-container'>
                        <button className='button' onClick={this.firstName}>Show/Hide Firstname</button>
                        {isShowFirstName?<div className='para-container'><p className='para'>Joe</p></div>:''}
                    </div>
                    <div>
                        <button className='button' onClick={this.lastName}>Show/Hide Lastname</button>
                        {isShowLastName?<div className='para-container'><p className='para'>Jonas</p></div>:'' }
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowHide