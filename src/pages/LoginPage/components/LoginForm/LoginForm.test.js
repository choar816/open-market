import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';
import { async } from 'regenerator-runtime';
import { API_URL } from '/src/utils/api';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        username: '',
        password: '',
        userType: '',
      }),
  }),
);

describe('LoginForm', () => {
  it('accepts id input', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm userType="BUYER" />} />
        </Routes>
      </BrowserRouter>,
    );
    const idInputNode = screen.getByPlaceholderText('아이디');
    expect(idInputNode.value).toMatch('');
    fireEvent.change(idInputNode, { target: { value: 'buyer1' } });
    expect(idInputNode.value).toMatch('buyer1');
  });

  it('accepts pw input', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm userType="BUYER" />} />
        </Routes>
      </BrowserRouter>,
    );
    const pwInputNode = screen.getByPlaceholderText('비밀번호');
    expect(pwInputNode.value).toMatch('');
    fireEvent.change(pwInputNode, { target: { value: 'asdf' } });
    expect(pwInputNode.value).toMatch('asdf');
  });

  it('shows error message if id is not written', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm userType="BUYER" />} />
        </Routes>
      </BrowserRouter>,
    );

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ username: 'error' }),
    });

    const id = screen.getByPlaceholderText('아이디');
    const pw = screen.getByPlaceholderText('비밀번호');
    const button = screen.getByText('로그인');

    fireEvent.change(id, { target: { value: '' } });
    fireEvent.change(pw, { target: { value: '' } });
    fireEvent.click(button);

    expect(window.fetch).toHaveBeenCalledWith(
      `${API_URL}/accounts/login/`,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: '',
          password: '',
          login_type: 'BUYER',
        }),
      }),
    );
    const errorMsg = await screen.findByText('아이디를 입력해 주세요.');
    expect(errorMsg).toBeInTheDocument();
  });

  // it('should call localStorage.setItem when login (buyer1 / hodu0910)', () => {
  //   const { getByText, getByPlaceholderText } = render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<LoginForm userType="BUYER" />} />
  //       </Routes>
  //     </BrowserRouter>,
  //   );

  //   const id = getByPlaceholderText('아이디');
  //   const pw = getByPlaceholderText('비밀번호');
  //   const button = getByText('로그인');

  //   fireEvent.change(id, { target: { value: 'buyer1' } });
  //   fireEvent.change(pw, { target: { value: 'hodu0910' } });
  //   fireEvent.click(button);

  //   jest.spyOn(window.localStorage.__proto__, 'setItem');
  //   // window.localStorage.__proto__.setItem = jest.fn();

  //   expect(localStorage.setItem).toHaveBeenCalled();
  // });
});
