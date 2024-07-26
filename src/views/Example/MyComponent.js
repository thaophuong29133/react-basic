import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''

    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handelSubmit = (event) => {
        console.log('check state: ', this.state)
        event.preventDefault()
        alert("click me")
    }

    render() {
        console.log('>>>call render: ', this.state)
        // JSK luôn chỉ trả ra 1 block
        // <></> là fragment giúp code k lỗi kể cả khi tồn tại 2 div trong 1 component 

        return (
            <>

                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => { this.handleChangeLastName(event) }} /><br /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handelSubmit(event)} />
                </form>

                <ChildComponent
                    name={'child one'}
                    age={'25'}

                />


            </>

        )
    }
}

export default MyComponent;
