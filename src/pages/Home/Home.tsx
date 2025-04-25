import StarsBackground from "@/components/layout/StarsBackground";
import { PersonalInfo } from "@/components/sections/personal";
import { Experience, Timeline } from "@/components/sections/work";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
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
