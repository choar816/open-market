import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should accept id input', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm userType="BUYER" />} />
        </Routes>
      </BrowserRouter>,
    );
    const idInputNode = getByPlaceholderText('아이디');
    expect(idInputNode.value).toMatch('');
    fireEvent.change(idInputNode, { target: { value: 'buyer1' } });
    expect(idInputNode.value).toMatch('buyer1');
  });

  it('should accept pw input', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginForm userType="BUYER" />} />
        </Routes>
      </BrowserRouter>,
    );
    const pwInputNode = getByPlaceholderText('비밀번호');
    expect(pwInputNode.value).toMatch('');
    fireEvent.change(pwInputNode, { target: { value: 'asdf' } });
    expect(pwInputNode.value).toMatch('asdf');
  });

  // it('should show error message if id is not written', () => {
  //   const { getByText, getByPlaceholderText, getByTestId } = render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<LoginForm userType="BUYER" />} />
  //       </Routes>
  //     </BrowserRouter>,
  //   );

  //   const id = getByPlaceholderText('아이디');
  //   const pw = getByPlaceholderText('비밀번호');
  //   const button = getByText('로그인');

  //   fireEvent.change(id, { target: { value: '' } });
  //   fireEvent.change(pw, { target: { value: '' } });
  //   fireEvent.click(button);

  //   expect(screen.getByTestId('message')).toBe('아이디를 입력해 주세요.');
  // });

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
