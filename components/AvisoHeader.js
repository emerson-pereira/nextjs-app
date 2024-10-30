"use client"

import Link from "next/link";
import Image from "next/image";

export default function AvisoHeader({ className }) {
  return (
    <div className={`d-flex justify-content-between ${className}`}>
      <div className="d-flex align-items-center">
        <Link className="navbar-brand me-4" href="/avisos">
          <Image
            className="me-2"
            src="/arrow-left.svg"
            width={16}
            height={16}
            alt="Go Back"
          />
        </Link>
        <div>
          <h2 className="fs-6 text-uppercase">Avisos</h2>
          <div className="d-flex align-items-center">
            <h3 className="text-uppercase m-0 ">Novo Aviso</h3>
          </div>
        </div>
        <div>
          <div className="ms-5">
            <Image
              className="me-2"
              src="/pencil.svg"
              width={16}
              height={16}
              alt="Edit Mode"
            />
            <span className="fs-6 text-uppercase text-primary">Em preenchimento</span>
          </div>
        </div>
      </div>
      <div className="d-flex gap-2">
        <button
          type="button"
          className="btn btn-outline-primary d-flex align-items-center"
          onClick={() => router.push('#')}
        >
          <Image
            className="me-2"
            src="/floppy-disk.svg"
            width={20}
            height={20}
            alt="Save"
          />
          <span>Guardar Alterações</span>
        </button>

        <button type="button" className="btn btn-outline-primary">
          Validar
        </button>

        <button
          type="button"
          className="btn btn-outline-primary d-flex align-items-center"
          onClick={() => router.push('#')}
        >
          <Image
            className="me-2"
            src="/check.svg"
            width={20}
            height={20}
            alt="Publish"
          />
          <span>Publicar</span>
        </button>
      </div>
    </div>
  )
}