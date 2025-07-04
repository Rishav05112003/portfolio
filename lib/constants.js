export const images = Array.from({ length: 10 }, (_, index) => ({
  href: `/${index + 1}.png`,
}));

export const data = [
  {
    title: "2019",
    content: (
      <div>
        <p className="mb-8 text-lg font-sans font-normal text-neutral-300 md:text-md dark:text-neutral-200">
          While I was in School, I started basic coding using JAVA. Started
          learning basic programming concepts and it was FUN. This is what made
          me fall in love with coding.
        </p>
      </div>
    ),
  },
  {
    title: "Early 2020",
    content: (
      <div className="font-sans">
        <p>
          Completed Secondary Education from{" "}
          <span className="bg-muted">Holy Cross School</span>
        </p>{" "}
        with a score of <span className="bg-muted">95.8%</span> in class 10th
        <p>
          Later also scored <span className="bg-muted">92.8%</span> from CBSE
          board in class 12th
        </p>
      </div>
    ),
  },
  {
    title: "Late 2022",
    content: (
      <div>
        <p className="">
          My Journey with <span className="bg-muted">NIT Durgapur</span> Started
        </p>
        <div className="mb-8">
          <p>
            The first year was full of surprises and new adventures. This is
            when i started learning <span className="bg-muted">DSA</span> and
            extending my interest towards{" "}
            <span className="bg-muted">web development</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/nit1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/nit2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023 - 2024",
    content: (
      <div>
        <p className="mb-8 text-lg font-sans font-normal text-neutral-200 md:text-lg dark:text-neutral-200">
          I started my journey with{" "}
          <span className="bg-muted">
            React.js, Express.js, Mongodb, Node.js
          </span>{" "}
          and <span className="bg-muted">Next.js</span> and built some amazing
          projects. I joined{" "}
          <span className="bg-muted">Strokes, NIT Durgapur</span>, the Art and
          Photography club of NIT Durgapur and started exploring my creative
          side. I also contributed in developing the website of{" "}
          <span className="bg-muted">Strokes</span>.
        </p>
      </div>
    ),
  },
  {
    title: "Present",
    content: (
      <div>
        <p className="mb-8 text-lg font-sans font-normal text-white md:text-lg dark:text-neutral-200">
          Currently, I am in my final year at NIT Durgapur actively working on
          various projects, enhancing my skills in full-stack development, and
          exploring new technologies.{" "}
          <span className="font-bold font-sans">
            Growing everyday and learning something new all the time.
          </span>
        </p>
      </div>
    ),
  },
];



export const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Bootstrap",
    "Aceternity UI",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "Clerk",
    "Zod Validation",
    "JWT Auth",
    "SQL",
    "PostgreSQL",
    "Prisma ORM",
    "MongoDB",
    "Stripe Payments",
  ],
  "Dev Tools": ["VS Code", "Git", "GitHub", "Vercel", "Postman", "Jupyter Notebook", "Pycharm"],
};



export const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description: "A modern portfolio showcasing my skills and projects.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    github: "https://github.com/Rishav05112003/portfolio",
    live: "https://yourportfolio.com"
  },
  {
    title: "AI Laguage Learner",
    image: "/projects/lingo.png",
    tech: "Next.js, React, Prisma ORM, postgreSQL, Tailwind CSS, Clerk Auth, Zod Validation",
    description: "The one Stop solution to learn and practive any language",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    title: "Chat App",
    image: "/projects/gossips.png",
    description: "A real-time chat application with socket.io integration.",
    tech: "React, Node.js,Express.js, Socket.io, MongoDB, Tailwind CSS",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chatapp-demo.com"
  },
  {
    title: "Strokes Website",
    image: "/projects/strokes.png",
    description: "The official website of Strokes, the Art and Photography club of NIT Durgapur.",
    tech: "Next.js, Tailwind CSS, Framer Motion, Aceternity UI",
    github: "https://github.com/Rishav05112003/strokes",
    live: "https://strokes-steel.vercel.app/"
  }
];


export const blogs = [
  {
    title: "How Routines Helped Me Become Consistent",
    image: "/blogs/routine.png",
    excerpt:
      "In this blog, I talk about how planning routines turned my chaos into focused productivity during my busiest days.",
    slug: "https://rishav213.hashnode.dev/how-i-used-routines-to-10x-my-productivity-and-finish-more-in-less-time",
    date: "June 2025"
  },
  {
    title: "Rendering in Next.js: My Personal Take",
    image: "/blogs/rendering.png",
    excerpt:
      "I break down different rendering strategies in Next.js — CSR, SSR, SSG — and how I used them to boost performance.",
    slug: "https://why-nextjs-wins-at-dynamic-routing.hashnode.dev/why-nextjs-rules-rendering-strategies",
    date: "June 2025"
  },
  {
    title: "Why Next.js Wins at Dynamic Routing",
    image: "/blogs/sql.png",
    excerpt:
      "My Views on why dynamic routing in Next.js is a game-changer for building scalable web apps.",
    slug: "https://why-nextjs-wins-at-dynamic-routing.hashnode.dev/why-nextjs-wins-at-dynamic-routing",
    date: "June 2024"
  },
  {
    title:"How AI Became my Learning Buddy",
    excerpt:
      "In this blog, I share how AI tools like ChatGPT and GitHub Copilot transformed my learning process, making coding more efficient and fun.",
    slug:"https://medium.com/@rishavdeepmaity/solving-dsa-smarter-how-ai-became-my-learning-buddy-7eef387b100f",
    date: "July 2024",
  }
];
