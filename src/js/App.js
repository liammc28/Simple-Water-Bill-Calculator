import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.display_bill = this.display_bill.bind(this);
        this.state = {
            price:''
        };
    }

    display_bill(e){
        let bill = this.water_bill(e.currentTarget.value);
        let billString = 'free';
        if(bill !== 0){
            billString = '€' + bill
        }
        this.setState({
            price: billString
        })

    }

    water_bill(input){

        let sum =0;
        if(input <=130){
            return sum
        }
        else
            input-=130;
        if(input<=70){
            sum += input*1.50;
            return sum
        }
        sum += 70*1.50;
        input-=70;
        if(input<=100){
            sum += input*1.00;
            return sum
        }
        sum += 100*1.00;
        input-=100;
        if(input<=100){
            sum += input*0.50;
            return sum
        }
        sum += 100*0.50;
        input-=100;
        if(input>0){
            sum += input*0.10
        }
        return sum
    }


    render() {
        const basic_Style = {
            textAlign: 'center',
            paddingBottom: '15px'
        };
        const header_Style =  {
            fontSize: '25px',
            textAlign: 'center',
            paddingBottom: '15px'
        };


        return (
            <div>
                    <div style= {header_Style}>
                        Templeport Water Scheme Calculator
                    </div>
                    <div style= {basic_Style}>
                        <input type="number" onChange={ this.display_bill }/>
                    </div>
                    <div style= {basic_Style}>
                        { this.state.price }
                    </div>
            </div>
        );
    }
}

export default App;
