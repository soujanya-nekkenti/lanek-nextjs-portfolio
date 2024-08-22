import { AboutSection } from '../components/sections/AboutSection';
import { IntroSection } from '../components/sections/IntroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TimelineSection } from '../components/sections/TimelineSection';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <IntroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
    </main>
  );
}
