import ChatMessages from "@/components/chat/ChatMessages.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { mount } from "@vue/test-utils";

const messages: ChatMessage[] = [
    { id: 1, message: 'hola', itsMine: true },
    { id: 2, message: 'mundo', itsMine: false, image: 'https://images.jpg' },
];

describe('<ChatMessages />', () => {
    const wrapper = mount(ChatMessages, {
        props: { messages }
    });

    test('renders chat message correctly', () => {

        const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

        expect(chatBubbles.length).toBe(messages.length);

    });


    test('scrolls down to the bottom after messages update', async () => {
        const scrollMockSpy = vi.fn();

        const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
        chatRef.scrollTo = scrollMockSpy;


        await wrapper.setProps({
            messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
        });


        await new Promise(r => setTimeout(r, 150));

        // expect(scrollMockSpy).toHaveBeenCalled();
        // expect(scrollMockSpy).toHaveBeenCalledTimes(1);
        expect(scrollMockSpy).toHaveBeenCalledWith({
            "behavior": "smooth",
            top: expect.any(Number)
        });




    });


});