"use client"
import { HomeIcon } from '@heroicons/react/20/solid'
import { useParams } from 'next/navigation'

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

export default function AppBreadCrumb() {
    const params = window.location.pathname.split('/')
    console.log(params[params.length - 1], 'params');
    function getTitle(input: string) {
        // Split the input string by hyphen and capitalize each word
        let words = input.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
        // Join the words with space to form the desired output
        return words.join(' ');
    }

    return (
        <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
            <ol role="list" className="flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
                <li className="flex">
                    <div className="flex items-center">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="h-full w-6 flex-shrink-0 text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
