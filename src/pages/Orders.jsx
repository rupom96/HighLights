import React from 'react'

const Orders = () => {
    return (
        <div className='mt-10 p-8'>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item">

                    <button className="
                        accordion-button
                        menu-accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        transition
                    " type="button" data-bs-toggle="collapse" data-bs-target="#menu1" aria-expanded="false"
                        aria-controls="menu1">
                        Accordion Item #2
                    </button>

                    <div id="menu1" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            This is the second item's accordion body
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Orders