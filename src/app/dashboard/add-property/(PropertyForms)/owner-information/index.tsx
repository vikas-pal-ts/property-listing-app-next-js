"use client"
import AreaInputWithDropdown from '@/app/components/Forms/AreaInputWithDropdown'
import CustomDropdown from '@/app/components/Forms/CustomDropdown'
import CustomInput from '@/app/components/Forms/CustomInput'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
export interface FormBasicProps {
    updateInputValue: Function,
    getValue: Function
}
export default function OwnerInformation(props: FormBasicProps) {
    const { updateInputValue, getValue } = props
    return (
        <>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Owner Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <CustomInput title='Owner-Name' type="text" name="owner_name" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomInput title='Owner Email' type="email" name="owner_email" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomInput title='Owner Mobile Number' type="number" name="owner_mobile_number" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <CustomInput title='Concerned Person (SPOC)' type="text" name="concerned_person" inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <AreaInputWithDropdown title="CAM Charges (Sq feet)" name="cm_charges" placeholder='2540' inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue} />
                        <AreaInputWithDropdown title="Vacant Area" name="vacant_area" placeholder='2540'
                            inputProps={{ onChange: (e: any) => updateInputValue(e.target.value, e) }} getValue={getValue}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
