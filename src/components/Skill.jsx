import React from 'react'

const Skill = () => {
    return (
        <>
            <section class="text-gray-400  bg-base-400 body-font">
                <div class="container px-5 py-24 mx-auto">
                <div className="divider"></div>
                    <div class="flex flex-col text-center w-full mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Skills ⚔️</h1>
                        <div className="divider"></div>
                        <div className="flex flex-col w-full">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Django Rest Framework</div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Django</div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex flex-col w-full">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">React Js</div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Daisy UI</div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex flex-col w-full">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Machine Learning</div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Scikit Learn</div>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Skill