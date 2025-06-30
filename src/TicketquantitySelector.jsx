import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export default function TicketquantitySelector({quantity, setQuantity}) {
    const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  return (

    <div className="relative">
     <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className={clsx(
            'mt-1 font-Roboto text-[16px] block w-full appearance-none rounded-xl border border-[#07373F]  px-3 py-2  text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-[#12464E]',
            '*:text-[#07373F] mb-8 '
          )}
        >
          {quantityOptions.map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 size-4 fill-white/60" />
    </div>
  )
}
