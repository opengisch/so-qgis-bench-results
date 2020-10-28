/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 36180.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 12.0], [21.7, 12.0], [21.8, 12.0], [21.9, 12.0], [22.0, 12.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 13.0], [24.0, 13.0], [24.1, 13.0], [24.2, 13.0], [24.3, 13.0], [24.4, 13.0], [24.5, 13.0], [24.6, 13.0], [24.7, 13.0], [24.8, 13.0], [24.9, 13.0], [25.0, 13.0], [25.1, 13.0], [25.2, 13.0], [25.3, 13.0], [25.4, 13.0], [25.5, 13.0], [25.6, 13.0], [25.7, 13.0], [25.8, 13.0], [25.9, 13.0], [26.0, 13.0], [26.1, 13.0], [26.2, 13.0], [26.3, 13.0], [26.4, 13.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 14.0], [28.5, 14.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 14.0], [29.0, 14.0], [29.1, 14.0], [29.2, 14.0], [29.3, 14.0], [29.4, 14.0], [29.5, 14.0], [29.6, 14.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 17.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 17.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 18.0], [35.9, 18.0], [36.0, 18.0], [36.1, 18.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 18.0], [36.6, 18.0], [36.7, 18.0], [36.8, 18.0], [36.9, 19.0], [37.0, 19.0], [37.1, 19.0], [37.2, 19.0], [37.3, 19.0], [37.4, 19.0], [37.5, 19.0], [37.6, 19.0], [37.7, 19.0], [37.8, 19.0], [37.9, 19.0], [38.0, 19.0], [38.1, 19.0], [38.2, 19.0], [38.3, 19.0], [38.4, 20.0], [38.5, 20.0], [38.6, 20.0], [38.7, 20.0], [38.8, 20.0], [38.9, 20.0], [39.0, 20.0], [39.1, 20.0], [39.2, 20.0], [39.3, 20.0], [39.4, 21.0], [39.5, 21.0], [39.6, 21.0], [39.7, 21.0], [39.8, 21.0], [39.9, 21.0], [40.0, 21.0], [40.1, 21.0], [40.2, 21.0], [40.3, 22.0], [40.4, 22.0], [40.5, 22.0], [40.6, 22.0], [40.7, 22.0], [40.8, 22.0], [40.9, 22.0], [41.0, 22.0], [41.1, 22.0], [41.2, 22.0], [41.3, 23.0], [41.4, 23.0], [41.5, 23.0], [41.6, 23.0], [41.7, 23.0], [41.8, 23.0], [41.9, 23.0], [42.0, 24.0], [42.1, 24.0], [42.2, 24.0], [42.3, 24.0], [42.4, 24.0], [42.5, 24.0], [42.6, 24.0], [42.7, 25.0], [42.8, 25.0], [42.9, 25.0], [43.0, 25.0], [43.1, 25.0], [43.2, 25.0], [43.3, 25.0], [43.4, 26.0], [43.5, 26.0], [43.6, 26.0], [43.7, 26.0], [43.8, 26.0], [43.9, 27.0], [44.0, 27.0], [44.1, 27.0], [44.2, 28.0], [44.3, 29.0], [44.4, 29.0], [44.5, 29.0], [44.6, 30.0], [44.7, 31.0], [44.8, 32.0], [44.9, 32.0], [45.0, 35.0], [45.1, 39.0], [45.2, 40.0], [45.3, 43.0], [45.4, 54.0], [45.5, 98.0], [45.6, 103.0], [45.7, 107.0], [45.8, 109.0], [45.9, 112.0], [46.0, 113.0], [46.1, 114.0], [46.2, 114.0], [46.3, 115.0], [46.4, 115.0], [46.5, 116.0], [46.6, 116.0], [46.7, 117.0], [46.8, 117.0], [46.9, 118.0], [47.0, 119.0], [47.1, 119.0], [47.2, 119.0], [47.3, 120.0], [47.4, 121.0], [47.5, 121.0], [47.6, 121.0], [47.7, 122.0], [47.8, 123.0], [47.9, 123.0], [48.0, 123.0], [48.1, 124.0], [48.2, 125.0], [48.3, 125.0], [48.4, 126.0], [48.5, 126.0], [48.6, 126.0], [48.7, 127.0], [48.8, 128.0], [48.9, 129.0], [49.0, 129.0], [49.1, 130.0], [49.2, 130.0], [49.3, 130.0], [49.4, 131.0], [49.5, 131.0], [49.6, 132.0], [49.7, 132.0], [49.8, 133.0], [49.9, 133.0], [50.0, 134.0], [50.1, 134.0], [50.2, 134.0], [50.3, 135.0], [50.4, 136.0], [50.5, 136.0], [50.6, 137.0], [50.7, 137.0], [50.8, 137.0], [50.9, 137.0], [51.0, 138.0], [51.1, 138.0], [51.2, 138.0], [51.3, 139.0], [51.4, 139.0], [51.5, 139.0], [51.6, 140.0], [51.7, 140.0], [51.8, 141.0], [51.9, 141.0], [52.0, 141.0], [52.1, 142.0], [52.2, 142.0], [52.3, 142.0], [52.4, 143.0], [52.5, 143.0], [52.6, 143.0], [52.7, 144.0], [52.8, 144.0], [52.9, 145.0], [53.0, 145.0], [53.1, 146.0], [53.2, 146.0], [53.3, 146.0], [53.4, 147.0], [53.5, 147.0], [53.6, 148.0], [53.7, 148.0], [53.8, 149.0], [53.9, 149.0], [54.0, 149.0], [54.1, 150.0], [54.2, 150.0], [54.3, 151.0], [54.4, 152.0], [54.5, 152.0], [54.6, 152.0], [54.7, 153.0], [54.8, 153.0], [54.9, 154.0], [55.0, 155.0], [55.1, 155.0], [55.2, 156.0], [55.3, 157.0], [55.4, 159.0], [55.5, 160.0], [55.6, 161.0], [55.7, 162.0], [55.8, 163.0], [55.9, 164.0], [56.0, 165.0], [56.1, 166.0], [56.2, 167.0], [56.3, 168.0], [56.4, 168.0], [56.5, 170.0], [56.6, 171.0], [56.7, 172.0], [56.8, 173.0], [56.9, 173.0], [57.0, 174.0], [57.1, 176.0], [57.2, 176.0], [57.3, 177.0], [57.4, 177.0], [57.5, 180.0], [57.6, 180.0], [57.7, 181.0], [57.8, 183.0], [57.9, 183.0], [58.0, 184.0], [58.1, 186.0], [58.2, 186.0], [58.3, 187.0], [58.4, 188.0], [58.5, 189.0], [58.6, 190.0], [58.7, 191.0], [58.8, 193.0], [58.9, 194.0], [59.0, 196.0], [59.1, 198.0], [59.2, 200.0], [59.3, 201.0], [59.4, 202.0], [59.5, 203.0], [59.6, 205.0], [59.7, 206.0], [59.8, 207.0], [59.9, 208.0], [60.0, 209.0], [60.1, 210.0], [60.2, 212.0], [60.3, 213.0], [60.4, 215.0], [60.5, 215.0], [60.6, 216.0], [60.7, 217.0], [60.8, 218.0], [60.9, 219.0], [61.0, 220.0], [61.1, 222.0], [61.2, 223.0], [61.3, 223.0], [61.4, 224.0], [61.5, 225.0], [61.6, 225.0], [61.7, 226.0], [61.8, 226.0], [61.9, 227.0], [62.0, 229.0], [62.1, 230.0], [62.2, 230.0], [62.3, 231.0], [62.4, 232.0], [62.5, 233.0], [62.6, 233.0], [62.7, 234.0], [62.8, 234.0], [62.9, 235.0], [63.0, 236.0], [63.1, 237.0], [63.2, 237.0], [63.3, 238.0], [63.4, 239.0], [63.5, 240.0], [63.6, 241.0], [63.7, 241.0], [63.8, 241.0], [63.9, 242.0], [64.0, 243.0], [64.1, 244.0], [64.2, 244.0], [64.3, 245.0], [64.4, 245.0], [64.5, 247.0], [64.6, 247.0], [64.7, 248.0], [64.8, 248.0], [64.9, 249.0], [65.0, 249.0], [65.1, 250.0], [65.2, 250.0], [65.3, 251.0], [65.4, 252.0], [65.5, 253.0], [65.6, 254.0], [65.7, 254.0], [65.8, 255.0], [65.9, 255.0], [66.0, 256.0], [66.1, 256.0], [66.2, 257.0], [66.3, 257.0], [66.4, 258.0], [66.5, 258.0], [66.6, 259.0], [66.7, 259.0], [66.8, 260.0], [66.9, 261.0], [67.0, 261.0], [67.1, 262.0], [67.2, 262.0], [67.3, 263.0], [67.4, 264.0], [67.5, 265.0], [67.6, 266.0], [67.7, 266.0], [67.8, 267.0], [67.9, 267.0], [68.0, 267.0], [68.1, 268.0], [68.2, 268.0], [68.3, 269.0], [68.4, 270.0], [68.5, 270.0], [68.6, 271.0], [68.7, 272.0], [68.8, 272.0], [68.9, 273.0], [69.0, 273.0], [69.1, 274.0], [69.2, 274.0], [69.3, 275.0], [69.4, 275.0], [69.5, 275.0], [69.6, 275.0], [69.7, 276.0], [69.8, 277.0], [69.9, 278.0], [70.0, 278.0], [70.1, 278.0], [70.2, 278.0], [70.3, 279.0], [70.4, 280.0], [70.5, 280.0], [70.6, 282.0], [70.7, 283.0], [70.8, 284.0], [70.9, 285.0], [71.0, 285.0], [71.1, 286.0], [71.2, 287.0], [71.3, 288.0], [71.4, 289.0], [71.5, 291.0], [71.6, 291.0], [71.7, 293.0], [71.8, 293.0], [71.9, 294.0], [72.0, 294.0], [72.1, 295.0], [72.2, 296.0], [72.3, 297.0], [72.4, 298.0], [72.5, 298.0], [72.6, 299.0], [72.7, 300.0], [72.8, 301.0], [72.9, 301.0], [73.0, 303.0], [73.1, 304.0], [73.2, 304.0], [73.3, 305.0], [73.4, 306.0], [73.5, 307.0], [73.6, 307.0], [73.7, 309.0], [73.8, 310.0], [73.9, 311.0], [74.0, 313.0], [74.1, 314.0], [74.2, 315.0], [74.3, 316.0], [74.4, 318.0], [74.5, 319.0], [74.6, 320.0], [74.7, 321.0], [74.8, 322.0], [74.9, 324.0], [75.0, 324.0], [75.1, 325.0], [75.2, 326.0], [75.3, 327.0], [75.4, 329.0], [75.5, 331.0], [75.6, 332.0], [75.7, 334.0], [75.8, 336.0], [75.9, 338.0], [76.0, 340.0], [76.1, 341.0], [76.2, 342.0], [76.3, 343.0], [76.4, 345.0], [76.5, 345.0], [76.6, 349.0], [76.7, 350.0], [76.8, 352.0], [76.9, 354.0], [77.0, 355.0], [77.1, 357.0], [77.2, 358.0], [77.3, 360.0], [77.4, 361.0], [77.5, 363.0], [77.6, 365.0], [77.7, 366.0], [77.8, 367.0], [77.9, 369.0], [78.0, 370.0], [78.1, 371.0], [78.2, 371.0], [78.3, 373.0], [78.4, 374.0], [78.5, 376.0], [78.6, 376.0], [78.7, 377.0], [78.8, 379.0], [78.9, 380.0], [79.0, 381.0], [79.1, 383.0], [79.2, 385.0], [79.3, 387.0], [79.4, 387.0], [79.5, 388.0], [79.6, 389.0], [79.7, 391.0], [79.8, 395.0], [79.9, 397.0], [80.0, 399.0], [80.1, 401.0], [80.2, 403.0], [80.3, 404.0], [80.4, 405.0], [80.5, 407.0], [80.6, 409.0], [80.7, 412.0], [80.8, 413.0], [80.9, 416.0], [81.0, 418.0], [81.1, 420.0], [81.2, 422.0], [81.3, 424.0], [81.4, 425.0], [81.5, 427.0], [81.6, 429.0], [81.7, 432.0], [81.8, 433.0], [81.9, 434.0], [82.0, 436.0], [82.1, 439.0], [82.2, 441.0], [82.3, 444.0], [82.4, 445.0], [82.5, 446.0], [82.6, 449.0], [82.7, 451.0], [82.8, 453.0], [82.9, 455.0], [83.0, 457.0], [83.1, 458.0], [83.2, 460.0], [83.3, 461.0], [83.4, 462.0], [83.5, 464.0], [83.6, 465.0], [83.7, 467.0], [83.8, 468.0], [83.9, 469.0], [84.0, 471.0], [84.1, 472.0], [84.2, 474.0], [84.3, 475.0], [84.4, 477.0], [84.5, 478.0], [84.6, 479.0], [84.7, 480.0], [84.8, 483.0], [84.9, 485.0], [85.0, 488.0], [85.1, 490.0], [85.2, 494.0], [85.3, 495.0], [85.4, 497.0], [85.5, 498.0], [85.6, 500.0], [85.7, 502.0], [85.8, 504.0], [85.9, 507.0], [86.0, 511.0], [86.1, 512.0], [86.2, 513.0], [86.3, 514.0], [86.4, 516.0], [86.5, 517.0], [86.6, 521.0], [86.7, 521.0], [86.8, 524.0], [86.9, 526.0], [87.0, 528.0], [87.1, 529.0], [87.2, 533.0], [87.3, 535.0], [87.4, 538.0], [87.5, 541.0], [87.6, 545.0], [87.7, 547.0], [87.8, 549.0], [87.9, 552.0], [88.0, 554.0], [88.1, 556.0], [88.2, 559.0], [88.3, 561.0], [88.4, 563.0], [88.5, 566.0], [88.6, 571.0], [88.7, 575.0], [88.8, 577.0], [88.9, 582.0], [89.0, 588.0], [89.1, 590.0], [89.2, 597.0], [89.3, 599.0], [89.4, 604.0], [89.5, 609.0], [89.6, 614.0], [89.7, 617.0], [89.8, 618.0], [89.9, 622.0], [90.0, 623.0], [90.1, 628.0], [90.2, 631.0], [90.3, 634.0], [90.4, 635.0], [90.5, 639.0], [90.6, 642.0], [90.7, 645.0], [90.8, 648.0], [90.9, 650.0], [91.0, 652.0], [91.1, 655.0], [91.2, 661.0], [91.3, 665.0], [91.4, 668.0], [91.5, 674.0], [91.6, 677.0], [91.7, 680.0], [91.8, 683.0], [91.9, 689.0], [92.0, 695.0], [92.1, 702.0], [92.2, 704.0], [92.3, 710.0], [92.4, 718.0], [92.5, 723.0], [92.6, 726.0], [92.7, 728.0], [92.8, 735.0], [92.9, 738.0], [93.0, 743.0], [93.1, 747.0], [93.2, 751.0], [93.3, 758.0], [93.4, 767.0], [93.5, 775.0], [93.6, 778.0], [93.7, 781.0], [93.8, 785.0], [93.9, 790.0], [94.0, 796.0], [94.1, 801.0], [94.2, 807.0], [94.3, 814.0], [94.4, 819.0], [94.5, 831.0], [94.6, 846.0], [94.7, 857.0], [94.8, 869.0], [94.9, 878.0], [95.0, 892.0], [95.1, 900.0], [95.2, 910.0], [95.3, 923.0], [95.4, 929.0], [95.5, 938.0], [95.6, 945.0], [95.7, 950.0], [95.8, 954.0], [95.9, 964.0], [96.0, 976.0], [96.1, 990.0], [96.2, 996.0], [96.3, 1006.0], [96.4, 1012.0], [96.5, 1025.0], [96.6, 1036.0], [96.7, 1045.0], [96.8, 1059.0], [96.9, 1069.0], [97.0, 1083.0], [97.1, 1089.0], [97.2, 1104.0], [97.3, 1111.0], [97.4, 1127.0], [97.5, 1137.0], [97.6, 1146.0], [97.7, 1150.0], [97.8, 1174.0], [97.9, 1186.0], [98.0, 1212.0], [98.1, 1233.0], [98.2, 1270.0], [98.3, 1289.0], [98.4, 1319.0], [98.5, 1415.0], [98.6, 1468.0], [98.7, 1604.0], [98.8, 1668.0], [98.9, 1720.0], [99.0, 1770.0], [99.1, 1795.0], [99.2, 1891.0], [99.3, 2021.0], [99.4, 2133.0], [99.5, 2399.0], [99.6, 4161.0], [99.7, 5675.0], [99.8, 11281.0], [99.9, 22036.0], [100.0, 36180.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2398.0, "series": [{"data": [[0.0, 2398.0], [8800.0, 1.0], [600.0, 146.0], [10000.0, 1.0], [700.0, 104.0], [11200.0, 1.0], [11000.0, 2.0], [800.0, 54.0], [900.0, 62.0], [14400.0, 1.0], [16100.0, 1.0], [1000.0, 48.0], [1100.0, 41.0], [1200.0, 22.0], [20000.0, 1.0], [1300.0, 6.0], [21000.0, 1.0], [1400.0, 10.0], [22000.0, 1.0], [1500.0, 1.0], [25000.0, 1.0], [100.0, 717.0], [1600.0, 11.0], [26000.0, 1.0], [1700.0, 11.0], [28500.0, 1.0], [1800.0, 5.0], [1900.0, 5.0], [2000.0, 4.0], [2100.0, 3.0], [2300.0, 2.0], [36100.0, 1.0], [2200.0, 2.0], [35000.0, 1.0], [3000.0, 1.0], [200.0, 708.0], [4000.0, 1.0], [4100.0, 4.0], [4400.0, 2.0], [4600.0, 1.0], [300.0, 389.0], [5300.0, 1.0], [5600.0, 1.0], [400.0, 291.0], [500.0, 196.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 36100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 70.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4507.0, "series": [{"data": [[0.0, 4507.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 685.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 70.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.919928825622778, "minX": 1.60386588E12, "maxY": 10.0, "series": [{"data": [[1.603866E12, 10.0], [1.60386606E12, 9.919928825622778], [1.60386588E12, 10.0], [1.60386594E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386606E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 282.3830192271076, "minX": 1.0, "maxY": 26051.0, "series": [{"data": [[8.0, 1080.0], [4.0, 25043.0], [2.0, 26051.0], [1.0, 1125.0], [9.0, 986.0], [10.0, 282.3830192271076], [5.0, 1136.0], [6.0, 1007.0], [3.0, 1172.0], [7.0, 955.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991448118586089, 293.02793614595134]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3428.7166666666667, "minX": 1.60386588E12, "maxY": 1914539.7333333334, "series": [{"data": [[1.603866E12, 1914539.7333333334], [1.60386606E12, 575114.7333333333], [1.60386588E12, 205478.81666666668], [1.60386594E12, 1876679.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.603866E12, 20182.0], [1.60386606E12, 4932.45], [1.60386588E12, 3428.7166666666667], [1.60386594E12, 16684.683333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386606E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 255.46929267259623, "minX": 1.60386588E12, "maxY": 380.3238434163702, "series": [{"data": [[1.603866E12, 255.46929267259623], [1.60386606E12, 380.3238434163702], [1.60386588E12, 323.3530927835053], [1.60386594E12, 307.3024090210148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386606E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 255.28420160948784, "minX": 1.60386588E12, "maxY": 380.1245551601422, "series": [{"data": [[1.603866E12, 255.28420160948784], [1.60386606E12, 380.1245551601422], [1.60386588E12, 323.2061855670104], [1.60386594E12, 307.0220399794975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386606E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.007175807278318817, "minX": 1.60386588E12, "maxY": 0.21649484536082508, "series": [{"data": [[1.603866E12, 0.008047437526471834], [1.60386606E12, 0.010676156583629895], [1.60386588E12, 0.21649484536082508], [1.60386594E12, 0.007175807278318817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386606E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.60386588E12, "maxY": 36180.0, "series": [{"data": [[1.603866E12, 35048.0], [1.60386606E12, 26051.0], [1.60386588E12, 5675.0], [1.60386594E12, 36180.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.603866E12, 8.0], [1.60386606E12, 8.0], [1.60386588E12, 8.0], [1.60386594E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.603866E12, 8.0], [1.60386606E12, 8.0], [1.60386588E12, 8.0], [1.60386594E12, 8.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.603866E12, 8.0], [1.60386606E12, 8.0], [1.60386588E12, 8.0], [1.60386594E12, 8.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.603866E12, 7.0], [1.60386606E12, 7.0], [1.60386588E12, 7.0], [1.60386594E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.603866E12, 130.0], [1.60386606E12, 83.0], [1.60386588E12, 33.5], [1.60386594E12, 139.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386606E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 3.0, "maxY": 4140.0, "series": [{"data": [[3.0, 4140.0], [4.0, 1755.5], [5.0, 754.0], [6.0, 997.5], [7.0, 428.0], [8.0, 977.5], [9.0, 996.5], [10.0, 620.5], [11.0, 681.0], [12.0, 735.0], [13.0, 817.0], [14.0, 549.0], [15.0, 424.0], [16.0, 453.0], [17.0, 397.0], [18.0, 387.5], [19.0, 393.0], [20.0, 352.0], [21.0, 344.0], [22.0, 204.0], [23.0, 311.5], [24.0, 292.5], [25.0, 282.5], [26.0, 24.5], [27.0, 241.0], [28.0, 269.5], [29.0, 130.5], [30.0, 251.0], [31.0, 254.0], [33.0, 143.0], [32.0, 215.5], [35.0, 11.0], [34.0, 210.5], [37.0, 241.0], [36.0, 33.5], [38.0, 140.0], [39.0, 147.0], [40.0, 230.0], [42.0, 256.5], [43.0, 24.0], [45.0, 127.5], [44.0, 159.0], [46.0, 12.5], [47.0, 133.5], [48.0, 149.5], [50.0, 18.0], [51.0, 22.0], [53.0, 14.0], [52.0, 138.0], [56.0, 137.5], [58.0, 27.0], [63.0, 16.0], [66.0, 20.5], [64.0, 13.0], [67.0, 14.0], [68.0, 17.0], [69.0, 15.0], [74.0, 18.5], [79.0, 13.0], [82.0, 14.0], [85.0, 15.0], [87.0, 17.0], [94.0, 24.0], [95.0, 14.0], [96.0, 14.5], [112.0, 12.5], [116.0, 13.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 3.0, "maxY": 4140.0, "series": [{"data": [[3.0, 4140.0], [4.0, 1754.0], [5.0, 752.5], [6.0, 997.0], [7.0, 427.0], [8.0, 977.0], [9.0, 996.5], [10.0, 620.5], [11.0, 680.5], [12.0, 734.5], [13.0, 816.0], [14.0, 548.0], [15.0, 419.0], [16.0, 452.5], [17.0, 397.0], [18.0, 387.0], [19.0, 392.0], [20.0, 352.0], [21.0, 344.0], [22.0, 203.5], [23.0, 311.5], [24.0, 292.5], [25.0, 282.5], [26.0, 24.5], [27.0, 240.0], [28.0, 269.5], [29.0, 130.5], [30.0, 251.0], [31.0, 254.0], [33.0, 143.0], [32.0, 215.0], [35.0, 11.0], [34.0, 210.5], [37.0, 241.0], [36.0, 33.5], [38.0, 140.0], [39.0, 147.0], [40.0, 229.0], [42.0, 256.5], [43.0, 24.0], [45.0, 127.5], [44.0, 159.0], [46.0, 12.5], [47.0, 133.5], [48.0, 149.5], [50.0, 18.0], [51.0, 22.0], [53.0, 14.0], [52.0, 138.0], [56.0, 137.5], [58.0, 27.0], [63.0, 16.0], [66.0, 20.5], [64.0, 13.0], [67.0, 14.0], [68.0, 17.0], [69.0, 15.0], [74.0, 18.5], [79.0, 13.0], [82.0, 14.0], [85.0, 15.0], [87.0, 17.0], [94.0, 24.0], [95.0, 14.0], [96.0, 14.0], [112.0, 12.5], [116.0, 13.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.633333333333334, "minX": 1.60386588E12, "maxY": 39.35, "series": [{"data": [[1.603866E12, 39.35], [1.60386606E12, 9.2], [1.60386588E12, 6.633333333333334], [1.60386594E12, 32.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386606E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60386588E12, "maxY": 39.35, "series": [{"data": [[1.603866E12, 39.35], [1.60386606E12, 9.366666666666667], [1.60386588E12, 6.466666666666667], [1.60386594E12, 32.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386606E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60386588E12, "maxY": 39.35, "series": [{"data": [[1.603866E12, 39.35], [1.60386606E12, 9.366666666666667], [1.60386588E12, 6.466666666666667], [1.60386594E12, 32.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386606E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.466666666666667, "minX": 1.60386588E12, "maxY": 39.35, "series": [{"data": [[1.603866E12, 39.35], [1.60386606E12, 9.366666666666667], [1.60386588E12, 6.466666666666667], [1.60386594E12, 32.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386606E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

