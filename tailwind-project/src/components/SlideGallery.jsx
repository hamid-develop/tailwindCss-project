import Slide01 from '../images/slide1.jpg'
import Slide02 from '../images/slide2.jpg'

const SlideGallery = () => {
    return ( 
        <div className='container pt-4 grid grid-cols-2 sm:grid-cols-1 gap-4'>
            <a href='#' className=' aspect-video rounded-2xl overflow-hidden'>
                <img src={Slide01} alt="slide01" className='w-full h-full' />
            </a>
            <a href='#' className=' aspect-video rounded-2xl overflow-hidden'>
                <img src={Slide02} alt="slide02" className='w-full h-full' />
            </a>
        </div>
     );
}
 
export default SlideGallery;