const Markup = ({ body, routeData, styles }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>React SSR</title>
      <meta charSet="utf-8" />
      <meta name="#52c41a">
      <meta name="description" content="Brightizen is where you can share and advocate big ideas from books you read." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
      <script>window.ROUTE_LOADED_DATA=${routeData}</script>
    </body>
  </html>
`;

export default Markup;
