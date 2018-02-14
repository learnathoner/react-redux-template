import React, { Component } from 'react'
import Modal from 'react-modal'

class App extends Component {
  
  // Track modal open/close using state
  state = {
    modalOpen: false
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  render () {
    const { modalOpen } = this.state

    return (
      <div>
        <input type="text" placeholder="Type Something" ref={(input) => this.input = input} />
        <button onClick={this.openModal}></button>

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          contentLabel='Modal'
          // Figure out whether to use hid app element below
          ariaHideApp={false}
          > 
            <div> Your input was {this.input} </div>
          </Modal>
                
      </div>
    )
  }
}

export default App