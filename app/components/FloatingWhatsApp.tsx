import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/app/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צרו קשר בוואטסאפ"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-violet/40 bg-ink-2 text-violet-light shadow-[0_0_28px_rgba(139,92,246,0.3)] transition-transform duration-300 hover:scale-110 hover:border-violet"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
