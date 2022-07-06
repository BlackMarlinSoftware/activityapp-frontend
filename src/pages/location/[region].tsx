import {NextPage} from 'next';
import {useRouter} from 'next/router';
import Header from '../../components/header';

const ListingPage: NextPage = () => {
  const router = useRouter();
  const { region } = router.query;

  return <>
    <Header />
    Welcome to {region}
  </>;
};

export default ListingPage;
