import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

//the App component is just a JS function (called a function component)
// it doesn't receice any parameters right now, but it can (props)

// array defined outside of the component

const initialStories = [
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

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  
  // using a custom hook instead of the code below that uses useEffect
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  // the stored search value from local storage is used as the initial value for searchTerm state, or (||) the default value 'React' if there isn't anything saved in storage
  // const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');

  // storing the searched value in local storage
  // React.useEffect(() => {
  //   localStorage.setItem('search', searchTerm);
  // }, [searchTerm]);

  const [stories, setStories] = React.useState(initialStories);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

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

      <InputWithLabel
        id="search"
        // label="Search"
        value={searchTerm}
        isFocused // equal to saying isFocused={true}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <p> Searching for: {searchTerm}</p>

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

const InputWithLabel = ({ 
  id,  
  value, 
  type = 'text',
  onInputChange,
  isFocused,
  children, 
}) => {
  // A
  const inputRef = React.useRef();

  // C
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    {/* B */}
    <input
      ref={inputRef}
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
 );
};



const List = ({ list, onRemoveItem }) => (
  <ul>
  {list.map((item) => (
    <Item 
      key={item.objectID} 
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>Dismiss</button>
      </span>
  </li>
  );
};

export default App;

// so you don't have to write props.item every single time
  // another way is destructuring:
  // { item } = props
  // or
  // const Item = ({ item }) in the declaration

// another way to do write Item component with nested destructuring
// const Item = ({
//   item: {
//   title,
//   url,
//   author,
//   num_comments,
//   points,
//   },
//   }) => (
//   <li>
//   <span>
//   <a href={url}>{title}</a>
//   </span>
//   <span>{author}</span>
//   <span>{num_comments}</span>
//   <span>{points}</span>
//   </li>
//   );

// using spread and rest operators with destructuring

// const List = ({ list }) => (
//   // console.log("List renders");
//     <ul>
//       {list.map(({ objectID, ...item }) => (
//           <Item 
//             key={objectID} 
//             {...item }
//           />
//       ))}
//     </ul>
// );

// const Item = ({ title, url, author, num_comments, points }) => (
//   // test:
//   // console.log("Item renders")
//   <li>
//     <span>
//       <a href={url}>{title}</a>
//     </span>
//     <span>{author}</span>
//     <span>{num_comments}</span>
//     <span>{points}</span>
//   </li>
// );

