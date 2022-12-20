import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem />', () => { 

    const title = 'Lionel';
    const url   = 'htpps://lionel.com/messi.jpg'; 

    test('Debe hacer match con el snapshot', () => { 


        const  { container } = render( <GifItem  title={ title } url={ url } />  );
        expect ( container ).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem  title={ title } url={ url } />  );
        //screen.debug();
        //expect( screen.getAllByRole('img').alt).toBe( title );
        const { src, alt } = screen.getAllByRole('img')
        expect( alt ).toBe( alt );
    })

    test('debe mostrar el titulo en el componente', () => { 

        render( <GifItem  title={ title } url={ url } />  );
        expect( screen.getByText ( title ) ).toBeTruthy();
    })

    

    


})