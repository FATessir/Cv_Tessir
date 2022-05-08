import React from 'react'
import './App.css'
import User from './components/User';
import Skills from './components/Skills';
import Profil from './components/Profil';
import FormationsExperiences from './components/FormationExperience';
import DarkMode from './components/DarkMode';
import { Preview, print } from "react-html2pdf"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
function App() {
//   const handleGenerateCv = () => {
//   const cvTemplate = document.getElementById("cv-print")
//  html2canvas(cvTemplate)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = jsPDF();
//         pdf.addImage(imgData, 'JPEG', 0, 0);
//         // pdf.output('dataurlnewwindow');
//         pdf.save("download.pdf");
//       })
//       .catch( error =>  console.log(error) );
//       ;
//   };
    const handleGenerateCv = () => {
      let cvTemplate = document.getElementById("cv-print")
      cvTemplate.setAttribute("style", "width:180mm !important")
      cvTemplate.classList.add("cv-print")
      document.body.classList.remove("dark")
      setTimeout(() => {
        print("cv", "cv-print")
        cvTemplate.setAttribute("style", "width:100% !important")
        cvTemplate.classList.remove("cv-print")
      }, 300)
    }
  
     return (
     <Preview id={"cv-print"} class="cv-print">
      <div id="cv-print" className="App">
        <div className="grid_container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <button onClick={handleGenerateCv}> <PictureAsPdfIcon /> </button> 
              
              </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>
        {/* react, material ui, react-html2pdf */}
        {/* Installation, Nettoyage & paramétrage */}
        {/* Variables CSS */}
        {/* Colonne de gauche * /} 
      {/* Détails personnels - User */}
        {/* Compétences - skills */}
        {/* Langues - skills */}
        {/* Centres d'intérêts - interests */}
        {/* Colonne de droite * /} 
      {/* Profil - profil */}
        {/* Formation  - education */}
        {/* Expériences professionelles - experiences */}
        {/* Ligth & Dark mode */}
        {/* Export PDF (react-html2pdf) */}
      </div>
    </Preview>
  )
}
export default App
