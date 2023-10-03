/*function myFunc() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      }).then(response => response.json())
        .then(json => console.log(json));
    });
}

myFunc();
*/

async function myFunc() {
  const resFirst = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // get
  const jsonFirst = await resFirst.json();
  console.log(jsonFirst);

  const resSecond = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // put
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'javascript',
      body: 'hello',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  });
  const jsonSecond = await resSecond.json();
  console.log(jsonSecond);
}

myFunc();