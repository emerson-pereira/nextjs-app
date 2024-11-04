"use client"

import { useForm } from "@/app/contexts/formContext";
import Image from "next/image";

export default function StepNav() {
  const form = useForm();

  return (
    <div className="d-flex align-items-center gap-2">
      <button type="button" className="btn btn-flat border-0 d-flex align-items-center gap-2">
        <div className="btn btn-secondary border-0 rounded-5">
          <Image
            src="/chevron-left.svg"
            width={15}
            height={15}
            alt="Next"
          />
        </div>
        <span
          className="text-secondary text-uppercase fw-bold my-0 ms-2"
        >
          Anterior
        </span>
      </button>

      <button
        type="button"
        className="btn btn-flat border-0 d-flex align-items-center gap-2"
        onClick={() => {
          console.log('Form Data: ', form);
        }}
      >
        <span
          className="text-secondary text-uppercase fw-bold my-0 ms-2"
        >
          Seguinte
        </span>
        <div className="btn btn-secondary border-0 rounded-5">
          <Image
            src="/chevron-left.svg"
            width={15}
            height={15}
            alt="Next"
          />
        </div>
      </button>
    </div>
  )
}