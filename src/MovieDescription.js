import React, {Component} from "react"


class MovieDescription extends Component {
  render() {
   const userFavs = this.props.userFavorite;
   if (userFavs.length === 0) {
    	return <div> Nobody like me </div> 
   } 
     return userFavs.map((profile) => {
       console.log(this.props);
       	const user = this.props.users[profile.userID];
        return <div>{user.name}</div>
     });
   
  }
  
};

export default MovieDescription;