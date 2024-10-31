"use client"

import { useTasksDispatch } from "@/app/contexts/formContext";
import Dropdown from "@/components/Dropdown";
import FormGroup from "@/components/FormGroup";
import RadioButton from "@/components/RadioButton";
import { useState } from "react";

export default function FormStep10() {
  const feeTypes = [
    { title: 'Item 1', link: '#' },
    { title: 'Item 2', link: '#' },
  ];
  const [feeTypeTitle, setFeeTypeTitle] = useState('');
  const taskDispatch = useTasksDispatch();

  return (
    <div className="d-flex flex-column gap-4">
      <FormGroup title="Tipo de taxa" className="p-4 bg-white">
        <p>Adicionar tipo de faixa</p>
        <Dropdown
          title={feeTypeTitle}
          items={feeTypes}
          onChange={(event) => {
            setFeeTypeTitle(event.target.text);
            taskDispatch({
              type: 'addedFeeType',
              feeType: event.target.text
            });
          }}
        />
      </FormGroup>
      <FormGroup title="Contar" required className="p-4 bg-white">
        <RadioButton
          name="radio-count"
          items={[
            { id: 'radio-count-yes', title: 'Sim' },
            { id: 'radio-count-no', title: 'Não' },
          ]}
          onChange={(radioId) => {
            taskDispatch({
              type: 'toggledCount',
              count: radioId === 'radio-count-yes'
            });
          }}
        />
      </FormGroup>
      <FormGroup title="Taxa" required className="p-4 bg-white">
        <p>Adicionar taxa por localização, toggle / Adicionar Taxa</p>
        <p>data table</p>
      </FormGroup>
    </div>
  );
}
