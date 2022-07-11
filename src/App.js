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

  const [searchTerm, setSearchTerm] = React.useState('React');

  // introducing callback handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const searchedStories = stories.filter(function (story) {
  //   return story.title.includes(searchTerm);
  // });

  // arrow function notation
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <p> Searching for: {searchTerm}</p>
      
      <Search  search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const List = ({ list }) => (
  // console.log("List renders");
    <ul>
      {list.map((item) => (
          <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );

const Search = ({ search, onSearch }) => (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
      id="search" 
      type ="text" 
      value={search}
      onChange={onSearch}
      />
    </div>
  );

const Item = ({ item }) => (
  // console.log("Item renders")
  // so you don't have to write props.item every single time
  // another way is destructuring:
  // { item } = props
  // or
  // const Item = ({ item }) in the declaration
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );


export default App;