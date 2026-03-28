export default function CityError({ result }) {
  if (!result) return null;

  return (
    <div style={{
      padding: "12px",
      border: "1px solid red",
      borderRadius: "6px",
      maxWidth: "300px",
      margin: "20px auto",
      textAlign: "center"
    }}>
      <p style={{ margin: 0, fontWeight: "bold" }}>
        Error {result.cod}
      </p>
      <p style={{ marginTop: "6px" }}>
        {result.message}
      </p>
    </div>
  );
}