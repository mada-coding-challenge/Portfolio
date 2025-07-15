function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="p-2 border rounded" type="text" placeholder="Your Name" />
        <input className="p-2 border rounded" type="email" placeholder="Your Email" />
        <textarea className="p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}
export default Contact;
