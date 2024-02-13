"use client"
import AreaInputWithDropdown from '@/app/components/Forms/AreaInputWithDropdown'
import CustomDropdown from '@/app/components/Forms/CustomDropdown'
import CustomInput from '@/app/components/Forms/CustomInput'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { FormBasicProps } from '../owner-information'

export default function ProjectInformation(props: FormBasicProps) {
    const { updateInputValue, getValue } = props
    return (
        <>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Project Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <CustomInput title='Project-Name' type="text" name="project_name" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />

                        <CustomInput title='Plot Number' type="text" name="plot_number" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />


                        <CustomInput title='Total Number Of Floors' type="number" name="num_of_floors" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />

                        <CustomInput title='Total Basements' type="number" name="total_basements" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />

                        <AreaInputWithDropdown title="Total Area" name="total_area" placeholder='2540' inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <AreaInputWithDropdown title="Vacant Area" name="vacant_area" placeholder='2540' inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <AreaInputWithDropdown title="Occupied Area" name="occupied_area" placeholder='2540' inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='Features' name="features" options={[{ title: "Modern Infra", value: "modern_infra" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomInput title='Per Floor Size' type="number" name="per_floor_size" />
                        <CustomDropdown title='Building Type' name="building_type" options={[{ title: "Commercial", value: "commercial" }, { title: "Residential", value: "residential" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='Power Backup' name="power_backup" options={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='Air Conditioning' name="air_conditioning" options={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='States' name="states" options={[{ title: "Haryana", value: "gujarat" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='City' name="city" options={[{ title: "Gurugram", value: "gurugram" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomDropdown title='Zone' name="zone" options={[{ title: "North", value: "north" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Upload photo
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

                        <div className="sm:col-span-6">
                            <label htmlFor="company-website" className="block text-sm font-medium leading-6 text-gray-900">
                                Location
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                    http://
                                </span>
                                <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="www.example.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
