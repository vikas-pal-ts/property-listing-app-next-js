import React from 'react'
import PropertyHeader from './PropertyHeader'
import Image from 'next/image'
import CustomRadioCard from '../components/Forms/CustomRadioCard'
import CustomDropdown from '../components/Forms/CustomDropdown'

const tabs = [
  { name: 'All Properties', href: '#', count: '52', current: false },
  { name: 'Drafts', href: '#', count: '6', current: false },
  { name: 'Summited for review', href: '#', count: '4', current: true },
  { name: 'Rejected', href: '#', current: false },
]

const TypeFilter = [
  { id: 1, title: "Commercial", value: "commercial" },
  { id: 2, title: "IT", value: "it" },
  { id: 3, title: "SEZ", value: "sez" },
  { id: 4, title: "Institutional", value: "institutional" },
  { id: 5, title: "Industrial", value: "industrial" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FilterTabs = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                className={classNames(
                  tab.current
                    ? 'border-red-900 text-red-900'
                    : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                  'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current ? 'bg-red-100 text-red-900' : 'bg-gray-100 text-gray-900',
                      'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

const PropertyCard = () => {
  return (
    <div className=' border-b pb-4 flex justify-between items-center'>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-red-900 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 mt-4">
        <div className='flex gap-5 items-center'>
          <Image src={'/property_1.jpg'} alt="property" className="pointer-events-none object-cover group-hover:opacity-75 rounded-r-lg"
            width={200}
            height={100}
          />
          <div className='flex flex-col	gap-2 '>
            <div>
              <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-900">
                Commercial
              </span>
              <span className='text-[14px] font-normal text-gray-500 ml-2'>#0001</span>
            </div>
            <div>
              <h4 className='text-1xl font-bold text-gray-900'>Swastik Universal</h4>
              <h4 className='text-[12px] font-extralight'>Dumas, Magdalla Road, Surat</h4>
            </div>
            <div className='flex justify-between w-[100%] mt-2'>
              <div>
                <p className='text-[10px] font-extralight'>Available Area</p>
                <span className='text-1lg font-bold'>2156</span> <span className='text-[11px] font-extralight'>Sq. Ft.</span>
              </div>
              <div>
                <p className='text-[10px] font-extralight'>Occupied</p>
                <span className='text-1lg font-bold'>2156</span> <span className='text-[11px] font-extralight'>Sq. Ft.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='flex flex-col items-center'>
        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
          Approved
        </span>
        <button
          type="button"
          className="rounded bg-white px-2 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-4 w-[70px]"
        >
          Add Unit
        </button>
      </div>

    </div>
  )
}


const PropertyList = () => {
  return (
    <>
      <PropertyHeader />
      <div className='flex gap-4 mt-4'>

        <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 w-[350px] shadow-md rounded-md h-[100%]">

          <section className='mb-6'>
            <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Choose One</h2>
            <div className='flex justify-between gap-3 mt-3'>
              <CustomRadioCard title="Projects" name="projects" checked={true} />
              <CustomRadioCard title="Units" name="units" />
            </div>
          </section>
          <section className='mb-6'>
            <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Price Range</h2>
            <div className='flex justify-between gap-3 mt-3' >
              <div className='border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[50%] shadow rounded border'>
                <p className='text-[12px] font-light'>Minimum</p>
                <p className='text-[14px] font-bold'>$500</p>
              </div>
              <div className='border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[50%] shadow rounded border'>
                <p className='text-[12px] font-light'>Maximum</p>
                <p className='text-[14px] font-bold'>$500</p>
              </div>
            </div>
          </section>

          <section className='mb-4'>
            <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Type</h2>
            <div className='flex justify-between gap-3 mt-3 flex-wrap' >
              {TypeFilter.map((item) => {
                return (
                  <div key={item.id} className='border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[45%] shadow rounded border'>
                    <p className='text-[14px] font-semibold text-gray-500'>{item.title}</p>
                  </div>
                )
              })}
            </div >
          </section>
          <section>
            <CustomDropdown title='City' name="city" options={[{ title: "Gurugram", value: "gurugram" }]} />
            <div className='mt-3'>
              <CustomDropdown title='Zone' name="zone" options={[{ title: "North", value: "north" }]} />
            </div>
          </section>
          <button
            type="button"
            className="rounded-md bg-red-900 px-4 py-2 text-sm font-normal text-white shadow-s w-full mt-4"
          >
            Filter Now
          </button>
        </div>

        <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 w-[100%] shadow-md rounded-md ">
          <FilterTabs />
          {tabs.map((item) => {
            return (
              <PropertyCard key={item.name} />
            )
          })}


        </div>
      </div>
    </>

  )
}

export default PropertyList