import App from './pages/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { screen, act, render } from '@testing-library/react';
//@ts-ignore
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  act(() => window.history.pushState({}, 'Test page', route));

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
describe('With React Testing Library', () => {
  it('renders Dragons & Dungeons Spells', () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Check if the "Dragons & Dungeons Spells" tab is rendered
    const exploreTabElement = screen.getByText('Dragons & Dungeons Spells');
    expect(exploreTabElement).toBeInTheDocument();
  });
});