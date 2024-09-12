import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(
            'service_m4pzeev',
            'template_e7xhrtd',
            formData,
            '-GEyCjwJI9JqI66rK'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSubmitted(true);
        }).catch((err) => {
            console.error('Failed to send email:', err)
        })
    }

    return (
        <section id='contact' className='flex flex-col items-center justify-center mt-14 mx-auto bg-bglt w-fit p-8 rounded-3xl'>
            <h2 className='text-4xl my-4 font-bold'>Contact</h2>
            {isSubmitted ? (
                <p>Thank you for your message!</p>
            ) : (
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                    <div className='my-4 flex items-center'>
                        <label className='pr-4'>Name: </label>
                        <input
                            className='rounded bg-stone-200 text-black p-2 border-2 border-indigo-300' 
                            type='text' 
                            name='name' 
                            value={formData.name} 
                            onChange={handleChange} 
                            required/>
                    </div>
                    <div className='my-4 flex items-center'>
                        <label className='pr-4'>Email: </label>
                        <input
                            className='rounded bg-stone-200 text-black p-2 border-2 border-indigo-300' 
                            type='email' 
                            name='email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            required/>
                    </div>
                    <div className='my-4 flex items-center'>
                        <label className='pr-4'>Message: </label>
                        <textarea
                            className='rounded bg-stone-200 text-black p-2 border-2 border-indigo-300' 
                            name='message' 
                            value={formData.message} 
                            onChange={handleChange} 
                            required/>
                    </div>
                    <button type='submit' className='bg-stone-200 text-black font-bold px-10 py-2 rounded border-indigo-300 border-2'>Send</button>
                </form>
            )}
            
        </section>
    )
}

export default Contact