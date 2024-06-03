import Layout from "../Layouts/Layout";

function Home({ name }) {
  return <h1 className="title">Hello {name}</h1>;
}

// Persistent layouts
// Home.layout = (page) => <Layout children={page} title="Welcome" />;

export default Home;
