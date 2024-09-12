const NavLinks = ({handleLinkClick, activeSection}) => (
    <div className='flex flex-col text-right p-4 md:flex-row md:p-0 md:text-xl md:mx-2 lg:text-2xl'>
        <a href='#hero' className={`m-2 ${activeSection === 'hero' ? 'text-indigo-500 font-bold' : ''}`} onClick={handleLinkClick}>Home</a>
        <a href='#about' className={`m-2 ${activeSection === 'about' ? 'text-indigo-500 font-bold' : ''}`} onClick={handleLinkClick}>About</a>
        <a href='#skills' className={`m-2 ${activeSection === 'skills' ? 'text-indigo-500 font-bold' : ''}`} onClick={handleLinkClick}>Skills</a>
        <a href='#contact' className={`m-2 ${activeSection === 'contact' ? 'text-indigo-500 font-bold' : ''}`} onClick={handleLinkClick}>Contact</a>
    </div>
)

export default NavLinks