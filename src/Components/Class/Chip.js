import React from 'react';


class ChipC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
  }


  incrementCounter(){
    this.setState(function(state){
      return {
        counter: state.counter + 1 
    }})
  }


  render() {
    return (
      <>
        <div className="chip">
          {this.props.title + ' with counter: ' + this.state.counter}
        </div>
        <button className="btn ml-16" onClick={this.incrementCounter}>Increment Counter</button>
      </>
    );
  }
}

export default ChipC;

