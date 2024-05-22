import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RadioButtons from './components/RadioButtons';
import DiscountCode from './components/DiscountCode';
import NoteField from './components/NoteField';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <RadioButtons />
        <DiscountCode />
        <NoteField />
      </div>
    </Provider>
  );
};

export default App;