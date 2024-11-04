"use client"

import { useForm, useFormDispatch } from "@/app/contexts/formContext";
import DataTable from "@/components/DataTable";
import Dropdown from "@/components/Dropdown";
import FormGroup from "@/components/FormGroup";
import RadioButton from "@/components/RadioButton";
import ToggleButton from "@/components/ToggleButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FormStep10() {
  const feeTypes = [
    { title: 'Item 1', link: '#' },
    { title: 'Item 2', link: '#' },
  ];
  const [feeTypeTitle, setFeeTypeTitle] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedIndexes, setSelectedIndex] = useState([]);
  const form = useForm();
  const taskDispatch = useFormDispatch();
  const [bsOffcanvas, setBsOffcanvas] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasBottom')
      setBsOffcanvas(bsOffcanvas);
    });

    return () => clearTimeout(timeoutId);
  }, []);

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
          <ToggleButton
            title="Adicionar taxa por localização"
            id="toggle-add-fee"
            onChange={(event) => taskDispatch({
              type: 'toggledAddFeePerLocation',
              addFeePerLocation: event.target.checked,
            })}
          />
          {form.addFeePerLocation && (
            <button
              type="button"
              className="btn btn-outline-primary d-flex align-items-center"
              onClick={() => taskDispatch({
                type: 'addedFeePerLocation',
                feesPerLocation: ['Norte', 'Ave', 'Fafe', Math.floor(Math.random() * 101) + '%']
              })}
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

        {form.addFeePerLocation && (
          <DataTable
            className="mt-4"
            headers={['NUTS II', 'NUTS III', 'Concelho', 'Taxa (%)']}
            rows={form.feesPerLocation}
            selectable
            deleteAction
            onRowSelect={(rowIndex, value) => {
              if (value) {
                setSelectedIndex([...selectedIndexes, rowIndex]);
              } else {
                setSelectedIndex(selectedIndexes.filter((si) => si !== rowIndex));
              }
            }}
            onRowSelectAll={(value) => setSelectAll(value)}
            onRowDelete={(rowIndex) => {
              // TODO: check checkbox of target row
              bsOffcanvas.show();
            }}
          />
        )}

        <div
          className="offcanvas offcanvas-bottom bg-body-tertiary "
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
          data-bs-backdrop="static"
          style={{ height: '15vh !important' }}
        >
          <div className="offcanvas-body small text-light d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="p-0">
                {selectedIndexes.length} taxas selecionadas
              </div>
              <div className="d-flex gap-4">
                <button
                  type="button"
                  className="btn btn-light text-uppercase"
                  onClick={() => bsOffcanvas.hide()}>
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary text-uppercase"
                  onClick={() => {
                    taskDispatch({
                      type: 'deletedFeesPerLocation',
                      itemIndexes: selectedIndexes
                    });
                    setSelectedIndex([]);
                    bsOffcanvas.hide();
                  }}
                >Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </FormGroup >
    </div >
  );
}
