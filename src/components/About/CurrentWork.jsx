const CurrentWork = () => (
    <article className="mt-10 space-y-4">
        <h3 className='text-3xl font-semibold'>What am I currently working on?</h3>
        <ul className='list-disc list ml-4 mt-4'>
            <li>An interactive periodic table web application.
                <ul className='list-disc list-inside'>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                </ul>
            </li>
            <li className='mt-4'>A platforming game about my silly little dog
                <ul className='list-disc list-inside'>
                    <li>Java</li>
                    <li>LibGDX</li>
                    <li>Asset Management & Design</li>
                </ul>
            </li>

        </ul>
    </article>
)

export default CurrentWork
