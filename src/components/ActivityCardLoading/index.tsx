import { ActivityContainer, ActivityDetails, Description, ActivityImage } from './styles';

const ActivityCardLoading = (): JSX.Element => (
  <ActivityContainer>
    <ActivityImage />

    <ActivityDetails>
      <h4> </h4>
      <h5> </h5>
      <Description></Description>
    </ActivityDetails>
  </ActivityContainer>
);

export default ActivityCardLoading;
