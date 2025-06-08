import { Header22 } from '@/widgets/layout/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Header22 />
      </header>
      <main>{children}</main>
    </>
  );
}
