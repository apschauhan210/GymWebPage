import axios from "axios";

// const apiBaseUrl = "http://localhost:3030";
const apiBaseUrl = "http://gymcenter.us-east-2.elasticbeanstalk.com";

const UserService = {

    registerUser: function(userData) {
        return axios.post(`${apiBaseUrl}/register`, userData);
    },

    loginUser: function(userData) {
        return axios.post(`${apiBaseUrl}/login`, userData);
    },

    userDetails: function(id) {
        return axios.get(`${apiBaseUrl}/user/${id}`,{
          headers: {
              accessToken: sessionStorage.getItem('accessToken')
          }  
        });
    }

}

export default UserService;