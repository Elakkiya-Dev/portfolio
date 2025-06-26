import React from 'react'

function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form className="mt-3 flex flex-col max-w-sm">
        <input className="mb-2 p-2 rounded border" placeholder="Name" />
        <input className="mb-2 p-2 rounded border" placeholder="Email" />
        <textarea className="mb-2 p-2 rounded border" placeholder="Message" />
        <button className="bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact