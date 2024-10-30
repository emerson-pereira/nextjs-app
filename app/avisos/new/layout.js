import AvisoHeader from '@/components/AvisoHeader'
import AvisoSideNav from '@/components/AvisoSideNav';

export default function NewAvisoLayout({ children }) {
  return (
    <div>
      <AvisoHeader className="border-bottom px-5 py-4" />
      <div className="d-flex flex-row px-5 py-4">
        <AvisoSideNav className="bg-white w-25 rounded" />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
