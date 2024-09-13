const CurrentWork = () => (
    <article className="mt-10 space-y-4">
        <h3 className='text-3xl font-semibold'>What am I currently working on?</h3>
        <ul className='list-disc list ml-4 mt-4'>
            <li>A web application to track the stock and crypto markets giving predictions based on regularly updated data.
                <ul className='list-disc list-inside'>
                    <li>React</li>
                    <li>Spring Boot</li>
                    <li>Python ML</li>
                </ul>
            </li>
            <li className='mt-4'>A home server to host various web applications and store personal data
                <ul className='list-disc list-inside'>
                    <li>Linux</li>
                    <li>Network administration</li>
                    <li>PC building</li>
                </ul>
            </li>

        </ul>
    </article>
)

export default CurrentWork