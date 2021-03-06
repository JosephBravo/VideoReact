import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
      "user": {},
      "playing": {},
      "myList": [],
      "trends": [
        {
          "id": 2,
          "slug": "tvshow-2",
          "title": "In the Dark",
          "type": "Scripted",
          "language": "English",
          "year": 2009,
          "contentRating": "16+",
          "duration": 164,
          "cover": "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          "id": 3,
          "slug": "tvshow-3",
          "title": "Instinct",
          "type": "Adventure",
          "language": "English",
          "year": 2002,
          "contentRating": "16+",
          "duration": 137,
          "cover": "https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          "id": 4,
          "slug": "tvshow-4",
          "title": "Grand Hotel",
          "type": "Comedy",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 163,
          "cover": "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        { 
          "id": 5,
          "slug": "tvshow-5",
          "title": "Stargate Atlantis",
          "type": "Scripted",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 194,
          "cover": "https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
          "id": 6,
          "slug": "tvshow-6",
          "title": "Final Space",
          "type": "Scripted",
          "language": "English",
          "year": 2017,
          "contentRating": "16+",
          "duration": 124,
          "cover": "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"
        },
        {
          "id": 7,
          "slug": "tvshow-7",
          "title": "The InBetween",
          "type": "Drama",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 179,
          "cover": "https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      ],
      "originals": [
        {
          "id": 8,
          "slug": "tvshow-8",
          "title": "Stargate Atlantis",
          "type": "Action",
          "language": "English",
          "year": 2012,
          "contentRating": "16+",
          "duration": 148,
          "cover": "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          "id": 9,
          "slug": "tvshow-9",
          "title": "Alien Highway",
          "type": "Action",
          "language": "English",
          "year": 2019,
          "contentRating": "16+",
          "duration": 128,
          "cover": "https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          "id": 10,
          "slug": "tvshow-10",
          "title": "Elementary",
          "type": "Animation",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 346,
          "cover": "https://images.unsplash.com/photo-1477414876610-1ec826f2e689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
          "id": 11,
          "slug": "tvshow-11",
          "title": "Strange Angel",
          "type": "War",
          "language": "English",
          "year": 2015,
          "contentRating": "16+",
          "duration": 226,
          "cover": "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3340&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
          "id": 12,
          "slug": "tvshow-12",
          "title": "Private Eyes",
          "type": "Comedy",
          "language": "English",
          "year": 2018,
          "contentRating": "16+",
          "duration": 190,
          "cover": "https://images.unsplash.com/photo-1494447122076-9e353e4dfd0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
          "id": 13,
          "slug": "tvshow-13",
          "title": "NCIS: Los Angeles",
          "type": "Drama",
          "language": "English",
          "year": 2010,
          "contentRating": "16+",
          "duration": 160,
          "cover": "https://images.unsplash.com/photo-1586991359975-54500b7d8a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique",
          "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
      ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app'));