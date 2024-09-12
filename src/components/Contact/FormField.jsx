const FormField = ({label, type, name, value, onChange, required}) => {
    return (
        <div className='my-4 flex items-center'>
            <label className='pr-4'>{label}: </label>
            {type === 'textarea' ? (
                <textarea
                    className='rounded bg-stone-200 text-black p-2 border-2 border-indigo-300'
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
                ) : (
                <input
                    className="rounded bg-stone-200 text-black p-2 border-2 border-indigo-300"
                    type={type}
                    name={value}
                    onChange={onChange}
                    required
                />
            )}
        </div>
    )
}

export default FormField