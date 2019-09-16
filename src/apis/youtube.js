import axios from 'axios';

const KEY = 'AIzaSyAG-Mw8RL5efhA0SmouTG1Vr6OLBDgFFes';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
