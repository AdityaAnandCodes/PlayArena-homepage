import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[156px] py-3 bg-black">
        <Logo />
        <div className="flex gap-6 items-center text-white font-normal text-base">
            <div>Play</div>
            <div>Participate</div>
            <div>Host</div>
            <div>F&B</div>
        </div>
        

    </nav>
  )
}

export default Navbar