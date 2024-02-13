"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BarsArrowUpIcon, BellIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'


const SearchInput = () => {
    return (
        <div className="w-full sm:max-w-md">
            <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center border-r-2">
                    <label htmlFor="country" className="sr-only">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                        <option>Gurgaon</option>
                        <option>Delhi</option>
                    </select>
                </div>
                <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    className="block w-full rounded-md border-0 py-1.5 pl-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search location"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}

export default function PropertyHeader() {
    const router = useRouter()
    return (
        <Disclosure as="header" className="border-b">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-100 lg:divide-y lg:divide-gray-200">
                        <div className="relative flex h-16 justify-between">
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">

                                    <h1 className="truncate text-2xl font-bold text-gray-900">{"Projects"}</h1>

                                </div>
                            </div>
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">

                                <SearchInput />

                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => router.push('/dashboard/add-property')}
                                >
                                    Add New
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
