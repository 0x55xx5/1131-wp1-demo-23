import { Outlet } from "react-router-dom"; 
const HomePage_LO = () => {
  return (
    <>
      <div className='section-title' style={{ textAlign: 'center' }}>
        <h2 style={{ marginTop: '2rem' }}> Home Page for Midterm </h2>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          LO
        </h3>
      </div>
      <Outlet />
    </>

    
  );
};

export default HomePage_LO;
