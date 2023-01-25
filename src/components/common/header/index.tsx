import { styles } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return <header css={styles.container}>{title}</header>;
};

export default Header;
