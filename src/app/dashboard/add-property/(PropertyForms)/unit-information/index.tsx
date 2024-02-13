import AreaInputWithDropdown from '@/app/components/Forms/AreaInputWithDropdown'
import CustomDropdown from '@/app/components/Forms/CustomDropdown'
import CustomInput from '@/app/components/Forms/CustomInput'
import React from 'react'
import { FormBasicProps } from '../owner-information'

const UnitInformationForm = (props: FormBasicProps) => {
    const { updateInputValue, getValue } = props
    return (
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Unit Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <CustomInput title='Unit Number' type="text" name="unit_number" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title='Unit Area' type="text" name="unit_area" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />

                    <CustomInput title='Asking Rental' type="text" name="asking_rental" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title="No Of Parking's" type="text" name="no_of_parkings" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomDropdown title='Availability For' name="availability_for" options={[{ title: "Lease", value: "lease" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomDropdown title='Furnishing Status' name="furnishing_status" options={[{ title: "Furnishing", value: "furnishing" }]} inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                    <CustomInput title="Age Of Furnishing" type="text" name="no_of_parkings" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                </div>
            </div>
        </div>
    )
}

export default UnitInformationForm