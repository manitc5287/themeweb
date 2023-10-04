import React from 'react'
import "./newsletter.css";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="">
                <h1 className="text-center text-5xl font-bold font-serif">Newsletter.</h1>
                <p className="text-center mt-2=">Stay up to date with our latest news and products</p>
                <form method="post" className="newsletter-form">
                    <input type="email" name="email" id="email" placeholder="your@email.com" className="" required />
                    <button type="submit" className="">
                    Subscribe
                    </button>
                </form>
                <small className="text-center">*your email is safe with us, we don't spam</small>
            </div>
        </div>
    )
}

export default Newsletter
