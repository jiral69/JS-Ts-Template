import { useState, useEffect } from 'react'

import './App.css'
interface HealthRes{
    status:string;
    message:string
  }
function App() {
  const [connection, setConnection]= useState<HealthRes | string>();

  
  
  useEffect(()=>{
    async function loadServer():Promise<void>{
      try{
        const response:Response=await fetch('http://localhost:3002/api/health');
        const data:HealthRes= await response.json();

        setConnection(data);


      }catch(error){
        console.error("failed to load the server ",error);
      }

    }

    loadServer();
  }, []);
  
   console.log(connection);

   return (
    <div style={{ padding: '20px', backgroundColor: '#121214', color: 'white', height: '100vh' }}>
      <h1>Personal OS Template</h1>
      {/* We use optional chaining (?) to safely check if the object exists before reading .message */}
      <p>Status: {typeof connection === 'string' ? connection : connection?.message || 'Loading...'}</p>
    </div>
   );
}

export default App
