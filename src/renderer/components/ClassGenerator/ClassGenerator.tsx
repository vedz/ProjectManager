type AppProp = {
  url: string;
};

const ClassGenerator = ({ url }: AppProp) => {
  return (
    <div>
      <h1>ClassGenerator</h1>
      <div>Projet ouvert : {url}</div>
    </div>
  );
};

export default ClassGenerator;
