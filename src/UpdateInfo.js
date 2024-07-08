import React, { useState } from 'react'
import './assets/style.css'
import exclamationSign from './assets/img/exclamation-sign.svg'
import UpdateSing from './assets/img/Update-sing.svg'
import UpdatedDoneSVG from './assets/img/Updated-done.svg'



const UpdateData = () => {

    const [isUpdated, setUpdatedDone] = useState(false)

    const btnNotUpdated = () => setUpdatedDone(false);

    const btnUpdated = () => setUpdatedDone(true);
    return (
        <div className='bg-[#F9FAFB] flex flex-col items-center sm:flex-col sm:items-center md:flex-row-reverse md:justify-between border rounded-xl p-3'>
            <div className='flex items-center gap-5'>
                <h1 className='text-[#35363A] font-medium text-base text-right'>تحديث بيانات السجل التجاري في مركز المعلومات الوطني</h1>
                <img className='h-[38px] w-[38px] mr-2' src={exclamationSign} alt='exclamation sign' />
            </div>
            <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-4 mt-2'>
                {isUpdated ? <button className='flex rounded-[7px] gap-2 bg-[#716DA5] px-5 py-2.5' onClick={btnNotUpdated}>
                    <p className='text-white text-right text-sm/[20px]'>تحديث المعلومات</p>
                    <img src={UpdateSing} alt='Update Sing' />
                </button> : <button className='flex rounded-[7px] gap-2 bg-[#fff] border-[#716DA5] border-2 px-5 py-2.5' onClick={btnUpdated}>
                    <p className='text-[#191828] font-medium text-right text-sm/[20px]'>تم تحديث المعلومات</p>
                    <img src={UpdatedDoneSVG} alt='Updated Done' />
                </button>}
                <p className='text-[#35363A] font-medium text-sm/[28px] opacity-50 text-center'>اخر تحديث بتاريخ 22/03/2024</p>
            </div>

        </div>

    )
}

export default UpdateData
