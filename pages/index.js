const Index = ({ message }) => <div>{message}</div>;

Index.getInitialProps = () => ({
  message: "Simple page"
});

export default Index;
