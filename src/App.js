import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

//the App component is just a JS function (called a function component)
// it doesn't receice any parameters right now, but it can (props)

// array defined outside of the component


const App = () => {
  // console.log("App renders");

  const stories = [
    {
      title: 'React',
      url: 'https"//reactjs.org/',
      author: 'Jordan Walke',
      num_components: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_components: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // introducing callback handler
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search  onSearch={handleSearch}/>

      <hr />

      <List list={stories} />
    </div>
  );
};

const List = (props) => {
  // console.log("List renders");
  return (
    <ul>
      {props.list.map(function (item) {
        return (
          <Item key={item.objectID} item={item} />
        );
    })}
    </ul>
  );
  };

const Search = (props) => {
  // console.log("Search renders")
  // empty string is the initial state argument
  const [searchTerm, setSearchTerm] = React.useState('');

  // function for the change event of the input field (event handler)
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);

  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type ="text" onChange={handleChange}/>
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );

};

const Item = (props) => {
  // console.log("Item renders")
  // so you don't have to write props.item every single time
  // another way is 
  // { item } = props
  // or
  // const Item = ({ item }) in the declaration
  const item = props.item;
  return (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );
};


export default App;