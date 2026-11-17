import figma_Volontarpoolen_Showcase from '../assets/images/figma/Volontarpoolen/Volontarpoolen.svg';


import figma_Organaise_Showcase from '../assets/images/figma/OrganAise/Showcase/Organaise_Showcase.svg';

import figma_Organaise_Overview_Bookings from '../assets/images/figma/OrganAise/Overview/Overview_Bookings.png';
import figma_Organaise_Overview_Calendar from '../assets/images/figma/OrganAise/Overview/Overview_Calendar.png';
import figma_Organaise_Overview_Design_System from '../assets/images/figma/OrganAise/Overview/Overview_Design_System.png';
import figma_Organaise_Overview_Documentation from '../assets/images/figma/OrganAise/Overview/Overview_Documentation.png';
import figma_Organaise_Overview_Event_Poll from '../assets/images/figma/OrganAise/Overview/Overview_Event_Poll.png';
import figma_Organaise_Overview_Task_Board from '../assets/images/figma/OrganAise/Overview/Overview_Task_Board.png';

import figma_Organaise_Preview_Bookings from '../assets/images/figma/OrganAise/Preview/Preview_Bookings.png';
import figma_Organaise_Preview_Calendar from '../assets/images/figma/OrganAise/Preview/Preview_Calendar.png';
import figma_Organaise_Preview_Design_System from '../assets/images/figma/OrganAise/Preview/Preview_Design_System.png';
import figma_Organaise_Preview_Documentation from '../assets/images/figma/OrganAise/Preview/Preview_Documentation.png';
import figma_Organaise_Preview_Event_Poll from '../assets/images/figma/OrganAise/Preview/Preview_Event_Poll.png';
import figma_Organaise_Preview_Task_Board from '../assets/images/figma/OrganAise/Preview/Preview_Task_Board.png';


import figma_NEU_Showcase from '../assets/images/figma/NEU/NEU_Showcase.svg';
import figma_NEU_Start from '../assets/images/figma/NEU/NEU_Start.svg';
import figma_NEU_Profile from '../assets/images/figma/NEU/NEU_Profile.svg';
import figma_NEU_AI from '../assets/images/figma/NEU/NEU_AI.svg';
import figma_NEU_Mood_Track from '../assets/images/figma/NEU/NEU_Mood_Track.svg';


import frontend_MUI_Showcase from '../assets/images/frontend/MUI/MUI_Showcase.svg';
import frontend_MUI_Login from '../assets/images/frontend/MUI/MUI_Login.svg';
import frontend_MUI_Register from '../assets/images/frontend/MUI/MUI_Register.svg';
import frontend_MUI_Pages from '../assets/images/frontend/MUI/MUI_Pages.svg';


import frontend_Todo_List_Showcase from '../assets/images/frontend/Todo_List/Todo_List_Showcase.svg';


import frontend_Solenia_Showcase from '../assets/images/frontend/Solenia/Solenia_Showcase.svg';


import Epilepsy_Warning from '../assets/images/misc/Epilepsy_Warning.svg';
import bob from '../assets/images/misc/bob.svg';

export const projectData = [
    {
        id: 1,
        isVisible: true,
        title: 'OrganAise',
        subtitle: null,
        tagShowcase: 'Figma',
        tag: 'LIA',
        role: `Design Lead & Team Leader`,
        duration: `6 months`,
        tools: [`Figma`, `Discord`, `Slack`, `YouTrack`],
        imageShowcase: figma_Organaise_Showcase,
        imagePreview: [figma_Organaise_Preview_Calendar, figma_Organaise_Preview_Bookings, figma_Organaise_Preview_Event_Poll, figma_Organaise_Preview_Task_Board, figma_Organaise_Preview_Design_System, figma_Organaise_Preview_Documentation],
        imageOverview: [figma_Organaise_Overview_Calendar, figma_Organaise_Overview_Bookings, figma_Organaise_Overview_Event_Poll, figma_Organaise_Overview_Task_Board, figma_Organaise_Overview_Design_System, figma_Organaise_Overview_Documentation],
        link: 'https://www.figma.com/proto/yYdzTYlrWGMftGaBSalEGl/OrganAise--Copy-?node-id=8550-171593&starting-point-node-id=8550%3A171593&t=UQftWwTnIdHJ66Qg-1',

        slideContent: [
            {
                title: `Overview & The Calendar`,
                text: `OrganAise is a scheduling platform built for professionals managing multiple projects. During my internship as Design Lead, this Calendar (shown in the preview) was our top priority and the most complex piece to design.\n\nTo ensure a strong foundation, we started with a competitive analysis of 10 platforms, including Google and Calendly. By identifying industry standards, we successfully designed intuitive "Quick" and "Advanced" event creators that gave users total control of their time without visual clutter.`,
            },
            {
                title: `Streamlining the Booking Flow`,
                text: `The Bookings feature lets users share a personalized meeting link. The original version was overwhelming for new users, so we ran A/B tests comparing a step-by-step flow against a tabbed layout.\n\nThe result was a smart hybrid approach. As shown in the preview, we used the winning step-by-step system for creating a new link, and the tabbed system for editing (since users already know what they want to change).\n\nThis data-driven decision made the final booking page much more welcoming and frictionless.`,
            },
            {
                title: `Reimagining the Event Poll`,
                text: `This Event Poll preview shows the Ongoing and Completed dashboards. The original feature was overly complex and time-consuming for users to navigate. We rethought the logic into a clean 3-step flow: Create, Vote, and Result.\n\nA key UX decision was giving the creator the final say on the winning time, ensuring critical VIPs could attend even if their preferred time was not the most popular.\n\nWhile we completed the dashboards shown here, we strategically paused the "Create" screen to redirect focus to core calendar features based on shifting business priorities.`,
            },
            {
                title: `The Figma-Native Task Board`,
                text: `Managing a massive scope requires a solid process. To avoid forcing the team to context-switch into a third-party app, I built this interactive, responsive Task Board directly inside Figma.\n\nPositioned on the very first page of our project, it allowed anyone from the design team to the CEO to instantly see what was in the Todo, Ongoing, Feedback, or Done columns.\n\nI also created a quick guide on our Discord, ensuring the entire cross-functional team stayed aligned and comfortable with the workflow.`,
            },
            {
                title: `Architecting the Design System`,
                text: `To keep iterations fast and consistent, I built a comprehensive Design System. This preview shows a slice of how I organized components with clear categorized pathing (e.g., Navbar/Aside/Icons/Lightmode) for easy discovery.\n\nFor icons, I established a strict naming convention for developers: listing the library source (like Lucide), the actual code name, and a user-friendly alias.\n\nCustom-drawn Figma icons were tagged explicitly so developers knew to export them as SVGs.\n\nThis structure drastically sped up both design and development.`,
            },
            {
                title: `Data-Driven Documentation`,
                text: `A great design only succeeds if it is easy for the development team to build.\n\nAs seen in this Documentation preview for the Quick Event, I focused heavily on ensuring a seamless handoff. Instead of just providing abstract visual examples, I built data-rich tables detailing exact icon libraries, press areas, system tags (like h1 or p), and hex codes.\n\nCombined with functional redlining to point out exact max-heights and dropdown states, this provided developers with the precise data they needed to bring the UI to life flawlessly.`,
            }
        ],
        imageWarning: null,
        workInProgress: null,
    },
    {
        id: 2,
        isVisible: true,
        title: 'Volontärpoolen',
        subtitle: null,
        tagShowcase: 'Figma',
        tag: 'Crisis Response',
        role: `UX/UI Engineer`,
        duration: `13 weeks`,
        tools: [`Figma`, `Canva`, `Jira`],
        imageShowcase: figma_Volontarpoolen_Showcase,
        imagePreview: null,
        imageOverview: null,
        link: 'https://www.figma.com/proto/BOH4nvtKdnXn2lqB5Fd0uK/Qubic-Agency---LLUH-Voloon%C3%A4rbyron?node-id=1740-15702&starting-point-node-id=1740%3A15702&content-scaling=responsive&t=hWHUHpJhlFkDueGa-1',
        slideContent: [
            {
                title: `Overview`,
                text: `Text coming soon`,
            },
            {
                title: `Problem`,
                text: `Text coming soon`,
            },
            {
                title: `Research`,
                text: `Text coming soon`,
            },
            {
                title: `Design & process`,
                text: `Text coming soon`,
            },
            {
                title: `Outcome`,
                text: `Text coming soon`,
            },
            {
                title: `Reflection`,
                text: `Text coming soon`,
            }
        ],
        imageWarning: null,
        workInProgress: bob,
    },
    {
        id: 3,
        isVisible: true,
        title: 'NEU',
        subtitle: null,
        tagShowcase: 'Figma',
        tag: 'Chas Challenge',
        role: `UX/UI Designer`,
        duration: `10 weeks`,
        tools: [`Figma`, `Figma Slides`, `Notion`, `Discord`],
        imageShowcase: figma_NEU_Showcase,
        imagePreview: [figma_NEU_Start, figma_NEU_AI, figma_NEU_Profile, figma_NEU_Mood_Track],
        imageOverview: null,
        link: 'https://www.figma.com/proto/OnP8ryycodwf2s0Ran2P8g/NEU-DESIGNFILE?node-id=1963-10055&starting-point-node-id=1963%3A10055&t=aO2hbglKwvITeuo6-1',
        overview: `Description coming soon`,
        problem: null,
        research: null,
        slideContent: [
            {
                title: `Design`,
                text: `Description coming soon`,
            },
            {
                title: `Outcome`,
                text: `Description coming soon`,
            },
            {
                title: `Reflection`,
                text: `Description coming soon`,
            }
        ],
        imageWarning: null,
        workInProgress: bob,
    },
    {
        id: 4,
        isVisible: true,
        title: 'Todo List',
        subtitle: null,
        tagShowcase: 'Frontend',
        tag: 'React + Vite',
        role: `Developer`,
        duration: `1 week`,
        tools: [`Vite`, `React`, `SASS`],
        imageShowcase: frontend_Todo_List_Showcase,
        imagePreview: [frontend_Todo_List_Showcase, frontend_Todo_List_Showcase, frontend_Todo_List_Showcase, frontend_Todo_List_Showcase,],
        imageOverview: null,
        link: 'https://todo-list.maximilian-hedman.workers.dev/',
        overview: `The Todo App is a simple yet powerful task management tool designed to help you organize, track, and complete your tasks efficiently. Whether you're managing daily chores, work assignments, or personal projects, this app ensures you stay productive and never forget an important task again.`,
        slideContent: [
            {
                title: `What is the Todo App?`,
                text: `The Todo App is a simple yet powerful task management tool designed to help you organize, track, and complete your tasks efficiently. Whether you're managing daily chores, work assignments, or personal projects, this app ensures you stay productive and never forget an important task again.`,
            },
            {
                title: `How it Works`,
                text: `1️⃣ Add a Task – Type in your task and hit "Add" or the "Enter key" to create a new item on your list.\n\n2️⃣ Start the Task – Click "Start" to begin working on a task. This marks it as ongoing, turning the task text orange and displaying a ⏳ indicator.\n\n3️⃣ Complete the Task – Once finished, click "Done", turning the task text green and removing the ongoing status. A ✔️ checkmark is added to indicate completion.\n\n4️⃣ Undo if Needed – If a task was marked done by mistake, click "Undo" to reset it.\n\n5️⃣ Delete Completed Tasks – Tasks can only be deleted once they are marked done, preventing accidental removal of unfinished work.`,
            },
            {
                title: `Features`,
                text: `✅ Dynamic Task States – Tasks move through different stages: Not Started → Ongoing → Completed.\n\n✅ Visual Cues – Orange for ongoing, green for completed, with a checkmark for extra clarity.\n\n✅ Easy Task Management – Tasks are stacked neatly with buttons for Start, Done, Undo, and Delete in a clean, structured layout.\n\n✅ Local Storage Support – Your tasks are saved automatically, so they remain available even if you refresh the page.`,
            },
            {
                title: `Why Use the Todo App?`,
                text: `🚀 Stay Organized – Never lose track of important tasks again.\n\n📅 Boost Productivity – Plan your work effectively and stay focused.\n\n🖥️ User-Friendly Interface – Simple, intuitive design for effortless task management.\n\n💾 No Data Loss – Your tasks remain stored even after closing the app.`,
            }
        ],
        imageWarning: null,
        workInProgress: null,
    },
    {
        id: 5,
        isVisible: true,
        title: 'SOLENIA',
        subtitle: null,
        tagShowcase: 'Frontend',
        tag: 'Team',
        role: `Code Master`,
        duration: `3 weeks`,
        tools: [`React`, `JavaScript`, `HTML`, `CSS`, `API`, `Github`, `Figma`],
        imageShowcase: frontend_Solenia_Showcase,
        imagePreview: null,
        imageOverview: null,
        link: 'https://solenia.maximilian-hedman.workers.dev/',
        slideContent: [
            {
                title: `Overview & The Code Master Role`,
                text: `Solenia is a fully functional e-commerce web application built with React and Vite. In our team of five, I took on the role of Lead Developer (or "Code Master").\n\nWhile my teammates focused on Figma and UI design, my sole responsibility was architecting the React codebase, managing the Git repository, and building the core functionality to ensure we hit every high-grade technical requirement.`,
            },
            {
                title: `Architecture & Version Control`,
                text: `A chaotic codebase slows everyone down. I started by designing a logical folder and file structure so the team could easily split up tasks without stepping on each others toes.\n\nOn GitHub, I acted as the gatekeeper for the main branch. I reviewed all pull requests, enforced best practices (like strict arrow functions and component modularity), left constructive feedback for my peers, and resolved all merge conflicts to keep our production code perfectly stable.`,
            },
            {
                title: `API Integration & Data Merging`,
                text: `The core of the app relied on fetching data from a third-party API. When the teammate building the Product Details page realized the API lacked specific details we wanted to display, I stepped in to help architect a solution.\n\nI engineered a hybrid concept on a local branch: a static database combined with a merge function. Instead of just doing it for them, I walked my teammate through the logic so they could understand the architecture and confidently implement it themselves.`,
            },
            {
                title: `Advanced State Management`,
                text: `To secure the highest possible grade (VG), the application needed advanced functionality like category filtering and a Favorites system. I focused on structuring the complex state logic for these features.\n\nHowever, as Code Master, my goal wasn't to write every line of code myself, but to empower the team. I built the foundational logic and collaborated with my teammates to integrate it, ensuring everyone learned the concepts and contributed meaningfully to the final product.`,
            },
            {
                title: `Debugging & Team Enablement`,
                text: `To support the team without overriding their active work, I maintained local branches to test code solutions and catch bugs early.\n\nWhen the teammate building the shopping cart ran into a tricky state management issue, we collaborated to debug it. I provided my local implementation as a reference, allowing her to compare approaches, debug her own logic, and successfully get the cart working.\n\nThis workflow kept our momentum fast while prioritizing team learning.`,
            }
        ],
        imageWarning: null,
        workInProgress: bob,
    },
    {
        id: 6,
        isVisible: true,
        title: `Mission Usage Impossible`,
        subtitle: `A deliberately frustrating app built with React Native, Expo, and Firebase Authentication.`,
        tagShowcase: 'Frontend',
        tag: 'React Native',
        role: 'Fullstack Developer (Backend Focus)',
        duration: `2 weeks`,
        tools: [`React Native`, `Expo`, `Firebase`],
        imageShowcase: frontend_MUI_Showcase,
        imagePreview: [frontend_MUI_Login, frontend_MUI_Register, frontend_MUI_Pages],
        imageOverview: null,
        link: 'https://mission-usage-impossible.netlify.app/',
        slideContent: [
            {
                title: `Overview`,
                text: `Mission: Usage Impossible was a collaborative school project where we explored the boundaries of UX by intentionally breaking every rule.\n\nWorking alongside my classmate Desirée, who spearheaded the UI design and retro-inspired mini-games, I was responsible for the technical infrastructure, backend logic, and Firebase Authentication.\n\nOur goal was to create a fully functional app that is simultaneously a nightmare to use.\n\nThe project features a deliberately confusing onboarding flow, a landing page, user profiles, and a dedicated "irritation page" filled with unpredictable interactive elements.`,
            },
            {
                title: `Design & process`,
                text: `While the UI was designed to be chaotic-featuring moving buttons, inconsistent contrasts, and Windows 95-inspired frustration. I focused on ensuring the underlying architecture was clean and modular.\n\nI implemented Firebase Authentication to handle user sessions amidst the chaos. A key challenge was supporting the "frustrating" logic (like unpredictable interactions) with stable code.\n\nWhile Desirée integrated playful elements like Snake and Flappy Bird clones, I ensured that despite the poor user experience, the app remained technically robust and fully functional.`,
            },
            {
                title: `Reflection`,
                text: `This project was a unique exercise in "reverse-engineering" a good experience. It forced me to think deeply about how essential backend stability is, even when the frontend is intentionally designed to fail the user.\n\nCollaborating with Desirée was a fantastic lesson in team synergy. By leaning into our complementary strengths, her creative eye for playful, annoying interactions and my focus on backend logic and state management.\n\nWe were able to build a project that is both technically organized and gloriously frustrating to navigate.`,
            }
        ],
        imageWarning: Epilepsy_Warning,
        workInProgress: null,
    },
];