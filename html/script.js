document.addEventListener("DOMContentLoaded", (event) => {
    var ProgressBar = {
        init: function () {
            this.progressLabel = document.getElementById("progress-label");
            this.progressPercentage = document.getElementById("progress-percentage");
            this.progressContainer = document.querySelector(".progress-container");
            this.segments = document.querySelectorAll('.progress-segment');
            this.animationFrameRequest = null;
            this.setupListeners();
        },

        setupListeners: function () {
            window.addEventListener("message", function (event) {
                if (event.data.action === "progress") {
                    ProgressBar.update(event.data);
                } else if (event.data.action === "cancel") {
                    ProgressBar.cancel();
                }
            });
        },

        update: function (data) {
            if (this.animationFrameRequest) {
                cancelAnimationFrame(this.animationFrameRequest);
            }
            clearTimeout(this.cancelledTimer);

            this.progressLabel.textContent = data.label;
            this.progressPercentage.textContent = "0%";
            this.progressContainer.style.display = "block";
            
            // Adiciona gradiente inicial em todos os segmentos
            this.segments.forEach(segment => {
                segment.style.background = `linear-gradient(to right, #9FC131 0%, #042940 0%)`;
            });

            let startTime = Date.now();
            let duration = parseInt(data.duration, 10);

            const animateProgress = () => {
                let timeElapsed = Date.now() - startTime;
                let progress = timeElapsed / duration;
                if (progress > 1) progress = 1;
                
                let percentage = Math.round(progress * 100);
                this.progressPercentage.textContent = percentage + "%";
                
                // Calcula o preenchimento de cada segmento
                let totalSegments = this.segments.length;
                let progressPerSegment = progress * totalSegments;
                let currentSegment = Math.floor(progressPerSegment);
                let partialFill = (progressPerSegment % 1) * 100;

                this.segments.forEach((segment, index) => {
                    if (index < currentSegment) {
                        // Segmentos anteriores totalmente preenchidos
                        segment.style.background = '#9FC131';
                        segment.style.boxShadow = '0 0 10px rgba(159, 193, 49, 0.6)';
                    } else if (index === currentSegment) {
                        // Segmento atual parcialmente preenchido
                        segment.style.background = `linear-gradient(to right, #9FC131 ${partialFill}%, #042940 ${partialFill}%)`;
                        segment.style.boxShadow = '0 0 10px rgba(159, 193, 49, 0.6)';
                    } else {
                        // Segmentos posteriores vazios
                        segment.style.background = '#042940';
                        segment.style.boxShadow = 'none';
                    }
                });

                if (progress < 1) {
                    this.animationFrameRequest = requestAnimationFrame(animateProgress);
                } else {
                    this.onComplete();
                }
            };
            this.animationFrameRequest = requestAnimationFrame(animateProgress);
        },

        cancel: function () {
            if (this.animationFrameRequest) {
                cancelAnimationFrame(this.animationFrameRequest);
                this.animationFrameRequest = null;
            }
            this.progressLabel.textContent = "CANCELLED";
            this.progressPercentage.textContent = "";
            this.segments.forEach(segment => {
                segment.style.background = '#9FC131';
                segment.style.boxShadow = '0 0 10px rgba(159, 193, 49, 0.6)';
            });
            this.cancelledTimer = setTimeout(this.onCancel.bind(this), 1000);
        },

        onComplete: function () {
            this.progressContainer.style.display = "none";
            this.segments.forEach(segment => {
                segment.style.background = '#042940';
                segment.style.boxShadow = 'none';
            });
            this.progressPercentage.textContent = "";
            this.postAction("FinishAction");
        },

        onCancel: function () {
            this.progressContainer.style.display = "none";
            this.segments.forEach(segment => {
                segment.style.background = '#042940';
                segment.style.boxShadow = 'none';
            });
            this.progressPercentage.textContent = "";
        },

        postAction: function (action) {
            fetch(`https://progressbar/${action}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
        },
    };

    ProgressBar.init();
});