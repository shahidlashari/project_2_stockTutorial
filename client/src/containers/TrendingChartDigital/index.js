import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const chartData = [
//   {
//     name: '2019-12-31', open: 202.1300, high: 208.9300, low: 193.1700, close: 205.2500, amt: 2400,
//   },
//   {
//     name: '2020-01-31', open: 206.7500, high: 224.2000, low: 201.0600, close: 201.9100, amt: 2210,
//   },
//   {
//     name: '2020-02-28', open: 203.4400, high: 218.7650, low: 181.8200, close: 192.4700, amt: 2290,
//   },
//   {
//     name: '2020-03-31', open: 194.0300, high: 197.2400, low: 137.1006, close: 166.8000, amt: 2000,
//   },
//   {
//     name: '2020-04-30', open: 161.6150, high: 209.6900, low: 150.8300, close: 204.7100, amt: 2181,
//   },
// ];

export default class TrendingChartStock extends PureComponent {
  state = {
    data: [],
    textCurrency: '',
    textMarket: ''
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  componentDidMount() {
    console.log(this.props.data);
    // console.log(chartData);
    let market = this.props.data['Meta Data']['4. Market Code'];
    market = market.substring(0, market.length);
    console.log(market);

    const dataObj = {
      "Meta Data": {
        "Digital Currency Code": this.props.data['Meta Data']['2. Digital Currency Code'],
        "Market Code": this.props.data['Meta Data']['4. Market Code']
      },
      "Time Series (Digital Currency Monthly)": {
        "2019-04-30": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-04-30'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-04-30'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-04-30'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-04-30'][`4a. close (${market})`]
        },
        "2019-05-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-05-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-05-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-05-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-05-31'][`4a. close (${market})`]
        },
        "2019-06-30": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-06-30'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-06-30'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-06-30'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-06-30'][`4a. close (${market})`]
        },
        "2019-07-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-07-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-07-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-07-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-07-31'][`4a. close (${market})`]
        },
        "2019-08-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-08-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-08-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-08-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-08-31'][`4a. close (${market})`]
        },
        "2019-09-30": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-09-30'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-09-30'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-09-30'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-09-30'][`4a. close (${market})`]
        },
        "2019-10-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-10-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-10-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-10-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-10-31'][`4a. close (${market})`]
        },
        "2019-11-30": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-11-30'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-11-30'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-11-30'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-11-30'][`4a. close (${market})`]
        },
        "2019-12-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2019-12-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2019-12-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2019-12-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2019-12-31'][`4a. close (${market})`]
        },
        "2020-01-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2020-01-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2020-01-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2020-01-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2020-01-31'][`4a. close (${market})`]
        },
        "2020-02-29": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2020-02-29'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2020-02-29'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2020-02-29'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2020-02-29'][`4a. close (${market})`]
        },
        "2020-03-31": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2020-03-31'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2020-03-31'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2020-03-31'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2020-03-31'][`4a. close (${market})`]
        },
        "2020-04-30": {
          "1a. open": this.props.data['Time Series (Digital Currency Monthly)']['2020-04-30'][`1a. open (${market})`], 
          "2a. high": this.props.data['Time Series (Digital Currency Monthly)']['2020-04-30'][`2a. high (${market})`], 
          "3a. low": this.props.data['Time Series (Digital Currency Monthly)']['2020-04-30'][`3a. low (${market})`], 
          "4a. close": this.props.data['Time Series (Digital Currency Monthly)']['2020-04-30'][`4a. close (${market})`]
        }
      }
    }

    console.log(dataObj);

    function mapData() {
      let dataArr = [];
      let timeSeries = dataObj['Time Series (Digital Currency Monthly)'];
      for (let property in timeSeries) {
        let eachDate = {};
        eachDate.name = property;
        eachDate.open = parseFloat(timeSeries[property]["1a. open"]);
        eachDate.high = parseFloat(timeSeries[property]["2a. high"]);
        eachDate.low = parseFloat(timeSeries[property]["3a. low"]);
        eachDate.close = parseFloat(timeSeries[property]["4a. close"]);
        eachDate.amt = 2000;
        dataArr.push(eachDate);
      }
      return dataArr;
    }
    const dataChart = mapData();
    console.log(dataChart);

    const digitalCurrencyText = dataObj['Meta Data']['Digital Currency Code'];
    const physicalMarketText = dataObj['Meta Data']['Market Code'];
  
    this.setState({ data: dataChart, textCurrency: digitalCurrencyText, textMarket: physicalMarketText });
  }

  render() {
    // console.log(this.state.data)
    return (
      <div style={{ width: '100%', height: 350 }}>
        <h2>{this.state.textCurrency} in the {this.state.textMarket} Market Trade for the Past Year (Monthly) </h2>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={400}
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="high" stroke="#e01d34" />
            <Line type="monotone" dataKey="low" stroke="#82ca9d" />
            <Line type="monotone" dataKey="close" stroke="#ffff0a" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
