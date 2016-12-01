class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date : new Date(),day : 'dark'};
    }

    componentDidMount() {
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date : new Date(),day : 'dark'});
    }

    render(props) {
       return (
            <div>
                <h1>Hello,world！</h1>
                <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
                <h1>It is {this.state.day}.</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)

function tick() {
    ReactDOM.render(
            <Clock date={new Date()}/>,
            document.getElementById('root')
        );
}






// ReactDOM.render(
//     <Clock date = {new Date()}/>,
//     document.getElementById('root')
// );