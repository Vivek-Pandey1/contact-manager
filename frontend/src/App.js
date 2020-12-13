import { Component } from 'react'
import ContactList from './ContactList'
import Modal from './Modal'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      entries: [],
      isOpen : false 
    };
  }

  componentDidMount(){
    fetch('http://localhost:3031/getAll').then(res => res.json()).then(res => this.setState({entries:res}));
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="conHeader"> Contacts</div>
          <ContactList contacts = {this.state.entries}/>
        </div>
  
        <button id="addBtn" onClick={() => this.setState({isOpen:true})}><i class="fa fa-plus"></i></button>
  
        <Modal open={this.state.isOpen} onClose={() => this.setState({isOpen:false})}>
        </Modal>
      </>
    );
  }
}

export default App;
