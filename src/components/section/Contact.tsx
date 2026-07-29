import {
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";
import { SITE } from "../../constants/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20"
    >
      <div className="w-full">
        <p className="mb-2 text-lg font-semibold text-rose-500">
          Contact
        </p>

        <h2 className="mb-6 text-4xl font-bold text-slate-900">
          Let's Work Together
        </h2>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-600">
          Have a project in mind, a collaboration opportunity, or just want to
          say hello? I'd be happy to hear from you.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <Mail className="h-6 w-6 text-rose-500" />
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="text-slate-600">{SITE.email}</p>
            </div>
          </a>

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <Phone className="h-6 w-6 text-rose-500" />
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="text-slate-600">{SITE.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <MapPin className="h-6 w-6 text-rose-500" />
            <div>
              <p className="font-semibold text-slate-900">Location</p>
              <p className="text-slate-600">{SITE.location}</p>
            </div>
          </div>

          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* <Github className="h-6 w-6 text-rose-500" /> */}
            <div>
              <p className="font-semibold text-slate-900">GitHub</p>
              <p className="text-slate-600">View my repositories</p>
            </div>
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:col-span-2"
          >
            {/* <Linkedin className="h-6 w-6 text-rose-500" /> */}
            <div>
              <p className="font-semibold text-slate-900">LinkedIn</p>
              <p className="text-slate-600">
                Connect with me professionally
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}