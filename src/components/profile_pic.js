import React, { Component } from 'react';

class ProfilePic extends Component {
    render() {
        return (
        <div className="col-lg-4 pull-xs-left">
           <img src="../../style/images/profile_pic.JPG" alt="profile pic" className="img-responsive img-thumbnail" id="profile-img"></img>
        </div>
        );
    }
}

export default ProfilePic;