import './App.css';
import Button from './components/Button';
import jessicaImage from './images/jessica.jpeg';

function App() {

  return (
    <>
      <div className='bg-darkGray rounded-lg text-center py-6 sm:py-10 grid gap-5 shadow-lg'>
        {/* Photo-user */}
        <div className='flex justify-center'>
          <img src={jessicaImage} alt="Jessica" width={80} height={80}
          className='rounded-full shadow-lg' />
        </div>
        {/* Data user */}
        <div className='grid gap-2'>
          <h1  className='text-2xl text-White font-inter-bold m-0'>
            Jessica Randall
          </h1>
          <p className="text-Green m-0 font-inter-semibold text-sm">
            London, United Kingdom
          </p>
        </div>

        {/* Skills */}
        <p className="text-White/90">
          "Front-end developer and avid reader"
        </p>

        <div className="grid gap-4">
          <Button title="Github" />
          <Button title="Frontend Mentor" />
          <Button title="Linkedin" />
          <Button title="Twitter" />
          <Button title="Instagram" />
        </div>
      </div>
    </>
)}

export default App
