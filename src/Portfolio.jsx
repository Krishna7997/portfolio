export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Krishna Patel</h1>
        <p className="text-lg mt-2">Computer Science Student & Software Developer</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="mailto:krishnapatel122003@gmail.com" className="underline">Email</a>
          <a href="#" className="underline">LinkedIn</a>
          <a href="#" className="underline">GitHub</a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a Computer Science student at York University, graduating in May 2027. With advanced diplomas
          in multilingual programming from C-DAC, I bring a solid foundation in software development,
          automation, and database management. I'm passionate about building efficient systems and exploring
          full-stack development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">LBA Blog Website</h3>
            <p>
              Developed a dynamic blog site using TypeScript, Next.js, Node.js, and Prisma. Integrated
              authentication, responsive design, and syntax highlighting for blog posts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Data Extract Automator</h3>
            <p>
              A Python tool for managing and processing Excel-based databases. Automated data cleaning,
              formatting, and backups to ensure accurate reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Database Manager – Everything Mortgages</h3>
            <p className="italic">Oct 2023 – Jan 2024, Toronto, ON</p>
            <p>
              Built a Python automation pipeline for data merging and Excel reporting. Ensured daily backups and
              high data accuracy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Software Developer – Lassonde Blockchain Association</h3>
            <p className="italic">Aug 2023 – Present, Toronto, ON</p>
            <p>
              Leading development of full-stack applications including blog platforms with database integration,
              authentication, and UI design in Figma.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          <li>Python</li>
          <li>JavaScript / TypeScript</li>
          <li>Java</li>
          <li>SQL</li>
          <li>Node.js / React / Next.js</li>
          <li>PowerShell</li>
          <li>Figma</li>
          <li>Git / Jira</li>
          <li>MySQL / Oracle</li>
          <li>Linux / Windows / MacOS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          <li>
            <strong>BSc Computer Science</strong>, York University (May 2027)
          </li>
          <li>
            <strong>Advanced Diploma in Multilingual Computer Programming</strong>, C-DAC Bangalore (Sep 2021)
          </li>
          <li>
            <strong>Diploma in Multilingual Computer Application</strong>, C-DAC Bangalore (Jun 2021)
          </li>
        </ul>
      </section>
    </div>
  );
}