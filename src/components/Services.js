import webdesign from '../assets/images/png/webdesign.png'
import webapp from '../assets/images/png/webapp.png'
import uiux from '../assets/images/png/uiux.png'

export default function Services(props) {
  return (
    <section onMouseEnter={() => props.setIsActive(2)} id='services' className="xl:pt-[80px] lg:pt-[80px] md:pt-[80px] pt-10" >
      <div>
        <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold my-2 pl-10'>Services</h2>
      </div>
      <div className='lg:flex gap-5 '>
        <div className='md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center shadow-2xl p-10 rounded-2xl mb-10'>
          <div className='hover:scale-125 duration-500'>
            <img className=" shadow-2xl mx-auto  rounded-lg" alt="webapp" src={webapp} />
          </div>
          <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2'>Web Application Development</h3>
          <p className='py-2'>
            Designed and built a web application with React and Node.js. Unit testing and code reviews were carried out to ensure code quality and maintainability.
          </p>
        </div>
        <div className='md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center shadow-2xl p-10 rounded-2xl mb-10'>
          <div className='hover:scale-125 duration-500'>
            <img className="shadow-2xl mx-auto  rounded-lg" alt="webdesign" src={webdesign} />
          </div>
          <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2'>Website Design and Development</h3>
          <p className='text-md py-2'>
            Designed and built a responsive website for a non-profit organization. Implemented SEO best practices to boost search engine rankings and organic traffic.
          </p>
        </div>
        <div className=' md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center shadow-2xl p-10 rounded-2xl mb-10'>
          <div className='hover:scale-125 duration-500'>
            <img className=" shadow-2xl mx-auto  rounded-lg" alt="uiux" src={uiux} />
          </div>
          <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2 '>UX/UI Design for Mobile App</h3>
          <p className='py-2'>
            Conducted user research and developed wireframes and prototypes for a mobile app. Designed and developed a user-friendly interface and visual design for the app.
          </p>
        </div>
      </div>
    </section>
  );
};