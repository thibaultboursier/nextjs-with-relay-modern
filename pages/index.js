import { Jobs } from "../components/Jobs";

const Index = ({ message }) => <Jobs />;

Index.getInitialProps = () => ({
  message: "Simple page"
});

export default Index;
