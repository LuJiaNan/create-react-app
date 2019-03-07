import React from 'react'
class First extends React.Component {
    state = {
        val: 0
    }
    componentWillUnmount(){
        // setTimeout(() => {
        //     localStorage.setItem('test','willUnmount')
        // }, 1999);
        localStorage.setItem('test','willUnmount')
        console.log('2222')
        // console.log('willUnmount');
    }

    // componentDidMount = () =>{
    //     this.setState({
    //         val: this.state.val + 1
    //     })
    //     console.log(this.state.val);
    //     this.setState(function(state, props) {
    //         return {
    //             val: this.state.val + 1
    //         }
    //     })
    //     console.log(this.state.val);
    //     this.setState({
    //         val: this.state.val + 1
    //     })
    //     this.setState(function(state, props) {
    //         return {
    //             val: this.state.val + 1
    //         }
    //     })
    //     console.log(this.state.val);
    //     setTimeout( _ => {
    //         this.setState({
    //             val: this.state.val + 1
    //         })
    //         console.log(this.state.val);
    //         this.setState({
    //             val: this.state.val + 1
    //         })
    //         console.log(this.state.val);
    //     }, 0)
    // }
    render() {
        return (
            <div>{this.state.val}{this.props.name}</div>
        )
    }
}
export default First