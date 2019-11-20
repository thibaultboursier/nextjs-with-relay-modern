import Link from "next/link";
import { JobsWithQueryRenderer } from "../components/JobList";

const Index = ({ message }) => (
  <>
    <Link href="/jobs">See jobs</Link>
  </>
);

export default Index;
