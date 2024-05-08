import { Typography } from '@mui/material';
import './App.css';
import {
  BottomSection,
  Card,
  TitleSection,
  TopNavbar,
} from './components';
import OverviewIcon from './assets/overview.png'
import { GoStack } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { PiArrowDownRightFill, PiArrowUpRightFill } from 'react-icons/pi';
import { Trend } from './components/styled';

function App() {
  return (
    <div className="App">
        <div className="background-black"/>
        <div className="background-white"/>
        <TopNavbar />
        <TitleSection />
        <div className="cards-wrapper">
          <div className='overview-section'>
            <img className='overview-image' src={ OverviewIcon } />
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                color: 'white',
                marginTop: '5px',
                fontSize: '20px',
              }}>Overview</Typography>
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  color: '#81869C',
                  marginTop: '5px',
                  marginLeft: '15px',
                  fontSize: '14px',
                }}>Last 30 Days</Typography>
          </div>
          <div className="cards-section">
            <Card
              text="Business account"
              largeText="$33,842"
              icon={ <GoStack size={ 50 } /> }
              trend={ <Trend label={ <PiArrowUpRightFill size={ 15 } /> } bgColor='#A6F400' size='small'/> }
              trendSuffix='12.3%'
            />
            <Card
              text="Tax reserve"
              largeText="$700"
              icon={ <GrDocumentText size={ 50 } /> }
              trend={ <Trend label={ <PiArrowDownRightFill size={ 15 } color='white' /> } bgColor='#DB122C' size='small'/> }
              trendSuffix='-2.1%'
            />
            <Card text="Business Savings" largeText="$1,623" icon={ <GoStack size={ 50 } /> } />
          </div>
      </div>
      <BottomSection />
    </div>
  );
}

export default App;
