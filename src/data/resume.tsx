import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Oracle } from "@/components/ui/svgs/oracle";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Astro } from "@/components/ui/svgs/astro";
import { APEX } from "@/components/ui/svgs/apex";

export const DATA = {
  name: "Pablo Dibez",
  nameTitle: "Pablo Dibez",
  initials: "PD",
  url: "https://pablodibez.com",
  location: "Astra, Chubut",
  locationLink: "https://www.google.com/maps/place/astra+argentina",
  description:
    "Desarrollador de software, experto en bases de datos y en brindar soluciones escalables y seguras, con 10 años de experiencia en el sector público y privado.",
  summary:
    "Trabajé en entornos diversos como startups tecnológicas y retail de escala masiva. Lideré proyectos con impacto real, como plataformas de trámites digitales y sistemas  de pagos online. En mi etapa universitaria participé en distintos proyectos de investigación.",
  avatarUrl: "/picofme.jpg",
  ogImage: "/preview.jpg",
  sections: {
    about: { order: 1, enabled: true, heading: "Sobre mí" },
    work: { order: 2, enabled: true, heading: "Experiencia Profesional", presentLabel: "Presente" },
    education: { order: 3, enabled: true, heading: "Educación" },
    skills: { order: 4, enabled: true, heading: "Habilidades técnicas" },
    projects: {
      order: 5, 
      enabled: true,
      label: "Proyectos",
      heading: "Mirá algunos de mis trabajos",
      text: "Trabajé en una gran variedad de proyectos. Aquí te comparto algunos de mis favoritos.",
    },
    research: {
      order: 6, 
      enabled: true,
      label: "Investigación",
      heading: "Mis Publicaciones",
      text: "En esta sección comparto los resultados de mis trabajos de investigación realizados en el ámbito universitario.",
    },
    contact: {
      order: 7, 
      enabled: true,
      label: "Contacto",
      heading: "Contactame",
      text: "¿Querés que hablemos? Enviame un correo electrónico o escribime por LinkedIn con tu consulta y te responderé en cuanto pueda. No respondo mensajes de carácter publicitario o ventas.",
    },
  },
  skills: [
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Astro", icon: Astro },
    { name: "Oracle DB", icon: Oracle },
    { name: "PL/SQL", icon: Oracle },
    { name: "Oracle APEX", icon: APEX },
  ],
  navbar: [
    { href: "/", icon: House, label: "Inicio" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "pdibez@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pdibez",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pablo-dibez/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pdibez@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Tecnosoftware",
      href: "https://tecnosoftware.com/",
      badges: [],
      location: "Buenos Aires, Argentina",
      title: "Desarrollador Sr",
      logoUrl: "/work/tecnosoftware.jpeg",
      start: "Noviembre 2023",
      end: undefined,
      description:
        "Integré el equipo de desarrollo con la Gerencia de Innovación de Cencosud como colaborador; en el cual diseñé y desarrollé Jumbo Prime Argentina, incrementando la tasa de aceptación de cobros del 66% al 95%.",
    },
    {
      company: "Cognitlabs",
      href: "https://www.cognitlabs.com/",
      badges: [],
      location: "Buenos Aires, Argentina",
      title: "Desarrollador FullStack",
      logoUrl: "/work/cognitlabs.jpeg",
      start: "Febrero 2022",
      end: "Noviembre 2023",
      description:
        "Desarrollé Validita, plataforma de gestión documental con tecnología Blockchain para el cliente Origino.",
    },
    {
      company: "Thorlabs",
      href: "",
      badges: [],
      location: "Comodoro Rivadavia, Argentina",
      title: "Desarrollador FullStack - Desarrollador IA",
      logoUrl: "/work/thorlabs.png",
      start: "Octubre 2020",
      end: "Agosto 2023",
      description:
        "Implementé Vehicle Counter, solución de análisis de video con inteligencia artificial para gestión de tráfico en tiempo real mediante cámaras urbanas en la ciudad de Comodoro Rivadavia.",
    },
    {
      company: "Universidad Nacional de la Patagonia San Juan Bosco",
      href: "https://www.unp.edu.ar/",
      badges: [],
      location: "Comodoro Rivadavia, Argentina",
      title: "Auxiliar",
      logoUrl: "/work/unpsjb.png",
      start: "Septiembre 2019",
      end: "Diciembre 2019",
      description:
        "Trabajé como Auxiliar de Segunda en la materia Base de Datos I del segundo año en las carreras Analista Programador Universitario y Licenciatura en Informática.",
    },
    {
      company: "Municipalidad Comodoro Rivadavia",
      href: "https://www.comodoro.gov.ar/",
      badges: [],
      location: "Comodoro Rivadavia, Argentina",
      title: "Jefe Dpto. Proyectos Especiales - Desarrollador FullStack",
      logoUrl: "/work/mcr.png",
      start: "Junio 2016",
      end: "Enero 2022",
      description:
        "Lideré el desarrollo de ComodoroWeb, oficina virtual de la Municipalidad de Comodoro Rivadavia con más de 200.000 usuarios; que permite realizar pagos online y trámites digitales, mejorando significativamente la accesibilidad ciudadana.",
    },
    {
      company: "Universidad Nacional de la Patagonia San Juan Bosco",
      href: "https://www.unp.edu.ar/",
      badges: [],
      location: "Comodoro Rivadavia, Argentina",
      title: "Pasante",
      logoUrl: "/work/unpsjb.png",
      start: "Septiembre 2011",
      end: "Noviembre 2011",
      description: "Me desempeñé como pasante en el Laboratorio de Ensayos Industriales",
    },
  ],
  education: [
    {
      school: "Universidad Nacional de la Patagonia San Juan Bosco",
      href: "https://www.unp.edu.ar/",
      degree: "Licenciado en Informática (Finalizado)",
      logoUrl: "/work/unpsjb.png",
      start: "2016",
      end: "2024",
    },
    {
      school: "Universidad Nacional de la Patagonia San Juan Bosco",
      href: "https://www.unp.edu.ar/",
      degree: "Analista Programador Universitario (Finalizado)",
      logoUrl: "/work/unpsjb.png",
      start: "2013",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Jumbo Prime",
      href: "https://jumboprime.com.ar",
      dates: "2025",
      active: true,
      description:
        "Membresía que te otorga beneficios exclusivos en todas tus compras presenciales en Jumbo y Disco, y/o en los sitios web Jumbo.com.ar y Disco.com.ar ",
      technologies: [
        "Oracle DB", "Oracle APEX", "PL/SQL",  
      ],
      links: [],
      image: "/projects/jumboprime.png",
    },
    {
      title: "Validita",
      href: "https://app.validita.io",
      dates: "2022",
      active: true,
      description:
        "Plataforma de gestión documental con tecnología Blockchain para el cliente Origino",
      technologies: [
        "Node.js", "React.js", "Postgres", "AWS Lambda"
      ],
      links: [],
      image: "/projects/validita.png",
    },
    {
      title: "ComodoroWeb",
      href: "https://www.comodoroweb.gob.ar",
      dates: "2020",
      active: true,
      description:
        "Oficina virtual con más de 200.000 usuarios; que permite realizar pagos online y trámites digitales de la Municipalidad de Comodoro Rivadavia.",
      technologies: [
        "Oracle DB", "Oracle APEX", "PL/SQL", 
      ],
      links: [],
      image: "/projects/comodoroweb.png",
    },
  ],
  research: [
    {
      title: "Personalización de un modelo text-to-image para la generación de imágenes con inteligencia artificial",
      dates: "2024",
      description: "Tesina para obtencion de titulo de grado Licenciatura en Informatica",
      image: "/work/unpsjb.png",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://rdi.unp.edu.ar/items/e2b76558-dfb8-45a7-b73b-b3c2c9c531ee/full",
        },        
      ],
    },
    {
      title: "EduScrum un marco de trabajo que puede propiciar aprendizaje significativo",
      dates: "2021",
      description: "WICC XXIII",
      image: "/research/wicc-2021.jpeg",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://sedici.unlp.edu.ar/handle/10915/120865",
        },        
      ],
    },
    {
      title: "Evento de Transferencia DeCoDev, Desarrollo Colaborativo de un Videojuego",
      dates: "2020",
      description: "WICC XXII",
      image: "/research/wicc-2020.jpg",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://sedici.unlp.edu.ar/handle/10915/103920",
        },        
      ],
    },
    {
      title: "Vinculación con docentes de nivel secundario y con ingresantes de Informática, a través de talleres y juegos educativos desarrollados, uno de los cuales, es un juego móvil",
      dates: "2018",
      description: "WICC XX",
      image: "/research/wicc-2018.jpg",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://sedici.unlp.edu.ar/handle/10915/68398",
        },        
      ],
    },
    {
      title: "Juegos Interactivos en ARDUINO y Java, para Motivar y Despertar el Interés en Informática",
      dates: "2017",
      description: "WICC XIX",
      image: "/research/wicc-2017.png",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://sedici.unlp.edu.ar/handle/10915/62922",
        },        
      ],
    },
    {
      title: "Recursos de la Web 2.0, y juegos interactivos, alternativas viables para propiciar el aprendizaje en informática",
      dates: "2015",
      description: "WICC XVII",
      image: "/research/wicc-2015.png",
      links: [
        {
          title: "Enlace",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://sedici.unlp.edu.ar/handle/10915/46033",
        },        
      ],
    },
  ],
} as const;
