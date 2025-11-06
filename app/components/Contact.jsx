import React, { useState } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets } from '@/asstes/assets'

const Contact = ({ isDarkMode, setIsDarkMode }) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b7f9a47a-70ba-46d7-b358-cd9ac3f81843");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.section
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }} id='Contact'>
            <div className="py-8 lg:py-16 gap-y-3.5 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form onSubmit={onSubmit} className="space-y-8 ">
                    <div >
                        <label htmlFor="email" className="block mb-2 gap-y-2.5 text-sm font-medium ">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-sm  border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block gap-y-2.5 mb-2 text-sm font-medium  ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" name='name' required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 gap-y-2.5 text-sm font-medium  ">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm   rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " 
                        name='message'
                        placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 flex px-5 text-sm font-medium text-center   gap-3 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message
                        <Image src={isDarkMode ? assets.mailWhite : assets.mailDark} className='w-7' alt='->'/>
                    </button>

                    <p className='mt-4'>{result}</p>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact
