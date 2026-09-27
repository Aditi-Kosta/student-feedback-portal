import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header style={s.bar}>
      <div style={s.inner}>
        <Link href="/" style={s.brand}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#ng)"/>
            <rect x="7" y="7" width="6" height="6" rx="1.5" fill="white"/>
            <rect x="15" y="7" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6"/>
            <rect x="7" y="15" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.6"/>
            <rect x="15" y="15" width="6" height="6" rx="1.5" fill="white"/>
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6"/>
                <stop offset="1" stopColor="#4F46E5"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={s.brandName}>EduFeedback</span>
        </Link>
        <nav style={s.nav}>
          {[['/', 'Submit Feedback'], ['/dashboard', 'Dashboard']].map(([href, label]) => (
            <Link key={href} href={href} style={pathname === href ? s.active : s.link}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const s = {
  bar: { background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #EBEBEB', position: 'sticky', top: 0, zIndex: 50 },
  inner: { maxWidth: 1160, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  brandName: { fontSize: 15.5, fontWeight: 700, color: '#0F0F0F', letterSpacing: '-0.3px' },
  nav: { display: 'flex', gap: 2 },
  link: { padding: '7px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: '#6B6B6B', textDecoration: 'none', transition: 'color 0.15s' },
  active: { padding: '7px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600, color: '#6D28D9', background: '#F5F3FF', textDecoration: 'none' },
};