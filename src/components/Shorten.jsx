import { useState } from "react"
import toast from "react-hot-toast";
import Link from "./Link"

const Shorten = () => {
    const [ input, setInput ] = useState("");
    const [ error, setError ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState("");


    const validURL = (url) => {
        let pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
              '((\\d{1,3}\\.){3}\\d{1,3}))' +
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
              '(\\?[;&a-z\\d%_.~+=-]*)?' +
              '(\\#[-a-z\\d_]*)?$',
            'i'
          )
          return !!pattern.test(url)
    }


    const formSubmit = (e) => {
        e.preventDefault()

        if (input === "") {
            setError(true)
            setErrorMsg("Please enter something")
        } else if (!validURL(input)) {
            setError(true)
            setErrorMsg("Invalid URL")
        } else {
            setError(false);
            setErrorMsg("");
            toast.success("Success")
        }
        
    }



  return (
    <section className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
            <form className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3" onSubmit={formSubmit}>
                <input type="text" className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none" placeholder="Shortn a link here" value={input} onChange={(e) => setInput(e.target.value)} />

                <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">Shorten It!</button>
                { error && <div className="absolute left-7 bottom-3 text-red text-small italic">{errorMsg}</div>}
            </form>

            <Link link="https://frontendmentor.io" shortenUrl="https://rel.ink/k4IKyk" />
            <Link link="https://frontendmentor.io" shortenUrl="https://rel.ink/k4IKyk" />
            <Link link="https://frontendmentor.io" shortenUrl="https://rel.ink/k4IKyk" />
        </div>
    </section>
  )
}

export default Shorten