import AreaInputWithDropdown from '@/app/components/Forms/AreaInputWithDropdown'
import CustomDropdown from '@/app/components/Forms/CustomDropdown'
import CustomInput from '@/app/components/Forms/CustomInput'
import { PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { FormBasicProps } from '../owner-information'

const FloorInformationForm = (props: FormBasicProps) => {
    const { updateInputValue, getValue } = props
    return (
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Floor Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <CustomInput title='Floor Number' type="text" name="floor_number" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title='Total Units' type="text" name="total_units" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title='Units Available' type="text" name="units_available" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title="Floor Area" type="text" name="floor_area" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Floor Plan
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloorInformationForm