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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 3831.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 16.0], [25.3, 16.0], [25.4, 16.0], [25.5, 16.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 18.0], [28.9, 18.0], [29.0, 18.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 19.0], [30.2, 19.0], [30.3, 19.0], [30.4, 19.0], [30.5, 19.0], [30.6, 19.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 21.0], [33.1, 21.0], [33.2, 21.0], [33.3, 21.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 22.0], [34.1, 22.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 22.0], [35.3, 23.0], [35.4, 23.0], [35.5, 23.0], [35.6, 23.0], [35.7, 23.0], [35.8, 23.0], [35.9, 23.0], [36.0, 23.0], [36.1, 23.0], [36.2, 23.0], [36.3, 23.0], [36.4, 23.0], [36.5, 23.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 24.0], [37.4, 24.0], [37.5, 24.0], [37.6, 24.0], [37.7, 25.0], [37.8, 25.0], [37.9, 25.0], [38.0, 25.0], [38.1, 25.0], [38.2, 25.0], [38.3, 25.0], [38.4, 25.0], [38.5, 25.0], [38.6, 26.0], [38.7, 26.0], [38.8, 26.0], [38.9, 26.0], [39.0, 26.0], [39.1, 26.0], [39.2, 26.0], [39.3, 27.0], [39.4, 27.0], [39.5, 27.0], [39.6, 27.0], [39.7, 27.0], [39.8, 27.0], [39.9, 27.0], [40.0, 27.0], [40.1, 28.0], [40.2, 28.0], [40.3, 28.0], [40.4, 28.0], [40.5, 28.0], [40.6, 28.0], [40.7, 28.0], [40.8, 29.0], [40.9, 29.0], [41.0, 29.0], [41.1, 29.0], [41.2, 29.0], [41.3, 29.0], [41.4, 30.0], [41.5, 30.0], [41.6, 30.0], [41.7, 30.0], [41.8, 31.0], [41.9, 31.0], [42.0, 31.0], [42.1, 31.0], [42.2, 31.0], [42.3, 31.0], [42.4, 31.0], [42.5, 32.0], [42.6, 32.0], [42.7, 32.0], [42.8, 32.0], [42.9, 33.0], [43.0, 33.0], [43.1, 33.0], [43.2, 34.0], [43.3, 34.0], [43.4, 34.0], [43.5, 35.0], [43.6, 35.0], [43.7, 35.0], [43.8, 36.0], [43.9, 36.0], [44.0, 36.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 38.0], [44.5, 39.0], [44.6, 39.0], [44.7, 40.0], [44.8, 41.0], [44.9, 41.0], [45.0, 42.0], [45.1, 43.0], [45.2, 45.0], [45.3, 48.0], [45.4, 52.0], [45.5, 57.0], [45.6, 62.0], [45.7, 69.0], [45.8, 96.0], [45.9, 104.0], [46.0, 106.0], [46.1, 110.0], [46.2, 111.0], [46.3, 112.0], [46.4, 114.0], [46.5, 116.0], [46.6, 118.0], [46.7, 119.0], [46.8, 120.0], [46.9, 120.0], [47.0, 121.0], [47.1, 122.0], [47.2, 122.0], [47.3, 123.0], [47.4, 124.0], [47.5, 125.0], [47.6, 126.0], [47.7, 126.0], [47.8, 128.0], [47.9, 129.0], [48.0, 130.0], [48.1, 131.0], [48.2, 131.0], [48.3, 132.0], [48.4, 133.0], [48.5, 133.0], [48.6, 133.0], [48.7, 134.0], [48.8, 134.0], [48.9, 135.0], [49.0, 135.0], [49.1, 136.0], [49.2, 136.0], [49.3, 137.0], [49.4, 137.0], [49.5, 139.0], [49.6, 139.0], [49.7, 140.0], [49.8, 140.0], [49.9, 141.0], [50.0, 142.0], [50.1, 142.0], [50.2, 143.0], [50.3, 144.0], [50.4, 145.0], [50.5, 145.0], [50.6, 146.0], [50.7, 147.0], [50.8, 147.0], [50.9, 148.0], [51.0, 148.0], [51.1, 149.0], [51.2, 149.0], [51.3, 150.0], [51.4, 151.0], [51.5, 151.0], [51.6, 152.0], [51.7, 152.0], [51.8, 153.0], [51.9, 154.0], [52.0, 155.0], [52.1, 155.0], [52.2, 157.0], [52.3, 157.0], [52.4, 158.0], [52.5, 159.0], [52.6, 160.0], [52.7, 161.0], [52.8, 162.0], [52.9, 163.0], [53.0, 164.0], [53.1, 164.0], [53.2, 165.0], [53.3, 165.0], [53.4, 166.0], [53.5, 167.0], [53.6, 168.0], [53.7, 168.0], [53.8, 169.0], [53.9, 170.0], [54.0, 171.0], [54.1, 172.0], [54.2, 172.0], [54.3, 173.0], [54.4, 174.0], [54.5, 174.0], [54.6, 175.0], [54.7, 176.0], [54.8, 177.0], [54.9, 178.0], [55.0, 179.0], [55.1, 180.0], [55.2, 181.0], [55.3, 182.0], [55.4, 183.0], [55.5, 184.0], [55.6, 185.0], [55.7, 185.0], [55.8, 186.0], [55.9, 187.0], [56.0, 188.0], [56.1, 189.0], [56.2, 190.0], [56.3, 191.0], [56.4, 192.0], [56.5, 192.0], [56.6, 193.0], [56.7, 194.0], [56.8, 195.0], [56.9, 196.0], [57.0, 197.0], [57.1, 198.0], [57.2, 199.0], [57.3, 200.0], [57.4, 202.0], [57.5, 203.0], [57.6, 203.0], [57.7, 205.0], [57.8, 207.0], [57.9, 207.0], [58.0, 208.0], [58.1, 209.0], [58.2, 210.0], [58.3, 211.0], [58.4, 212.0], [58.5, 214.0], [58.6, 215.0], [58.7, 216.0], [58.8, 218.0], [58.9, 219.0], [59.0, 219.0], [59.1, 220.0], [59.2, 222.0], [59.3, 223.0], [59.4, 224.0], [59.5, 224.0], [59.6, 225.0], [59.7, 225.0], [59.8, 227.0], [59.9, 228.0], [60.0, 230.0], [60.1, 230.0], [60.2, 231.0], [60.3, 231.0], [60.4, 232.0], [60.5, 233.0], [60.6, 233.0], [60.7, 234.0], [60.8, 234.0], [60.9, 235.0], [61.0, 236.0], [61.1, 237.0], [61.2, 239.0], [61.3, 240.0], [61.4, 241.0], [61.5, 242.0], [61.6, 243.0], [61.7, 245.0], [61.8, 245.0], [61.9, 246.0], [62.0, 248.0], [62.1, 249.0], [62.2, 249.0], [62.3, 250.0], [62.4, 251.0], [62.5, 252.0], [62.6, 252.0], [62.7, 253.0], [62.8, 253.0], [62.9, 254.0], [63.0, 255.0], [63.1, 256.0], [63.2, 257.0], [63.3, 258.0], [63.4, 259.0], [63.5, 259.0], [63.6, 260.0], [63.7, 260.0], [63.8, 262.0], [63.9, 263.0], [64.0, 264.0], [64.1, 265.0], [64.2, 266.0], [64.3, 267.0], [64.4, 268.0], [64.5, 269.0], [64.6, 269.0], [64.7, 270.0], [64.8, 271.0], [64.9, 271.0], [65.0, 273.0], [65.1, 273.0], [65.2, 275.0], [65.3, 275.0], [65.4, 276.0], [65.5, 276.0], [65.6, 277.0], [65.7, 278.0], [65.8, 278.0], [65.9, 279.0], [66.0, 280.0], [66.1, 281.0], [66.2, 282.0], [66.3, 282.0], [66.4, 283.0], [66.5, 284.0], [66.6, 285.0], [66.7, 287.0], [66.8, 287.0], [66.9, 288.0], [67.0, 289.0], [67.1, 289.0], [67.2, 291.0], [67.3, 292.0], [67.4, 293.0], [67.5, 294.0], [67.6, 295.0], [67.7, 296.0], [67.8, 297.0], [67.9, 297.0], [68.0, 298.0], [68.1, 299.0], [68.2, 300.0], [68.3, 301.0], [68.4, 303.0], [68.5, 303.0], [68.6, 304.0], [68.7, 304.0], [68.8, 305.0], [68.9, 305.0], [69.0, 306.0], [69.1, 308.0], [69.2, 309.0], [69.3, 310.0], [69.4, 311.0], [69.5, 313.0], [69.6, 314.0], [69.7, 315.0], [69.8, 315.0], [69.9, 316.0], [70.0, 317.0], [70.1, 318.0], [70.2, 320.0], [70.3, 321.0], [70.4, 322.0], [70.5, 323.0], [70.6, 324.0], [70.7, 326.0], [70.8, 327.0], [70.9, 328.0], [71.0, 330.0], [71.1, 331.0], [71.2, 333.0], [71.3, 334.0], [71.4, 335.0], [71.5, 335.0], [71.6, 337.0], [71.7, 337.0], [71.8, 338.0], [71.9, 339.0], [72.0, 341.0], [72.1, 342.0], [72.2, 343.0], [72.3, 345.0], [72.4, 345.0], [72.5, 347.0], [72.6, 348.0], [72.7, 349.0], [72.8, 350.0], [72.9, 351.0], [73.0, 352.0], [73.1, 352.0], [73.2, 354.0], [73.3, 355.0], [73.4, 357.0], [73.5, 357.0], [73.6, 359.0], [73.7, 363.0], [73.8, 363.0], [73.9, 365.0], [74.0, 367.0], [74.1, 368.0], [74.2, 369.0], [74.3, 370.0], [74.4, 372.0], [74.5, 374.0], [74.6, 376.0], [74.7, 376.0], [74.8, 377.0], [74.9, 378.0], [75.0, 380.0], [75.1, 381.0], [75.2, 382.0], [75.3, 384.0], [75.4, 385.0], [75.5, 386.0], [75.6, 388.0], [75.7, 389.0], [75.8, 391.0], [75.9, 393.0], [76.0, 394.0], [76.1, 395.0], [76.2, 396.0], [76.3, 398.0], [76.4, 400.0], [76.5, 403.0], [76.6, 403.0], [76.7, 404.0], [76.8, 406.0], [76.9, 408.0], [77.0, 409.0], [77.1, 410.0], [77.2, 410.0], [77.3, 411.0], [77.4, 414.0], [77.5, 416.0], [77.6, 418.0], [77.7, 420.0], [77.8, 422.0], [77.9, 424.0], [78.0, 425.0], [78.1, 427.0], [78.2, 428.0], [78.3, 430.0], [78.4, 432.0], [78.5, 433.0], [78.6, 434.0], [78.7, 436.0], [78.8, 437.0], [78.9, 438.0], [79.0, 441.0], [79.1, 443.0], [79.2, 444.0], [79.3, 446.0], [79.4, 447.0], [79.5, 450.0], [79.6, 451.0], [79.7, 453.0], [79.8, 455.0], [79.9, 457.0], [80.0, 458.0], [80.1, 459.0], [80.2, 461.0], [80.3, 462.0], [80.4, 463.0], [80.5, 465.0], [80.6, 467.0], [80.7, 468.0], [80.8, 471.0], [80.9, 473.0], [81.0, 473.0], [81.1, 475.0], [81.2, 477.0], [81.3, 478.0], [81.4, 480.0], [81.5, 482.0], [81.6, 484.0], [81.7, 485.0], [81.8, 486.0], [81.9, 487.0], [82.0, 489.0], [82.1, 490.0], [82.2, 493.0], [82.3, 495.0], [82.4, 498.0], [82.5, 501.0], [82.6, 505.0], [82.7, 507.0], [82.8, 510.0], [82.9, 512.0], [83.0, 514.0], [83.1, 516.0], [83.2, 518.0], [83.3, 520.0], [83.4, 521.0], [83.5, 524.0], [83.6, 526.0], [83.7, 529.0], [83.8, 531.0], [83.9, 533.0], [84.0, 536.0], [84.1, 538.0], [84.2, 540.0], [84.3, 543.0], [84.4, 545.0], [84.5, 547.0], [84.6, 548.0], [84.7, 550.0], [84.8, 555.0], [84.9, 557.0], [85.0, 558.0], [85.1, 560.0], [85.2, 563.0], [85.3, 566.0], [85.4, 567.0], [85.5, 571.0], [85.6, 575.0], [85.7, 576.0], [85.8, 578.0], [85.9, 581.0], [86.0, 582.0], [86.1, 584.0], [86.2, 587.0], [86.3, 589.0], [86.4, 591.0], [86.5, 593.0], [86.6, 595.0], [86.7, 600.0], [86.8, 602.0], [86.9, 605.0], [87.0, 606.0], [87.1, 609.0], [87.2, 613.0], [87.3, 617.0], [87.4, 621.0], [87.5, 625.0], [87.6, 627.0], [87.7, 630.0], [87.8, 634.0], [87.9, 638.0], [88.0, 642.0], [88.1, 644.0], [88.2, 651.0], [88.3, 652.0], [88.4, 655.0], [88.5, 658.0], [88.6, 661.0], [88.7, 664.0], [88.8, 667.0], [88.9, 669.0], [89.0, 671.0], [89.1, 675.0], [89.2, 677.0], [89.3, 680.0], [89.4, 685.0], [89.5, 691.0], [89.6, 699.0], [89.7, 702.0], [89.8, 704.0], [89.9, 706.0], [90.0, 710.0], [90.1, 718.0], [90.2, 724.0], [90.3, 730.0], [90.4, 732.0], [90.5, 739.0], [90.6, 743.0], [90.7, 744.0], [90.8, 749.0], [90.9, 753.0], [91.0, 756.0], [91.1, 761.0], [91.2, 771.0], [91.3, 776.0], [91.4, 778.0], [91.5, 781.0], [91.6, 787.0], [91.7, 794.0], [91.8, 798.0], [91.9, 800.0], [92.0, 811.0], [92.1, 817.0], [92.2, 827.0], [92.3, 833.0], [92.4, 840.0], [92.5, 845.0], [92.6, 850.0], [92.7, 865.0], [92.8, 869.0], [92.9, 874.0], [93.0, 879.0], [93.1, 885.0], [93.2, 888.0], [93.3, 901.0], [93.4, 907.0], [93.5, 922.0], [93.6, 924.0], [93.7, 930.0], [93.8, 937.0], [93.9, 943.0], [94.0, 947.0], [94.1, 954.0], [94.2, 964.0], [94.3, 968.0], [94.4, 971.0], [94.5, 977.0], [94.6, 982.0], [94.7, 988.0], [94.8, 997.0], [94.9, 1005.0], [95.0, 1011.0], [95.1, 1023.0], [95.2, 1028.0], [95.3, 1031.0], [95.4, 1035.0], [95.5, 1043.0], [95.6, 1053.0], [95.7, 1063.0], [95.8, 1067.0], [95.9, 1079.0], [96.0, 1088.0], [96.1, 1096.0], [96.2, 1106.0], [96.3, 1113.0], [96.4, 1117.0], [96.5, 1146.0], [96.6, 1161.0], [96.7, 1165.0], [96.8, 1175.0], [96.9, 1185.0], [97.0, 1199.0], [97.1, 1225.0], [97.2, 1240.0], [97.3, 1264.0], [97.4, 1293.0], [97.5, 1305.0], [97.6, 1320.0], [97.7, 1328.0], [97.8, 1347.0], [97.9, 1357.0], [98.0, 1382.0], [98.1, 1412.0], [98.2, 1444.0], [98.3, 1458.0], [98.4, 1472.0], [98.5, 1503.0], [98.6, 1570.0], [98.7, 1623.0], [98.8, 1680.0], [98.9, 1753.0], [99.0, 1793.0], [99.1, 1835.0], [99.2, 1960.0], [99.3, 2080.0], [99.4, 2125.0], [99.5, 2190.0], [99.6, 2261.0], [99.7, 2433.0], [99.8, 2499.0], [99.9, 2672.0], [100.0, 3831.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2413.0, "series": [{"data": [[0.0, 2413.0], [600.0, 154.0], [700.0, 118.0], [800.0, 75.0], [900.0, 81.0], [1000.0, 67.0], [1100.0, 48.0], [1200.0, 23.0], [1300.0, 33.0], [1400.0, 22.0], [1500.0, 9.0], [100.0, 598.0], [1600.0, 11.0], [1700.0, 7.0], [1800.0, 8.0], [1900.0, 2.0], [2000.0, 9.0], [2100.0, 7.0], [2200.0, 5.0], [2300.0, 4.0], [2400.0, 7.0], [2500.0, 1.0], [2600.0, 6.0], [2700.0, 1.0], [200.0, 574.0], [3200.0, 1.0], [3800.0, 1.0], [300.0, 434.0], [400.0, 322.0], [500.0, 221.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4341.0, "series": [{"data": [[0.0, 4341.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 842.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 79.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.95016611295681, "minX": 1.60248582E12, "maxY": 10.0, "series": [{"data": [[1.60248588E12, 10.0], [1.60248582E12, 9.977932636469236], [1.60248594E12, 9.95016611295681]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248594E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 267.32112890922855, "minX": 1.0, "maxY": 1161.0, "series": [{"data": [[4.0, 317.0], [8.0, 970.0], [2.0, 1151.0], [1.0, 1161.0], [9.0, 666.5], [10.0, 267.32112890922855], [5.0, 979.0], [3.0, 721.0], [6.0, 552.5], [7.0, 764.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.984226529836569, 268.8150893196521]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7925.15, "minX": 1.60248582E12, "maxY": 1885593.15, "series": [{"data": [[1.60248588E12, 1885593.15], [1.60248582E12, 1835659.9166666667], [1.60248594E12, 850783.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248588E12, 22571.4], [1.60248582E12, 14994.4], [1.60248594E12, 7925.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248594E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 226.89154342055375, "minX": 1.60248582E12, "maxY": 318.9494773519169, "series": [{"data": [[1.60248588E12, 226.89154342055375], [1.60248582E12, 318.9494773519169], [1.60248594E12, 295.6378737541527]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248594E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 226.55821008722063, "minX": 1.60248582E12, "maxY": 318.23635307781615, "series": [{"data": [[1.60248588E12, 226.55821008722063], [1.60248582E12, 318.23635307781615], [1.60248594E12, 295.20819490586973]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248594E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003322259136212624, "minX": 1.60248582E12, "maxY": 0.05516840882694551, "series": [{"data": [[1.60248588E12, 0.006446719757299953], [1.60248582E12, 0.05516840882694551], [1.60248594E12, 0.003322259136212624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248594E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60248582E12, "maxY": 3831.0, "series": [{"data": [[1.60248588E12, 2499.0], [1.60248582E12, 3831.0], [1.60248594E12, 3231.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248588E12, 6.0], [1.60248582E12, 6.0], [1.60248594E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248588E12, 6.0], [1.60248582E12, 6.0], [1.60248594E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248588E12, 6.0], [1.60248582E12, 6.0], [1.60248594E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248588E12, 5.0], [1.60248582E12, 6.0], [1.60248594E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248588E12, 133.0], [1.60248582E12, 158.0], [1.60248594E12, 211.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248594E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 2.0, "maxY": 1249.0, "series": [{"data": [[2.0, 1156.0], [4.0, 1249.0], [7.0, 1028.0], [8.0, 1011.0], [9.0, 635.5], [10.0, 544.5], [11.0, 948.0], [12.0, 677.5], [13.0, 688.0], [14.0, 476.5], [15.0, 601.0], [16.0, 485.0], [17.0, 468.5], [18.0, 377.5], [19.0, 24.0], [20.0, 451.0], [21.0, 416.0], [22.0, 436.5], [23.0, 631.0], [24.0, 394.0], [25.0, 275.0], [26.0, 370.0], [27.0, 24.0], [28.0, 283.0], [29.0, 251.5], [30.0, 329.0], [31.0, 29.0], [32.0, 177.5], [33.0, 230.5], [35.0, 198.5], [34.0, 258.0], [36.0, 179.5], [37.0, 282.5], [39.0, 145.0], [41.0, 173.0], [40.0, 215.0], [43.0, 25.0], [42.0, 18.0], [44.0, 29.0], [45.0, 25.0], [46.0, 19.0], [50.0, 146.5], [51.0, 147.0], [53.0, 151.0], [52.0, 19.0], [55.0, 122.0], [56.0, 26.0], [57.0, 172.0], [59.0, 155.0], [61.0, 26.0], [62.0, 150.5], [63.0, 20.0], [65.0, 21.0], [66.0, 15.0], [68.0, 17.5], [69.0, 24.0], [77.0, 27.0], [81.0, 21.0], [82.0, 18.5], [80.0, 20.0], [84.0, 16.5], [86.0, 28.0], [89.0, 17.0], [107.0, 18.0], [104.0, 16.0], [119.0, 23.0], [123.0, 13.0], [124.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 2.0, "maxY": 1241.0, "series": [{"data": [[2.0, 1156.0], [4.0, 1241.0], [7.0, 1028.0], [8.0, 1009.0], [9.0, 635.5], [10.0, 543.5], [11.0, 947.0], [12.0, 676.5], [13.0, 687.0], [14.0, 475.5], [15.0, 600.0], [16.0, 485.0], [17.0, 467.0], [18.0, 377.5], [19.0, 24.0], [20.0, 450.0], [21.0, 415.0], [22.0, 434.5], [23.0, 631.0], [24.0, 394.0], [25.0, 274.0], [26.0, 369.5], [27.0, 24.0], [28.0, 282.0], [29.0, 251.0], [30.0, 329.0], [31.0, 29.0], [32.0, 177.5], [33.0, 230.0], [35.0, 198.5], [34.0, 258.0], [36.0, 179.0], [37.0, 282.0], [39.0, 145.0], [41.0, 173.0], [40.0, 215.0], [43.0, 25.0], [42.0, 18.0], [44.0, 29.0], [45.0, 25.0], [46.0, 19.0], [50.0, 146.5], [51.0, 147.0], [53.0, 151.0], [52.0, 19.0], [55.0, 122.0], [56.0, 26.0], [57.0, 172.0], [59.0, 155.0], [61.0, 26.0], [62.0, 150.0], [63.0, 20.0], [65.0, 21.0], [66.0, 15.0], [68.0, 17.5], [69.0, 24.0], [77.0, 27.0], [81.0, 21.0], [82.0, 18.5], [80.0, 20.0], [84.0, 16.5], [86.0, 28.0], [89.0, 17.0], [107.0, 18.0], [104.0, 16.0], [119.0, 22.0], [123.0, 13.0], [124.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.883333333333333, "minX": 1.60248582E12, "maxY": 43.95, "series": [{"data": [[1.60248588E12, 43.95], [1.60248582E12, 28.866666666666667], [1.60248594E12, 14.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248594E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.05, "minX": 1.60248582E12, "maxY": 43.95, "series": [{"data": [[1.60248588E12, 43.95], [1.60248582E12, 28.7], [1.60248594E12, 15.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248594E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.05, "minX": 1.60248582E12, "maxY": 43.95, "series": [{"data": [[1.60248588E12, 43.95], [1.60248582E12, 28.7], [1.60248594E12, 15.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248594E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.05, "minX": 1.60248582E12, "maxY": 43.95, "series": [{"data": [[1.60248588E12, 43.95], [1.60248582E12, 28.7], [1.60248594E12, 15.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248594E12, "title": "Total Transactions Per Second"}},
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

