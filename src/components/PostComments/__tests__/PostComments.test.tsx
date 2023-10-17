import Post from "..";
import {fireEvent, render, screen} from '@testing-library/react'

describe('Testes para adicionar comentarios a posagem', () => {
    test('Renderizar formulario', () => {
        render(<Post/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Adiciona um comentario', () => {
        render(<Post/>)
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Este é um comentario de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn'))
        
        expect(screen.getByText('Este é um comentario de teste')).toBeInTheDocument()
    })

    test('Contabilizar multiplos comentarios', () => {
        render(<Post/>)

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Este é comentario de teste nº1'
            }
        })
        fireEvent.click(screen.getByTestId('btn'))

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Este é comentario de teste nº2'
            }
        })
        fireEvent.click(screen.getByTestId('btn'))

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Este é comentario de teste nº3'
            }
        })
        fireEvent.click(screen.getByTestId('btn'))
        
        expect(screen.getAllByTestId('comentario')).toHaveLength(3)
    })
})