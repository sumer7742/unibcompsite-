import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Services from "../pages/Services";
import Careers from "../pages/careers";
import Contact from "../pages/Contact";
import Apply from "../pages/Apply";
import WebDevelopment from "../pages/WebDevelopment";
import MobileApp from "../pages/MobileApp";
import UI from "../pages/UI";
     import EnterpriseSolutions from "../pages/EnterpriseSolutions"
        function AppRoutes () {
            return (
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apply" element={<Apply/>}/>
          <Route path="/WebDevelopment" element={<WebDevelopment/>}/>
         <Route path="/MobileApp" element={<MobileApp/>}/>
          <Route path="/UI" element={<UI/>}/>
           <Route path="/EnterpriseSolutions" element={<EnterpriseSolutions/>}/>
        </Routes>

            )
        }
        
        export default AppRoutes
        