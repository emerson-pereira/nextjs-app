import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { text: 'Home', link: '#', active: true },
    { text: 'Avisos', link: '#' },
    { text: 'Entidades', link: '#' },
    { text: 'Candidaturas', link: '#' },
    { text: 'Operações', link: '#' },
  ];

  return (
    <nav className="navbar navbar-expand-md" style={{ background: '#4841B3' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/avisos">
          <Image
            src="/logo.svg"
            width={38}
            height={38}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }}
          >
            {links.map(l => (
              <li className="nav-item" key={l.text}>
                <a
                  className={`nav-link text-light ${l.active && 'active'}`}
                  href={l.link}
                >
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex gap-4 mx-2">
          <Link href="/avisos">
            <Image
              src="/search.svg"
              width={32}
              height={32}
              alt="Search"
            />
          </Link>

          <Link href="/avisos">
            <Image
              src="/inbox.svg"
              width={32}
              height={32}
              alt="Inbox"
            />
          </Link>

          <Link href="/avisos">
            <Image
              src="/settings.svg"
              width={32}
              height={32}
              alt="Settings"
            />
          </Link>
        </div>

        <div className="d-flex align-items-center mx-2">
          <Image
            src="/profile.png"
            className="me-2"
            width={32}
            height={32}
            alt="Profile"
            style={{ borderRadius: '100%' }}
          />
          <div className="text-light ms-2">
            <p className="m-0 fw-bold">Erik Frings</p>
            <p className="m-0">Perfil 1 - Entidade 0</p>
          </div>
        </div>
      </div>
    </nav>
  )
}