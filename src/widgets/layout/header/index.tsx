import { HeaderContent22, HeaderContent23 } from './ui';
import { AboutLink, CreditLink, ProgramLink } from './ui/header-items.client';

export function Header22() {
  return (
    <HeaderContent22>
      <AboutLink year={22} />
      <CreditLink year={22} />
    </HeaderContent22>
  );
}

export function Header23() {
  return (
    <HeaderContent23>
      <ProgramLink />
      <AboutLink year={23} />
      <CreditLink year={23} />
    </HeaderContent23>
  );
}
