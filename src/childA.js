import React from 'react'
class ChildA extends React.Component {
    constructor(props){
        super();
        this.state = {
            obj: {
                name: props.name
            },
            count: 0
        }
    }
    // componentWillUnmount = () => {
    //     setTimeout(() => {
    //     	  localStorage.setItem('test','willUnmount');
    //     }, 1500);
    //     // localStorage.setItem('test','willUnmount')
    // }
    componentDidMount = () => {
        // let name = this.props.obj.name
        // this.setState({
        //     obj:{
        //         name: name + 'change'
        //     }
        // })
        // this.setState({
        //     obj: {
        //         name: name
        //     }
        // })
        // this.setState({
        //     count:this.state.count + 1
        // })
        // this.setState({
        //     count:this.state.count + 1
        // },() => {
        //     console.log(this.state.count)
        // })
        // this.setState((prevState, props) => ({
        //     count: prevState.count + 1
        // }));
        //  this.setState((prevState, props) => ({
        //     count: prevState.count + 1
        // }));
        // this.setState((prevState, props) => ({
        //     obj:{
        //         name: name + 'change'
        //     }
        //   }));
        // console.log('nameNow:'+this.state.obj.name);
        // console.log(this.state.count)
    }
    // static getDerivedStateFromProps = (nextProps,prevState) =>{
    //     // console.log(nextProps.obj.name)
    //     // console.log(prevState.obj.name)
    //     return {
    //         obj: {
    //             name: nextProps.obj.name
    //         }
    //     }
    // }
    // componentWillReceiveProps = (nextProps) =>{
    //     // console.log(nextProps.obj.name)
    //     // console.log(this.props.obj.name)
    //     if(nextProps.obj.name != this.props.obj.name){
    //         this.setState({
    //             obj:{
    //                 name: nextProps.obj.name
    //             }
    //         })
    //     }
    // }
    render() {
        console.log(this.props.name)
        return this.state.obj.name
    }
}
export default ChildA