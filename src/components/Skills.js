import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./interests"
function Skills (){
    return(
     <>
    <div className="skills">
        <h2 className="h2"> Compétences</h2>
        <Skill title="HTML/CSS" rating = "4"/>
        <Skill title="Sql" rating = "4"/>
        <Skill title="R" rating = "4"/>
        <Skill title="JAVA" rating = "4"/>
        <Skill title="Groovy" rating = "3"/>
        <Skill title="Kotlin" rating = "3"/>
        <Skill title="JAVASCRIPT" rating = "2"/>
        <Skill title="C/C++/C#" rating = "2"/>
        <Skill title="PHP" rating = "2"/>
    </div>
    <div className="skills">
        <h2 className="h2"> Langues</h2>
        <Skill title="Arabe" rating = "5"/>
        <Skill title="Anglais" rating = "3"/>
        <Skill title="Espagnol" rating = "2"/>
    </div>
    <Interests />
    
    </>
    )

}
export default Skills
