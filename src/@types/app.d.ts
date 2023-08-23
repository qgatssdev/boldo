export type WithChildren<T = any> = T & {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};
