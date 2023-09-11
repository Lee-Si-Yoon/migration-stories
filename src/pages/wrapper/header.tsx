import React from "react";
import { Outlet } from "react-router-dom";

import { AboutLink, CreditLink, Logo, ProgramLink } from "./header-items";

function Header({
  headerItems,
}: {
  headerItems: React.ReactNode[][];
}): JSX.Element {
  return (
    <>
      <nav>
        <div>{headerItems[0].map((item) => item)}</div>
        <div>{headerItems[1].map((item) => item)}</div>
      </nav>
      <Outlet />
    </>
  );
}

class ComposeItems {
  private leftItems: React.ReactNode[] = [];
  private rightItems: React.ReactNode[] = [];

  addToLeft(item: React.ReactNode) {
    this.leftItems.push(item);

    return this;
  }
  addToRight(item: React.ReactNode) {
    this.rightItems.push(item);

    return this;
  }
  build() {
    return [this.leftItems, this.rightItems];
  }
}

const headerItems22 = new ComposeItems()
  .addToLeft(Logo())
  .addToRight([AboutLink({ year: 22 }), CreditLink({ year: 22 })])
  .build();

const headerItems23 = new ComposeItems()
  .addToLeft(Logo())
  .addToRight([
    ProgramLink(),
    AboutLink({ year: 23 }),
    CreditLink({ year: 23 }),
  ])
  .build();

const Header22 = () => Header({ headerItems: headerItems22 });
const Header23 = () => Header({ headerItems: headerItems23 });

export { Header22, Header23 };
