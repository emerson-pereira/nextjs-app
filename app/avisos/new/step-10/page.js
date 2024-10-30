import FormGroup from "@/components/FormGroup";

export default function FormStep10() {
  return (
    <div className="d-flex flex-column gap-4">
      <FormGroup title="Tipo de taxa" className="p-4 bg-white">
        <p>Adicionar tipo de faixa</p>
        <p>dropdown</p>
      </FormGroup>
      <FormGroup title="Contar" required className="p-4 bg-white">
        <p>yes/no radio</p>
      </FormGroup>
      <FormGroup title="Taxa" required className="p-4 bg-white">
        <p>Adicionar taxa por localização, toggle / Adicionar Taxa</p>
        <p>data table</p>
      </FormGroup>
    </div>
  );
}
