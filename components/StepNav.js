import Image from "next/image";
import Link from "next/link";

export default function StepNav() {
  return (
    <div className="d-flex align-items-center gap-2">
      <button type="button" className="btn btn-secondary border-0 rounded-5">
        <Link className="navbar-brand" href="/avisos">
          <Image
            src="/chevron-left.svg"
            width={15}
            height={15}
            alt="Previous"
          />
        </Link>
      </button>
      <p className="text-secondary text-uppercase fw-bold my-0 me-2">Anterior</p>
      <p className="text-secondary text-uppercase fw-bold my-0 ms-2">Seguinte</p>
      <button type="button" className="btn btn-secondary border-0 rounded-5">
        <Link className="navbar-brand" href="/avisos">
          <Image
            src="/chevron-left.svg"
            width={15}
            height={15}
            alt="Next"
          />
        </Link>
      </button>
    </div>
  )
}