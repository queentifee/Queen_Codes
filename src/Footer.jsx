const Footer = () => {
    return (
      <footer className="bg-[#D8BFD8] text-black py-6">
       
<div className="col-span-full flex flex-col items-center  font-md  text-center">
          <p>© {new Date().getFullYear()} Queen_Codes. All rights reserved.</p>
          <br />
          <p>
            <a href="#" className="underline">Privacy Policy</a> | 
            <a href="#" className="underline ml-2">Terms of Service</a>
          </p>
        </div>
</footer>
    )
}


export default Footer

