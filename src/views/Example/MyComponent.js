import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project Manager', salary: '1000' }
        ]

    }


    addNewJob = (job) => {
        console.log('>>>check job from parent:', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('run didupdate:', 'prev state:', prevState, 'current state:', this.state)
    }

    componentDidMount() {
        console.log('run component did mount')
    }

    render() {
        console.log('>>>call render: ', this.state)
        // JSK luôn chỉ trả ra 1 block
        // <></> là fragment giúp code k lỗi kể cả khi tồn tại 2 div trong 1 component 

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />


            </>

        )
    }
}

export default MyComponent;
