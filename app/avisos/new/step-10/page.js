"use client"

import { useForm, useFormDispatch } from "@/app/contexts/formContext";
import Dropdown from "@/components/Dropdown";
import FormGroup from "@/components/FormGroup";
import RadioButton from "@/components/RadioButton";
import Image from "next/image";
import { useState } from "react";

export default function FormStep10() {
  const feeTypes = [
    { title: 'Item 1', link: '#' },
    { title: 'Item 2', link: '#' },
  ];
  const [feeTypeTitle, setFeeTypeTitle] = useState('');
  const form = useForm();
  const taskDispatch = useFormDispatch();

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
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check-reverse form-switch d-flex gap-2">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Adicionar taxa por localização
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={(event) => taskDispatch({
                type: 'toggledAddFeePerLocation',
                addFeePerLocation: event.target.checked,
              })}
            />
          </div>
          {form.addFeePerLocation && (
            <button
              type="button"
              className="btn btn-outline-primary d-flex align-items-center"
              onClick={() => router.push('#')}
            >
              <Image
                className="me-2"
                src="/plus-sign.svg"
                width={20}
                height={20}
                alt="Save"
              />
              <span className="text-uppercase">Adicionar Taxa</span>
            </button>
          )}
        </div>

      </FormGroup>
    </div>
  );
}
