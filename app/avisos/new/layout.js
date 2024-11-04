import AvisoHeader from '@/components/AvisoHeader'
import AvisoSideNav from '@/components/AvisoSideNav';
import StepNav from "@/components/StepNav";

export default function NewAvisoLayout({ children }) {
  const steps = new Array(12).fill().map((_, itemIndex) => ({
    id: `item-${itemIndex}`
  }));
  steps[9].active = true;

  return (
    <div>
      <AvisoHeader className="border-bottom px-5 py-4" />
      <div className="d-flex px-5 py-4">
        <AvisoSideNav className="bg-white w-25 rounded" steps={steps} />
        <div className="px-4 w-100">
          <div className="d-flex justify-content-between">
            <div>
              {/* TODO: Add state for current step */}
              <h3>Opção X</h3>
              <p className="text-primary">* Campos de preenchimento obrigatório</p>
            </div>
            <StepNav />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
