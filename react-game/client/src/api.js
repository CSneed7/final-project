import axios from "axios";

export default {
    isLoggedIn: function(){
        return axios.get("/api/isloggedin");
    },
    signUp: function(info){
        return axios.post("/auth/signup", info);
    },
    Login: function(info){
        return axios.post("/auth/login", info);
    },
    Logout: function(info){
        return axios.get("/auth/logout", info);
    },
    userScore: function(info){
        return axios.get("/api/userscore/" + info);
    },
    allScore: function(info){
        return axios.get("/api/allscore", info);
    },
    postScore: function(info, scoring){
        return axios.post("/api/postScore/" + info, scoring);
    },
}