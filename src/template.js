const Markup = ({ body, data }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script>window.__ROUTE_DATA__ = ${data}</script></body>
    </body>
  </html>
`;

export default Markup;
