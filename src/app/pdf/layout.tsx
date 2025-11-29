import { PDFViewerProvider } from '@/widgets/pdf/pdf-viewer-provider';

import { Header } from './header';

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return (
    <PDFViewerProvider>
      <Header />
      {children}
    </PDFViewerProvider>
  );
}
