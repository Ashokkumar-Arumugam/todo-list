import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { NotificationProvider } from '../components/Notification';

// Mock Firebase and Auth
jest.mock('../firebase', () => ({
  db: {},
  auth: { onAuthStateChanged: jest.fn() },
}));
jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [null, false],
}));

// Basic test for rendering
it('renders sign in prompt when not authenticated', () => {
  render(
    <NotificationProvider>
      <TodoList filter="all" />
    </NotificationProvider>
  );
  expect(screen.getByText(/sign in to manage your to-dos/i)).toBeInTheDocument();
});
