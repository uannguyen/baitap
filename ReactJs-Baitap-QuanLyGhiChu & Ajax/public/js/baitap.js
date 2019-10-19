var list; 

// Component này là component chứa nội dung các note trong Component List
class Note extends React.Component{
    constructor(props) {
        super(props);
        this.delete=this.delete.bind(this)
        this.edit=this.edit.bind(this)
        this.save=this.save.bind(this)
        this.cancel=this.cancel.bind(this)
        this.state={
            onEdit : false
        }
    }
    delete(){
        $.post('/delete',{idXoa : this.props.id},function(data){
            list.setState({mang:data });
        });
    }
    edit(){
        this.setState({onEdit : true});
    }
    save(){
        var note=this;
        $.post('/update',{idSua:this.props.id,noidung:this.refs.txt.value},function(data){
            list.setState({mang: data});

            // nếu để ở đây là this.setState thì nó sẽ không hiểu là
            // this của component Note nên ta phải khai báo 1 biến xog gán nó là this
            
            note.setState({onEdit:false});
        });
    }
    cancel(){
        this.setState({onEdit:false});
    }
render() {
    if(this.state.onEdit){
        return(
            <div className="note">
             <input ref="txt" defaultValue={this.props.children} />
                <button className="button" onClick={this.save}>Lưu</button>
                <button className="button" onClick={this.cancel}>Hủy</button>
            </div>
        )
    }else{
        return (
            <div className="note">
             <p>{this.props.children}</p>
                <button className="button" onClick={this.delete}>Xóa</button>
                <button className="button" onClick={this.edit}>Sửa</button>
            </div>
        );
    }
    
}
};
//Component List là component bao lại các note của Component Note
class List extends React.Component{
    constructor(props) {
        super(props);
        list=this
        this.add=this.add.bind(this)
        this.getState=this.getState.bind(this)
        this.state={mang:[]}
    }
    
    getState(){
        
        this.setState({mang : this.state.mang});
    }
    add(){
        ReactDOM.render(
            <InputText></InputText>
            ,
            document.getElementById('add-div')
        )
    }
    render() {
        return (
            <div className="list">
                <button onClick={this.add}>Thêm</button>
                <div id="add-div"></div>
                {
                    this.state.mang.map(function(note,index){
                        return <Note key={index} id={index}>{note}</Note>
                        
                    })
                }
                
            </div>
        );
    };

    /* Này là dùng dữ liệu từ server truyền qua..
        Tạo 1 mảng trong index.js sau đó gán phương thức post cho mảng dữ liệu
        Xong qua đây gọi ra dùng... vẫn dùng state của component List...
        list ở đây tương tự this ở trong component List 
     */
    componentDidMount(){
        $.post('/getNote',function(data){
            list.setState({mang : data});
        });
    };

    };

class InputText extends React.Component{
    constructor(props) {
        super(props);
        
        this.sendNote=this.sendNote.bind(this)
    }
    sendNote(){
        // Này là lấy dữ liệu từ server mà ko qua mảng tạo trong component nữa
        $.post("/add",{note : this.refs.txt.value},function(data){
            list.setState({mang : data})
        });

        //Liên kết tới mảng ở Component List và sử dụng concat để nói chuỗi
        // refs là lấy giá trị mình nhập từ thẻ input để đưa vào cái mảng này
                // list.setState({mang : list.state.mang.concat(this.refs.txt.value)});

        // Sau khi nhấn vào nút Gửi Note thì cái dòng input với nút button đó ẩn đi
        ReactDOM.unmountComponentAtNode(document.getElementById('add-div'))
    }
    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Ghi note vào đây !!"></input>
                <button onClick={this.sendNote}>Gửi Note</button>
            </div>
        );
    }
}


ReactDOM.render(   
    <div>
        
        <List></List>
    </div>
, 
document.getElementById("root")
);