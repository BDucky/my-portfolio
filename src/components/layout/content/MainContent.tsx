import { PersonalInfo } from "@/components/sections/personal";
import { Experience, Timeline } from "@/components/sections/work";

type SectionRefs = {
  personal: React.RefObject<HTMLDivElement | null>;
  experience: React.RefObject<HTMLDivElement | null>;
  timeline: React.RefObject<HTMLDivElement | null>;
};

export default function MainContent({ sectionRefs }: { sectionRefs: SectionRefs }) {
  return (
    <main className="flex-1 flex flex-col gap-16 px-2 md:px-8 py-6">
      <section ref={sectionRefs.personal} id="personal" className="scroll-mt-24 animate-fadein">
        <PersonalInfo />
      </section>
      <section ref={sectionRefs.experience} id="experience" className="scroll-mt-24 animate-fadein">
        <Experience />
      </section>
      <section ref={sectionRefs.timeline} id="timeline" className="scroll-mt-24 animate-fadein">
        <Timeline />
      </section>
    </main>
  );
}
