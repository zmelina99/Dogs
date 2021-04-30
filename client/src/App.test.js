  
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";

import store from './'

test('renders home component', () => {
  render( <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
/* import React from 'react';
import { configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { App } from './App.js';
import Home from './Components/Home';
import CreateDog from './Components/CreateDog';
import NavBar from './Components/NavBar'

//configure({adapter: new Adapter()});
Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente NavBar debe renderizar en todas las rutas.', () => {
    it('Debería renderizarse en la ruta "/home"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(NavBar)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/createDog"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/createDog' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(NavBar)).toHaveLength(1);
    });
  });

  it('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
    const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[ '/home' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );

      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(CreateDog)).toHaveLength(0);
  });
}); */