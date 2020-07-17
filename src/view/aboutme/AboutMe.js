import React, { Component } from 'react';
import axios from 'axios';
import './aboutme.css';
import fortnite from '../../resources/images/fortnite.jpg';
import apiConfig from '../../resources/private/apiKeys';

import { Line } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let trackerUrlBase = 'https://api.fortnitetracker.com/v1/';
let platform = 'kbm';
let apiKey = apiConfig.apiKey;
let epicNickname = apiConfig.epicNickname;

const useStyles = theme => ({
  root: {
    maxWidth: 690,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class AboutMe extends Component{
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stats: null,
      recentMatchData: {
        labels: [],
        datasets: [{
          label: 'Kills',
          backgroundColor: 'rgba(0, 0, 180, 0.3)',
          borderColor: 'rgba(0, 0, 180, 0.3)',
          data: []
        }]
      },
    }
  }

  componentDidMount (){
    this.retrieveFortniteTrackingInfo('profile/'+platform+'/'+epicNickname);
  }

  retrieveFortniteTrackingInfo (endpoint){
    let trackerApi = proxyUrl + trackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': apiKey
      }
    };

    this.setState({isLoaded: false, stats: null, error: null});

    axios.get(trackerApi, queryParams)
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          stats: result.data,
          recentMatchData: {
            datasets: [{
              label: 'Kills',
              backgroundColor: 'rgba(0, 0, 180, 0.3)',
              borderColor: 'rgba(0, 0, 132, 0.3)',
              data: result.data.recentMatches.map(match => {return {x: this.convertDate(match.dateCollected), y: match.kills}})
            }]
          }
        })
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error: error,
          recentMatchData: {
            datasets: [{
              label: 'Kills',
              backgroundColor: 'rgba(0, 0, 180, 0.3)',
              borderColor: 'rgba(0, 0, 180, 0.3)',
              data: []
            }]
          }
        });
      }
    )
  }

  convertDate (date){
    date = new Date(date);
    var offset = new Date().getTimezoneOffset();
    var convertedDate = date.setMinutes(date.getMinutes() - offset);
    return convertedDate;
  }

  render (){
    let { classes } = this.props;
    let {isLoaded, stats, recentMatchData, error} = this.state;

    return (
      <div>
        <header className='aboutMeHeader'>
          Mint Patty 17
        </header>
        <div className='aboutMeBody'>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar alt='fortnite' src={fortnite} />
              }
              title='Fortnite'
            />
            <CardMedia>
              <Line
                data={recentMatchData}
                options={{
                  title:{
                    display:true,
                    text:'Recent Matches',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  },
                  scales: {
                    xAxes: [{
                      type: 'time',
                      time: {
                        unit: 'hour'
                      },
                      ticks: {
                        source: 'auto'
                      }
                    }]
                  }
                }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Total Fortnite Wins: {isLoaded ? stats.lifeTimeStats[8].value : null}<br/>
                Overall Fortnite K/D: {isLoaded ? stats.lifeTimeStats[11].value : null}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}


export default withStyles(useStyles)(AboutMe);