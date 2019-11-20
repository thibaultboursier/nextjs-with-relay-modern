import { JobsWithQueryRenderer } from "../components/Jobs";

const Index = ({ message }) => <JobsWithQueryRenderer />;

Index.getInitialProps = () => ({
  message: "Simple page"
});

export default Index;
