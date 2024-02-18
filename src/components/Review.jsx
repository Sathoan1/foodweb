
import ReviewCard from '../Layouts/ReviewCard'
import img1 from '../assets/profile.jpg'
import img2 from '../assets/profile2.jpg'
import img3 from '../assets/profile3.jpg'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center md:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'> Customer's Review</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={img1} name='Oamen Mathias'/>
            <ReviewCard img={img2} name='Oamen Mathias'/>
            <ReviewCard img={img3} name='Oamen Mathias'/>
        </div>
    </div>
  )
}

export default Review