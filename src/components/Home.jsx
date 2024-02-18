
import Button from "../Layouts/Button"
// import img from '../assets/'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/bgimg.jpg')] bg-cover bg-no-repeat">
        <div className="m-full lg:w-2/3 space-y-5">
            <h1 className="text-black font-semibold text-6xl">It is a safe space to unleash the foodie </h1>
            <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit ab quia sed accusantium dignissimos voluptates? Odio cum quos quia?</p>
                <div className="lg:pl-44">
                <Button title='Click To Order'/>
                </div>

        </div>

    </div>
  )
}

export default Home