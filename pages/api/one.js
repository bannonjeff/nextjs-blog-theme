export default function handler(req, res) {
  console.log("one");
  
  res.status(200).json({
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
  });
}
