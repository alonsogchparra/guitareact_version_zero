import React, { Component } from 'react'

class ShowRandomSong extends Component {

  state = {
    songList: [
      {id: 1, song: 'I bet you look good on the dancefloor', artist: 'Artic Monkeys'},
      {id: 2, song: 'Warmness on the soul', artist: 'Avenged Sevenfold'},
      {id: 3, song: 'Punk Rock Song', artist: 'Bad Religion'},
      {id: 4, song: 'Highway Start', artist: 'Deep Purple'},
      {id: 5, song: 'All my life', artist: 'Foo Fighters'},
      {id: 6, song: 'American Idiot', artist: 'Green Day'},
      {id: 7, song: 'Fly Away', artist: 'Lenny Kravitz'},
      {id: 8, song: 'Whiskey in the jar', artist: 'Metallica'},
      {id: 9, song: 'Fuel', artist: 'Metallica'},
      {id: 10, song: 'Last Resort', artist: 'Papa Roach'},
      {id: 11, song: 'blitzkrieg bop', artist: 'Ramones'},
      {id: 12, song: 'higher ground', artist: 'Red Hot Chili Peppers'},
      {id: 13, song: 'Ride the chariot to the Devil', artist: 'Sum 41'},
      {id: 14, song: 'Grab the devil by the horns', artist: 'Sum 41'},
      {id: 15, song: 'In too deep', artist: 'Sum 41'},
      {id: 16, song: 'Pain for Pleasure', artist: 'Sum 41'},
      {id: 17, song: 'Hell Song', artist: 'Sum 41'},
      {id: 18, song: 'Over my head better off dead', artist: 'Sum 41'},
      {id: 19, song: 'Original Prankster', artist: 'The Offspring'},
      {id: 20, song: 'Last Nite', artist: 'The Stroke'},
      {id: 21, song: 'Hash Pipe', artist: 'Weezer'},
    ],
    songListItem: '',
    copySongList: [],
    isClicked: false
  }

  componentDidMount() {
    this.setState({
      copySongList: this.state.songList
    });
  }

  getRandomNumber = (min, max) => {
    let stepOne = max - min;
    let stepTwo = Math.random() * stepOne;
    let result = Math.floor(stepTwo) + min;
    return result;
  }

  getSong = () => {

    const { songList } = this.state;

    this.setState({
      isClicked: true
    });

    if (songList.length === 0) {

      this.setState({
        songListItem: ''
      });

    } else {

      let randomIndex = this.getRandomNumber(0, songList.length);
      let randomSong = songList[randomIndex];

      this.setState(prevState => {
        return {
          songList: prevState.songList.filter(music => music.song !== randomSong.song)
        }
      });

      this.setState({
        songListItem: randomSong
      });

    }
  }

  startOver = () => {
    this.setState({
      songList: this.state.copySongList,
      isClicked: false
    });
  }

  render () {

    const { songList, songListItem, isClicked } = this.state;

    const showResult = (songList.length === 0 && songListItem === '') ? (
      <div>
        <h2>No more songs! Do you want to start over?</h2>
        <button onClick={() => this.startOver()}>Play again</button>
      </div>
    ) : (
      <h2>Song: {songListItem.song}. <br /> Artist/Band: {songListItem.artist}</h2>
    )

    return (
      <div>
        <h1>Show Random Song!</h1>
        { isClicked ? showResult : <h2>Ready to play some good music!?</h2>}
        <button onClick={() => this.getSong()}>Show Random</button>
      </div>
    )
  }
}

export default ShowRandomSong