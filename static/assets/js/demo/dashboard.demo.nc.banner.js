/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 1.8.0
Author: Sean Ngu

*/


var randomNo = function() {
  return Math.floor(Math.random() * 60) + 30
};

//value = ""
var apexMemory95usageChart
var apexMemory75usageChart
var apexMemory60usageChart
var apexCPU95usageChart
var apexCPU75usageChart
var apexCPU60usageChart
var apexDisk95usageChart
var apexDisk75usageChart
var apexDisk60usageChart

var handleRenderChartNC = function () {
  // global apexchart settings
  Apex = {
    title: {
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        fontFamily: app.font.family,
        color: app.color.white,
      },
    },
    legend: {
      fontFamily: app.font.family,
      labels: {
        colors: "#fff",
        show: true,
      },
    },
    tooltip: {
      style: {
        fontSize: "10px",
        fontFamily: app.font.family,
      },
    },
    grid: {
      borderColor: "rgba(" + app.color.whiteRgb + ", .25)",
    },
    dataLabels: {
      style: {
        fontSize: "12px",
        fontFamily: app.font.family,
        fontWeight: "bold",
        colors: undefined,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
        color: "rgba(" + app.color.whiteRgb + ", .25)",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: -1,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "rgba(" + app.color.whiteRgb + ", .25)",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "9px",
          fontFamily: app.font.family,
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
//      min: 0,
//      max: 20,
      labels: {
        style: {
          colors: "#fff",
          fontSize: "9px",
          fontFamily: app.font.family,
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  };

//--------------------------------------------------------------------------
// Number of servers by version of OS - apexOSversionChart
//--------------------------------------------------------------------------
var osDonutValue = []
var osDonutName = []
for (var i = 0; i < a.os_donutChartData.length; i++){
        osDonutValue.push(a.os_donutChartData[i]['value']);
        osDonutName.push(a.os_donutChartData[i]['name']);
    };
var apexOSversionChartOptions = {
		chart: {
		    width: '100%',
			height: 130,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				dataLabels: {
					offset: 8
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter(val, opts) {
				const name = opts.w.globals.labels[opts.seriesIndex]
				return [val.toFixed(1) + '%']
			},
            style: {
                fontSize: '12px',
                colors: [app.color.white],
                fontWeight: 400
            },
		},
		stroke: {
			show: false
		},
		legend: {
			show: false,
			position: 'left',
		},
        colors: ["#FFF3CE", "#FFE49D", "#FFD16D", "#FFBE48", "#ff9f0c", "#DB7F08", "#B76306", "#934903"],
		labels: osDonutName,
		series: osDonutValue,
		tooltip: {
			theme: 'dark',
			x: {
				show: true
			},
			y: {
				title: {
					formatter: function (val) {
						return '' + val +"<br>" +" Count:"
					}
				},
				formatter: (value) => { return '' + value },
			}
		}
	};
	var apexOSversionChart = new ApexCharts(
		document.querySelector('#apexOSversionChart'),
		apexOSversionChartOptions
	);
	apexOSversionChart.render();




//--------------------------------------------------------------------------
// Number of servers IP list - IPlistchart
//--------------------------------------------------------------------------
group=[];
value=[];

for (var i=0; i < a.server_barChartDataList.length; i++){
    group.push(a.server_barChartDataList[i].name);
    value.push(parseInt(a.server_barChartDataList[i].value));
}

var apexIPlistchartOptions = {
		chart: {
			height: 120,
			type: 'bar',
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
				distributed : true
			},
		},
		legend: {
		    show: false
		},
		dataLabels: {
			enabled: false

		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
        colors: ["#f39c12", "#fdb43f", "#ffc365", "#c58a2e", "#e6b567"],
		series: [{
			data: value
		}],
		grid: {
			show: true
		},
		xaxis: {
			categories: group,
			labels: {
				show: true,
                style: {
					colors: '#fff',
					fontSize: '9px',
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		},
		yaxis: {
			labels: {
				show: true,
			}
		},
		fill: {
			opacity: 1
		},
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
          },
		  y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				},
				formatter: (value) => { return '' + value },
		  }
		}
	};
	var apexIPlistChart = new ApexCharts(
		document.querySelector('#apexIPlistChart'),
		apexIPlistchartOptions
	);
	apexIPlistChart.render();



//--------------------------------------------------------------------------
// Service Running Statistics - apexRunServiceChart
//--------------------------------------------------------------------------
    var donutValue = []
   var donutName = []
    for (var i = 0; i < a.donutChartDataList.length; i++){
        donutValue.push(a.donutChartDataList[i]['value']);
        donutName.push(a.donutChartDataList[i]['name']);
    };
var apexRunServiceOptions = {
		chart: {
		    width: '100%',
			height: 130,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				dataLabels: {
					offset: 8
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter(val, opts) {
				const name = opts.w.globals.labels[opts.seriesIndex]
				return [val.toFixed(1) + '%']
			},
            style: {
                fontSize: '12px',
                colors: [app.color.white],
                fontWeight: 400
            },
		},
		stroke: {
			show: false
		},
		legend: {
			show: false,
			position: 'left',
		},
		colors: ['rgba(' + app.color.themeRgb + ', .57)', 'rgba(' + app.color.themeRgb + ', .77)', 'rgba(' + app.color.themeRgb + ', .98)'],
		// labels: ["A","A","A","A","A"],
		// series: [44, 55, 41, 17, 15],
        labels: donutName,
		series: donutValue,
		tooltip: {
			theme: 'dark',
			x: {
				show: true
			},
			y: {
				title: {
					formatter: function (val) {
						return '' + val +"<br>" +" Count:"
					}
				},
				formatter: (value) => { return '' + value },
			}
		}
	};
	var apexRunServiceChart = new ApexCharts(
		document.querySelector('#apexRunServiceChart'),
		apexRunServiceOptions
	);
	apexRunServiceChart.render();


//--------------------------------------------------------------------------
// Memory Usage - apexMemory95usageChart
//--------------------------------------------------------------------------

var MemoryValue = []
var MemoryName = []
for (var i = 0; i < a.MemoryChartDataList.length; i++){
    MemoryValue.push(a.MemoryChartDataList[i]['value']);
    MemoryName.push(a.MemoryChartDataList[i]['name']);
};


var apexMemory95usageOptions = {
          series: [95],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) +'%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#b31217',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#870000'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [MemoryValue[2]],
        };
	apexMemory95usageChart = new ApexCharts(
		document.querySelector('#apexMemory95usageChart'),
		apexMemory95usageOptions
	);
	apexMemory95usageChart.render();


//--------------------------------------------------------------------------
// Memory Usage - apexMemory75usageChart
//--------------------------------------------------------------------------
var apexMemory75usageOptions = {
          series: [75],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) + '%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#fe8c00',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#f83600'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [MemoryValue[1]],
        };
	apexMemory75usageChart = new ApexCharts(
		document.querySelector('#apexMemory75usageChart'),
		apexMemory75usageOptions
	);
	apexMemory75usageChart.render();



//--------------------------------------------------------------------------
// Memory Usage - apexMemory60usageChart
//--------------------------------------------------------------------------
var apexMemory60usageOptions = {
          series: [60],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) + '%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#F2C94C',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#F2994A'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [MemoryValue[0]],
        };
	apexMemory60usageChart = new ApexCharts(
		document.querySelector('#apexMemory60usageChart'),
		apexMemory60usageOptions
	);
	apexMemory60usageChart.render();


//--------------------------------------------------------------------------
// CPU Usage - apexCPU95usageChart
//--------------------------------------------------------------------------

var CpuValue = []
var CpuName = []
for (var i = 0; i < a.CpuChartDataList.length; i++){
    CpuValue.push(a.CpuChartDataList[i]['value']);
    CpuName.push(a.CpuChartDataList[i]['name']);
};

var apexCPU95usageOptions = {
          series: [95],
          chart: {
          height: 250,
          type: 'radialBar',
          animations: {
            dynamicAnimation: {
                enabled: true,
                speed: 350
        }
    }

        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) + '%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#b31217',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#870000'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [CpuValue[2]],
        };
	apexCPU95usageChart = new ApexCharts(
		document.querySelector('#apexCPU95usageChart'),
		apexCPU95usageOptions
	);


//--------------------------------------------------------------------------
// CPU Usage - apexCPU75usageChart
//--------------------------------------------------------------------------
var apexCPU75usageOptions = {
          series: [75],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) +'%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#fe8c00',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#f83600'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [CpuValue[1]],
        };
	apexCPU75usageChart = new ApexCharts(
		document.querySelector('#apexCPU75usageChart'),
		apexCPU75usageOptions
	);



//--------------------------------------------------------------------------
// CPU Usage - apexCPU60usageChart
//--------------------------------------------------------------------------
var apexCPU60usageOptions = {
          series: [60],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) +'%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#F2C94C',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#F2994A'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [CpuValue[0]],
        };
	apexCPU60usageChart = new ApexCharts(
		document.querySelector('#apexCPU60usageChart'),
		apexCPU60usageOptions
	);


//--------------------------------------------------------------------------
// Disk Usage - apexDisk95usageChart
//--------------------------------------------------------------------------

var DiskValue = []
var DiskName = []
for (var i = 0; i < a.DiskChartDataList.length; i++){
    DiskValue.push(a.DiskChartDataList[i]['value']);
    DiskName.push(a.DiskChartDataList[i]['name']);
};

var apexDisk95usageOptions = {
          series: [95],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val)+'%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#b31217',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#870000'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [DiskValue[2]],
        };
	apexDisk95usageChart = new ApexCharts(
		document.querySelector('#apexDisk95usageChart'),
		apexDisk95usageOptions
	);


//--------------------------------------------------------------------------
// Disk Usage - apexDisk75usageChart
//--------------------------------------------------------------------------
var apexDisk75usageOptions = {
          series: [75],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val) + '%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#fe8c00',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#f83600'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [DiskValue[1]],
        };
	apexDisk75usageChart = new ApexCharts(
		document.querySelector('#apexDisk75usageChart'),
		apexDisk75usageOptions
	);


//--------------------------------------------------------------------------
// Disk Usage - apexDisk60usageChart
//--------------------------------------------------------------------------
var apexDisk60usageOptions = {
          series: [60],
          chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: ['rgba(' + app.color.whiteRgb + ', .30)'],
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#fff',
                fontSize: '28px'
              },
              value: {
                formatter: function(val) {
                  return  parseInt(val)+'%';
                },
                color: '#fff',
                fontSize: '17px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          colors: '#F2C94C',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#F2994A'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [DiskValue[0]],
        };
	apexDisk60usageChart = new ApexCharts(
		document.querySelector('#apexDisk60usageChart'),
		apexDisk60usageOptions
	);



//--------------------------------------------------------------------------
// Total quantity of servers - apexTotalServerChart
//--------------------------------------------------------------------------
var apexTotalServerOptions = {
		chart: {
		    width: '100%',
			height: 145,
			type: 'line',
			toolbar: {
				show: false
			}
		},
        colors: ['rgba(' + app.color.themeRgb + ', .95)', 'rgba(' + app.color.themeRgb + ', .30)'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		grid: {
			row: {
				colors: ['rgba(' + app.color.whiteRgb + ', .25)', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			}
		},
		markers: {
			size: 1,
		},
		series: a.server_LChartDataList[0].data,
		xaxis: {
            categories: a.server_LChartDataList[0].date,
			labels: {
				show: true,
			},
			tooltip: {
				enabled: false,
			},
		},
		yaxis: {
			labels: {
				show: true,
					formatter: function (val){
						return Math.round(val);
					}
			}
		},
		tooltip: {
			theme: 'dark',
			x: {
				show: true,
			},
			y: {
				title: {
					formatter: function (val) {
						return '' + val
					}
				},
				formatter: (value) => { return '' + value },
			}
		},
		legend: {
			show: false,
			position: 'top',
			offsetY: 1,
			horizontalAlign: 'right',
			floating: true
		}
	};
	var apexTotalServerChart = new ApexCharts(
		document.querySelector('#apexTotalServerChart'),
		apexTotalServerOptions
	);
	apexTotalServerChart.render();



//--------------------------------------------------------------------------
// Total alarm case(Top 5) - apexTotalAlarmChart
//--------------------------------------------------------------------------
	var apexTotalAlarmOptions = {
		chart: {
		    width: '100%',
			height: 150,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				dataLabels: {
					offset: 1,
				}
			}
		},
		dataLabels: {
			enabled: true,
            formatter(val, value) {
				const name = value.w.globals.labels[value.seriesIndex]
				return [val.toFixed(1) + '%']
			},
            style: {
                fontSize: '12px',
                colors: [app.color.white],
                fontWeight: 400
            },
//			dropShadow: {
//				enabled: true,
//				color: 'rgba(' + app.color.darkRgb + ', .75)',
//				top: -2,
//				left: 4,
//				blur: 1,
//				opacity: 0.5
//			}
		},
		stroke: {
			show: false
		},
//		legend: {
//			show: true,
//			position:"right"
//
//		},
        legend: {
            formatter: function(group, value) {
                return [group +"&nbsp;&nbsp;&nbsp;"+value.w.globals.series[value.seriesIndex]]
            },
            position : 'right',
            fontSize: "10px",
            height: 120,
        },
//        legend: {
//			show: true,
//			position: 'left',
//			width : '100%',
//			height: 150,
//			horizontalAlign: 'left',
//			floating: false,
//			formatter: function (value, opts) {
//                return [value +  opts.w.globals.series[opts.seriesIndex]]
//            },
//			itemMargin: {
//				horizontal: 0,
//				vertical: 0
//			},
//			labels: {
//				colors: '#fff',
//				fontSize: '10px'
//			}
//		},

		colors: ['rgba(' + app.color.themeRgb + ', .57)', 'rgba(' + app.color.themeRgb + ', .77)', 'rgba(' + app.color.themeRgb + ', .98)'],
		labels: ['192.168.xx', '192.168.xx', '192.168.xx', '192.168.xx', '192.168.xx'],
		series: [10, 20, 30, 40, 50],
		tooltip: {
			theme: 'dark',
			x: {
				show: true
			},
			y: {
				title: {
					formatter: function (val) {
						return '' + val +"<br>" +" Count:"
					}
				},
				formatter: (value) => { return '' + value },
			}
		},
//		tooltipHoverFormatter: function(group, value) {
//            return '<strong>' + value.w.globals.series[value.seriesIndex][value.dataPointIndex] + '</strong>'
//        },
	};
	var apexTotalAlarmChart = new ApexCharts(
		document.querySelector('#apexTotalAlarmChart'),
		apexTotalAlarmOptions
	);
	apexTotalAlarmChart.render();



//--------------------------------------------------------------------------
// physical server quantity - apexPhysicalServerChart
//--------------------------------------------------------------------------

var apexPhysicalServerOptions = {
		chart: {
			height: 120,
			type: 'bar',
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
//				columnWidth: '60%',
//                barheight: '100%',
                distributed: true,
			},
		},
		legend : {
		    show: false
		},
		dataLabels: {
			enabled: false

		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
		colors: ["#f39c12", "#fdb43f", "#ffc365"],
		series: [{
			data: [10, 21, 10]
		}],
		grid: {
			show: true
		},

		xaxis: {
			categories: ['?????????ABCDE', '?????????ABCDE', '?????????ABCDE'],
			labels: {
				show: true,
                style: {
					colors: '#fff',
					fontSize: '9px',
					cssClass: 'apexcharts-xaxis-label',
				},
			offsetX: 30,
			},
		},
		yaxis: {
			labels: {
				show: true,
			}
		},
		fill: {
			opacity: 1
		},
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
          },
		  y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				},
				formatter: (value) => { return '' + value },
		  }
		}
	};




	var apexPhysicalServerChart = new ApexCharts(
		document.querySelector('#apexPhysicalServerChart'),
		apexPhysicalServerOptions
	);
	apexPhysicalServerChart.render();
};



function worldMap(worldMapData) {
        var width = 750,
            height = 330,
            centered,
            clicked_point;

        var svg = d3.select("#world-map").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map")
            .attr("viewBox", `0 0 ${width} ${height}`);

        var projection = d3v4.geoMercator()
            .translate([width / 2, height / 1.5])
            .scale(80);

        var path = d3v4.geoPath()
            .projection(projection);

        var g = svg.append("g");

        queue()
            .defer(d3.json, "../static/assets/plugins/jvectormap-content/world.json" )
            .await(ready);


svg.selectAll("circle")
        .data(worldMapData)
        .enter()
        .append("circle")
        .attr("class","dot")
        .attr("transform",translateCircle)
        .attr("r",4)
        .style("fill", "rgba("+app.color.themeRgb+")");


        function ready(error, data){

            var features = topojson.feature(data, data.objects.countries).features;
            svg.selectAll("path")
                .data(features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", "rgba("+app.color.whiteRgb+")")
                .attr("opacity", .5)
        }





        function translateCircle(datum, index)
          {
            return "translate(" +  projection([datum[1], datum[0]]) + ")";
          };
        setInterval(function(){
	      worldMapData.forEach(function(datum)
          {
			  svg
			  	.append("circle")
			  	.attr({
                    "class": "ring",
                    "transform": translateCircle(datum),
                    "fill":"rgba("+app.color.themeRgb+")",
                    "stroke":"rgba("+app.color.whiteRgb+")",
                    "stroke-opacity": .5,
                    "stroke-width": 0,
                    "r":1,
                    "opacity": 0.14,
                    "fill-opacity":0.14
                })
                .transition()
                .duration(6000)
                .attr("r", 40)
                .attr("opacity", 0)
                .remove();





//			      .attr("class", "ring")
//			      .attr("transform", translateCircle(datum))
//			      .attr("r", 1)
//			      .style("fill", "rgba("+app.color.themeRgb+")")
//			      .style("opacity", .14)
//			      .style("fill-opacity", .14)
//			    .transition()
//			      .ease("linear")
//			      .duration(2000)
//			      .style("stroke-opacity", .14)
//			      .style("stroke-width", 0.1)
//			      .style("stroke", "rgba("+app.color.themeRgb+")")
//			      .attr("r", 30)
//			      .remove();
          })

      }, 1000);
};



function koreaMap(worldMapData) {

var width = 750,
    height = 330,
    initialScale = 2700,
    centered,
    labels;

var projection = d3.geo.mercator()
    .center([127.1094211519, 36.170])
    .scale(initialScale)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#korea-map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr('id', 'kmap')
    .attr("viewBox", `0 0 ${width} ${height}`);

var states = svg.append("g")
    .attr("id", "states");

states.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

d3.json("../static/assets/plugins/jvectormap-content/korea.json", function(json) {
  states.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path)
      .attr("fill", "rgba("+app.color.whiteRgb+")")
      .attr("opacity", .5)
      .attr("id", function(d) { return 'path-'+d.id; });

  labels = states.selectAll("text")
    .data(json.features)
    .enter().append("text")
      .attr("transform", labelsTransform)
      .attr("id", function(d) { return 'label-'+d.id; })
      .attr('text-anchor', 'small')
      .attr("dy", ".35em")
      .attr("fill", "rgba("+app.color.whiteRgb+")")
      .attr("opacity", .8)
      .text(function(d) { return d.properties.ShortName; });
});

svg.selectAll("circle")
        .data(worldMapData)
        .enter()
        .append("circle")
        .attr("class","dot")
        .attr("transform",translateCircle)
        .attr("r",4)
        .style("fill", "rgba("+app.color.themeRgb+")");

function labelsTransform(d) {



  if (d.id == 8) {
    var arr = path.centroid(d);
    arr[1] += (d3.event && d3.event.scale) ? (d3.event.scale / height + 20) : (initialScale / height + 20);

    return "translate(" + arr + ")";
  } else {
    return "translate(" + path.centroid(d) + ")";
  }
}



function translateCircle(datum, index)
          {
            return "translate(" +  projection([datum[1], datum[0]]) + ")";
          };

        setInterval(function(){
	      worldMapData.forEach(function(datum)
          {
			  svg
			  	.append("circle")
			  	.attr({
                    "class": "ring",
                    "transform": translateCircle(datum),
                    "fill":"rgba("+app.color.themeRgb+")",
                    "stroke":"rgba("+app.color.whiteRgb+")",
                    "stroke-opacity": .5,
                    "stroke-width": 0,
                    "r":1,
                    "opacity": 0.14,
                    "fill-opacity":0.14
                })
                .transition()
                .duration(6000)
                .attr("r", 40)
                .attr("opacity", 0)
                .remove();


//			      .attr("class", "ring")
//			      .attr("transform", translateCircle(datum))
//			      .attr("r", 1)
//			      .style("fill", "rgba("+app.color.themeRgb+")")
//			      .style("opacity", .14)
//			      .style("fill-opacity", .14)
//			    .transition()
//			      .ease("linear")
//			      .duration(2000)
//			      .style("stroke-opacity", .14)
//			      .style("stroke-width", 0.1)
//			      .style("stroke", "rgba("+app.color.themeRgb+")")
//			      .attr("r", 30)
//			      .remove();
          })
      }, 800);
};























function seongnamMap(worldMapData) {
        var width = 750,
            height = 330,
            centered,
            clicked_point;
	var svg = d3.select("#seongnam-map").append("svg").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);
	var map = svg.append("g").attr("id", "map"), places = svg.append("g").attr("id", "places");
	var projection = d3.geo.mercator().center([127.1094211519, 37.388]).scale(120000).translate([width / 2, height / 2]);
	var path = d3.geo.path().projection(projection);

        var projection = d3v4.geoMercator()
            .translate([width / 2, height / 1.8])
            .center([127.1094211519, 37.398])
            .scale(110000);

        var path = d3v4.geoPath()
            .projection(projection);

        var g = svg.append("g");

        queue()
            .defer(d3.json, "../static/assets/plugins/jvectormap-content/seongnam.json" )
            .await(ready);


svg.selectAll("circle")
        .data(worldMapData)
        .enter()
        .append("circle")
        .attr("class","dot")
        .attr("transform",translateCircle)
        .attr("r",4)
        .style("fill", "rgba("+app.color.themeRgb+")");


        function ready(error, data){

            var features = topojson.feature(data, data.objects.seongnam).features;
            svg.selectAll("path")
                .data(features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", "rgba("+app.color.whiteRgb+")")
                .attr("opacity", .5);

            svg.selectAll('text').data(features).enter().append("text")
			.attr("transform", function (d) { return "translate(" + path.centroid(d) + ")"; })
			.attr("dy", ".35em")
			.attr("class", "municipality-label")
			.text(function (d) { return d.properties.name; })
			.style("fill", "rgba("+app.color.whiteRgb+")")
			.attr('text-anchor', 'small')
			.attr("opacity", .8);


        }





        function translateCircle(datum, index)
          {
            return "translate(" +  projection([datum[1], datum[0]]) + ")";
          };

        setInterval(function(){
	      worldMapData.forEach(function(datum)
          {
			  svg
			  	.append("circle")
			  	.attr({
                    "class": "ring",
                    "transform": translateCircle(datum),
                    "fill":"rgba("+app.color.themeRgb+")",
                    "stroke":"rgba("+app.color.whiteRgb+")",
                    "stroke-opacity": .5,
                    "stroke-width": 0,
                    "r":1,
                    "opacity": 0.14,
                    "fill-opacity":0.14
                })
                .transition()
                .duration(6000)
                .attr("r", 40)
                .attr("opacity", 0)
                .remove();






//			      .attr("class", "ring")
//			      .attr("transform", translateCircle(datum))
//			      .attr("r", 1)
//			      .style("fill", "rgba("+app.color.themeRgb+")")
//			      .style("opacity", .14)
//			      .style("fill-opacity", .14)
//			    .transition()
//			      .ease("linear")
//			      .duration(2000)
//			      .style("stroke-opacity", .14)
//			      .style("stroke-width", 0.1)
//			      .style("stroke", "rgba("+app.color.themeRgb+")")
//			      .attr("r", 30)
//			      .remove();
          })
      }, 800);



//d3.select(window).on("resize", sizeChange);
//    function sizeChange() {
//	    d3.select("g").attr("transform", "scale(" + $("#seongnam-map").width()/900 + ")");
//	    $("svg").height($("#seongnam-map").width()*0.618);
//	}
//
//	var width = 740, height = 351;
//	var svg = d3.select("#seongnam-map").append("svg").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);
//	var map = svg.append("g").attr("id", "map"), places = svg.append("g").attr("id", "places");
//	var projection = d3.geo.mercator().center([127.1094211519, 37.398]).scale(115000).translate([width / 2, height / 2]);
//	var path = d3.geo.path().projection(projection);
//
//	svg.selectAll("circle")
//        .data(worldMapData)
//        .enter()
//        .append("circle")
//        .attr("class","dot")
//        .attr("transform",translateCircle)
//        .attr("r",4)
//        .style("fill", "red");
//
//	function translateCircle(datum, index)
//          {
//            return "translate(" +  projection([datum[1], datum[0]]) + ")";
//          };
//
//        setInterval(function(){
//	      worldMapData.forEach(function(datum)
//          {
//			  svg
//			  	.append("circle")
//			      .attr("class", "ring")
//			      .attr("transform", translateCircle(datum))
//			      .attr("r", 1)
//			      .style("fill", "rgba("+app.color.themeRgb+")")
//			      .style("opacity", .14)
//			      .style("fill-opacity", .14)
//			    .transition()
//			      .ease("linear")
//			      .duration(2000)
//			      .style("stroke-opacity", .14)
//			      .style("stroke-width", 0.1)
//			      .style("stroke", "rgba("+app.color.themeRgb+")")
//			      .attr("r", 30)
//			      .remove();
//          })
//      }, 800);
//
//
//
//	d3.json("../static/assets/plugins/jvectormap-content/seongnam.json", function (error, data) {
//		var features = topojson.feature(data, data.objects.seongnam).features;
//
//		map.selectAll('path').data(features).enter().append('path')
//			.attr('class', function (d) { return 'municipality c' + d.properties.OBJECTID })
//			.attr('d', path)
//			.attr("opacity", 0.5)
//			.style("fill", "#c7cbce")
//			.attr("stroke-opacity", 0)
//			.attr("stroke-width", 5);
//
//		map.selectAll('text').data(features).enter().append("text")
//			.attr("transform", function (d) { return "translate(" + path.centroid(d) + ")"; })
//			.attr("dy", ".35em")
//			.attr("class", "municipality-label")
//			.text(function (d) { return d.properties.sggnm; })
//			.style("fill", "#fff")
//			.attr("opacity", 0.5);
//	});

}

function seoulMap(worldMapData) {
    d3.select(window).on("resize", sizeChange);
    function sizeChange() {
	    d3.select("g").attr("transform", "scale(" + $("#seoul-map").width()/900 + ")");
	    $("svg").height($("#seoul-map").width()*0.618);
	}

	var width = 800, height = 350;
	var svg = d3.select("#seoul-map").append("svg").attr("width", width).attr("height", height).attr("viewBox", `0 0 ${width} ${height}`);;
	var map = svg.append("g").attr("id", "map"), places = svg.append("g").attr("id", "places");
	var projection = d3.geo.mercator().center([126.9774211519, 37.560]).scale(60000).translate([width / 2, height / 2]);
	var path = d3.geo.path().projection(projection);

	svg.selectAll("circle")
        .data(worldMapData)
        .enter()
        .append("circle")
        .attr("class","dot")
        .attr("transform",translateCircle)
        .attr("r",4)
        .style("fill", "rgba("+app.color.themeRgb+")");

	function translateCircle(datum, index)
          {
            return "translate(" +  projection([datum[1], datum[0]]) + ")";
          };

        setInterval(function(){
	      worldMapData.forEach(function(datum)
          {
			  svg
			  	.append("circle")
			  	.attr({
                    "class": "ring",
                    "transform": translateCircle(datum),
                    "fill":"rgba("+app.color.themeRgb+")",
                    "stroke":"rgba("+app.color.whiteRgb+")",
                    "stroke-opacity": .5,
                    "stroke-width": 0,
                    "r":1,
                    "opacity": 0.14,
                    "fill-opacity":0.14
                })
                .transition()
                .duration(6000)
                .attr("r", 40)
                .attr("opacity", 0)
                .remove();





//			      .attr("class", "ring")
//			      .attr("transform", translateCircle(datum))
//			      .attr("r", 1)
//			      .style("fill", "rgba("+app.color.themeRgb+")")
//			      .style("opacity", .14)
//			      .style("fill-opacity", .14)
//			    .transition()
//			      .ease("linear")
//			      .duration(2000)
//			      .style("stroke-opacity", .14)
//			      .style("stroke-width", 0.1)
//			      .style("stroke", "rgba("+app.color.themeRgb+")")
//			      .attr("r", 30)
//			      .remove();
          })
      }, 800);

	d3.json("../static/assets/plugins/jvectormap-content/seoul.json", function (error, data) {
		var features = topojson.feature(data, data.objects.seoul_municipalities_geo).features;

		map.selectAll('path').data(features).enter().append('path')
			.attr('class', function (d) { return 'municipality c' + d.properties.SIG_CD })
			.attr('d', path)
			.style("fill", "rgba("+app.color.whiteRgb+")")
			.attr("opacity", .5);

		map.selectAll('text').data(features).enter().append("text")
			.attr("transform", function (d) { return "translate(" + path.centroid(d) + ")"; })
			.attr("dy", ".35em")
			.attr("class", "municipality-label")
			.text(function (d) { return d.properties.SIG_KOR_NM; })
			.style("fill", "rgba("+app.color.whiteRgb+")")
			.attr('text-anchor', 'small')
			.attr("opacity", .8);
	});



}




/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderChartNC();
	worldMap(worldMapData);
	koreaMap(worldMapData);
	seongnamMap(worldMapData);
    seoulMap(worldMapData);
    apexCPU95usageChart.render();
    apexCPU75usageChart.render();
    apexCPU60usageChart.render();
    apexDisk95usageChart.render();
    apexDisk75usageChart.render();
    apexDisk60usageChart.render();

});





