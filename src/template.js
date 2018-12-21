const Markup = ({ body, routeData, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR</title>
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
      <script>window.ROUTE_LOADED_DATA=${routeData}</script>
    </body>
  </html>
`;

export default Markup;
