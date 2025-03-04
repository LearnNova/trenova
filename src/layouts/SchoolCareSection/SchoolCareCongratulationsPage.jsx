const SchoolCareCongratulationsPage = () => {

    return (
      <section className="px-2 py-4 flex flex-col items-center" style={{fontFamily: 'Poppins, sans-serif'}}>
        <div className="px-2 pb-4 text-center">
            <h1 className='text-9xl md:text-13xl lg:text-17xl font-extrabold uppercase text-gray-800'>
                Congratulations!!
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Below is the account details to send the registration fee of <span style={{color: "rgb(233, 0, 0)", fontWeight: 600}}>₦50,000</span> to, 
                after sending the money, send a message on <span style={{color: "rgb(0, 194, 10)", fontWeight: 600}}>whatsapp</span> to 
                any of the following <span className="font-semibold">whatsapp numbers</span>:
                <a href="tel:08023781682" style={{color: "rgb(0, 194, 10)", fontWeight: 600}} className="hover:underline"> 0802 378 1682</a>, 
                <a href="tel:07044086794" style={{color: "rgb(0, 194, 10)", fontWeight: 600}} className="hover:underline"> 0704 408 6794</a>, 
                or <a href="tel:09137819540" style={{color: "rgb(0, 194, 10)", fontWeight: 600}} className="hover:underline"> 0913 781 9540</a>,
                with the <span style={{color: "rgb(233, 0, 0)", fontWeight: 600}}>screenshot of the receipt</span>, 
                your <span style={{color: "rgb(233, 0, 0)", fontWeight: 600}}>fullname and email address</span>, and 
                the word <span style={{color: "rgb(233, 0, 0)", fontWeight: 600}}>"REGISTRATION FEE"</span>.
            </p>
        </div>

        <div className="bg-white border-2 rounded-md px-4 py-3">
          <h1 className='mb-4 text-5xl md:text-7xl lg:text-9xl font-bold uppercase text-gray-800'>
            Account Details
          </h1>

          <div className="text-lg md:text-xl lg:text-3xl">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-3 gap-x-3">
              <p>Account Name:</p>
              <p className="font-semibold">Trenova Ltd</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-3 gap-x-3">
              <p>Account Number:</p>
              <p className="font-semibold">1015524196</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-3 gap-x-3">
              <p>Bank Name:</p>
              <p className="font-semibold">Zenith Bank</p>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default SchoolCareCongratulationsPage;
  