var React = require('react');

var Movie = function(props) {

  return (
    <div className="movie">
      <img src={props.poster}/>
      <h3>{props.show_title}</h3>
      <h3>{props.release_year}</h3>
      <h3>{props.summary}</h3>
    </div>
  );

};

module.exports = Movie;