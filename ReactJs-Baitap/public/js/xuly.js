class Them extends React.Component{
    constructor(props) {
        super(props);
        this.state = {number : 0} 
        this.add = this.add.bind(this);
    }
    
    add(){
        this.setState({number : this.state.number +1});
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>Thêm {this.state.number}</button>
            </div>
        );
    }
};


ReactDOM.render(
    <div>
        <Them />
    </div>
    
    
    ,
    document.getElementById('root')
);