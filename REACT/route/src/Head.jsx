import React from 'react';
import { Helmet } from 'react-helmet';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Caicão ' + props.title;

    document
      .querySelector('meta[name=description]')
      .setAttribute('content', props.description);
    console.log(props);
  }, [props]);
  return;
};

export default Head;
