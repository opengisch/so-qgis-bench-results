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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 90101.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 10.0], [10.4, 10.0], [10.5, 10.0], [10.6, 10.0], [10.7, 10.0], [10.8, 10.0], [10.9, 10.0], [11.0, 10.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 15.0], [22.2, 15.0], [22.3, 15.0], [22.4, 15.0], [22.5, 15.0], [22.6, 15.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 16.0], [23.3, 16.0], [23.4, 16.0], [23.5, 16.0], [23.6, 16.0], [23.7, 16.0], [23.8, 16.0], [23.9, 16.0], [24.0, 16.0], [24.1, 16.0], [24.2, 16.0], [24.3, 16.0], [24.4, 16.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 16.0], [24.9, 16.0], [25.0, 16.0], [25.1, 17.0], [25.2, 17.0], [25.3, 17.0], [25.4, 17.0], [25.5, 17.0], [25.6, 17.0], [25.7, 17.0], [25.8, 17.0], [25.9, 17.0], [26.0, 17.0], [26.1, 17.0], [26.2, 17.0], [26.3, 17.0], [26.4, 17.0], [26.5, 17.0], [26.6, 17.0], [26.7, 17.0], [26.8, 18.0], [26.9, 18.0], [27.0, 18.0], [27.1, 18.0], [27.2, 18.0], [27.3, 18.0], [27.4, 18.0], [27.5, 18.0], [27.6, 18.0], [27.7, 18.0], [27.8, 18.0], [27.9, 18.0], [28.0, 18.0], [28.1, 18.0], [28.2, 19.0], [28.3, 19.0], [28.4, 19.0], [28.5, 19.0], [28.6, 19.0], [28.7, 19.0], [28.8, 19.0], [28.9, 19.0], [29.0, 19.0], [29.1, 19.0], [29.2, 19.0], [29.3, 19.0], [29.4, 19.0], [29.5, 19.0], [29.6, 19.0], [29.7, 20.0], [29.8, 20.0], [29.9, 20.0], [30.0, 20.0], [30.1, 20.0], [30.2, 20.0], [30.3, 20.0], [30.4, 20.0], [30.5, 20.0], [30.6, 20.0], [30.7, 20.0], [30.8, 20.0], [30.9, 20.0], [31.0, 20.0], [31.1, 20.0], [31.2, 20.0], [31.3, 21.0], [31.4, 21.0], [31.5, 21.0], [31.6, 21.0], [31.7, 21.0], [31.8, 21.0], [31.9, 21.0], [32.0, 21.0], [32.1, 21.0], [32.2, 21.0], [32.3, 21.0], [32.4, 21.0], [32.5, 21.0], [32.6, 21.0], [32.7, 21.0], [32.8, 22.0], [32.9, 22.0], [33.0, 22.0], [33.1, 22.0], [33.2, 22.0], [33.3, 22.0], [33.4, 22.0], [33.5, 22.0], [33.6, 22.0], [33.7, 22.0], [33.8, 22.0], [33.9, 22.0], [34.0, 22.0], [34.1, 22.0], [34.2, 23.0], [34.3, 23.0], [34.4, 23.0], [34.5, 23.0], [34.6, 23.0], [34.7, 23.0], [34.8, 23.0], [34.9, 23.0], [35.0, 23.0], [35.1, 23.0], [35.2, 23.0], [35.3, 23.0], [35.4, 23.0], [35.5, 24.0], [35.6, 24.0], [35.7, 24.0], [35.8, 24.0], [35.9, 24.0], [36.0, 24.0], [36.1, 24.0], [36.2, 24.0], [36.3, 24.0], [36.4, 24.0], [36.5, 24.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 25.0], [37.1, 25.0], [37.2, 25.0], [37.3, 25.0], [37.4, 25.0], [37.5, 25.0], [37.6, 25.0], [37.7, 26.0], [37.8, 26.0], [37.9, 26.0], [38.0, 26.0], [38.1, 26.0], [38.2, 26.0], [38.3, 26.0], [38.4, 26.0], [38.5, 27.0], [38.6, 27.0], [38.7, 27.0], [38.8, 27.0], [38.9, 27.0], [39.0, 27.0], [39.1, 27.0], [39.2, 27.0], [39.3, 27.0], [39.4, 28.0], [39.5, 28.0], [39.6, 28.0], [39.7, 28.0], [39.8, 28.0], [39.9, 28.0], [40.0, 28.0], [40.1, 28.0], [40.2, 29.0], [40.3, 29.0], [40.4, 29.0], [40.5, 29.0], [40.6, 29.0], [40.7, 30.0], [40.8, 30.0], [40.9, 30.0], [41.0, 30.0], [41.1, 31.0], [41.2, 31.0], [41.3, 31.0], [41.4, 31.0], [41.5, 31.0], [41.6, 31.0], [41.7, 32.0], [41.8, 32.0], [41.9, 32.0], [42.0, 32.0], [42.1, 32.0], [42.2, 32.0], [42.3, 33.0], [42.4, 33.0], [42.5, 33.0], [42.6, 34.0], [42.7, 34.0], [42.8, 35.0], [42.9, 35.0], [43.0, 35.0], [43.1, 36.0], [43.2, 36.0], [43.3, 36.0], [43.4, 37.0], [43.5, 37.0], [43.6, 38.0], [43.7, 38.0], [43.8, 38.0], [43.9, 39.0], [44.0, 39.0], [44.1, 39.0], [44.2, 40.0], [44.3, 40.0], [44.4, 40.0], [44.5, 41.0], [44.6, 41.0], [44.7, 42.0], [44.8, 43.0], [44.9, 44.0], [45.0, 45.0], [45.1, 45.0], [45.2, 46.0], [45.3, 49.0], [45.4, 56.0], [45.5, 62.0], [45.6, 91.0], [45.7, 101.0], [45.8, 104.0], [45.9, 105.0], [46.0, 107.0], [46.1, 108.0], [46.2, 109.0], [46.3, 110.0], [46.4, 111.0], [46.5, 111.0], [46.6, 111.0], [46.7, 112.0], [46.8, 113.0], [46.9, 113.0], [47.0, 114.0], [47.1, 114.0], [47.2, 115.0], [47.3, 116.0], [47.4, 116.0], [47.5, 117.0], [47.6, 118.0], [47.7, 118.0], [47.8, 119.0], [47.9, 120.0], [48.0, 120.0], [48.1, 121.0], [48.2, 122.0], [48.3, 123.0], [48.4, 124.0], [48.5, 124.0], [48.6, 125.0], [48.7, 126.0], [48.8, 127.0], [48.9, 127.0], [49.0, 128.0], [49.1, 129.0], [49.2, 130.0], [49.3, 131.0], [49.4, 132.0], [49.5, 133.0], [49.6, 134.0], [49.7, 134.0], [49.8, 134.0], [49.9, 135.0], [50.0, 135.0], [50.1, 136.0], [50.2, 137.0], [50.3, 137.0], [50.4, 138.0], [50.5, 138.0], [50.6, 139.0], [50.7, 140.0], [50.8, 141.0], [50.9, 141.0], [51.0, 142.0], [51.1, 142.0], [51.2, 143.0], [51.3, 144.0], [51.4, 144.0], [51.5, 145.0], [51.6, 146.0], [51.7, 147.0], [51.8, 147.0], [51.9, 148.0], [52.0, 148.0], [52.1, 149.0], [52.2, 150.0], [52.3, 150.0], [52.4, 151.0], [52.5, 152.0], [52.6, 152.0], [52.7, 154.0], [52.8, 155.0], [52.9, 156.0], [53.0, 157.0], [53.1, 158.0], [53.2, 159.0], [53.3, 160.0], [53.4, 160.0], [53.5, 161.0], [53.6, 162.0], [53.7, 162.0], [53.8, 163.0], [53.9, 164.0], [54.0, 165.0], [54.1, 166.0], [54.2, 166.0], [54.3, 167.0], [54.4, 168.0], [54.5, 169.0], [54.6, 169.0], [54.7, 170.0], [54.8, 171.0], [54.9, 172.0], [55.0, 173.0], [55.1, 174.0], [55.2, 175.0], [55.3, 177.0], [55.4, 178.0], [55.5, 179.0], [55.6, 181.0], [55.7, 182.0], [55.8, 182.0], [55.9, 183.0], [56.0, 184.0], [56.1, 185.0], [56.2, 186.0], [56.3, 186.0], [56.4, 187.0], [56.5, 187.0], [56.6, 189.0], [56.7, 191.0], [56.8, 191.0], [56.9, 192.0], [57.0, 193.0], [57.1, 195.0], [57.2, 195.0], [57.3, 197.0], [57.4, 198.0], [57.5, 199.0], [57.6, 201.0], [57.7, 203.0], [57.8, 204.0], [57.9, 205.0], [58.0, 206.0], [58.1, 207.0], [58.2, 208.0], [58.3, 208.0], [58.4, 209.0], [58.5, 210.0], [58.6, 212.0], [58.7, 214.0], [58.8, 215.0], [58.9, 216.0], [59.0, 218.0], [59.1, 218.0], [59.2, 219.0], [59.3, 220.0], [59.4, 222.0], [59.5, 223.0], [59.6, 225.0], [59.7, 226.0], [59.8, 226.0], [59.9, 227.0], [60.0, 228.0], [60.1, 229.0], [60.2, 230.0], [60.3, 231.0], [60.4, 233.0], [60.5, 234.0], [60.6, 234.0], [60.7, 235.0], [60.8, 236.0], [60.9, 236.0], [61.0, 237.0], [61.1, 238.0], [61.2, 238.0], [61.3, 239.0], [61.4, 240.0], [61.5, 240.0], [61.6, 241.0], [61.7, 242.0], [61.8, 243.0], [61.9, 244.0], [62.0, 245.0], [62.1, 246.0], [62.2, 247.0], [62.3, 248.0], [62.4, 249.0], [62.5, 250.0], [62.6, 251.0], [62.7, 252.0], [62.8, 252.0], [62.9, 254.0], [63.0, 254.0], [63.1, 255.0], [63.2, 256.0], [63.3, 257.0], [63.4, 257.0], [63.5, 258.0], [63.6, 259.0], [63.7, 260.0], [63.8, 261.0], [63.9, 263.0], [64.0, 264.0], [64.1, 265.0], [64.2, 266.0], [64.3, 267.0], [64.4, 268.0], [64.5, 269.0], [64.6, 269.0], [64.7, 270.0], [64.8, 270.0], [64.9, 271.0], [65.0, 272.0], [65.1, 273.0], [65.2, 273.0], [65.3, 274.0], [65.4, 275.0], [65.5, 276.0], [65.6, 276.0], [65.7, 277.0], [65.8, 278.0], [65.9, 279.0], [66.0, 281.0], [66.1, 282.0], [66.2, 283.0], [66.3, 284.0], [66.4, 284.0], [66.5, 285.0], [66.6, 286.0], [66.7, 287.0], [66.8, 287.0], [66.9, 288.0], [67.0, 289.0], [67.1, 290.0], [67.2, 291.0], [67.3, 292.0], [67.4, 293.0], [67.5, 294.0], [67.6, 296.0], [67.7, 297.0], [67.8, 298.0], [67.9, 299.0], [68.0, 299.0], [68.1, 300.0], [68.2, 301.0], [68.3, 301.0], [68.4, 302.0], [68.5, 303.0], [68.6, 304.0], [68.7, 306.0], [68.8, 307.0], [68.9, 309.0], [69.0, 309.0], [69.1, 311.0], [69.2, 312.0], [69.3, 313.0], [69.4, 314.0], [69.5, 315.0], [69.6, 317.0], [69.7, 318.0], [69.8, 318.0], [69.9, 320.0], [70.0, 321.0], [70.1, 322.0], [70.2, 323.0], [70.3, 324.0], [70.4, 325.0], [70.5, 327.0], [70.6, 329.0], [70.7, 329.0], [70.8, 330.0], [70.9, 331.0], [71.0, 333.0], [71.1, 335.0], [71.2, 336.0], [71.3, 337.0], [71.4, 337.0], [71.5, 338.0], [71.6, 339.0], [71.7, 340.0], [71.8, 341.0], [71.9, 342.0], [72.0, 342.0], [72.1, 343.0], [72.2, 344.0], [72.3, 344.0], [72.4, 346.0], [72.5, 347.0], [72.6, 348.0], [72.7, 350.0], [72.8, 351.0], [72.9, 352.0], [73.0, 354.0], [73.1, 354.0], [73.2, 355.0], [73.3, 357.0], [73.4, 358.0], [73.5, 360.0], [73.6, 362.0], [73.7, 363.0], [73.8, 364.0], [73.9, 366.0], [74.0, 367.0], [74.1, 368.0], [74.2, 369.0], [74.3, 371.0], [74.4, 372.0], [74.5, 373.0], [74.6, 375.0], [74.7, 378.0], [74.8, 379.0], [74.9, 382.0], [75.0, 382.0], [75.1, 384.0], [75.2, 386.0], [75.3, 386.0], [75.4, 388.0], [75.5, 390.0], [75.6, 392.0], [75.7, 393.0], [75.8, 394.0], [75.9, 395.0], [76.0, 397.0], [76.1, 398.0], [76.2, 399.0], [76.3, 402.0], [76.4, 404.0], [76.5, 407.0], [76.6, 409.0], [76.7, 412.0], [76.8, 413.0], [76.9, 415.0], [77.0, 417.0], [77.1, 419.0], [77.2, 419.0], [77.3, 420.0], [77.4, 421.0], [77.5, 423.0], [77.6, 425.0], [77.7, 428.0], [77.8, 430.0], [77.9, 431.0], [78.0, 432.0], [78.1, 434.0], [78.2, 436.0], [78.3, 437.0], [78.4, 438.0], [78.5, 439.0], [78.6, 441.0], [78.7, 443.0], [78.8, 443.0], [78.9, 446.0], [79.0, 448.0], [79.1, 449.0], [79.2, 451.0], [79.3, 452.0], [79.4, 454.0], [79.5, 456.0], [79.6, 457.0], [79.7, 458.0], [79.8, 460.0], [79.9, 462.0], [80.0, 463.0], [80.1, 463.0], [80.2, 465.0], [80.3, 470.0], [80.4, 471.0], [80.5, 474.0], [80.6, 477.0], [80.7, 479.0], [80.8, 482.0], [80.9, 483.0], [81.0, 484.0], [81.1, 486.0], [81.2, 489.0], [81.3, 494.0], [81.4, 496.0], [81.5, 498.0], [81.6, 500.0], [81.7, 502.0], [81.8, 506.0], [81.9, 510.0], [82.0, 511.0], [82.1, 514.0], [82.2, 516.0], [82.3, 519.0], [82.4, 521.0], [82.5, 523.0], [82.6, 524.0], [82.7, 526.0], [82.8, 528.0], [82.9, 529.0], [83.0, 532.0], [83.1, 534.0], [83.2, 536.0], [83.3, 538.0], [83.4, 539.0], [83.5, 541.0], [83.6, 543.0], [83.7, 545.0], [83.8, 547.0], [83.9, 549.0], [84.0, 552.0], [84.1, 555.0], [84.2, 556.0], [84.3, 558.0], [84.4, 560.0], [84.5, 563.0], [84.6, 566.0], [84.7, 567.0], [84.8, 572.0], [84.9, 578.0], [85.0, 582.0], [85.1, 584.0], [85.2, 587.0], [85.3, 591.0], [85.4, 592.0], [85.5, 596.0], [85.6, 597.0], [85.7, 599.0], [85.8, 603.0], [85.9, 604.0], [86.0, 605.0], [86.1, 607.0], [86.2, 610.0], [86.3, 611.0], [86.4, 614.0], [86.5, 617.0], [86.6, 620.0], [86.7, 623.0], [86.8, 628.0], [86.9, 629.0], [87.0, 631.0], [87.1, 633.0], [87.2, 635.0], [87.3, 638.0], [87.4, 641.0], [87.5, 645.0], [87.6, 647.0], [87.7, 649.0], [87.8, 651.0], [87.9, 653.0], [88.0, 657.0], [88.1, 661.0], [88.2, 664.0], [88.3, 666.0], [88.4, 669.0], [88.5, 671.0], [88.6, 675.0], [88.7, 680.0], [88.8, 684.0], [88.9, 686.0], [89.0, 691.0], [89.1, 693.0], [89.2, 698.0], [89.3, 703.0], [89.4, 706.0], [89.5, 708.0], [89.6, 711.0], [89.7, 716.0], [89.8, 720.0], [89.9, 723.0], [90.0, 727.0], [90.1, 732.0], [90.2, 734.0], [90.3, 738.0], [90.4, 742.0], [90.5, 747.0], [90.6, 749.0], [90.7, 753.0], [90.8, 756.0], [90.9, 759.0], [91.0, 764.0], [91.1, 767.0], [91.2, 770.0], [91.3, 777.0], [91.4, 787.0], [91.5, 791.0], [91.6, 799.0], [91.7, 802.0], [91.8, 804.0], [91.9, 813.0], [92.0, 818.0], [92.1, 827.0], [92.2, 832.0], [92.3, 838.0], [92.4, 843.0], [92.5, 850.0], [92.6, 856.0], [92.7, 861.0], [92.8, 870.0], [92.9, 880.0], [93.0, 885.0], [93.1, 889.0], [93.2, 895.0], [93.3, 904.0], [93.4, 912.0], [93.5, 916.0], [93.6, 921.0], [93.7, 927.0], [93.8, 944.0], [93.9, 947.0], [94.0, 952.0], [94.1, 956.0], [94.2, 966.0], [94.3, 978.0], [94.4, 987.0], [94.5, 992.0], [94.6, 1001.0], [94.7, 1013.0], [94.8, 1019.0], [94.9, 1040.0], [95.0, 1050.0], [95.1, 1062.0], [95.2, 1067.0], [95.3, 1074.0], [95.4, 1085.0], [95.5, 1102.0], [95.6, 1119.0], [95.7, 1127.0], [95.8, 1156.0], [95.9, 1162.0], [96.0, 1179.0], [96.1, 1191.0], [96.2, 1202.0], [96.3, 1216.0], [96.4, 1236.0], [96.5, 1255.0], [96.6, 1264.0], [96.7, 1280.0], [96.8, 1293.0], [96.9, 1319.0], [97.0, 1329.0], [97.1, 1342.0], [97.2, 1352.0], [97.3, 1363.0], [97.4, 1368.0], [97.5, 1400.0], [97.6, 1413.0], [97.7, 1446.0], [97.8, 1468.0], [97.9, 1487.0], [98.0, 1525.0], [98.1, 1558.0], [98.2, 1593.0], [98.3, 1641.0], [98.4, 1675.0], [98.5, 1724.0], [98.6, 1787.0], [98.7, 1856.0], [98.8, 1923.0], [98.9, 2007.0], [99.0, 2126.0], [99.1, 2146.0], [99.2, 2211.0], [99.3, 2348.0], [99.4, 2419.0], [99.5, 2453.0], [99.6, 2518.0], [99.7, 2639.0], [99.8, 3139.0], [99.9, 90090.0], [100.0, 90101.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2409.0, "series": [{"data": [[0.0, 2409.0], [600.0, 186.0], [700.0, 126.0], [800.0, 83.0], [900.0, 72.0], [1000.0, 46.0], [1100.0, 38.0], [1200.0, 35.0], [1300.0, 35.0], [1400.0, 25.0], [1500.0, 14.0], [100.0, 624.0], [1600.0, 10.0], [1700.0, 11.0], [1800.0, 7.0], [1900.0, 7.0], [2000.0, 4.0], [2100.0, 11.0], [2200.0, 6.0], [2300.0, 3.0], [2400.0, 12.0], [2500.0, 6.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 555.0], [300.0, 432.0], [90100.0, 2.0], [90000.0, 8.0], [400.0, 280.0], [500.0, 219.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4302.0, "series": [{"data": [[0.0, 4302.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 863.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 97.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 10.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60224744E12, "maxY": 10.0, "series": [{"data": [[1.60224768E12, 1.5], [1.60224756E12, 10.0], [1.60224744E12, 9.977241379310357], [1.60224762E12, 9.976824034334763], [1.6022475E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224768E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 90083.0, "series": [{"data": [[4.0, 584.6666666666666], [8.0, 578.0], [2.0, 90083.0], [1.0, 90082.0], [9.0, 722.0], [5.0, 16.0], [10.0, 408.9415683288923], [3.0, 581.0], [6.0, 954.3333333333334], [7.0, 1081.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.985394537177541, 443.7905918057658]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.7, "minX": 1.60224744E12, "maxY": 1690812.95, "series": [{"data": [[1.60224768E12, 26.7], [1.60224756E12, 1273865.0833333333], [1.60224744E12, 1690812.95], [1.60224762E12, 1386229.45], [1.6022475E12, 221157.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224768E12, 17.7], [1.60224756E12, 19405.566666666666], [1.60224744E12, 12516.3], [1.60224762E12, 10296.416666666666], [1.6022475E12, 3343.5666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224768E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 314.2806866952792, "minX": 1.60224744E12, "maxY": 90082.5, "series": [{"data": [[1.60224768E12, 90082.5], [1.60224756E12, 518.9894967177243], [1.60224744E12, 337.19103448275825], [1.60224762E12, 314.2806866952792], [1.6022475E12, 320.3891891891892]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224768E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 313.55622317596544, "minX": 1.60224744E12, "maxY": 90082.0, "series": [{"data": [[1.60224768E12, 90082.0], [1.60224756E12, 518.6967177242899], [1.60224744E12, 336.2641379310345], [1.60224762E12, 313.55622317596544], [1.6022475E12, 319.8972972972972]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224768E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60224744E12, "maxY": 0.10000000000000027, "series": [{"data": [[1.60224768E12, 0.0], [1.60224756E12, 0.006564551422319471], [1.60224744E12, 0.10000000000000027], [1.60224762E12, 0.0051502145922746765], [1.6022475E12, 0.013513513513513535]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224768E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60224744E12, "maxY": 3139.0, "series": [{"data": [[1.60224756E12, 2853.0], [1.60224744E12, 2984.0], [1.60224762E12, 2854.0], [1.6022475E12, 3139.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224756E12, 6.0], [1.60224744E12, 7.0], [1.60224762E12, 6.0], [1.6022475E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224756E12, 6.0], [1.60224744E12, 7.0], [1.60224762E12, 6.0], [1.6022475E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224756E12, 6.0], [1.60224744E12, 7.0], [1.60224762E12, 6.0], [1.6022475E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224756E12, 5.0], [1.60224744E12, 6.0], [1.60224762E12, 5.0], [1.6022475E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224756E12, 125.0], [1.60224744E12, 214.5], [1.60224762E12, 150.0], [1.6022475E12, 25.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 1.0, "maxY": 90101.0, "series": [{"data": [[2.0, 838.0], [3.0, 566.5], [4.0, 549.0], [5.0, 460.0], [6.0, 14.5], [7.0, 869.0], [8.0, 249.0], [9.0, 374.5], [10.0, 266.5], [11.0, 108.0], [12.0, 739.0], [13.0, 686.0], [14.0, 277.5], [15.0, 464.0], [16.0, 464.0], [17.0, 367.0], [18.0, 389.5], [19.0, 316.5], [20.0, 303.5], [21.0, 420.0], [22.0, 121.0], [23.0, 377.0], [24.0, 145.0], [25.0, 340.0], [27.0, 291.5], [28.0, 292.0], [30.0, 173.0], [31.0, 216.0], [32.0, 302.5], [33.0, 16.0], [34.0, 240.0], [35.0, 211.0], [36.0, 113.5], [37.0, 21.5], [38.0, 21.5], [39.0, 29.0], [40.0, 177.5], [41.0, 14.0], [42.0, 32.0], [45.0, 28.0], [44.0, 146.0], [46.0, 168.5], [47.0, 29.0], [49.0, 23.0], [51.0, 148.0], [50.0, 24.0], [53.0, 116.0], [52.0, 158.0], [54.0, 23.0], [55.0, 28.0], [57.0, 147.5], [56.0, 146.0], [59.0, 20.0], [60.0, 28.0], [67.0, 28.0], [70.0, 17.0], [72.0, 22.0], [78.0, 22.5], [77.0, 23.5], [83.0, 24.0], [82.0, 27.0], [86.0, 25.5], [89.0, 22.0], [97.0, 19.0], [113.0, 14.0], [119.0, 11.0], [1.0, 1382.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90082.5], [37.0, 90101.0], [83.0, 90090.0], [59.0, 90095.0], [30.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.0, "minX": 1.0, "maxY": 90101.0, "series": [{"data": [[2.0, 837.5], [3.0, 565.5], [4.0, 548.5], [5.0, 458.0], [6.0, 14.5], [7.0, 857.0], [8.0, 249.0], [9.0, 374.0], [10.0, 266.5], [11.0, 104.0], [12.0, 738.5], [13.0, 684.5], [14.0, 277.5], [15.0, 463.5], [16.0, 462.5], [17.0, 367.0], [18.0, 389.0], [19.0, 316.0], [20.0, 303.5], [21.0, 420.0], [22.0, 120.5], [23.0, 375.5], [24.0, 145.0], [25.0, 340.0], [27.0, 291.0], [28.0, 291.5], [30.0, 173.0], [31.0, 216.0], [32.0, 302.5], [33.0, 16.0], [34.0, 238.5], [35.0, 210.0], [36.0, 113.5], [37.0, 21.5], [38.0, 21.5], [39.0, 29.0], [40.0, 177.5], [41.0, 14.0], [42.0, 32.0], [45.0, 28.0], [44.0, 146.0], [46.0, 168.5], [47.0, 29.0], [49.0, 23.0], [51.0, 148.0], [50.0, 24.0], [53.0, 116.0], [52.0, 158.0], [54.0, 23.0], [55.0, 28.0], [57.0, 147.5], [56.0, 146.0], [59.0, 20.0], [60.0, 28.0], [67.0, 28.0], [70.0, 17.0], [72.0, 22.0], [78.0, 22.5], [77.0, 23.5], [83.0, 24.0], [82.0, 27.0], [86.0, 25.5], [89.0, 22.0], [97.0, 19.0], [113.0, 14.0], [119.0, 11.0], [1.0, 1381.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90082.0], [37.0, 90101.0], [83.0, 90090.0], [59.0, 90095.0], [30.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.60224738E12, "maxY": 38.083333333333336, "series": [{"data": [[1.60224738E12, 0.05], [1.60224756E12, 38.083333333333336], [1.60224744E12, 24.283333333333335], [1.60224762E12, 19.283333333333335], [1.6022475E12, 6.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224744E12, "maxY": 37.95, "series": [{"data": [[1.60224756E12, 37.95], [1.60224744E12, 24.166666666666668], [1.60224762E12, 19.416666666666668], [1.6022475E12, 6.166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224768E12, 0.03333333333333333], [1.60224756E12, 0.13333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224768E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224744E12, "maxY": 37.95, "series": [{"data": [[1.60224756E12, 37.95], [1.60224744E12, 24.166666666666668], [1.60224762E12, 19.416666666666668], [1.6022475E12, 6.166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224768E12, 0.03333333333333333], [1.60224756E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224768E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.60224744E12, "maxY": 37.95, "series": [{"data": [[1.60224756E12, 37.95], [1.60224744E12, 24.166666666666668], [1.60224762E12, 19.416666666666668], [1.6022475E12, 6.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224768E12, 0.03333333333333333], [1.60224756E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224768E12, "title": "Total Transactions Per Second"}},
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

