import React from 'react';
import ContactForm from './ContactForm';
import ContactExpierence from './ContactExpierence';

function ContactMe() {
  return (
    <section
      id="contact"
      className="z-10 mx-4 mt-[400px] mb-[200px] grid grid-cols-1 gap-4 xl:mx-20 xl:grid-cols-12"
    >
      <div className="xl:col-span-5">
        <ContactForm />
      </div>
      <div className="xl:col-span-7">
        <div className="h-full w-full overflow-hidden rounded-3xl bg-[#cd7c2e] hover:cursor-grab">
          <ContactExpierence />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
