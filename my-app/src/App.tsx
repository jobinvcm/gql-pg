import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query getBooks {
    books {
      id
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>Item</div>
}

export default function App() {
  return (
    <div>
      <h2>
        My first Apollo app
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <DisplayLocations />
    </div>
  );
}
