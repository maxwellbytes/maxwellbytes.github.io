import ResumeApp from "@/components/apps/ResumeApp";
import ProjectsApp from "@/components/apps/ProjectsApp";
import AboutApp from "@/components/apps/AboutApp";
import SettingsApp from "@/components/apps/SettingsApp";
import WelcomeApp from "@/components/apps/WelcomeApp";

export const TASKBAR_HEIGHT = 48; //in px

export const APP_MAP = {
    resume: ResumeApp,
    projects: ProjectsApp,
    about: AboutApp,
    settings: SettingsApp,
    welcome: WelcomeApp,
};

export const APP_DEFAULT_BOUNDS = {
    resume: { width: 720, height: 520 },
    projects: { width: 640, height: 420 },
    about: { width: 620, height: 380 },
    settings: { width: 600, height: 380 },
    welcome: { width: 560, height: 360 },
} as const;