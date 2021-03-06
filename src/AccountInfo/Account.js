import React, { Component } from 'react'

export class Account extends Component {
    state = {
        accountNumber: '',
        product: "",
        accountType: ''

    }

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const { accountNumber, product, accountType } = this.state;
        const obj = {
            accountNumber,
            product,
            accountType
        }
        localStorage.setItem("accountInfo", JSON.stringify(obj));

        this.setState({
            accountNumber: '',
            accountType: '',
            product: ''
        })
        this.props.history.push('/face-account');
    }

    render() {

        return (
            <div className="container">
                <div className="row d-flex justify-content-center my-5">
                    <div className="card col-sm-5">

                        <div className="card-header divBg">

                            <h3 className="text-center pt-3">Account Information</h3>

                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                {/* Account Number */}
                                <div className="form-group">
                                    <label htmlFor=""></label>
                                    <input type="text" value={this.state.accountNumber} onChange={this.onChange} className="form-control" name="accountNumber" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Account Number" />
                                </div>

                                {/* Product and Service */}
                                <div className='form-group'>
                                    <label htmlFor="">Product and Service</label>
                                    <select
                                        className='custom-select'
                                        value={this.state.product}
                                        onChange={this.onChange}
                                        name="product"
                                    >
                                        <option value='' disabled>--Select--</option>
                                        <option value='Current Account'>Current Account</option>
                                        <option value='Savings Account'>Savings Account</option>
                                        <option value='Credit Account'>Credit Accounts</option>
                                        <option value='Debit Card'>Debit Card</option>
                                        <option value='Credit Card'>Credit Card</option>
                                    </select>
                                </div>
                                {/* Account Type */}
                                <div className='form-group'>
                                    <label htmlFor="">Product and Service</label>
                                    <select
                                        className='custom-select'
                                        value={this.state.accountType}
                                        onChange={this.onChange}
                                        name="accountType"
                                    >
                                        <option value='' disabled>--Select--</option>
                                        <option value='Single'>Single Account</option>
                                        <option value='Joint'>Joint Account</option>

                                    </select>
                                </div>


                                <div className="d-flex justify-content-center" >

                                    <button className="b" type="submit" style={{ border: "none" }} >Submit</button>

                                </div>

                            </form>
                        </div>



                    </div>



                </div>
            </div>


        )
    }
}

export default Account
