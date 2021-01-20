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
                position: 'bottom',
                align: 'center'
            }
        }
    });

    var ctx = document.getElementById('myChartComunicacao').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                        'Objetividade, clareza e transparência',
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
                position: 'bottom',
                align: 'center'
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
                scaleLabel: {
                    display: true
                  },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                },
                angleLines: {
                    display: true,
                  },
                  pointLabels: {
                    display: true,
                    fontSize: 12
                  }
            },
            legend: {
                display: false
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
                fill: false,
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
                scaleLabel: {
                    display: true
                  },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1
                },
                angleLines: {
                    display: true,
                  },
                  pointLabels: {
                    display: false,
                    fontSize: 12
                  }
            },
            legend: {
                display: false
            }
        }
    });
    
    
}

let myChart = new Chart(document.getElementById("pie-chart"), {
    type: "polarArea",
    data: {
      datasets: [{
        data: [2, 4, 3, 3],
        backgroundColor: ["rgba(203, 163, 59, 0.5)", "rgba(255, 230, 0, 0.5)", "rgba(255, 230, 0, 0.5)", "rgba(203, 163, 59, 0.5)"],
        borderWidth: 1,
        borderColor: [
                              'rgba(203, 163, 59, 1)',
                              'rgba(255, 230, 0, 1)',
                              'rgba(255, 230, 0, 1)',
                              'rgba(203, 163, 59, 1)',
                  ]
      }],
      labels: [
        "Flexibilidade",
        "Negociação",
        "Evolui e constrói a cultura",
        "Mediação"
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          anchor: 'start',
          align: 'end',
          offset: 0 // Gets updated
        },
      },
      cutoutPercentage: 20,
      legend: {
        display: false
      },
      layout: {
        padding: 120,
      },
      scale: {
        scaleLabel: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          display: false
        }
      },
      onResize: function() {
        let width = document.getElementById("pie-chart").width
        let padding = myChart.options.layout.padding
        myChart.options.plugins.datalabels.offset = width/2-padding
      }
    }
  });
  
  function updateOffset() {
    let width = document.getElementById("pie-chart").width
    let padding = myChart.options.layout.padding
    myChart.options.plugins.datalabels.offset = width/2-padding
    myChart.update()
  }
  updateOffset() //init call after we know the dimensions of the chart
  


  let myChart2 = new Chart(document.getElementById("pie-chart2"), {
    type: "polarArea",
    data: {
      datasets: [{
        data: ['5','1','4','4','3',],
        backgroundColor: [
            'rgba(255, 170, 221, 0.5)',
            'rgba(255, 170, 221, 0.5)',
            'rgba(243, 99, 186, 0.5)',
            'rgba(243, 99, 186, 0.5)',
            'rgba(203, 57, 144, 0.5)'],
        borderWidth: 1,
        borderColor: [
            'rgba(255, 170, 221, 1)',
            'rgba(255, 170, 221, 1)',
            'rgba(243, 99, 186, 1)',
            'rgba(243, 99, 186, 1)',
            'rgba(203, 57, 144, 1)',
                  ]
      }],
      labels: [
        'Cocriação',
        'Ser propositivo',
        'Auto desenvolvimento',
        'Impacto no negócio',
        'Auto gestão'
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          anchor: 'start',
          align: 'end',
          offset: 0 // Gets updated
        },
      },
      cutoutPercentage: 20,
      legend: {
        display: false
      },
      layout: {
        padding: 120,
      },
      scale: {
        scaleLabel: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          display: false
        }
      },
      onResize: function() {
        let width = document.getElementById("pie-chart2").width
        let padding = myChart2.options.layout.padding
        myChart2.options.plugins.datalabels.offset = width/2-padding
      }
    }
  });
  
  function updateOffset2() {
    let width = document.getElementById("pie-chart2").width
    let padding = myChart2.options.layout.padding
    myChart2.options.plugins.datalabels.offset = width/2-padding
    myChart2.update()
  }
  updateOffset2() //init call after we know the dimensions of the chart






  let myChart3 = new Chart(document.getElementById("pie-chart3"), {
    type: "polarArea",
    data: {
      datasets: [{
        data: ['1','2','5','5'],
        backgroundColor: [
            'rgba(139, 237, 178, 0.5)',
            'rgba(67, 200, 200, 0.5)',
            'rgba(67, 200, 200, 0.5)',
            'rgba(139, 237, 178, 0.5)'],
        borderWidth: 1,
        borderColor: [
            'rgba(139, 237, 178, 1)',
            'rgba(67, 200, 200, 1)',
            'rgba(67, 200, 200, 1)',
            'rgba(139, 237, 178, 1)'
                  ]
      }],
      labels: [
        'Objetividade, clareza e  \n transparência',
        'Domínio storytelling',
        'Visibilidade',
        'Cultura de feedback',
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          anchor: 'start',
          align: 'end',
          offset: 0 // Gets updated
        },
      },
      cutoutPercentage: 20,
      legend: {
        display: false
      },
      layout: {
        padding: 120,
      },
      scale: {
        scaleLabel: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          display: false
        }
      },
      onResize: function() {
        let width = document.getElementById("pie-chart3").width
        let padding = myChart3.options.layout.padding
        myChart3.options.plugins.datalabels.offset = width/2-padding
      }
    }
  });
  
  function updateOffset3() {
    let width = document.getElementById("pie-chart3").width
    let padding = myChart3.options.layout.padding
    myChart3.options.plugins.datalabels.offset = width/2-padding
    myChart3.update()
  }
  updateOffset3() //init call after we know the dimensions of the chart
  
  
  let myChart4 = new Chart(document.getElementById("pie-chart4"), {
    type: "polarArea",
    data: {
      datasets: [{
        data: ['3','4','0','1'],
        backgroundColor: [
            'rgba(193, 61, 255, 0.5)',
            'rgba(224, 158, 255, 0.5)',
            'rgba(224, 158, 255, 0.5)',
            'rgba(193, 61, 255, 0.5)',],
        borderWidth: 1,
        borderColor: [
            'rgba(193, 61, 255, 1)',
            'rgba(224, 158, 255, 1)',
            'rgba(224, 158, 255, 1)',
            'rgba(193, 61, 255, 1)'
                  ]
      }],
      labels: [
        'Qualidade',
        'Frequência',
        'Adaptação ao processo',
        'Experimentação',
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          anchor: 'start',
          align: 'end',
          offset: 0 // Gets updated
        },
      },
      cutoutPercentage: 20,
      legend: {
        display: false
      },
      layout: {
        padding: 120,
      },
      scale: {
        scaleLabel: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          display: false
        }
      },
      onResize: function() {
        let width = document.getElementById("pie-chart4").width
        let padding = myChart4.options.layout.padding
        myChart4.options.plugins.datalabels.offset = width/2-padding
      }
    }
  });
  
  function updateOffset4() {
    let width = document.getElementById("pie-chart4").width
    let padding = myChart4.options.layout.padding
    myChart4.options.plugins.datalabels.offset = width/2-padding
    myChart4.update()
  }
  updateOffset4() //init call after we know the dimensions of the chart



  let myChart5 = new Chart(document.getElementById("pie-chart5"), {
    type: "polarArea",
    data: {
      datasets: [{
        data: ['2','3','3','3'],
        backgroundColor: [
            'rgba(193, 61, 255, 0.5)',
            'rgba(67, 200, 200, 0.5)',
            'rgba(243, 99, 186, 0.5)',
            'rgba(255, 230, 0, 0.5)'
        ],
        borderWidth: 1,
        borderColor: [
            'rgba(193, 61, 255, 0.5)',
            'rgba(67, 200, 200, 0.5)',
            'rgba(243, 99, 186, 0.5)',
            'rgba(255, 230, 0, 0.5)'
                  ]
      }],
      labels: ['Execução', 'Comunicação', 'Propriedade', 'Influência'],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          anchor: 'start',
          align: 'end',
          offset: 0 // Gets updated
        },
      },
      cutoutPercentage: 20,
      legend: {
        display: false
      },
      layout: {
        padding: 120,
      },
      scale: {
        scaleLabel: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1
        },
        angleLines: {
          display: true
        },
        pointLabels: {
          display: false
        }
      },
      onResize: function() {
        let width = document.getElementById("pie-chart5").width
        let padding = myChart5.options.layout.padding
        myChart5.options.plugins.datalabels.offset = width/2-padding
      }
    }
  });
  
  function updateOffset5() {
    let width = document.getElementById("pie-chart5").width
    let padding = myChart5.options.layout.padding
    myChart5.options.plugins.datalabels.offset = width/2-padding
    myChart5.update()
  }
  updateOffset5() //init call after we know the dimensions of the chart