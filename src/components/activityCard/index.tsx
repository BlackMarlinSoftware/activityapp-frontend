import {Activity, CategoryName} from '../../types';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ActivityContainer = styled.div`
  background-color: white;
  border-radius: ${theme.scale.spacing['4']};
  padding: ${theme.scale.spacing['2']};
  margin-bottom: ${theme.scale.spacing['4']};
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  flex: 1.2;
`;

const ContentContainer = styled.div`
  flex: 2;
  padding-left: ${theme.scale.spacing['4']};
  padding-top: ${theme.scale.spacing['2']};
  padding-bottom: ${theme.scale.spacing['2']};
  
  h5, h6 {
    margin: 0;
  }
  
  h6 {
    color: ${theme.colors.neutral['6']};
    display: inline-block;
    align-self: flex-end;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 10pt;
    line-height: 12pt;
    margin: 0;
  }
`;

const Image = styled.img`
  border-radius: ${theme.scale.spacing['4']};
  width: 100%;
  height: ${theme.scale.spacing['10']};
  object-fit: fill;
  vertical-align: middle;
`;

const Content = styled.div`
  
`;

interface activityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: activityCardProps): JSX.Element => {
  return <ActivityContainer>
    <ImageContainer>
      {activity.media?.length && <Image src={`/images/${activity.id}/${activity.media[0].url}`} alt={activity.media[0].caption ?? ''} />  }
    </ImageContainer>
    <ContentContainer>
      <h5>{activity.name}</h5>
      <h6>{activity.location?.address}</h6>
      <p>{activity.description}</p>
      <h6>Operated by {activity.host?.name}</h6>
    </ContentContainer>
  </ActivityContainer>;
};

export default ActivityCard;
