
import DishesCard from '../Layouts/DishesCard'
import img1 from '../assets/premium.jpg'
import img2 from '../assets/premium-3.jpg'
import img3 from '../assets/premium-4.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center item-center lg:px-32 px-5 '>
        <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Premium Deals</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1} title='Fill Me Up' price='$20.00'/>
            <DishesCard img={img2} title='Fill Me Up' price='$20.00'/>
            <DishesCard img={img3} title='Fill Me Up' price='$20.00'/>
        </div>
    </div>
  )
}

export default Menu