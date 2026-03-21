module.exports = {
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-gradient': {
            'color': '#b79bcc',
            'background-image': 'linear-gradient(45deg, #b79bcc 19%, #81718b 42%, #d158e5 100%)',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'display': 'inline-block',
          },
        },
        { respectPrefix: true, respectImportant: true }
      )
    },
  ],
}