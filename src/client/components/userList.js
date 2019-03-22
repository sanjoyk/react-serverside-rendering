import React, { Component} from "react";
import { connect } from "react-redux";
import { fetchUsers} from "../actions";

class UsersList extends Component{
    componentDidMount(){
        // console.log("jjjaskjdbf lan dfskn asldf nalskd fnlkas ndflkn aslkdfsn aklsn dflkasn dfkln aslkdfn aklndflkas ndfl")
        this.props.fetchUsers();
    }
    renderUsers(){
        return this.props.users.map(user=>{
            return <li key={user.id} >{user.name}</li>
        })
    }
    render(){
        return(
            <div>
                Here's a buig list of users:
                {this.renderUsers()}
            </div>
        )
    }
}

function mapStateToProps (state){
    return{ users: state.users};
}

export default connect(mapStateToProps,{fetchUsers})(UsersList);