

class ThayImage extends React.Component{
    constructor(props) {
        super(props);
        this.Next=this.Next.bind(this)
        this.Back=this.Back.bind(this)
        this.state = {
            hinh : 1
        }
    }
   
    Next(){
        this.setState({hinh : this.state.hinh==4?4:this.state.hinh +1})
    }
    Back(){
        this.setState({hinh :this.state.hinh==1?1: this.state.hinh -1})
    }
    
    render() {
        return (
            <div className="image">
               <img src={"images/"+this.state.hinh +".jpg"}></img>
               <button onClick={this.Back}>Quay Lại</button>
               <button onClick={this.Next}>Ảnh kế tiếp</button>
            </div>
        );
    }
   
}
class AutoThayImage extends React.Component{
    constructor(props) {
        super(props);
        this.changeImage= this.changeImage.bind(this)
        this.state = {
            hinh : 1
        }
    }
    changeImage(){
        this.setState({hinh:(this.state.hinh %4) +1})
    }
    componentDidMount(){
        setInterval(this.changeImage, 1000)
    }
    render() {
        return (
            <div className="image">
                <h1>Tự động chuyển ảnh </h1>
               <img src={"images/"+ this.state.hinh + ".jpg"}></img>
              <h1> {this.state.hinh}</h1>
               
            </div>
        );
    }
   
}

//Component này sẽ render ra từ mảng đối tượng
class Note extends React.Component{
    render(){
        return(
            <div className="image">
            <h1>{this.props.children}</h1>
            </div>
        )
    }
}
class String extends React.Component{
    constructor(props) {
        super(props);
        this.addString =this.addString.bind(this)
        this.state={
            mang: ["Gấu bông","Thú nhồi bông","Gà bông"]
        }
    }
    addString(){
        this.state.mang.push("Mảng thêm","Mảng thêm 2");
        this.setState(this.state);
    }
    render() {
        return (
            <div className="image">
           {this.state.mang.map(function(note,index){
               return <Note key={index}>{note}</Note>    
           })
            }
           
           <button onClick={this.addString}>Thêm Mảng</button>
        </div>
        );
    }
}
ReactDOM.render(
    <div>
        <String />
        <Note ></Note>
        <ThayImage />
        <AutoThayImage />
        
    </div>
    ,document.getElementById('root2')
);