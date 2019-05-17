import React, { Component } from 'react'
import McTransfer from './components/McTransfer'
import { Select, Button } from 'antd'
import './App.css';
const Option = Select.Option

class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
    header:[{
      text: 'title',
      width: 160
    },{
      text: 'description',
      width: 80
    },{
      text: 'name',
      width: 60
    }],
    searchItem: 'title',
    // listStyle:{
    //     width: 300,
    //     height: 300,
    // }
  }

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        name: this.getName(`name${i + 1}`,i),
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  getName = (name,id) => {
    // name 传入应是数组
    return (
        <div onClick={this.stopPop}>
          <Select onChange={this.changeName} defaultValue="1" size="small">
            <Option value="1" key={id}>{name}</Option>
            <Option value="2" key={id}>{name}</Option>
            <Option value="3" key={id}>{name}</Option>
            <Option value="4" key={id}>{name}</Option>
          </Select>
        </div>
    )
  }

  changeName(value,selectRow){
    console.log(selectRow.key)
    console.log(value)
  }

  //阻止select冒泡
  stopPop = (e) => {
    if ( e && e.stopPropagation ){
        e.stopPropagation(); 
    } else if (window.event) {
        window.event.cancelBubble = true; 
    }
  }

  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  }

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  renderFooter = () => (
    <Button
      size="small"
      style={{ float: 'right', margin: 5 }}
      onClick={this.getMock}
    >
        reload
    </Button>
  )

  render() {
    return (
      <React.Fragment>
        <McTransfer
          dataSource={this.state.mockData}
          listStyle={this.state.listStyle}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          header={this.state.header}
          titles={['Source', 'Target']}
          showSearch={true}
          onSearch={this.handleSearch}
          searchItem={this.state.searchItem}
          footer={this.renderFooter}
      />
      </React.Fragment>
    );
  }
}

export default App