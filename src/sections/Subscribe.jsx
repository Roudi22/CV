import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center flex-col border max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold">
        Send me a
      <span className="text-coral-red"> message
      </span>
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="say hi ..." className="input "/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Send" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe