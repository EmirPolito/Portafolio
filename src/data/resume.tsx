import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Emir Polito",
  initials: "EP",
  url: "https://tu-dominio.com",
  location: "Veracruz, México",
  locationLink: "https://www.google.com/maps/place/Veracruz",
  description:
    "Técnico en TI con sólida experiencia en el desarrollo frontend, control de calidad (QA) y la creación de experiencias web dinámicas, priorizando la experiencia del usuario.",
  summary:
    "Interesado en el **desarrollo frontend** ya que es la parte donde el usuario decide cómo percibe un producto por su **diseño**, **accesibilidad** y **funcionalidad**. Disfruto desarrollar interfaces claras y eficientes, complementando de la mano del **control de calidad (QA)** para asegurar que cada detalle funcione correctamente.",
  avatarUrl: "/perfil2.png",
  skills: [
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css_old.svg" },

    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },

    {
      name: "React",
      icon: "/icons/react_light.svg",
      darkIcon: "/icons/react_dark.svg",
    },
    { name: "Next.js", icon: "/icons/nextjs_icon_dark.svg" },

    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },

    { name: "npm", icon: "/icons/npm.svg" },
    { name: "pnpm", icon: "/icons/pnpm.svg" },

    { name: "Git", icon: "/icons/git.svg" },
    {
      name: "GitHub",
      icon: "/icons/github_light.svg",
      darkIcon: "/icons/github_dark.svg",
    },

    {
      name: "MySQL",
      icon: "/icons/mysql-icon-light.svg",
      darkIcon: "/icons/mysql-icon-dark.svg",
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb-icon-light.svg",
      darkIcon: "/icons/mongodb-icon-dark.svg",
    },

    {
      name: "Vercel",
      icon: "/icons/vercel.svg",
      darkIcon: "/icons/vercel_dark.svg",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/mas", icon: NotebookIcon, label: "Más" },
  ],
  contact: {
    email: "emirpolitog@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EmirPolito",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emir-polito-g/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/emirpolitog",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:emirpolitog@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CashAbroad",
      href: "https://www.cashabroad.one/",
      badges: [],
      location: "Remote",
      title: "QA Tester / Estadias Profesionales",
      logoUrl: "/cashabroad.png",
      start: "2025",
      end: "2025",
      description: `Participé en el aseguramiento de calidad (QA) de CashAbroad, una plataforma fintech de transacciones internacionales, validando procesos críticos y detectando mejoras para garantizar una experiencia estable, confiable y precisa.

- Ejecuté más de 90 casos de prueba en entornos Dev y Prod, validando flujos como login, transacciones, tipos de cambió, etc.
- Reduje en un 33% (de 90 a 60 min) el tiempo de resolución al documentar proactivamente bugs críticos.
- Validé la integridad transaccional entre plataforma y correos (procesos finalizados y cancelados).
- Coordiné ciclos de regresión con el equipo de desarrollo para asegurar la corrección de errores.
- Mantuve comunicación constante con stakeholders para la planeación y seguimiento de entregables.`,
    },
  ],

  education: [
    {
      school: "Universidad Tecnológica Del \nSureste de Veracruz.",
      href: "http://www.utsv.com.mx/",
      degree:
        "Técnico Superior Universitario en \nTecnologías de la Información.",
      logoUrl: "/utsv.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Universidad Tecnológica Del\nSureste de Veracruz.",
      href: "http://www.utsv.com.mx/",
      degree: "Ingeniería en Tecnologías\nde la Información.",
      logoUrl: "/utsv.jpg",
      start: "2025",
      end: "En curso",
    },
  ],

  projects: [
    {
      title: "RALQ 4",
      href: "https://ralq-4-next-js.vercel.app/",
      dates: "En desarrollo",
      active: true,
      description:
        "RALQ 4 es una plataforma web educativa que permite a los estudiantes aprender sobre los instrumentos de laboratorio de química y moléculas en 3D mediante Realidad Aumentada, facilitando el aprendizaje sin la necesidad de estar en un laboratorio físico.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://ralq-4-next-js.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/EmirPolito/RALQ-4-Next.js",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proyectos/RALQ-4.png",
      video: "/videos/RALQ-4-Video.mp4",
    },
    {
      title: "Arcoms 1",
      href: "https://arcoms-1.vercel.app/",
      dates: "Octubre 2025",
      active: true,
      description:
        "Arcoms 1 es una landing page desarrollada con una estética futurista y una experiencia interactiva enfocada en el impacto visual. Incorpora animaciones dinámicas, modelos 3D y personalización de temas para brindar una interfaz moderna, atractiva e inmersiva.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Spline",
        "Framer Motion",
        "Radix UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://arcoms-1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/EmirPolito/Arcoms-1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proyectos/Arcoms-1.png",
      video: "/videos/Arcoms-1-Video2.mp4",
    },

    {
      title: "RALQ 2",
      href: "",
      dates: "Julio 2025",
      active: true,
      description:
        "RALQ-2 es una plataforma educativa enfocada en la enseñanza de química sin necesidad de un laboratorio físico. Inicié su desarrollo con tecnologías base y posteriormente migré el proyecto a Next.js para mejorar su estructura, rendimiento y escalabilidad.",
      technologies: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "PHP",
        "Model-viewer",
      ],
      links: [
        {
          type: "Demo",
          href: "https://ralq-2.wasmer.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repositorio",
          href: "https://github.com/EmirPolito/RALQ-2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proyectos/RALQ-2.png",
      video: "",
    },
  ],

  certifications: [
    {
      title: "Google AI Essentials",
      dates: "Enero 2026",
      location: "Google",
      description:
        "Dominio de las herramientas de IA generativa para aumentar la productividad, desarrollar ideas y resolver problemas de forma creativa y responsable.",
      image: "/icons/google.svg",
      links: [
        {
          title: "Mostrar credencial",
          href: "https://www.coursera.org/account/accomplishments/verify/A03M3VO8RUDJ",
          images: [
            {
              url: "/certificados/IA-Google.png",
              title: "Certificado Google AI Essentials",
            },
          ],
        },
      ],
    },
    {
      title: "Pensamiento estratégico y mentalidad estratégica",
      dates: "Marzo 2025",
      location: "Santander O.A",
      description:
        "Desarrollo de habilidades para analizar situaciones complejas, identificar oportunidades de mercado y diseñar planes de acción a largo plazo.",
      image: "/icons/Santander.png",
      links: [
        {
          title: "Vista en miniatura",
          images: [
            {
              url: "/certificados/santander.jpeg",
              title: "Certificado Pensamiento Estratégico",
            },
          ],
        },
      ],
    },
    {
      title: "Fundamentos de Inteligencia Artificial",
      dates: "Marzo 2025",
      location: "F. Carlos Slim",
      description:
        "Aprendizaje de los conceptos básicos de inteligencia artificial, redes neuronales y aprendizaje automático aplicados a la resolución de problemas reales.",
      image: "/icons/Capacitate.png",
      links: [
        {
          title: "Mostrar credencial",
          href: "https://capacitateparaelempleo.org/verifica/82b5c5cd-b1df-419b-8f1f-cd8afa9d27f2/27c3d00c-0cb6-4a86-9cb0-9edf29bb4afa",
          images: [
            {
              url: "/certificados/Fundamentos-IA.png",
              title: "Certificado IA Carlos Slim",
            },
          ],
        },
      ],
    },
    {
      title: "Tester",
      dates: "Noviembre 2024",
      location: "F. Carlos Slim",
      description:
        "Certificación en metodologías de prueba de software, aseguramiento de calidad y detección sistemática de errores para garantizar productos digitales estables.",
      image: "/icons/Capacitate.png",
      links: [
        {
          title: "Mostrar credencial",
          href: "https://capacitateparaelempleo.org/verifica/6aa288da-c705-4996-9de1-8271e67078c2/22b24b13-2e0f-4a78-baf4-ff2bf3b65f7c",
          images: [
            {
              url: "/certificados/Tester.png",
              title: "Certificado Tester Carlos Slim",
            },
          ],
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "Infomatrix",
      dates: "Marzo 2025",
      location: "Coatzacoalcos, Veracruz.",
      description:
        "Partici en el concurso Infomatrix 2025 Veracruz Sur presentando RALQ, una plataforma educativa en Realidad Aumentada que permite explorar instrumentos de laboratorio y moléculas en 3D, haciendo más accesible e interactivo el aprendizaje de química desde dispositivos móviles.",
      image: "/solacyt.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Repositorio",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/EmirPolito/RALQ-2",
        },
        {
          title: "Evidencia",
          icon: <Icons.globe className="size-3" />,
          images: [
            {
              url: "/infomatrix/reconocimiento-infomatrix.jpeg",
              title: "Reconocimiento",
            },
            {
              url: "/infomatrix/img-infomatrix.jpeg",
              title: "foto",
            },
          ],
        },
      ],
    },
    {
      title: "1er Lugar Expo TI - Contaduria",
      dates: "Junio 2025",
      location: "Nanchital, UTSV, Veracruz.",
      description:
        "Primer lugar en la Expo TI por el desarrollo de RALQ, una plataforma educativa enfocada en la visualización de estructuras 3D para apoyar el aprendizaje de química. El proyecto destacó por su innovación tecnológica y su impacto en el ámbito educativo.",
      image: "/utsv.jpg",
      links: [
        {
          title: "Repositorio",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/EmirPolito/RALQ-2",
        },
        {
          title: "Evidencia",
          icon: <Icons.globe className="size-3" />,
          images: [
            {
              url: "/1er-lugar/1er-lugar.png",
              title: "Evento",
            },
          ],
        },
      ],
    },
  ],
} as const;
