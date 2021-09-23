import React from "react";

type Props = {
  contexts: any;
};

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: React.ReactNode, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );

const GlobalStateProvider: React.FC = ({ children }) => (
  <ProviderComposer contexts={[]}>{children}</ProviderComposer>
);

export { GlobalStateProvider };
