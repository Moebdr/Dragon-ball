import Navbar from "../components/Navbar";
import Animation from "../Animation/Animation";
function About() {
  return (
    <>
      <Navbar />
      <Animation duration={0}>
        <div className="text-center flex justify-center h-[80vh] items-center">
          <p className="font-semibold capitalize flex gap-4 text-4xl">
            <Animation delay={1}> i'm </Animation>
            <Animation delay={1.5}> mohammed,</Animation>
            <Animation delay={2}> software </Animation>
            <Animation delay={2.5}> enginere </Animation>
          </p>
        </div>
      </Animation>
    </>
  );
}
export default About;
