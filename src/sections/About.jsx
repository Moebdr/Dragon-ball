import Navbar from "../components/Navbar";
import Animation from "../Animation/Animation";
function About() {
  return (
    <>
      <Navbar />
      <Animation>
        <div className="text-center flex justify-center  h-[80vh] items-center">
          <p className="font-semibold capitalize flex gap-4 text-4xl">
            <Animation delay={.5}> i'm </Animation>
            <Animation delay={1}> mohammed,</Animation>
            <Animation delay={1.5}> software </Animation>
            <Animation delay={2}> enginere </Animation>
          </p>
        </div>
      </Animation>
    </>
  );
}
export default About;
