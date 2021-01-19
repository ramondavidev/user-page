function disableButtons() {
    var e = document.getElementsByClassName("input-dropdown");
    document.getElementById("btn-clear").disabled = true;
    document.getElementById("btn-search").disabled = true;

    var element = document.getElementById("btn-left");
    element.classList.add("activate-btn");

    var element = document.getElementById("btn-right");
    element.classList.remove("activate-btn");

    for(var i = 0; i < e.length; i++) {
        e[i].disabled = true
    }
  }

  function enableButtons() {
    var e = document.getElementsByClassName("input-dropdown");
    document.getElementById("btn-clear").disabled = false;
    document.getElementById("btn-search").disabled = false;

    var element = document.getElementById("btn-left");
    element.classList.remove("activate-btn");

    var element = document.getElementById("btn-right");
    element.classList.add("activate-btn");

    for(var i = 0; i < e.length; i++) {
        e[i].disabled = false
    }
  }

  function clearForm() {
    document.getElementById("form").reset();
  }

  
window.onload = function () {
    

    //---------------------------
    
    var ctx = document.getElementById('myChartPilares').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Execução', 'Comunicação', 'Propriedade', 'Influência'],
            datasets: [{
                data: [
                        '2',
                        '3',
                        '3',
                        '3',
                ],
                fill: true,
                backgroundColor: [
                    'rgba(193, 61, 255, 0.5)',
                    'rgba(67, 200, 200, 0.5)',
                    'rgba(243, 99, 186, 0.5)',
                    'rgba(255, 230, 0, 0.5)',
                ],
                borderColor: [
                    'rgba(193, 61, 255, 0.5)',
                    'rgba(67, 200, 200, 0.5)',
                    'rgba(243, 99, 186, 0.5)',
                    'rgba(255, 230, 0, 0.5)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            },
        }
    });
    

    var ctx = document.getElementById('myChartExecucao').getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [      
                        'Qualidade',
                        'Frequência',
                        'Adaptação ao processo',
                        'Experimentação',
            ],
            datasets: [{
                data: [
                            '3',
                            '4',
                            '0',
                            '1',
                ],
                fill: true,
                backgroundColor: [
                            'rgba(193, 61, 255, 0.5)',
                            'rgba(224, 158, 255, 0.5)',
                            'rgba(224, 158, 255, 0.5)',
                            'rgba(193, 61, 255, 0.5)',
                ],
                borderColor: [
                            'rgba(193, 61, 255, 1)',
                            'rgba(224, 158, 255, 1)',
                            'rgba(224, 158, 255, 1)',
                            'rgba(193, 61, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            }
        }
    });

    var ctx = document.getElementById('myChartComunicacao').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                        'Objetividade e clareza',
                        'Domínio storytelling',
                        'Visibilidade',
                        'Cultura de feedback',
            ],
            datasets: [{
                data: [
                            '1',
                            '2',
                            '5',
                            '5',
                ],
                fill: true,
                backgroundColor: [
                            'rgba(139, 237, 178, 0.5)',

                            'rgba(67, 200, 200, 0.5)',

                            'rgba(67, 200, 200, 0.5)',

                            'rgba(139, 237, 178, 0.5)',
                         
                ],
                borderColor: [                                    
                            'rgba(139, 237, 178, 1)',

                            'rgba(67, 200, 200, 1)',

                            'rgba(67, 200, 200, 1)',

                            'rgba(139, 237, 178, 1)',
 
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            }
        }
    });

    var ctx = document.getElementById('myChartPropriedade').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                
                    
                        'Cocriação',

                        'Ser propositivo',

                        'Auto desenvolvimento',

                        'Impacto no negócio',

                        'Auto gestão',

            ],
            datasets: [{
                data: [

                            '5',
                            '1',
                            '4',
                            '4',
                            '3',
                ],
                fill: true,
                backgroundColor: [
                            'rgba(255, 170, 221, 0.5)',
                            'rgba(255, 170, 221, 0.5)',
                            'rgba(243, 99, 186, 0.5)',
                            'rgba(243, 99, 186, 0.5)',
                            'rgba(203, 57, 144, 0.5)',
                ],
                borderColor: [
                            'rgba(255, 170, 221, 1)',
                            'rgba(255, 170, 221, 1)',
                            'rgba(243, 99, 186, 1)',
                            'rgba(243, 99, 186, 1)',
                            'rgba(203, 57, 144, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            }
        }
    });

    var ctx = document.getElementById('myChartInfluencia').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                        'Flexibilidade',
                        'Negociação',
                        'Evolui e constrói a cultura',
                        'Mediação',
            ],
            datasets: [{
                data: [
                            '2',
                            '4',
                            '3',
                            '3', 
                ],
                fill: true,
                backgroundColor: [
                            'rgba(203, 163, 59, 0.5)',
                            'rgba(255, 230, 0, 0.5)',
                            'rgba(255, 230, 0, 0.5)',
                            'rgba(203, 163, 59, 0.5)',
                ],
                borderColor: [
                            'rgba(203, 163, 59, 1)',
                            'rgba(255, 230, 0, 1)',
                            'rgba(255, 230, 0, 1)',
                            'rgba(203, 163, 59, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                }
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            }
        }
    });

}