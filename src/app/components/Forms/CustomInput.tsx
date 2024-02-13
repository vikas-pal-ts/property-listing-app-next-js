interface CustomInputProps {
    title: string,
    name: string,
    type: string,
    inputProps?: object,
    getValue?: Function
}

const CustomInput = (props: CustomInputProps) => {
    const { title, name, type, inputProps, getValue } = props
    return (
        <div className="sm:col-span-3">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {title}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    // autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={getValue?.(name)}
                    {...inputProps}
                />
            </div>
        </div>
    )
}

export default CustomInput