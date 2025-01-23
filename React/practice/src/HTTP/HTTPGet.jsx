import React, { Component } from 'react'
import axios from'axios'

class HTTPGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errormsg:''
      }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/data')
        .then(response=>{
            this.setState({posts:response.data})
        })
        .catch(
            error=>{
              this.setState({errormsg:'error retrieving the data'})
            }
        )
    }
    
  render() {
    const{posts,errormsg}=this.state
   
    return (
      <div>
        <h1>List of posts</h1>
        {posts.length?posts.map(post=>{return(<div key={post.id}>{post.title}</div>)}):(errormsg?<div>{errormsg}</div>:null)}
      </div>
    )
  }
}

export default HTTPGet
