import React from 'react'
class ChildB extends React.Component {
    componentWillMount(){
        setTimeout(() => {
           console.log(localStorage.getItem('test'));
        }, 2000);
        // console.log(localStorage.getItem('test'))
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}
export default ChildB