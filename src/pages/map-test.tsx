import type { NextPage } from 'next';
import MapContainer from '../components/MapContainer';
import Head from 'next/head';
import { brixtonData } from '../brixtonData';
import styled from 'styled-components';
import {initialViewStateSelection, LOCATIONS} from '../types';

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 100%;
`;
export const ThrowawayExample = styled.div`
  background-color: white;
  width: 50%;
`;

const MapTest: NextPage = () => (
  <div style={{ height: '100vh' }}>
    <Head>
      <title>Map test</title>
    </Head>
    <Container>
      <ThrowawayExample>
        <div>main content</div>
      </ThrowawayExample>
      <MapContainer data={brixtonData} initialViewState={initialViewStateSelection[LOCATIONS.BRIXTON]} />
    </Container>
  </div>
);

export default MapTest;
