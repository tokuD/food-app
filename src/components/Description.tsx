import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <div
      className="
    bg-stone-900 text-white rounded-2xl
    w-[600px] p-4 flex flex-col items-center
    text-center gap-4 shadow shadow-black
    "
    >
      <h2 className="text-2xl font-bold">Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-suality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  )
}

export default Description
