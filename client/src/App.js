//import Landing from "./pages/Landing";

import{BrowserRouter,Routes,Route,Link} from "react-router-dom"

import { Register,Landing,Error,ProtectedRoute } from "./pages";

import { AllJobs,Profile,SharedLayout,Stats
,AddJob
 } from "./pages/dashboard";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
      <Route path= "/"  element = {
      <ProtectedRoute>
         <SharedLayout/>
      </ProtectedRoute>
      }>
      <Route path = "/stats" element = {<Stats/>}/>
      <Route path = "/all-jobs" element = {<AllJobs/>}/>
      <Route path = "/add-job" element = {<AddJob/>}/>
      <Route path = "/profile" element = {<Profile/>}/>


      </Route>
      <Route path= "/register" element = {<Register/>}/>
      <Route path = "/landing" element ={<Landing/>}/>

      <Route path= "/*" element = {<Error/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
