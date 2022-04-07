import profileImg from '../images/profile.jpg';
import irFlag from '../images/rtl.png';

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-white border-b border-style shadow-lg">
      <section className="container h-full flex items-center justify-between">
        
          <div className="flex-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</div>
          <div className='flex-center flex-row-reverse gap-4'>
          <a href='#'>
              <img src={profileImg} alt="profile_img" className='w-8 h-8 rounded-full' />
          </a>
          <div className='flex-center w-10 h-10 rounded-full  hover:shadow-lg custom-transition'>
              <img src={irFlag} alt="rtl" className='w-8 h-6 cursor-pointer' />
          </div>
          <div className='flex-center w-10 h-10 rounded-full hover:shadow-lg custom-transition'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
          </div>
          </div>
      </section>
    </nav>
  );
};

export default Navbar;
