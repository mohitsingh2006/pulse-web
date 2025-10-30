import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>  
  </StrictMode>,
)




// fetch("https://fwqjn40z-3002.inc1.devtunnels.ms/api/auth/login",{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),
        //     })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json(); 
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
            
		// try {
        //      console.log('try')
        //              const toastId = toast.loading("Please wait...")
        //     const response = await axios.post("https://fwqjn40z-3002.inc1.devtunnels.ms/api/auth/login",
        //         data,
                
        //     );
        //     if(response.data.token) {

        //         const userInfo = {
        //             token:response.data.token,
        //             id:response.data.user.id,
        //             name:response.data.user.name,
        //             email:response.data.user.email
        //         }

        //         localStorage.setItem("pulse-user-info", userInfo);
        //         reset();

        //         setTimeout(() => {
        //             navigate("/dashboard");
        //         },1000)                
        //     } else {
        //         toast.error(response.data.message, {
        //             id: toastId
        //         });

        //         reset({password:''});
        //     }           
        //     } catch (err) {
        //         console.log(err)
        //         toast.error(err.response?.data?.message || "Login failed")

        //         setTimeout(() => {
        //             toast.dismissAll();
        //         },5000) 
        //     }
