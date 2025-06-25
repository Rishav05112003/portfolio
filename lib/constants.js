

export const images = Array.from({ length: 10 }, (_, index) => ({
  href: `/${index + 1}.png`,
}));

export const data = [
  {
    title: "2019",
    content: (
      <div>
        <p className="mb-8 text-lg font-sans font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
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
        <p>Completed Secondary Education from <span className="bg-muted">Holy Cross School</span></p> with a score of <span className="bg-muted">95.8%</span> in class 10th
        <p>Later also scored <span className="bg-muted">92.8%</span> from CBSE board in class 12th</p>
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
          <p>The first year was full of surprises and new adventures. This is when i started learning <span className="bg-muted">DSA</span> and extending my interest towards <span className="bg-muted">web development</span></p>
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
        <p className="mb-8 text-lg font-sans font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
          I started my journey with <span className="bg-muted">React.js, Express.js, Mongodb, Node.js</span> and <span className="bg-muted">Next.js</span> and built some amazing projects. I joined <span className="bg-muted">Strokes, NIT Durgapur</span>, the Art and Photography club of NIT Durgapur and started exploring my creative side. I also contributed in developing the website of <span className="bg-muted">Strokes</span>.
           </p>
      </div>
    ),
  },
  {
    title: "Present",
    content: (
      <div>
        <p className="mb-8 text-lg font-sans font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
          Currently, I am in my final year at NIT Durgapur actively working on various projects, enhancing my skills in full-stack development, and exploring new technologies. <span className="font-bold font-sans">Growing everyday and learning something new all the time.</span>
        </p>
      </div>
    ),
  }
];
