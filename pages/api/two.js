export const config = {
  runtime: 'experimental-edge'
}

export default function handler(req, event) {
  console.log("hello, world.");
  
  return new Response(`{
    'foo': {
      'foo': true,
      'bar': false,
      'baz': false
    },
    'bar': {
      'foo': false,
      'bar': true,
      'baz': false
    },
    'baz': {
      'foo': false,
      'bar': false,
      'baz': true
    }
  }`,
  {
     headers: { "Content-type": "application/json" }
  });
}
