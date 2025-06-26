import React, { useState } from 'react'

const SchoolCarePackages = () => {
    const [openPackage, setOpenPackage] = useState('');

  return (
    <ul className="list-none text-lg md:text-xl lg:text-3xl font-normal my-2 space-y-6">
        <li className="px-2 py-3 border border-orange-600 rounded-lg shadow-sm hover:shadow-md">
            <div className="w-full text-orange-500 font-semibold">
                📌✅Bronze Package
            </div>

            {openPackage === 'bronze' && (
                <div className="w-full mt-4 space-y-4">
                    <div className="w-full">
                        <p className='font-semibold'>✔️ Includes:</p>
                        <p>Access to <span className="font-semibold">School Learning Support Subjects</span></p>
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">🎯 Partner Price:</p>
                        <p>🔹 <span className="font-semibold">1 Subject</span> – ₦69,999 per term</p>
                        <p>🔹 <span className="font-semibold">2 Subjects</span> – ₦74,999 per term</p>
                    </div>
                </div>
            )}
        
            <div className="mt-2 font-medium text-slategray-100">

                {openPackage === 'bronze' ? (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('')}>See Less</p>
                ) : (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('bronze')}>See More</p>
                )}
        
            </div>
        </li>

        <li className="px-2 py-3 border border-orange-600 rounded-lg shadow-sm hover:shadow-md">
            <div className="w-full text-orange-500 font-semibold">
                📌✅Silver Package:
            </div>

            {openPackage === 'silver' && (
                <div className="w-full mt-4 space-y-4">
                    <div className="w-full">
                        <p className='font-semibold'>✔️ Includes:</p>
                        <p>Access to <span className="font-semibold">LearnNova Home Learning App</span></p>
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">🎯 Per-Term Pricing:</p>
                        <p>🔹 35 Learners – ₦59,999</p>
                        <p>🔹 50 Learners – ₦79,999</p>
                        <p>🔹 100 Learners – ₦149,999</p>
                        <p>🔹 200 Learners – ₦259,999</p>
                        <p>🔹 300 Learners – ₦359,999</p>
                        <p>🔹 400 Learners - ₦399,999</p>
                    </div>
                </div>
            )}
        
            <div className="mt-2 font-medium text-slategray-100">

                {openPackage === 'silver' ? (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('')}>See Less</p>
                ) : (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('silver')}>See More</p>
                )}
        
            </div>
        </li>

        <li className="px-2 py-3 border border-orange-600 rounded-lg shadow-sm hover:shadow-md">
            <div className="w-full text-orange-500 font-semibold">
                📌✅Gold Package:
            </div>

            {openPackage === 'gold' && (
                <div className="w-full mt-4 space-y-4">
                    <div className="w-full">
                        <p className='font-semibold'>✔️ Includes:</p>
                        <p>Access to <span className="font-semibold">3 School Learning Support Studio Subjects</span></p>
                        <p>Access for <span className="font-semibold">50</span> learners on the <span className="font-semibold">Home Learning App</span></p>
                        <p>Access to Virtual School Growth Mentorship Masterclasses and Strategic Growth Toolkits, specifically designed for School Owners and Administrators</p>
                        <p>Add additional learners to the Home Learning App for just <span className='font-semibold'>₦850</span> per learner each term or <span className='font-semibold'>₦1,699</span> per learner annually (3 terms)</p>
                        <p>Gain full access to TreNova Academy’s online training and learning portal</p>
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">🎯 Special Partner Price:</p>
                        <p>🔹 ₦159,999 per term</p>
                        <p>🔹 ₦399,999 per year</p>
                    </div>
                </div>
            )}
        
            <div className="mt-2 font-medium text-slategray-100">

                {openPackage === 'gold' ? (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('')}>See Less</p>
                ) : (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('gold')}>See More</p>
                )}
        
            </div>
        </li>

        <li className="px-2 py-3 border border-orange-600 rounded-lg shadow-sm hover:shadow-md">
            <div className="w-full text-orange-500 font-semibold">
                📌✅Lifetime Access Package:
            </div>

            {openPackage === 'lifetime' && (
                <div className="w-full mt-4 space-y-4">
                    <div className="w-full">
                        <p className='font-semibold'>✔️ Includes:</p>
                        <p>One-Time Payment for Lifetime Access to the School Learning Support Studio</p>
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">🎯 Limited Offer Price:</p>
                        <p>🔹 1 Subject – ₦599,999</p>
                        <p>🔹 2 Subjects – ₦999,999</p>
                        <p>🔹 3 Subjects – ₦1,199,999</p>
                    </div>
                </div>
            )}
        
            <div className="mt-2 font-medium text-slategray-100">

                {openPackage === 'lifetime' ? (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('')}>See Less</p>
                ) : (
                    <p className="underline cursor-pointer" onClick={()=>setOpenPackage('lifetime')}>See More</p>
                )}
        
            </div>
        </li>              
    </ul>
  )
}

export default SchoolCarePackages