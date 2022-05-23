var URL_REST= "http://localhost:8089/"
var URL ="http://localhost:3000/"
const token = localStorage.getItem('token');
const AuthStr = 'Bearer '+token;
let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Accept-Language": "application/json",
    "Authorization": AuthStr
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {URL,URL_REST,headersList}
