import React from "react"
import "./FormationExperience.css"
import DataFormations from "../Datas/Formations"
import DataExperiences from "../Datas/Experiences"
import Formations from "./Formations"
import Experiences from "./Experiences"

function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  )
}

export default FormationsExperiences