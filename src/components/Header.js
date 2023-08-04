import reactLogo from '../assets/react.svg'

export const Header = () => {
    return (
        <nav className='header-container'>
            <div className='flex justify-between bg-black'>
                <a href="https://react.dev" target="_blank" className='pl-20'>
                <img src={reactLogo} className="h-20 w-20 p-4 animate-spin-slow" alt="React logo" />
                </a>
                <button></button>
            </div>
           
        </nav>)
}