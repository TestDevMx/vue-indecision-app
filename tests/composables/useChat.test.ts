import { useChat } from "@/composables/useChat";

describe('useChat', () => {

    test('add message correctly when onMessage is called', async () => {

        const text = 'Hola mundo';
        const { messages, onMessage } = useChat();

        await onMessage(text);


        expect(messages.value.length).toBe(1);
        // expect(messages.value[0].itsMine).toBe(true);
        // expect(messages.value[0].message).toBe(text);
        expect(messages.value[0]).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: text
        });
    });


    test('add nothing if text is empty', async () => {
        const text = '';
        const { messages, onMessage } = useChat();
        await onMessage(text);

        expect(messages.value.length).toBe(0);

    });

    /*

    test('gets her response correctly when message ends with "?"', async () => {
        const text = 'Quieres tacos?';
        const { messages, onMessage } = useChat();
        await onMessage(text);

        await new Promise(r => setTimeout(r, 2000));

        const [myMessage, herMessage] = messages.value;

        expect(messages.value.length).toBe(2);
        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: expect.any(String),
            messages: expect.any(String),
            itsMine: false,
        });

        expect(myMessage).toEqual({
            id: expect.any(Number),
            messages: text,
            itsMine: true,
        });

    });
    */

    test('mock response  - fetxh api', async () => {
        const mockResponse = { answer: 'yes', image: 'example.gif' };


        (window as any).fetch = vi.fn(async () => ({
            json: async () => mockResponse
        }));

        const text = 'Quieres tacos?';
        const { messages, onMessage } = useChat();
        await onMessage(text);

        await new Promise(r => setTimeout(r, 2000));

        const [, herMessage] = messages.value;

        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: mockResponse.image,
            message: mockResponse.answer,
            itsMine: false
        });

    });

});