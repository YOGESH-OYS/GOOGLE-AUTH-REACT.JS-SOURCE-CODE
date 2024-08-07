import { GoogleLogin } from 'react-google-login' ;

const clientid = process.env.CLINTID;

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
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
} 

export default Login;