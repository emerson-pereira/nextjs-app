export default function NewAvisoLayout({ children }) {
  return (
    <>
      <div>
        Header
      </div>
      <div>
        Side Nav
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
