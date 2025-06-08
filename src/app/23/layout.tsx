import { Header23 } from '@/widgets/layout/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Header23 />
      </header>
      <main>{children}</main>
    </>
  );
}
