export default function ResumeApp() {
  return (
    <>
    <div className="font-inter text-text m-3 mr-6">
        <section className="mb-2">
            <h2 className="text-lg font-bold">EXPERIENCE</h2>
            <hr />
            <div className="flex justify-between">
                <h3>Freelance Software Developer</h3>
                <h3>Apr 2024 - Present</h3>
            </div>
            <h4 className="text-md italic font-bold">RV Rental & Reservation System - Full-Stack Booking Platform (client project)</h4>
            <p className="text-sm italic mb-2">Next.js, React, TypeScript, Supabase, Tailwind CSS, Vercel, Resend</p>
            <ul className="list-disc list-inside mb-3">
                <li>Built and shipped a full-stack booking platform for a small rental business, including a real-time availability calendar and automated email inquiry system</li>
                <li>Designed backend logic for secure data handling and used Supabase to track and manage reservations</li>
                <li>Integrated the Resend API to automate booking confirmation and host alert notifications, reducing manual follow-up</li>
            </ul>
            <h4 className="text-md italic font-bold">Contract Software Engineer - Remote, Multiple Clients</h4>
            <p className="text-sm italic mb-2">TypeScript, Java, WSL/Linux, JavaScript, HTML/CSS</p>
            <ul className="list-disc list-inside">
                <li>Implemented and validated features and bug fixes in production open-source library codebases (e.g., Zod), matching existing architecture and error-reporting conventions</li>
                <li>Authored and verified example API calls and responses to confirm correct request/response behavior across real-world workflows</li>
            </ul>
        </section>
        <section className="mb-2">
            <h2 className="text-lg font-bold">PROJECTS</h2>
            <hr />
            <h3 className="font-bold">Interactive OS-Style Portfolio</h3>
            <p className="text-sm italic mb-2">React, TypeScript, Tailwind CSS, react-draggable, Github Pages</p>
            <ul className="list-disc list-inside">
                <li>Built a centralized, reducer-driven window management system handling window lifecycle (e.g., open, close, minimize, move) with immutable state updates</li>
                <li>Implemented z-index-based focus logic that promotes the active window on interaction and reuses existing instances instead of duplicating windows per app</li>
                <li>Built drag interactions with react-draggable, constraining movement to the parent container and preserving/restoring prior bounds minimizing/maximizing windows</li>
            </ul>
        </section>
        <section className="mb-2">
            <h2 className="text-lg font-bold">EDUCATION</h2>
            <hr />
            <div className="flex justify-between">
                <h3 className="font-bold">Bachelor of Science - Computer Science</h3>
                <h3>Dec 2025</h3>
            </div>
            <p>Appalachian State University - GPA: 3.48 - Data Science Certificate</p>
        </section>
        <section className="mb-2">
            <h2 className="text-lg font-bold">SKILLS</h2>
            <hr />
            <p><strong>Languages & Frameworks:</strong> TypeScript, JavaScript, React, Next.js, Node.js, Java, C++, Python, SQL, HTML/CSS, Tailwind CSS</p>
            <p><strong>Tools & Libraries:</strong> Git, MongoDB, Supabase, Vercel, Vitest, Jest, AJAX</p>
        </section>
    </div>
    </>
  );
}