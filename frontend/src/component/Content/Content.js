import React, {Component} from 'react';
import './Content.css';
import {postDecode, postEncode} from "../../Store/actions";
import {connect} from "react-redux";


class Content extends Component {
    state={
        password: null,
        encode: '',
        decode: '',
    };

    getValuePassword =(event)=>{
        this.setState({[event.target.name] : event.target.value})
    };

    postEncode = async ()=>{
        if (this.state.password){
            await this.props.postEncode({password: this.state.password, encode: this.state.encode});
            await  this.setState({decode: this.props.encode, encode: ''})
        }else{
            alert('Введите PASSWORD')
        }
    };
    postDecode= async ()=>{
        if (this.state.password){
            await this.props.postDecode({password: this.state.password, decode: this.state.decode});
            this.setState({encode: this.props.decode, decode: ''})
        }else{
            alert('Введите PASSWORD')
        }
    };

    render() {
        return (
            <div>
                <div className="block">
                    DECODE:
                    <textarea
                        rows="12"
                        cols="50"
                        name="encode"
                        value={this.state.encode}
                        onChange={(event)=>this.getValuePassword(event)}/>
                </div>
                <div className="form-block">
                    <input
                        type="text"
                        name="password"
                        onChange={(event)=>this.getValuePassword(event)}/>
                    <button onClick={()=>this.postEncode()}>&#11015;</button>
                    <button onClick={()=>this.postDecode()}>&#11014;</button>
                </div>
                <div className="block">
                    ENCODE:
                    <textarea
                        rows="12"
                        cols="50"
                        name="decode"
                        value={this.state.decode}
                        onChange={(event)=>this.getValuePassword(event)}/>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    encode: state.encode,
    decode: state.decode,
    password: state.password
});
const mapDispatchToProps = dispatch => ({
    postEncode: (password) => dispatch(postEncode(password)),
    postDecode: (password) => dispatch(postDecode(password))
});
export default connect(mapStateToProps, mapDispatchToProps) (Content);