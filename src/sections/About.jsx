import Navbar from "../components/Navbar";
import Animation from "../Animation/Animation";
function About() {
  return (
    <>
      <Navbar />
      <Animation duration={1.5}>
        <div className="text-center flex justify-center h-lvh items-center">
          <p className="font-semibold capitalize flex gap-4 text-4xl">
            <Animation delay={1}> i'm </Animation>
            <Animation delay={2}> mohammed,</Animation>
            <Animation delay={3}> software </Animation>
            <Animation delay={4}> enginere </Animation>
          </p>
        </div>
      </Animation>
    </>
  );
}
export default About;
