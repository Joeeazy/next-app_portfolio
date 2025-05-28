import React from 'react'
import { FaCode, FaLaptop, FaLaptopCode } from 'react-icons/fa'

export default function page() {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About me</h1>
      {/* bio section */}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
        Software Engineer with 1+ year of experience designing, building, and optimizing scalable web
applications. Skilled in full-stack development (JavaScript/TypeScript, Python, React, Node.js) and
cloud-based architectures (AWS). Strong collaborator with a focus on clean code, performance, and
maintaining systems. Passionate about solving complex problems through efficient engineering and
clear documentation.
        </p>
      </section>

      {/* skills section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-dark/50 rounded-lg p-6 shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-3'>
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind Css</li>
              <li>HTML5/ CSS3</li>
            </ul>
          </div>
 

          <div className='bg-white dark:bg-dark/50 rounded-lg p-6 shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-3'>
              <li>Node.js</li>
              <li>Python FastAPI</li>
              <li>PostgreSQL</li>
              <li>Mongo DB</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 rounded-lg p-6 shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-3'>
              <li>Git / Github </li>
              <li>AWS Cloud</li>
              <li>Docker</li>
              <li>Terraform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experience</h2>
        <div className='space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Full stack Developer</h3>
            <p className='text-primary mb-2'>Roadrims Logistics * 2024 - Present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Developed responsive UIs with React.js and Tailwind CSS, boosting user 
                efficiency by 30% for a logistics platform</li>
              <li>Integrated REST APIs, resolved UI/backend discrepancies, and cut frontend 
                bugs by 40% via rigorous testing (Chrome DevTools, Postman)</li>
              <li>Implemented state management to handle complex UI interactions and
                global data, improving code maintainability and performance across modules</li>
              <li>Utilized git for version control and collaborative development.</li>
              <li>Implemented responsive design with Tailwind Css for cross-device compatibility.</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Full stack Developer</h3>
            <p className='text-primary mb-2'>Roadrims Logistics * 2024 - Present</p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Developed responsive UIs with React.js and Tailwind CSS, boosting user 
                efficiency by 30% for a logistics platform</li>
              <li>Integrated REST APIs, resolved UI/backend discrepancies, and cut frontend 
                bugs by 40% via rigorous testing (Chrome DevTools, Postman)</li>
              <li>Implemented state management to handle complex UI interactions and
                global data, improving code maintainability and performance across modules</li>
              <li>Utilized git for version control and collaborative development.</li>
              <li>Implemented responsive design with Tailwind Css for cross-device compatibility.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>
        <div className='space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>AWS reStart</h3>
            <p className='text-primary mb-2'>eMobilis Technologies * Jan 2025 - April 2025</p>
            <p className='text-secondary'>Graduated with a Gold Class Honors. <br/> Focused on Aws Cloud</p>
          </div>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Software Engineering</h3>
            <p className='text-primary mb-2'>ALX Africa * Jun 2023 - November 2024</p>
            <p className='text-secondary'>Graduated with Honors. <br/> Focused on Sofware Engineering and Devops </p>
          </div>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Bachelor of Science in Public Health</h3>
            <p className='text-primary mb-2'>Technical University of Kenya * June 2019 - November 2024</p>
            <p className='text-secondary'>Graduated with a First Class Honors. <br/> </p>
          </div>
        </div>
      </section>
    </div>
  )
}
