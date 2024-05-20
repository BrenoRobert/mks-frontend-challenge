import { Container } from './styles';

interface ContentProps {
  children: React.ReactNode;
}

export function Layout({ children }: ContentProps) {
  return <Container>{children}</Container>;
}
