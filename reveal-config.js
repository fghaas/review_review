// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: true,

    progress: true,
    history: true,
    center: true,
    showNotes: true,

    transition: 'fade',

    totalTime: 23 * 60,

    menu: {
        themes: true,

        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },


    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
	RevealZoom,
	RevealMenu
    ],

    multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "https://reveal-multiplex.glitch.me"
    }

});
