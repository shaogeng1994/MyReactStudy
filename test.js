function Welcome(props) {
    return <h1>Hello,{props.name}</h1>
};

function App() {
    return (
        <div>
            <Welcome name="Ben" />
            <Welcome name="Jack" />
            <Welcome name="Alice" />
        </div>
    )
};

function formatDate(date) {
    return date.toLocaleDateString();
}


function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user = {MyAuthor.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


function UserInfo(props) {
    return (
        <div>
            <div className = "UserInfo">
                <img className
                    src={props.user.avatarUrl}
                    alt={props.user.name}
                />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        </div>
    );
}

function sum(a,b) {
    return a + b;
}

function withdraw(account,amount) {
    return account.total -= amount;
}

const MyAuthor = {
    author: {
        name: 'aa',
        avatarUrl: 'http://tva4.sinaimg.cn/crop.0.0.750.750.180/757c4c8bjw8et08n5e6mzj20ku0kujs8.jpg'
    },
    text: 'cc',
    date: new Date(),
    total: 1000
};

function MakeMoney(props) {
    return (
        <div>
            {sum(props.num,2)}
        </div>
    );
}



const element = (
    <div>
        <Comment date={MyAuthor.date} text={MyAuthor.text} author={MyAuthor.author} />
        <MakeMoney num={MyAuthor.total} />
        <div>
            {withdraw(MyAuthor,30)}
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);


