import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'html', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
          // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'Angular', icon: 'vscode-icons:file-type-angular' },
        ],
    },
    {
        id: getId(),
        title: 'Software Skills',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in building large scale java applications',
        'Experience in developing design systems and style guides',
        'Experience in building mobile applications using flutter & react',
        ],
        softwareSkills: [
        { name: 'eclipse', icon: 'logos:eclipse-icon' },
        { name: 'visual code', icon: 'logos:visual-studio-code' },
        { name: 'Intellij', icon: 'logos:intellij-idea' },
        
        ],
    },
    ],
};
