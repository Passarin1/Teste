let playerName;
let currentStage = 0;
let trapActivated = false;
let discoveredTrap = false;
let playerStats = {
    inteligencia: Math.floor(Math.random() * 100) + 1,
        sorte: Math.floor(Math.random() * 100) + 1
        };

        const storyEvents = [
            "Você recebeu uma mensagem urgente do Reino de Valthoria. Um transporte o leva até as ruínas ancestrais, onde você se depara com uma porta enorme que leva a uma caverna subterrânea.",
                "A caverna é fria e escura. À medida que você explora, percebe uma escada que leva para cima, mas há algo estranho...",
                    "De repente, você se sente desorientado, como se o ambiente ao seu redor estivesse diferente. Mas tudo parece igual. Será que algo aconteceu?",
                        "Você continua sua jornada e encontra um labirinto cheio de armadilhas e criaturas. Você tenta lembrar o caminho, mas algo parece fora do lugar.",
                            "Você encontra um grupo de palhaços mímicos realizando um ritual sinistro. Eles estão usando uma máscara misteriosa. O que será que eles estão invocando?",
                                "Ao tentar sair da caverna, você percebe que algo não está certo... o caminho não é o mesmo que você se lembra. Parece que você foi enganado, mas quando?"
                                ];

                                function startGame() {
                                    playerName = document.getElementById("playerName").value || "Herói";
                                        document.getElementById("playerTitle").textContent = `Bem-vindo, ${playerName}`;
                                            document.getElementById("menu").style.display = "none";
                                                document.getElementById("game").style.display = "block";
                                                    nextStage();
                                                    }

                                                    function nextStage() {
                                                        if (currentStage === 1) {
                                                                // Aqui é onde a armadilha começa, mas o jogador ainda não sabe
                                                                        let intTest = rollDice(100);
                                                                                if (intTest > playerStats.inteligencia) {
                                                                                            trapActivated = true;
                                                                                                    }
                                                                                                        }
                                                                                                            if (currentStage === 5 && trapActivated && !discoveredTrap) {
                                                                                                                    document.getElementById("story").textContent = "Você tenta sair, mas o caminho não é o mesmo. Você percebe que foi vítima de uma armadilha. Algo mudou durante sua jornada!";
                                                                                                                            discoveredTrap = true;
                                                                                                                                } else if (currentStage < storyEvents.length) {
                                                                                                                                        document.getElementById("story").textContent = storyEvents[currentStage];
                                                                                                                                                currentStage++;
                                                                                                                                                    } else {
                                                                                                                                                            document.getElementById("story").textContent = "Parabéns, você concluiu sua aventura! Agora você deve retornar ao reino com a máscara.";
                                                                                                                                                                }
                                                                                                                                                                }

                                                                                                                                                                function rollDice(sides) {
                                                                                                                                                                    return Math.floor(Math.random() * sides) + 1;
                                                                                                                                                                    }