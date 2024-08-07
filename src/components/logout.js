import { GoogleLogout } from 'react-google-login' ;

const clientid = process.env.CLINTID;

const onSuccess = () =>{
    console.log("done");
}


function Logout() {
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientid}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
} 

export default Logout;