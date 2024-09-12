const SubmitButton = ({text}) => {
    return (
        <button
            type='submit'
            className='bg-stone-200 text-black font-bold px-10 py-2 rounded border-indigo-300 border-2'
        >
            {text}    
        </button>
    )
}

export default SubmitButton