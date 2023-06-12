var timerDisplay = document.getElementById('timer');
        var timerInterval;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;

        function start() {
            timerInterval = setInterval(incrementTimer, 1000);
        }

        function stop() {
            clearInterval(timerInterval);
        }

        function reset() {
            clearInterval(timerInterval);
            hours = 0;
            minutes = 0;
            seconds = 0;
            updateTimerDisplay();
        }

        function incrementTimer() {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            var hoursString = hours.toString().padStart(2, '0');
            var minutesString = minutes.toString().padStart(2, '0');
            var secondsString = seconds.toString().padStart(2, '0');
            timerDisplay.textContent = hoursString + ':' + minutesString + ':' + secondsString;
        }