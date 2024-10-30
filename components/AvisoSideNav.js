import Image from "next/image";
import Link from "next/link";

export default function AvisoSideNav({ className }) {
  const steps = new Array(12).fill();
  steps[9] = { active: true };

  return (
    <ul className={`nav flex-column py-2 ${className}`}>
      {steps.map((step, stepIndex) => (
        <li
          className={`
            nav-item
            d-flex
            justify-content-between
            py-2
            px-4
            border-start
            border-4
            ${step?.active ? 'border-primary' : 'border-white'}
          `}
          key={step}
          style={{ background: step?.active ? 'rgba(236, 244, 246, 0.4)' : '' }}
        >
          <Link
            className={`navbar-brand me-4 ${step?.active && 'text-primary'}`}
            href="/avisos"
          >
            Opção {stepIndex + 1}
          </Link>
          <Image
            className="me-2"
            src="/check-circle.svg"
            width={24}
            height={24}
            alt="Go Back"
          />
        </li>
      ))}
    </ul>
  )
}