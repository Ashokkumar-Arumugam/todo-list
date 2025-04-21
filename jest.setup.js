//import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import '@testing-library/react-hooks';
// jest.setup.js
jest.mock('./firebase', () => ({
    db: {},
    auth: { onAuthStateChanged: jest.fn(), signInWithPopup: jest.fn(), signOut: jest.fn() },
  }));
import '@testing-library/react-hooks/extend-expect';
