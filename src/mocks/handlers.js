import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "M&Ms",
          imagePath: "/images/m-and-ms.png"
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png"
        },
        {
          name: "Peanut butter cups",
          imagePath: "/images/peanut-butter-cups.png"
        }
      ])
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: "Title 1",
          body: "Description 1"
        },
        {
          id: 2,
          title: "Title 2",
          body: "Description 2"
        },
      ])
    );
  }),
]