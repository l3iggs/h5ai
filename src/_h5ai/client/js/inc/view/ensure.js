modulejs.define('view/ensure', ['$', 'config', 'core/event'], function ($, config, event) {

    var version = config.setup.VERSION;
    var versionDisplay = version.replace(/\+[^+]*$/, '+');
    var templateTopbar =
            '<div id="topbar">' +
                '<div id="toolbar"/>' +
                '<div id="crumbbar"/>' +
            '</div>';
    var templateMainRow =
            '<div id="main-row">' +
                '<div id="sidebar">' +
                    '<div id="settings"/>' +
                '</div>' +
            '</div>';
    var templateBacklink =
            '<a id="backlink" href="http://larsjung.de/h5ai/" title="powered by h5ai ' + version + '">' +
                '<div>powered by</div>' +
                '<div>h5ai ' + versionDisplay + '</div>' +
            '</a>';


    function init() {

        $(templateTopbar).appendTo('body');
        $(templateMainRow).appendTo('body');
        $(templateBacklink).appendTo('#topbar');
    }


    init();
});
