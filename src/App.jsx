import React, { useEffect, useState } from "react";
import { Mail, Download, Github, Linkedin, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

// React + Tailwind single-page portfolio for Ritesh Kumar.
// Deployable build instructions included below.

const RESUME_URL = "/resume.pdf";
const FORM_ACTION = "https://formspree.io/f/yourformid"; // replace with actual Formspree endpoint

const projectsSample = [
  {
    title: "Healthcare Tracker (Microservices)",
    desc: "Microservices-based app with OTP login, appointment scheduling, recommendations, and analytics.",
    tech: ["Java", "Spring Boot", "React Native", "Docker", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce Platform",
    desc: "High-performance product catalog, cart, and payment integrations with autoscaling on AWS.",
    tech: ["Spring Boot", "React", "Kubernetes", "Jenkins"],
    github: "#",
    live: "#",
  },
  {
    title: "Realtime Dashboard",
    desc: "Realtime metrics dashboard with optimized APIs and horizontal scaling.",
    tech: ["Java", "WebSocket", "Docker", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Ritesh Kumar</h1>
          <p className="text-sm opacity-80">
            Senior Full-Stack Engineer • Java | Spring Boot | React Native | AWS
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center py-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">
              I build production-ready web & mobile applications
            </h2>
            <p className="mt-4 text-lg opacity-85">
              Senior Software Engineer with 7+ years of experience designing,
              developing, testing, and deploying scalable applications using
              Java, Spring Boot, Microservices, React Native, Docker,
              Kubernetes, and AWS.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2">
              <li className="bg-white dark:bg-gray-800 border p-3 rounded-lg">
                End-to-end application development
              </li>
              <li className="bg-white dark:bg-gray-800 border p-3 rounded-lg">
                Microservices & API architecture
              </li>
              <li className="bg-white dark:bg-gray-800 border p-3 rounded-lg">
                CI/CD, containerization & orchestration
              </li>
              <li className="bg-white dark:bg-gray-800 border p-3 rounded-lg">
                Performance tuning & load balancing
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-5 py-3 bg-indigo-600 text-white rounded-lg"
              >
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 border rounded-lg">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="w-44 h-44 rounded-xl overflow-hidden border-4 border-indigo-100 dark:border-indigo-900 shadow-lg">
              <img
                alt="Profile"
                src="https://avatars.dicebear.com/api/initials/RK.svg"
                className="w-full h-full object-cover bg-white"
              />
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-8">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
              <h4 className="font-semibold">Frontend</h4>
              <p className="mt-2 text-sm">
                HTML • CSS • Bootstrap • Tailwind • React Native
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
              <h4 className="font-semibold">Backend</h4>
              <p className="mt-2 text-sm">
                Java • Spring Boot • Microservices • RESTful APIs • JUnit5 •
                Mockito
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
              <h4 className="font-semibold">DevOps & Cloud</h4>
              <p className="mt-2 text-sm">
                GitHub • Docker • Jenkins • Kubernetes • AWS • Load Balancing
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projectsSample.map((p, i) => (
              <motion.article
                whileHover={{ y: -6 }}
                key={i}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg border flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm opacity-85">{p.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs opacity-80">{p.tech.join(" • ")}</div>
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      aria-label="github"
                      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={p.live}
                      aria-label="live"
                      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-12">
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">
                    Senior Software Engineer — Product Company
                  </h4>
                  <p className="text-sm opacity-80">2018 — Present</p>
                </div>
                <div className="text-sm opacity-80">Full-time</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm opacity-85">
                <li>
                  Designed and delivered microservices with Spring Boot,
                  improving maintainability and deployment speed.
                </li>
                <li>
                  Automated CI/CD pipelines with Jenkins & GitHub Actions;
                  containerized apps with Docker and orchestrated via
                  Kubernetes.
                </li>
                <li>
                  Deployed and monitored services on AWS; implemented load
                  balancing and scaling strategies.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm opacity-85">
                Email me at{" "}
                <a href="mailto:ritesh365.nitj@gmail.com" className="underline">
                  ritesh365.nitj@gmail.com
                </a>{" "}
                or use the form.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <form
              action={FORM_ACTION}
              method="POST"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border"
            >
              <label className="block text-sm">Name</label>
              <input
                name="name"
                required
                className="w-full mt-2 p-2 border rounded bg-transparent"
              />

              <label className="block text-sm mt-3">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-2 p-2 border rounded bg-transparent"
              />

              <label className="block text-sm mt-3">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-2 p-2 border rounded bg-transparent"
              />

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Send Message
                </button>
                <div className="text-sm opacity-80">
                  Or email:{" "}
                  <a
                    className="underline"
                    href="mailto:ritesh365.nitj@gmail.com"
                  >
                    ritesh365.nitj@gmail.com
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm opacity-80">
          <div className="flex items-center justify-center gap-4">
            <a href="#" aria-label="github">
              <Github size={16} />
            </a>
            <a href="#" aria-label="linkedin">
              <Linkedin size={16} />
            </a>
            <a href="mailto:ritesh365.nitj@gmail.com" aria-label="email">
              <Mail size={16} />
            </a>
          </div>

          <p className="mt-4">
            © {new Date().getFullYear()} Ritesh Kumar — Senior Full-Stack
            Engineer
          </p>
        </footer>
      </main>
    </div>
  );
}

/* -----------------------------
   🚀 Production Deployment (Linux VM)
-------------------------------------

1️⃣ Install Node.js & Git
   sudo apt update && sudo apt install -y nodejs npm git

2️⃣ Clone your project repo
   git clone https://github.com/yourusername/portfolio.git && cd portfolio

3️⃣ Install dependencies
   npm install

4️⃣ Build production files
   npm run build
   → generates optimized static files in ./dist

5️⃣ Install & serve via Nginx
   sudo apt install -y nginx
   sudo rm /etc/nginx/sites-enabled/default

   sudo bash -c 'cat > /etc/nginx/sites-available/portfolio <<EOF
   server {
       listen 80;
       server_name your_domain_or_ip;
       root /home/ubuntu/portfolio/dist;
       index index.html;
       location / {
           try_files $uri /index.html;
       }
   }
EOF'

   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo systemctl restart nginx

6️⃣ Optional — HTTPS (Let’s Encrypt)
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your_domain

7️⃣ Access your site at http://your_domain or http://your_VM_IP

*/
