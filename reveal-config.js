// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: false,

    progress: true,
    history: true,
    center: true,
    showNotes: false,

    transition: 'fade',

    totalTime: 20 * 60,

    menu: {
        themes: true,

        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: false,
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
