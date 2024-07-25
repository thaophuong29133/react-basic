import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Emi',
        channel: 'Hoi dan IT'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        // JSK luôn chỉ trả ra 1 block
        // <></> là fragment giúp code k lỗi kể cả khi tồn tại 2 div trong 1 component 
        // let name = 'Emi';
        return (
            <>

                <div className='first'>

                    My youtube channel : {this.state.channel}
                </div>
                <div>
                    Hello my component. My name is {this.state.name}
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
            </>
        )
    }
}

export default MyComponent;
