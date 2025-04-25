import StarsBackground from "@/components/layout/background/StarsBackground";
import { PersonalInfo } from "@/components/sections/personal";
import { Experience, Timeline } from "@/components/sections/work";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white transition-colors duration-350">
      <ThemeToggle />
      <StarsBackground />
      <Tabs defaultValue="personal" className="w-full max-w-4xl mx-auto mt-10">
        <TabsList>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="personal"><PersonalInfo /></TabsContent>
        <TabsContent value="experience"><Experience /></TabsContent>
        <TabsContent value="timeline"><Timeline /></TabsContent>
        {/* <TabsContent value="projects"><Projects /></TabsContent> */}
      </Tabs>
    </div>
  );
}
