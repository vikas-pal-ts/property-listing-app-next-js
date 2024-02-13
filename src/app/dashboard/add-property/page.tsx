"use client"
import React, { useState } from 'react'
import AddPropertySteps, { AddPropertyStepConstant } from './AddPropertySteps'
import ProjectInformation from './(PropertyForms)/project-information'
import UnitInformationForm from './(PropertyForms)/unit-information'
import FloorInformationForm from './(PropertyForms)/floor-information'
import OwnerInformation from './(PropertyForms)/owner-information'
import AppPopup from '@/app/components/AppPopup'
const AddProperty = () => {
  const [formData, setFormData]: any = useState({})
  const [currentFormIndex, setCurrentFormIndex] = useState(0)
  const updateInputValue = (value: any, event: any) => {
    console.log(value, event?.target?.name, 'params')
    const name = event?.target?.name
    setFormData({ ...formData, [name]: value })
  }
  const getValue = (name: string) => {
    return formData[name]
  }

  const handleNextForm = () => {
    if (AddPropertyStepConstant.length - 1 > currentFormIndex) {
      setCurrentFormIndex(currentFormIndex + 1)
    }
  }


  const handlePrevForm = () => {
    if (AddPropertyStepConstant.length - 1 >= currentFormIndex && currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1)
    }
  }

  const onSaveClick = (e: any) => {
    e.preventDefault();
    console.log(formData, 'formData');
    handleNextForm()

  }

  const showFormBasedOnId = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        return <ProjectInformation getValue={getValue} updateInputValue={updateInputValue} />
        break;
      case 2:
        return <UnitInformationForm getValue={getValue} updateInputValue={updateInputValue} />
        break;
      case 3:
        return <FloorInformationForm getValue={getValue} updateInputValue={updateInputValue} />
        break;
      case 4:
        return <OwnerInformation getValue={getValue} updateInputValue={updateInputValue} />
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className='flex justify-center gap-8 mt-4'>
        <div className="border-b border-gray-200 bg-[white] pr-4 py-5 w-[250px] shadow-md rounded-md h-[100%]">
          <AddPropertySteps currentFormIndex={currentFormIndex} />
        </div>

        <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 w-[50%] shadow-md rounded-md ">
          <form>
            {showFormBasedOnId()}
            {/* <AppPopup title='Successfully Added' buttonTitle='Go Back' showPopup /> */}
            <div className="mt-6 flex items-center justify-between gap-x-6">
              <button
                type="button"
                className="rounded-md bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm hover:bg-indigo-100"
              >
                Save to Draft
              </button>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3"
                  onClick={handlePrevForm}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={onSaveClick}
                >
                  Save
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default AddProperty