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
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state){
    return{ users: state.users};
}

function loadUsers(store){
    return  store.dispatch(fetchUsers());
}

export  { loadUsers } ;

export default connect(mapStateToProps,{fetchUsers})(UsersList);