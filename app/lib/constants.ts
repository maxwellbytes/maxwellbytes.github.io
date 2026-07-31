import ResumeApp from "@/components/apps/ResumeApp";
import ProjectsApp from "@/components/apps/ProjectsApp";
import AboutApp from "@/components/apps/AboutApp";
import SettingsApp from "@/components/apps/SettingsApp";

export const TASKBAR_HEIGHT = 48; //in px

export const APP_MAP = {
    resume: ResumeApp,
    projects: ProjectsApp,
    about: AboutApp,
    settings: SettingsApp
}