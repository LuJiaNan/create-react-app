import React from 'react';
import { Transfer, Row, Col } from 'antd'
import './McTransfer.css'
class App extends React.Component {
  renderItem = (item) => {
    let node = this.props.header.map((value,i) => {
      // return <div key={`${value}${i}`} style={{width: parseInt(value.width)}} title={typeof(item[value.text]) === 'string' ? item[value.text] : ''}>{item[value.text]}</div>
      return <div key={`${value}${i}`} title={typeof(item[value.text]) === 'string' ? item[value.text] : ''}>{item[value.text]}</div>
    })

    const customLabel = (
      <div className="custom-item">
        {node}
      </div>
    );

    return {
      label: customLabel, // for displayed item
      value: item[this.props.searchItem], // for filter matching
    };
  }

  footer = () => {
    let headerBody = this.props.header.map((value,i) => {
      // return <Col style={{width: parseInt(value.width)}} key={`${value}${i}`}>{value.text}</Col>
      return <div key={`${value}${i}`}>{value.text}</div>
    })
    return (
      <Row className='mc-transfer-header'>
        {headerBody}
      </Row>
    )
  }

  // componentWillReceiveProps(nextprops){
  //   if(nextprops.dataSource != this.props.dataSource){
  //     this.setState({
  //       dataSource: nextprops.dataSource,
  //       targetKeys: nextprops.targetKeys,
  //     })
  //   }
  // }

  render() {
    return (
        <Transfer
          className='mc-transfer'
          dataSource={this.props.dataSource}
          listStyle={this.props.listStyle}
          targetKeys={this.props.targetKeys}
          onChange={this.props.onChange}
          render={this.renderItem}
          footer={this.footer}
          showSearch={this.props.showSearch}
          onSearch={this.props.onSearch}
        />
    );
  }
}

export default App;