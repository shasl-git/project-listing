import { FeedbackForm } from "@/features/feedback/ui/FeedbackForm";
import ProjectSection from "@/widgets/ProjectSection/ProjectSection";

export default function HomePage() {
  return (
    <main>
      <ProjectSection />
      <FeedbackForm />
    </main>
  );
}
