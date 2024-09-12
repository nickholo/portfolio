import { useState } from 'react'
import emailjs from 'emailjs-com'
import FormField from './FormField'
import SubmitButton from './SubmitButton'

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
                    <FormField
                        label='Name'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <FormField
                        label='Email'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <FormField
                        label='Message'
                        type='textarea'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <SubmitButton text='Send'/>
                </form>
            )}
        </section>
    )
}

export default Contact