import axios from "axios";

export default {
    isLoggedIn: function(){
        return axios.get("/api/isloggedin");
    },
    signUp: function(info){
        return axios.post("/auth/signup", info);
    }
}