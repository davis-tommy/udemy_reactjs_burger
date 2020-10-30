import React, {Component} from "react";
import {Route} from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

import {connect} from 'react-redux';
import axios from "../../axios-orders";

class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         // console.log(param);
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = parseInt(param[1])
    //         }
    //     }
    //     // console.log(ingredients);
    //
    //     this.setState({
    //         ingredients: ingredients,
    //         totalPrice: price
    //     })
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>

                {/*<Route path={this.props.match.url + '/contact-data'}/>*/}
                {/*<Route path={this.props.match.path + '/contact-data'} component={ContactData}/>*/}
                <Route
                    path={this.props.match.path + '/contact-data'}
                    // render={(props) => (<ContactData ingredients={this.props.ingredients} price={this.props.totalPrice} {...props}/>)}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
    };
};

// export default Checkout;
export default connect(mapStateToProps)(Checkout);


