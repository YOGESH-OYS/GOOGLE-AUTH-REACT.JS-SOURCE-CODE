import { GoogleLogin } from 'react-google-login' ;

const clientid = " YOUR CLIENT ID "

const onSuccess = (res) =>{
    console.log("done", res.profileObj);
}
const onFailure = (res) =>{
    console.log("notdone", res);
}

function Login() {
    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientid}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
} 

export default Login;