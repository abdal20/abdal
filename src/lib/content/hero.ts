import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Abdal Qasha.',
    tagline: 'I am a full-stack developer.',
    description:
    "I'm Abdal Qasha, a Java expert with proficiency in React, Spring Boot, and more. Blending technical skill and creative insight, I craft exceptional, user-centric web applications, elevating digital experiences with each line of code.",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};