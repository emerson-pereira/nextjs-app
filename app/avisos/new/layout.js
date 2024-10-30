import AvisoHeader from '@/components/AvisoHeader'

export default function NewAvisoLayout({ children }) {
  return (
    <>
      <AvisoHeader />
      <div className="d-flex flex-row">
        <div>
          Side Nav
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
