import React, {Component} from 'react'
import './App.css'
import AppLayout from '../AppLayout/AppLayout';
const urlBase = 'https://api.openweathermap.org/data/2.5/forecast?APPID=822240fd8ac6785298bfe78c207ed59c&units=metric'

export default class App extends Component{

	state = {
		weatherData: {
			"cod": "200",
			"message": 0.0036,
			"cnt": 39,
			"list": [
			  {
				"dt": 1549249200,
				"main": {
				  "temp": 1.93,
				  "temp_min": 1.93,
				  "temp_max": 2.86,
				  "pressure": 1001.76,
				  "sea_level": 1028.53,
				  "grnd_level": 1001.76,
				  "humidity": 85,
				  "temp_kf": -0.93
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				  }
				],
				"clouds": {
				  "all": 36
				},
				"wind": {
				  "speed": 5.41,
				  "deg": 198.504
				},
				"rain": {
				  "3h": 0.005
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-04 03:00:00"
			  },
			  {
				"dt": 1549260000,
				"main": {
				  "temp": 1.57,
				  "temp_min": 1.57,
				  "temp_max": 2.27,
				  "pressure": 1006.18,
				  "sea_level": 1033.03,
				  "grnd_level": 1006.18,
				  "humidity": 94,
				  "temp_kf": -0.7
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				  }
				],
				"clouds": {
				  "all": 68
				},
				"wind": {
				  "speed": 4.71,
				  "deg": 264.5
				},
				"rain": {
				  "3h": 0.035
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-04 06:00:00"
			  },
			  {
				"dt": 1549270800,
				"main": {
				  "temp": 1.66,
				  "temp_min": 1.66,
				  "temp_max": 2.12,
				  "pressure": 1009.96,
				  "sea_level": 1036.75,
				  "grnd_level": 1009.96,
				  "humidity": 100,
				  "temp_kf": -0.47
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				  }
				],
				"clouds": {
				  "all": 88
				},
				"wind": {
				  "speed": 6.26,
				  "deg": 273.5
				},
				"rain": {
				  "3h": 0.015
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-04 09:00:00"
			  },
			  {
				"dt": 1549281600,
				"main": {
				  "temp": 2.2,
				  "temp_min": 2.2,
				  "temp_max": 2.44,
				  "pressure": 1012.22,
				  "sea_level": 1039.06,
				  "grnd_level": 1012.22,
				  "humidity": 100,
				  "temp_kf": -0.23
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				  }
				],
				"clouds": {
				  "all": 64
				},
				"wind": {
				  "speed": 6.16,
				  "deg": 286.501
				},
				"rain": {
				  "3h": 0.005
				},
				"snow": {
				  "3h": 0.0025
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-04 12:00:00"
			  },
			  {
				"dt": 1549292400,
				"main": {
				  "temp": 1.33,
				  "temp_min": 1.33,
				  "temp_max": 1.33,
				  "pressure": 1014.45,
				  "sea_level": 1041.42,
				  "grnd_level": 1014.45,
				  "humidity": 94,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 36
				},
				"wind": {
				  "speed": 4.21,
				  "deg": 294.507
				},
				"rain": {},
				"snow": {
				  "3h": 0.0075
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-04 15:00:00"
			  },
			  {
				"dt": 1549303200,
				"main": {
				  "temp": -1.12,
				  "temp_min": -1.12,
				  "temp_max": -1.12,
				  "pressure": 1016.34,
				  "sea_level": 1043.56,
				  "grnd_level": 1016.34,
				  "humidity": 92,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 36
				},
				"wind": {
				  "speed": 2.81,
				  "deg": 296.503
				},
				"rain": {},
				"snow": {
				  "3h": 0.005
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-04 18:00:00"
			  },
			  {
				"dt": 1549314000,
				"main": {
				  "temp": -2.5,
				  "temp_min": -2.5,
				  "temp_max": -2.5,
				  "pressure": 1017.22,
				  "sea_level": 1044.53,
				  "grnd_level": 1017.22,
				  "humidity": 93,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 44
				},
				"wind": {
				  "speed": 1.66,
				  "deg": 290.011
				},
				"rain": {},
				"snow": {
				  "3h": 0.0025
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-04 21:00:00"
			  },
			  {
				"dt": 1549324800,
				"main": {
				  "temp": -2.61,
				  "temp_min": -2.61,
				  "temp_max": -2.61,
				  "pressure": 1017.23,
				  "sea_level": 1044.65,
				  "grnd_level": 1017.23,
				  "humidity": 90,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 76
				},
				"wind": {
				  "speed": 1.22,
				  "deg": 16.5062
				},
				"rain": {},
				"snow": {
				  "3h": 0.015
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-05 00:00:00"
			  },
			  {
				"dt": 1549335600,
				"main": {
				  "temp": -1.87,
				  "temp_min": -1.87,
				  "temp_max": -1.87,
				  "pressure": 1016.71,
				  "sea_level": 1044.11,
				  "grnd_level": 1016.71,
				  "humidity": 95,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13n"
				  }
				],
				"clouds": {
				  "all": 76
				},
				"wind": {
				  "speed": 1.41,
				  "deg": 90.0017
				},
				"rain": {},
				"snow": {
				  "3h": 0.065
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-05 03:00:00"
			  },
			  {
				"dt": 1549346400,
				"main": {
				  "temp": -1.43,
				  "temp_min": -1.43,
				  "temp_max": -1.43,
				  "pressure": 1016.44,
				  "sea_level": 1043.82,
				  "grnd_level": 1016.44,
				  "humidity": 94,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13d"
				  }
				],
				"clouds": {
				  "all": 80
				},
				"wind": {
				  "speed": 2.16,
				  "deg": 106.5
				},
				"rain": {},
				"snow": {
				  "3h": 0.0875
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-05 06:00:00"
			  },
			  {
				"dt": 1549357200,
				"main": {
				  "temp": -0.23,
				  "temp_min": -0.23,
				  "temp_max": -0.23,
				  "pressure": 1015.65,
				  "sea_level": 1042.88,
				  "grnd_level": 1015.65,
				  "humidity": 100,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13d"
				  }
				],
				"clouds": {
				  "all": 76
				},
				"wind": {
				  "speed": 4.05,
				  "deg": 129.501
				},
				"rain": {},
				"snow": {
				  "3h": 0.08
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-05 09:00:00"
			  },
			  {
				"dt": 1549368000,
				"main": {
				  "temp": 0.98,
				  "temp_min": 0.98,
				  "temp_max": 0.98,
				  "pressure": 1014.12,
				  "sea_level": 1041.02,
				  "grnd_level": 1014.12,
				  "humidity": 99,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				  }
				],
				"clouds": {
				  "all": 88
				},
				"wind": {
				  "speed": 4.02,
				  "deg": 140.502
				},
				"rain": {
				  "3h": 0.015
				},
				"snow": {
				  "3h": 0.005
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-05 12:00:00"
			  },
			  {
				"dt": 1549378800,
				"main": {
				  "temp": 1,
				  "temp_min": 1,
				  "temp_max": 1,
				  "pressure": 1012.94,
				  "sea_level": 1039.86,
				  "grnd_level": 1012.94,
				  "humidity": 99,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				  }
				],
				"clouds": {
				  "all": 92
				},
				"wind": {
				  "speed": 2.55,
				  "deg": 156.003
				},
				"rain": {
				  "3h": 0.095
				},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-05 15:00:00"
			  },
			  {
				"dt": 1549389600,
				"main": {
				  "temp": 0.48,
				  "temp_min": 0.48,
				  "temp_max": 0.48,
				  "pressure": 1012.45,
				  "sea_level": 1039.59,
				  "grnd_level": 1012.45,
				  "humidity": 97,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				  }
				],
				"clouds": {
				  "all": 92
				},
				"wind": {
				  "speed": 1.77,
				  "deg": 211.502
				},
				"rain": {
				  "3h": 0.37
				},
				"snow": {
				  "3h": 0.1375
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-05 18:00:00"
			  },
			  {
				"dt": 1549400400,
				"main": {
				  "temp": 0.36,
				  "temp_min": 0.36,
				  "temp_max": 0.36,
				  "pressure": 1012.36,
				  "sea_level": 1039.43,
				  "grnd_level": 1012.36,
				  "humidity": 98,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				  }
				],
				"clouds": {
				  "all": 92
				},
				"wind": {
				  "speed": 2.95,
				  "deg": 268.002
				},
				"rain": {
				  "3h": 0.01
				},
				"snow": {
				  "3h": 0.035
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-05 21:00:00"
			  },
			  {
				"dt": 1549411200,
				"main": {
				  "temp": -0.55,
				  "temp_min": -0.55,
				  "temp_max": -0.55,
				  "pressure": 1012.76,
				  "sea_level": 1040.02,
				  "grnd_level": 1012.76,
				  "humidity": 94,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 8
				},
				"wind": {
				  "speed": 3.27,
				  "deg": 271
				},
				"rain": {},
				"snow": {
				  "3h": 0.015
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-06 00:00:00"
			  },
			  {
				"dt": 1549422000,
				"main": {
				  "temp": -3.01,
				  "temp_min": -3.01,
				  "temp_max": -3.01,
				  "pressure": 1013.35,
				  "sea_level": 1040.71,
				  "grnd_level": 1013.35,
				  "humidity": 93,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.28,
				  "deg": 285.001
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-06 03:00:00"
			  },
			  {
				"dt": 1549432800,
				"main": {
				  "temp": -3.6,
				  "temp_min": -3.6,
				  "temp_max": -3.6,
				  "pressure": 1014.72,
				  "sea_level": 1042.05,
				  "grnd_level": 1014.72,
				  "humidity": 94,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13d"
				  }
				],
				"clouds": {
				  "all": 76
				},
				"wind": {
				  "speed": 4.17,
				  "deg": 283.504
				},
				"rain": {},
				"snow": {
				  "3h": 0.035
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-06 06:00:00"
			  },
			  {
				"dt": 1549443600,
				"main": {
				  "temp": -1.63,
				  "temp_min": -1.63,
				  "temp_max": -1.63,
				  "pressure": 1015.86,
				  "sea_level": 1043.07,
				  "grnd_level": 1015.86,
				  "humidity": 99,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13d"
				  }
				],
				"clouds": {
				  "all": 36
				},
				"wind": {
				  "speed": 4.56,
				  "deg": 288.005
				},
				"rain": {},
				"snow": {
				  "3h": 0.08
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-06 09:00:00"
			  },
			  {
				"dt": 1549454400,
				"main": {
				  "temp": 0.14,
				  "temp_min": 0.14,
				  "temp_max": 0.14,
				  "pressure": 1015.5,
				  "sea_level": 1042.57,
				  "grnd_level": 1015.5,
				  "humidity": 100,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13d"
				  }
				],
				"clouds": {
				  "all": 36
				},
				"wind": {
				  "speed": 3.86,
				  "deg": 283.5
				},
				"rain": {},
				"snow": {
				  "3h": 0.0575
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-06 12:00:00"
			  },
			  {
				"dt": 1549465200,
				"main": {
				  "temp": -0.25,
				  "temp_min": -0.25,
				  "temp_max": -0.25,
				  "pressure": 1015.36,
				  "sea_level": 1042.49,
				  "grnd_level": 1015.36,
				  "humidity": 92,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 44
				},
				"wind": {
				  "speed": 2.18,
				  "deg": 282.506
				},
				"rain": {},
				"snow": {
				  "3h": 0.015
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-06 15:00:00"
			  },
			  {
				"dt": 1549476000,
				"main": {
				  "temp": -1.43,
				  "temp_min": -1.43,
				  "temp_max": -1.43,
				  "pressure": 1015.11,
				  "sea_level": 1042.51,
				  "grnd_level": 1015.11,
				  "humidity": 91,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 600,
					"main": "Snow",
					"description": "light snow",
					"icon": "13n"
				  }
				],
				"clouds": {
				  "all": 80
				},
				"wind": {
				  "speed": 1.39,
				  "deg": 255.501
				},
				"rain": {},
				"snow": {
				  "3h": 0.035
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-06 18:00:00"
			  },
			  {
				"dt": 1549486800,
				"main": {
				  "temp": -1.76,
				  "temp_min": -1.76,
				  "temp_max": -1.76,
				  "pressure": 1014.62,
				  "sea_level": 1042.13,
				  "grnd_level": 1014.62,
				  "humidity": 94,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 44
				},
				"wind": {
				  "speed": 1.91,
				  "deg": 176.5
				},
				"rain": {},
				"snow": {
				  "3h": 0.0075
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-06 21:00:00"
			  },
			  {
				"dt": 1549497600,
				"main": {
				  "temp": -4.33,
				  "temp_min": -4.33,
				  "temp_max": -4.33,
				  "pressure": 1013.28,
				  "sea_level": 1040.81,
				  "grnd_level": 1013.28,
				  "humidity": 88,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 2.52,
				  "deg": 150.506
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-07 00:00:00"
			  },
			  {
				"dt": 1549508400,
				"main": {
				  "temp": -5.64,
				  "temp_min": -5.64,
				  "temp_max": -5.64,
				  "pressure": 1011.39,
				  "sea_level": 1038.95,
				  "grnd_level": 1011.39,
				  "humidity": 89,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.32,
				  "deg": 155.003
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-07 03:00:00"
			  },
			  {
				"dt": 1549519200,
				"main": {
				  "temp": -6.3,
				  "temp_min": -6.3,
				  "temp_max": -6.3,
				  "pressure": 1009.92,
				  "sea_level": 1037.47,
				  "grnd_level": 1009.92,
				  "humidity": 89,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.71,
				  "deg": 159.502
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-07 06:00:00"
			  },
			  {
				"dt": 1549530000,
				"main": {
				  "temp": -2.92,
				  "temp_min": -2.92,
				  "temp_max": -2.92,
				  "pressure": 1008.83,
				  "sea_level": 1036.03,
				  "grnd_level": 1008.83,
				  "humidity": 98,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.27,
				  "deg": 162
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-07 09:00:00"
			  },
			  {
				"dt": 1549540800,
				"main": {
				  "temp": 1.21,
				  "temp_min": 1.21,
				  "temp_max": 1.21,
				  "pressure": 1007.26,
				  "sea_level": 1033.99,
				  "grnd_level": 1007.26,
				  "humidity": 100,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.42,
				  "deg": 162.5
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-07 12:00:00"
			  },
			  {
				"dt": 1549551600,
				"main": {
				  "temp": 0.24,
				  "temp_min": 0.24,
				  "temp_max": 0.24,
				  "pressure": 1006.11,
				  "sea_level": 1032.91,
				  "grnd_level": 1006.11,
				  "humidity": 91,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 3.86,
				  "deg": 163.004
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-07 15:00:00"
			  },
			  {
				"dt": 1549562400,
				"main": {
				  "temp": -3.2,
				  "temp_min": -3.2,
				  "temp_max": -3.2,
				  "pressure": 1005.22,
				  "sea_level": 1032.32,
				  "grnd_level": 1005.22,
				  "humidity": 90,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 4.35,
				  "deg": 166.001
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-07 18:00:00"
			  },
			  {
				"dt": 1549573200,
				"main": {
				  "temp": -4.17,
				  "temp_min": -4.17,
				  "temp_max": -4.17,
				  "pressure": 1004.22,
				  "sea_level": 1031.55,
				  "grnd_level": 1004.22,
				  "humidity": 89,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 3.86,
				  "deg": 168.503
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-07 21:00:00"
			  },
			  {
				"dt": 1549584000,
				"main": {
				  "temp": -5.02,
				  "temp_min": -5.02,
				  "temp_max": -5.02,
				  "pressure": 1003.79,
				  "sea_level": 1031.24,
				  "grnd_level": 1003.79,
				  "humidity": 84,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 1.85,
				  "deg": 165
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-08 00:00:00"
			  },
			  {
				"dt": 1549594800,
				"main": {
				  "temp": -5.88,
				  "temp_min": -5.88,
				  "temp_max": -5.88,
				  "pressure": 1003.47,
				  "sea_level": 1030.91,
				  "grnd_level": 1003.47,
				  "humidity": 81,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 0
				},
				"wind": {
				  "speed": 1.52,
				  "deg": 178.501
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-08 03:00:00"
			  },
			  {
				"dt": 1549605600,
				"main": {
				  "temp": -6.64,
				  "temp_min": -6.64,
				  "temp_max": -6.64,
				  "pressure": 1003.48,
				  "sea_level": 1030.82,
				  "grnd_level": 1003.48,
				  "humidity": 86,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "02d"
				  }
				],
				"clouds": {
				  "all": 8
				},
				"wind": {
				  "speed": 1.52,
				  "deg": 193.501
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-08 06:00:00"
			  },
			  {
				"dt": 1549616400,
				"main": {
				  "temp": -1.59,
				  "temp_min": -1.59,
				  "temp_max": -1.59,
				  "pressure": 1003.19,
				  "sea_level": 1030.2,
				  "grnd_level": 1003.19,
				  "humidity": 100,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02d"
				  }
				],
				"clouds": {
				  "all": 20
				},
				"wind": {
				  "speed": 2.06,
				  "deg": 197.002
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-08 09:00:00"
			  },
			  {
				"dt": 1549627200,
				"main": {
				  "temp": 2.09,
				  "temp_min": 2.09,
				  "temp_max": 2.09,
				  "pressure": 1002.06,
				  "sea_level": 1028.7,
				  "grnd_level": 1002.06,
				  "humidity": 100,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				  }
				],
				"clouds": {
				  "all": 24
				},
				"wind": {
				  "speed": 1.98,
				  "deg": 184.502
				},
				"rain": {},
				"snow": {
				  "3h": 0.0024999999999999
				},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-08 12:00:00"
			  },
			  {
				"dt": 1549638000,
				"main": {
				  "temp": 1.03,
				  "temp_min": 1.03,
				  "temp_max": 1.03,
				  "pressure": 1001.07,
				  "sea_level": 1027.73,
				  "grnd_level": 1001.07,
				  "humidity": 97,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				  }
				],
				"clouds": {
				  "all": 68
				},
				"wind": {
				  "speed": 1.66,
				  "deg": 149
				},
				"rain": {},
				"snow": {},
				"sys": {
				  "pod": "d"
				},
				"dt_txt": "2019-02-08 15:00:00"
			  },
			  {
				"dt": 1549648800,
				"main": {
				  "temp": -2.17,
				  "temp_min": -2.17,
				  "temp_max": -2.17,
				  "pressure": 1000.58,
				  "sea_level": 1027.36,
				  "grnd_level": 1000.58,
				  "humidity": 95,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 48
				},
				"wind": {
				  "speed": 2.51,
				  "deg": 146.501
				},
				"rain": {},
				"snow": {
				  "3h": 0.005
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-08 18:00:00"
			  },
			  {
				"dt": 1549659600,
				"main": {
				  "temp": -3.5,
				  "temp_min": -3.5,
				  "temp_max": -3.5,
				  "pressure": 999.61,
				  "sea_level": 1026.48,
				  "grnd_level": 999.61,
				  "humidity": 95,
				  "temp_kf": 0
				},
				"weather": [
				  {
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				  }
				],
				"clouds": {
				  "all": 64
				},
				"wind": {
				  "speed": 2.42,
				  "deg": 145.002
				},
				"rain": {},
				"snow": {
				  "3h": 0.005
				},
				"sys": {
				  "pod": "n"
				},
				"dt_txt": "2019-02-08 21:00:00"
			  }
			],
			"city": {
			  "id": 710554,
			  "name": "Chervonograd",
			  "coord": {
				"lat": 50.391,
				"lon": 24.2351
			  },
			  "country": "UA",
			  "population": 83000
			}
		  },
	}

	fetchWeatherData = (url) => {

		fetch(url)
			.then( (response) => response.json())
			.then( (weatherData) => {
				this.setState({weatherData})
			})
	}

	getLocation = () => {

		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition( (position) => {

				const {coords: {latitude,longitude}} = position

				this.fetchWeatherData(`${urlBase}&lat=${latitude}&lon=${longitude}`)

			})

		} 

	}

	// componentDidMount() {

	// 	this.getLocation()

	// }

	render() {

		const {weatherData} = this.state

		return(
			<div>
				<AppLayout weatherData = {weatherData} />
			</div>
		)

	}

}