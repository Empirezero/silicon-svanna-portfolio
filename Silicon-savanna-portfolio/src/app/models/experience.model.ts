export interface ExperienceItem {
  id: number;
  job_title: string;
  company: string;
  company_image: string;
  date_started: string;
  date_ended: string;
  is_current_working_here: boolean;
  technologies: { id: number; title: string; image: string }[];
  points: string[];
}