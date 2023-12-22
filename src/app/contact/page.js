import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function ContactPage() {
  return (
    <>
      <NavbarComponent />
      <div className="mt-20" style={{ width: "100%", height: "100vh" }}>
        <div className="container mx-auto mt-10">Contact Us!</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178062.8030167241!2d114.4232668260065!3d-9.537438591823813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788347efdb0987%3A0xc51dc12b35b37de5!2sSuitmedia%20Digital%20Agency!5e0!3m2!1sen!2sid!4v1703272990326!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <FooterComponent />
    </>
  );
}
