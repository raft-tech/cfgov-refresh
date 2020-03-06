import React from 'react';
import { connect } from 'react-redux';
import { setDownPayment } from '../../actions';

class Tool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="div-style" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Down Payment</label>
            <input
              className="div-style"
              onChange={(e) => this.props.setDownPayment(e.target.value)}
              defaultValue={this.props.downPaymentAmount}
            />
          </div>
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
