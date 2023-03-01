import AltHeader from "./AltComponents/AltHeader";
import AltAboutMe from "./AltComponents/AltAboutMe";
import AltSkills from "./AltComponents/AltSkills";
import AltProjects from "./AltComponents/AltProjects";
import AltContact from "./AltComponents/AltContact";
import AltFooter from "./AltComponents/AltFooter";
import './BonesLightApp.css';


function BonesLightApp() {
  return (
    <>
    <AltHeader />
    <AltAboutMe />
    <AltSkills /> 
    <AltProjects />
    <AltContact />
    <AltFooter />
    </>
  )
}

export default BonesLightApp;
