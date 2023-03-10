import figma from '../assets/images/png/figma.png'
import adobe from '../assets/images/png/adobe.png'
import react from '../assets/images/png/react.png'
import next from '../assets/images/png/next.png'
import laravel from '../assets/images/jpg/laravel.jpg'
import vscode from '../assets/images/jpg/vscode.jpg'

export default function Tools(props) {
    return (
        <section onMouseEnter={() => props.setIsActive(3)} id='tools' className="xl:pt-[80px] lg:pt-[80px] md:pt-[80px] pt-10">
           <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold my-2 pl-10' >Tools</h2>
          <div className='flex flex-wrap justify-center lg:gap-10 gap-5'>
              <div className='hover:scale-125 duration-500'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="figma" src={figma}/>
              </div>
              <div className='hover:scale-125 duration-500 '>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="adobe" src={adobe}/>
              </div>
              <div className='hover:scale-125 duration-500'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="react" src={react}/>
              </div>
              <div className='hover:scale-125 duration-500'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="laravel" src={laravel}/>
              </div>
              <div className='hover:scale-125 duration-500'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="vscode" src={vscode}/>
              </div>
              <div className='hover:scale-125 duration-500'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="next" src={next}/>
              </div>
          </div>
        </section>
    );
};