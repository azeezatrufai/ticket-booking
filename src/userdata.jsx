import React from 'react'
import clsx from 'clsx'



export default function Userdata({ name, setName, email, setEmail, specialRequest, setSpecialRequest}) {
  return (
    <div className="w-full max-w-[287px] md:max-w-[556px] mt-7 ">
      <fieldset className=" space-y-6">
        <field>
          <label className="font-Roboto text-[16px] text-[#FAFAFA] ">Enter your name</label>
          <input
          name='name'
           type = 'text'
           value={name}
           onChange={(e) => setName(e.target.value)}
           required
            className={clsx(
              'mt-1.5 font-Roboto block w-full rounded-xl border border-[#07373F] px-3 py-3 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
          />
        </field>
        <div className='relative mt-2'>
            <field>
          <label className="font-Roboto text-[16px]  text-[#FAFAFA] ">Enter your email </label>
          <input
          name='email'
           type = 'email'
           value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={clsx(
                'pl-12 mt-1.5 font-Roboto block w-full rounded-xl border border-[#07373F] px-3 py-3 text-sm/6 text-white',
                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'            
              )}
            /> 
            <img className='mt-1 pointer-events-none  absolute left-3 top-1/2 w-6 h-6' src="/envelope.svg" alt="Mail Icon" />      
        </field>
        </div>
        <field>
          <label className="font-Roboto text-[16px] text-[#FAFAFA] ">Special request?</label>
          <textarea   
           value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className={clsx(
              'mt-1.5 font-Roboto block w-full rounded-xl border border-[#07373F] px-3 py-3 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            rows={3}
          />
        </field>
      </fieldset>
    </div>
  )
}
