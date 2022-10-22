import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PageError } from '/src/components/PageError';
import Loading from '/src/components/Loading';
import { getStores } from '../../utils/storeRequest';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Aurora from '/public/assets/img-aurora.jpg';
import Deer from '/public/assets/img-deer.jpg';
import Ocean from '/public/assets/img-ocean.jpg';
import Squirrel from '/public/assets/img-squirrel.jpg';
import Uyuni from '/public/assets/img-uyuni.jpg';

export const StoreList = () => {
  const navigate = useNavigate();
  const stores = [
    {
      id: 1,
      name: '어쩌구스토어',
      seller: '판매자1',
      desc: '어쩌구를 파는 어쩌구스토어',
      img: Aurora,
    },
    {
      id: 2,
      name: '저쩌구스토어',
      seller: '판매자2',
      desc: '저쩌구를 파는 저쩌구스토어',
      img: Deer,
    },
    {
      id: 3,
      name: '어쩌구스토어',
      seller: '판매자1',
      desc: '어쩌구를 파는 어쩌구스토어',
      img: Ocean,
    },
    {
      id: 4,
      name: '저쩌구스토어',
      seller: '판매자2',
      desc: '저쩌구를 파는 저쩌구스토어',
      img: Uyuni,
    },
  ];
  // const { data: stores, isLoading, error } = useQuery('stores', getStores);

  // if (isLoading) return <Loading />;
  // if (error)
  //   return <PageError emoji="😭" message={`에러 발생: ${error.message}`} />;

  if (stores.length === 0)
    return <PageError emoji="😭" message="등록된 스토어가 없어요!" />;

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={{ xs: 3, md: 6 }} mx="auto">
        {stores.map((store) => (
          <Grid item xs={12} sm={6} md={4} key={`store_${store.id}`}>
            <Card
              sx={{ maxWidth: 345 }}
              onClick={() => navigate(`/store/${store.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={store.img}
                  alt={store.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {store.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {store.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
