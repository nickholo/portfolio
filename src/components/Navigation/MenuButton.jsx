const MenuButton = ({isMenuOpen, toggleMenu}) => (
    <button
        className='block md:hidden text-white focus:outline-none'
        onClick={toggleMenu}
    >
        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
    </button>
)

export default MenuButton