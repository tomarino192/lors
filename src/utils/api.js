export const apiRequest = async (url, method = 'GET', data = null) => {
   try {
     const token = localStorage.getItem('token');
     
     const headers = {
       'Content-Type': 'application/json',
       ...(token && { 'Authorization': `Bearer ${token}` })
     };
 
     const config = {
       method,
       headers,
       ...(data && { body: JSON.stringify(data) })
     };
 
     const response = await fetch(url, config);
     const responseData = await response.json();
 
     if (!response.ok) {
       throw new Error(responseData.error || 'Request failed');
     }
 
     return responseData;
   } catch (err) {
     throw new Error(err.message || 'Something went wrong');
   }
 };