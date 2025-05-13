import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '../Post'; 

describe('Teste para o componente PostComment', () => {
it('Deve adicionar dois comentários corretamente', () => {
    render(<PostComments/>);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);


    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
});
