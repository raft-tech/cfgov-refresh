import React from 'react';
import { connect } from 'react-redux';
import { setDownPayment } from '../../actions';
import store from '../../store';

class Tool extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { input: '' };
  }

  // updateInput = (input) => {
  //   // console.log('input is ', input);
  //   // this.setState({ input });
  //   // console.log('after setting local state');
  //   this.props.setDownPayment(input);
  //   console.log('after dispatching the action to the store', store.getState());
  // };

  // handleSetDownPayment = () => {
  //   console.log('made it to handleSetDownPayment');
  //   this.props.setDownPayment(this.state.input);
  //   // this.setState({ input: '' });
  // };

  render() {
    // console.log('whole state', store.getState());
    return (
      <div>
        {/* <div>DownPaymentAmount: {this.props.downPaymentAmount}</div> */}
        <form className="div-style" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Down Payment</label>
            {/* <input className="div-style" onChange={(e) => this.updateInput(e.target.value)} value={this.state.input} /> */}
            <input
              className="div-style"
              // onChange={(e) => this.updateInput(e.target.value)}
              onChange={(e) => this.props.setDownPayment(e.target.value)}
              defaultValue={this.props.downPaymentAmount}
            />
            {/* <button className="div-style" onClick={this.handleSetDownPayment}>
              Update Down Payment
            </button> */}
          </div>
          {/* <div>
            <label>DownPaymentAmount:</label>
            <output type="number" id="total">
              ${this.props.downPaymentAmount}
            </output>
          </div> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    downPaymentAmount: state.downPaymentAmount,
  };
};

export default connect(mapStateToProps, { setDownPayment })(Tool);
