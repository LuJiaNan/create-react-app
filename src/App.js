import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestSetState from './testSetState';
import ClickTestSetState from './clickTestSetState'
import ChildA from './childA'
import ChildB from './childB'
import PropTypes from 'prop-types'
// import { Table, Card, Col, Row, Button, Form, Divider } from 'antd'
import { Table , Transfer, Row, Col, Collapse ,Select } from 'antd'
import { Button, IconButton, BackButton, SelectMenu, Pane, Text, Dialog, TextInput } from 'evergreen-ui'
// import { Grid, Input, Select } from 'react-spreadsheet-grid'

import App from './myTransfer'


//测试ts组件
// import Hello from './Hello.tsx';
// import ExtraModaltitle from './components/ExtraModaltitle/index.tsx'
// class App extends React.Component{
//     render(){
//         return <ExtraModaltitle text="TypeScript" extra={10} />
//     }
// }

// //测试
// let arrs = new Array(10000000);

// console.time('for');
// for (let i = 0, len = arrs.length; i < len; i++) {

// };
// console.timeEnd('for');

// console.time('forEach');
	
// arrs.forEach((arr) => {
 
// });
// console.timeEnd('forEach');

// console.time('map');
// arrs.map((v,i)=>{})
// console.timeEnd('map');


//结论(耗时)：
// 1.十万级，foreach最少，for是map的两倍左右  
// for: 2.507080078125ms
// forEach: 0.442138671875ms
// map: 1.004150390625ms
// 1.百万级，for最少，forEach略多余for，map最多
// for: 3.94091796875ms
// forEach: 4.451904296875ms
// map: 13.843017578125ms
// 1.千万级，for最少，forEach是for的5倍以上，map最多
// for: 8.449951171875ms
// forEach: 43.73583984375ms
// map: 151.18603515625ms

export default App



// const rows=[
//   { id: 'user1', name: 'John Doe1', positionId: 'position1' },
//   { id: 'user2', name: 'John Doe2', positionId: 'position2' },
//   { id: 'user3', name: 'John Doe3', positionId: 'position3' },
//   { id: 'user4', name: 'John Doe4', positionId: 'position4' },
//   { id: 'user5', name: 'John Doe5', positionId: 'position5' },
//   { id: 'user6', name: 'John Doe6', positionId: 'position6' },
//   // and so on...
// ];

// const columns = [{
//   title: 'id',
//   dataIndex: 'id',
//   key: 'id',
// },{
//   title: '姓名',
//   dataIndex: 'name',
//   key: 'name',
// },{
//   title: '地点',
//   dataIndex: 'positionId',
//   key: 'positionId',
// }] 

// // 测试button的loading禁止点击功能
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       loading: false
//     }
//   }
//   click = () => {
//     console.log('11')
//     let count = this.state.count;
//     this.setState({
//       count: count + 1,
//       loading: true
//     })
//   }
//   render() {
//     // return <Button appearance="primary" onClick={this.click} loading={this.state.loading}>{this.state.count}</Button>;
//     return (
//       <React.Fragment>
//         <IconButton icon="trash" intent="danger" />
//         <BackButton />
//         <SelectMenu
//           title="Empty view"
//           options={[]}
//           emptyView={(
//             <Pane height="100%" display="flex" alignItems="center" justifyContent="center">
//               <Text size={300}>No options found</Text>
//             </Pane>
//           )}
//         >
//           <Button>Select option...</Button>
//         </SelectMenu>
//         <React.Fragment initialState={{ isShown: false }}>
//           {({ state, setState }) => (
//             <Pane>
//               <Dialog
//                 isShown={state.isShown}
//                 title="Dialog title"
//                 onCloseComplete={() => setState({ isShown: false })}
//                 confirmLabel="Custom Label"
//               >
//                 Dialog content
//               </Dialog>

//               <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>
//             </Pane>
//           )}
//         </React.Fragment>
//         <p>Excel表格</p>
//         <Grid 
//           columns={[
//             {
//               title: () => 'Id', 
//               value: (row, { focus }) => {
//                   return (
//                       <Input  
//                         value={row.id}
//                         focus={focus}
//                       />
//                   );
//               }
//             },
//             {
//               title: () => 'Name', 
//               value: (row, { focus }) => {
//                   return (
//                       <Input  
//                         value={row.name}
//                         focus={focus}
//                       />
//                   );
//               }
//             }, {
//               title: () => 'Position',
//               value: (row, { focus }) => {
//                   return (
//                       <Input  
//                         value={row.positionId}
//                         isOpen={focus}
//                       />
//                   );
//               }
//             }
//           ]}
//           getRowKey={row => row.id}
//           rows={rows}
//         />
//         <p>Antd-Table</p>
//         <Table
//           columns={columns}
//           dataSource={rows}
//         />
//       </React.Fragment>
//     )
//   }
// }
// export default MyComponent

// React.Fragment和空标签测试
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//     console.log(this.myRef);
//   }
//   render() {
//     return <><div ref={this.myRef} name="myself" age="20"/></>;
//   }
// }
// export default MyComponent





// 测试props传id失败（没有重现加解密产品在融合里的现象,和antd版本有关）
// class Father extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data:[{
//                 id: 1,
//                 name: 'oracle',
//                 actions:[
//                   {
//                     name : '删除',
//                     color: 'red'
//                   },
//                   {
//                     name : '编辑',
//                     color: 'blue'
//                   },
//                   {
//                     name : '初始化',
//                     color: 'deepskyblue'
//                   }
//                 ]
//             },{
//                 id: 2,
//                 name: 'mysql',
//                 actions:[{
//                   name : '详情',
//                   color: 'green'
//                 },{
//                   name : '初始化',
//                   color: 'deepskyblue'
//                 }]
                
//             }]
//         }
//         this.columns = [{
//             title: '序号',
//             dataIndex: 'id',
//             key: 'id',
//           }, {
//             title: '数据库名称',
//             dataIndex: 'name',
//             key: 'name',
//           },{
//             title: '操作',
//             key: 'action',
//             render: (text, record) => (
//                 <ActionBtns {...record} key={record.id}/>
//             )
//         }]
//     }
//     render () {
//         return <Table dataSource={this.state.data} columns={this.columns}/>
//     }
// }

// class ActionBtns extends React.Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//     }
//     render () {
//       const count = this.props.actions.length;
//       const ActionItems = this.props.actions.map((data, index) => {
//         return (
//           <React.Fragment key={index}>
//             <span style={{'color': data.color}}>{data.name}</span>
//             {count-index === 1?'':< Divider type = 'vertical'/> }
//           </React.Fragment>
          
//         )
//       })
//       return (
//           <React.Fragment>
//               {ActionItems}
//           </React.Fragment>
//       )
//     }
// }

// export default Father

// const DbSearchForm = Form.create()(Father);

// class UsersPage extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//           <Row className='main-title'>
//             加密管理
//           </Row>
//           <DbSearchForm {...this.props}/>
//       </React.Fragment>
//     )
//   }
// }
// export default UsersPage


// 高阶组件测试
// import InputWithUserName from './HOC/InputWithUserName'

// class Index extends React.Component {
//     render () {
//       return (
//         <div>
//           用户名：<InputWithUserName />
//         </div>
//       )
//     }
// }

// export default Index

// setState测试
// class Father extends React.Component{
//     state = {
//         name: '',
//         count: 0
//     }
//     handleChange = (event) => {
//         this.setState({
//             name: event.currentTarget.value 
//         })
//         console.log(this.state.count)
//     }
//     click = () => {
//         this.setState((prevState) => {
//             return { count: 0 }
//         })
//         console.log(this.state.count);
//         this.setState((prevState) => {
//             return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
//         })
//         console.log(this.state.count);
//         this.setState((prevState) => {
//             return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
//         })
//         console.log(this.state.count);
//     }
//     render() {
//         const A = () => (
//             <ChildA name={this.state.name}/>
//         )
//         return (
//             <React.Fragment>
//                 <div onClick={this.click}>click</div>
//                 <input type="text" onChange={ this.handleChange } />
//                 <Row>
//                     <Col span={1}> childA: </Col>
//                     <Col span={1}><ChildA name={this.state.name}/></Col>
//                 </Row>
//                 <Row>
//                     <Col span={1}>A:</Col>
//                     <Col span={1}><A/></Col>
//                 </Row>
//             </React.Fragment>
//         );
//     }
// }
// export default Father



// shouldComponentUpdate 测试
// class Test extends React.Component{
//     constructor(props) {
//       super(props);
//       this.state = {
//         Number:1,//设state中Number值为1
//         propsNum: 0
//       }
//     }
//     //这里调用了setState但是并没有改变setState中的值
//     handleClick = () => {
//        const preNumber = this.state.Number
//        this.setState({
//           Number:preNumber
//        })
//     }
//     render(){
//       console.log('我被渲染了')
//       return(
//             <h1 onClick = {this.handleClick}>
//                 <Child propsNum={this.state.propsNum}/>
//             </h1>
//         )
//     }
// }

// function Child(props) {
//     console.log('子组件被渲染了')
//     return (
//         <div>
//         {props.propsNum}
//         </div>
//     )
// }

// export default Test


// 上下文测试
// class MiddleComponent extends React.Component {
//     static contextTypes = {
//         propA: PropTypes.string
//       }
//     shouldComponentUpdate (nextProps, nextState, nextContext) {
//         if(nextContext.propA !== this.context.propA)
//         return true
//     }
//     render () {
//       return <ChildComponent />
//     }
// }
  
// class ParentComponent extends React.Component {
//     // 声明Context对象属性
//     static childContextTypes = {
//         propA: PropTypes.string,
//         methodA: PropTypes.func
//     }
//     state = {
//         buttonName: 'changeContext'
//     }

//     // 返回Context对象，方法名是约定好的
//     getChildContext () {
//         return {
//             propA: 'propA',
//             methodA: () => 'methodA'
//         }
//     }

//     changeContext = () => {
//         this.setState({
//             buttonName: 'Context'
//         })
//     }

//     render () {
//         return (
//             <React.Fragment>
//                 <Button onClick={this.changeContext}>{this.state.buttonName}</Button>
//                 <MiddleComponent />
//             </React.Fragment> 
//         )
//     }
// }


// class ChildComponent extends React.Component {
//     // 声明需要使用的Context属性
//     static contextTypes = {
//       propA: PropTypes.string,
//     //   methodA: PropTypes.func
//     }
    
//     render () {
//       const {
//         propA,
//         methodA
//       } = this.context
      
//       console.log(`context.propA = ${propA}`)  // context.propA = propA
//       console.log(`context.methodA = ${methodA}`)  // context.methodA = undefined
      
//       return (
//           <div>${propA}${methodA}</div>
//       )
//     }
// }

// export default ParentComponent;



// 上下文测试
// const ThemeContext = React.createContext({
//   background: 'red',
//   color: 'white'
// });
// class App extends React.Component{
//   render(){
//     return (
//       <ThemeContext.Provider value={{background: 'green',color: 'white'}}>
//         <Child/>
//       </ThemeContext.Provider>
//     )
//   }
// }
// const data = {
//   name: 'test',
//   age: 20
// }
// class Child extends React.Component{
//   // static contexType = ThemeContext;
//   render(){
//     return (
//       <Son data={data}/>
//     )
//   }
// }

// function Child(props) {
//   return (
//     <div>
//       <Son/>
//     </div>
//   )
// }

// class Son extends React.Component{
//   render(){
//     console.log(this.props.data)
//     return (
//       <ThemeContext.Consumer>
//           {
//             context => (
//               <h1 style={{background: context.background, color: context.color, width:'100px',height:'50px'}}>
//                 {this.props.children}
//               </h1>
//             )
//           }
//       </ThemeContext.Consumer>
//     )
//   }
// }

// export default App;



// 错误边界测试
// class Son extends React.Component{
//   render(){
//     if(!this.props.card.content){
//       throw new Error('I crashed!');
//     }
//     return (
//       <Col span={8}>
//         <Card title={this.props.card.title} bordered={false}>{this.props.card.content}</Card>
//       </Col>
//     )
//   }
//  }

//  class ErrorBoundary extends React.Component{
//    constructor(props){
//      super(props)
//      this.state = {
//        hasError: false
//      }
//    }
//    componentDidCatch = (error, info) => {
//       //第一个参数指的是抛出的实际错误，第二个参数是指错误信息。
//       this.setState({
//         hasError: true
//       })
//    }
//    render () {
//      if(this.state.hasError){
//        return (
//         <Col span={8}>
//           <Card title='未知title' bordered={false}>未知content</Card>
//         </Col>
//        )
//      }
//      return this.props.children;
//    }
//  }

//  class Father extends React.Component{
//   state = {
//     data: {
//       name: 'test',
//       age: 20
//     },
//     card: [{
//       title: 'card1',
//       content: 'content1'
//     },{
//       title: 'card2',
//       content: 'content2'
//     },{
//       title: 'card3',
//       content: 'content3'
//     }]
//   }
//   renderCards() {
//     return this.state.card && this.state.card.map((card) => {
//       return (
//         <ErrorBoundary key={card.title}>
//           <Son card={card}/>
//         </ErrorBoundary>
//       );
//     });
//   }
//   render(){
//     return (
//       <div style={{ background: '#ECECEC', padding: '30px' }}>
//         <Row gutter={16}>
//           { this.renderCards() }
//           {/* <Son email = {123456789}/> */}
//           {/* <Table dataSource={this.state.data}/> */}
//         </Row>
//       </div>
//     )
//   }
//  }

// export default Father;





//官网温度转换例子重写
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.props.change(e.target.value,this.props.scale)
//   }
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   state = {
//     temperature1: '',
//     temperature2: ''
//   }
//   change = (temperature,scale) =>{
//     if(scale === 'c'){
//       this.setState({
//         temperature1: temperature,
//         temperature2: isNaN(temperature) || temperature === '' ? '' : parseFloat(temperature)+100
//       })
//     }else{
//       this.setState({
//         temperature2: temperature,
//         temperature1: isNaN(temperature) || temperature === '' ? '' : parseFloat(temperature)-100
//       })
//     }
//   }
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" temperature={this.state.temperature1} change={this.change}/>
//         <TemperatureInput scale="f" temperature={this.state.temperature2} change={this.change}/>
//       </div>
//     );
//   }
// }


// export default Calculator;

