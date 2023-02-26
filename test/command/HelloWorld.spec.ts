import { HelloWorld, HelloWorldOutput, HelloWorldInput} from '../../src';

describe('HelloWorld', () => {
    it('should return "Hello World!"', () => {
        let input = {}
        let output = {
            "Message": "Hello World!"
        }
        expect(HelloWorld(input)).toMatchObject(output);
    });
});