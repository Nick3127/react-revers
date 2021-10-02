import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
      axios.get('https://614c78ba59e92d00176ad282.mockapi.io/items').then(res => {
        setItems(res.data);
      });
      axios.get('https://614c78ba59e92d00176ad282.mockapi.io/cart').then(res => {
        setCartItems(res.data);
      });
      
    }, []);

  const onAddToCart = (obj) => {
    axios.post('https://614c78ba59e92d00176ad282.mockapi.io/cart', obj);
    setCartItems((prev) => [ ...prev, obj]);
  }; 
  // смотреть урок useState

  const onRemoveItem = (id) => {
    // console.log(id);
    axios.delete(`https://614c78ba59e92d00176ad282.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

   return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems}  onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      {/* ₽ */}
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Ассортимент'}</h1>
        <div className="search-block d-flex">
          <img width={14} height={14} src="/img/search.svg" alt="Search" />
          {searchValue && ( 
          <img 
          onClick={() => setSearchValue('')} 
          className="clear cu-p"  
          src="/img/btn-remove.svg" 
          alt="Clear" 
          />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />       
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
           <Card
           key={index} 
           title={item.title} 
           price={item.price} 
           imageUrl={item.imageUrl}
           onFavorite={() => console.log('Добавили в закладки')}
           onPlus={(obj) => onAddToCart(item)}
           />
        ))}
        
      </div>
    </div>
  </div>  
);
}

export default App;