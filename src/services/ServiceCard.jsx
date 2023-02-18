import React from 'react'

const ServiceCard = ({ item }) => {

  const { imgUrl, title, desc } = item;
  return (


    <>

      <div className="service-img w-12 h-12 flex items-center justify-center rounded-[50px] bg-primaryColor p-2 mb-4">
        <img src={imgUrl} alt="" className='w-full' />
      </div>

      <h4><a href="" className="stretched-link no-underline">{title}</a></h4>
      <p>{desc}</p>
      {/* <div className="service-item p-4 border-b border-primaryColor border-r rounded-lg w-full">
            <div className="service-img w-12 h-12 flex items-center justify-center rounded-[50px] bg-primaryColor p-2 mb-4">
                <img src={imgUrl} alt="" className='w-full' />
            </div>
            <h5 className='text-base text-textColor pb-2'>{title}</h5>
            <p>{desc}</p>
        </div> */}
    </>

  )
}

export default ServiceCard