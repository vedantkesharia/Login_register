import React from 'react';
import { Link } from 'react-router-dom'; 
import loginImage from "../img/background_login.jpg";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage: `url(${loginImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
      {/* <div className="bg-white backdrop-blur-sm bg-opacity-60 p-8 rounded-lg shadow-lg opacity-90 w-96 text-center"> */}
      <div className="backdrop-blur-sm bg-white/60 p-8 rounded-lg shadow-lg opacity-90 w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="text-left">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mx-auto"
          >
            Login
          </button>
        </form>
        
        <p className="mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;









// import React from 'react';
// import loginImage from "../img/background_login.jpg"

// function Login() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center" style={{
//       backgroundImage: `url(${loginImage})`,
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center', 
//     }}>
//       <div className="backdrop-blur-sm bg-white/60 p-8 rounded-lg shadow-lg opacity-90 w-96">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;