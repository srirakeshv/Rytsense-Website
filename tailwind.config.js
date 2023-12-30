/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    darkMode: 'class',
    
    extend: {
      boxShadow: {
        "3xl": "3px 30px 30px -15px rgba(0, 0, 0, 0.1)",
      },
      
      // colors: {
      //   black: '#333333',
      //   blue: '#334982',
      //   grey: '#f3f3f3',
      //   orange: '#fdb913',
      //   pink: '#e40087',
      //   purple: '#782b8f',
      //   red: '#dd372f',
      //   teal: '#00857d',
      //   white: '#fff',
        
      // },
     
      screens: {
        ss: "550px",
        st: "480px",
        ll: "840px",
        sf: "510px",
      },
      backgroundColor: {
        blue1: "#3D5AA4",
      },
      colors: {
        blue1: "#3D5AA4",
        pink1: "#BB3C44CF",
        black: '#333333',
        blue: '#334982',
        grey: '#f3f3f3',
        orange: '#fdb913',
        pink: '#e40087',
        purple: '#782b8f',
        red: '#dd372f',
        teal: '#00857d',
        white: '#fff',
      },
     
    },
  },
  
 
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  experimental :{
    applyComplesClasses:true,
  },
  
};
