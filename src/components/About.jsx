
// import img from '../assets/dough.jpg'
import img1 from '../assets/about.jpg'
import Button from '../Layouts/Button'
const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center gap-9 lg:px-32 px-5'>
        <img className='' src={img1} alt="dough" />
        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>Why we're the right choice for you</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis officia sequi temporibus ab. Magnam possimus et fuga sunt beatae sapiente quos tempore magni voluptates, rerum, porro eius nostrum fugiat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius aut excepturi doloribus cupiditate rerum, minima optio molestias atque nostrum.</p>
            <div className='flex justify-center lg:justify-start'>
                <Button title='Learn More'/>
            </div>
        </div>
    </div>
  )
}

export default About