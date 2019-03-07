import React from 'react'
class First extends React.Component {
    state = { val: 0 }
    
    componentWillMount(){
      // setTimeout(() => {
      //   console.log(localStorage.getItem('test'));
      // }, 2000);
      console.log(localStorage.getItem('test'))
      // console.log('willMount');
    }
    // componentDidMount(){
    //   console.log(localStorage.getItem('test'));
    //   // console.log(localStorage.getItem('test'))
    //   // console.log('willMount');
    // }
    // increment = () => {
    //     this.setState({ val: this.state.val + 1 })
    //     console.log(this.state.val) // 输出的是更新前的val --> 0
    // }
    // changeValue = () => {
    //     this.setState({ val: this.state.val + 1 })
    //     console.log(this.state.val) // 输出的是更新后的值 --> 1
    //   }
    // static getDerivedStateFromProps(nextProps, prevState){
      
    // }
    //  componentDidMount() {
    //     document.body.addEventListener('click', this.changeValue, false)
    //  }
    
    // render() {
    //     return (
    //     <div onClick={this.increment}>
    //         {`Counter is: ${this.state.val}`}
    //     </div>
    //     )
    // }
    render() {
      console.log('111111111')
        return (
          <div>
            {`Counter is: ${this.state.val}`}
          </div>
        )
    }
}
export default First