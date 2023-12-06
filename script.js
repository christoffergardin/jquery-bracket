// Assuming jQuery and jQuery Bracket library are already included

$(document).ready(function () {
    var flagSize = 15; // Default flag size

    // Function to get team name with flag
    function getTeamWithFlag(teamName, flagUrl) {
        return '<img src="' + flagUrl + '" alt="Flag" style="height:' + flagSize + 'px;" /> ' + teamName;
    }

    // Function to update initial data with current flag size
    function getInitialData() {
        return {
            teams: [
                [getTeamWithFlag('Team 1', 'https://flagsapi.com/BE/shiny/64.png'), getTeamWithFlag('Team 2', 'https://flagsapi.com/BE/shiny/64.png')],
                [getTeamWithFlag('Team 3', 'https://flagsapi.com/US/shiny/64.png'), getTeamWithFlag('Team 4', 'https://flagsapi.com/FR/shiny/64.png')]
            ],
            results: [
                [[1, 2], [3, 4]]  // first round
                // more rounds can be added
            ]
        };
    }

    // Resize parameters
    var resizeParameters = {
        teamWidth: 60,
        scoreWidth: 20,
        matchMargin: 10,
        roundMargin: 50,
        init: getInitialData()
    };

    // Function to update the bracket
    function updateResizeDemo() {
        $('#resize').bracket({
            teamWidth: resizeParameters.teamWidth,
            scoreWidth: resizeParameters.scoreWidth,
            matchMargin: resizeParameters.matchMargin,
            roundMargin: resizeParameters.roundMargin,
            init: resizeParameters.init
        });
    }

    // Initial render of the bracket
    updateResizeDemo();

    // Event listeners for sliders
    $('#teamWidthSlider').on('input change', function () {
        resizeParameters.teamWidth = parseInt($(this).val(), 10);
        updateResizeDemo();
    });

    $('#scoreWidthSlider').on('input change', function () {
        resizeParameters.scoreWidth = parseInt($(this).val(), 10);
        updateResizeDemo();
    });

    $('#matchMarginSlider').on('input change', function () {
        resizeParameters.matchMargin = parseInt($(this).val(), 10);
        updateResizeDemo();
    });

    $('#roundMarginSlider').on('input change', function () {
        resizeParameters.roundMargin = parseInt($(this).val(), 10);
        updateResizeDemo();
    });

    // Event listener for flag size slider
    $('#flagSizeSlider').on('input change', function () {
        flagSize = parseInt($(this).val(), 10);
        resizeParameters.init = getInitialData();
        updateResizeDemo();
    });
});










