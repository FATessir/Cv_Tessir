import React from "react"
import "./User.css"
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function User (){
    return (<div className="user">
        <img src="./images/Profil.PNG" alt="" className="user__avatar"/>
        <h1 className="user_name"> Tessir FAHMI ALI</h1>
        <div className="user_infos">
            <p className="user_info"> <HomeIcon/> Traverse des minimes , 83000 Toulon </p>
            <p className="user_info"> 
            <a href = "tel:+33769120965"> <PhoneIcon/> 0769120965</a> </p>
            <p className="user_info"> <MailIcon/>
            <a href = "mailto:tessi.phi20@gmail.com">tessi.phi20@gmail.com </a>
            </p>
            <p className="user_info"> <LinkedInIcon/><a href = "https://www.linkedin.com/in/tessir-f-99a506167/">https://www.linkedin.com/in/tessir </a>
            </p>
            

        </div>
    </div>
    )

}
export default User
