import React from 'react';

class ChildComponent extends React.Component {

    state = {

    }


    render() {
        console.log('>>>check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age } = this.props;
        // JSK luôn chỉ trả ra 1 block
        // <></> là fragment giúp code k lỗi kể cả khi tồn tại 2 div trong 1 component 

        return (
            <>

                <div> child component name: {name} - {age}
                </div>

            </>
        )
    }
}

export default ChildComponent;
