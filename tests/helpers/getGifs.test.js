import { getByTitle } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async () => { 

        const gifs = await getGifs('escalonete');
        expect( gifs.length ).toBeGreaterThanOrEqual( 0 );
        expect( gifs[0] ).toEqual({
            id   : expect.any( String ), 
            title: expect.any( String ), 
            url  : expect.any( String ), 
        });

    })


})