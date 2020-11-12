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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 2785.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 16.0], [27.8, 16.0], [27.9, 16.0], [28.0, 16.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 18.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 19.0], [31.5, 19.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 19.0], [32.3, 19.0], [32.4, 19.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 20.0], [33.5, 20.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 20.0], [34.0, 20.0], [34.1, 21.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 21.0], [34.8, 21.0], [34.9, 21.0], [35.0, 21.0], [35.1, 21.0], [35.2, 21.0], [35.3, 21.0], [35.4, 22.0], [35.5, 22.0], [35.6, 22.0], [35.7, 22.0], [35.8, 22.0], [35.9, 22.0], [36.0, 22.0], [36.1, 22.0], [36.2, 22.0], [36.3, 22.0], [36.4, 22.0], [36.5, 23.0], [36.6, 23.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 23.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 24.0], [38.3, 24.0], [38.4, 24.0], [38.5, 24.0], [38.6, 25.0], [38.7, 25.0], [38.8, 25.0], [38.9, 25.0], [39.0, 25.0], [39.1, 25.0], [39.2, 25.0], [39.3, 25.0], [39.4, 26.0], [39.5, 26.0], [39.6, 26.0], [39.7, 26.0], [39.8, 26.0], [39.9, 26.0], [40.0, 26.0], [40.1, 26.0], [40.2, 26.0], [40.3, 27.0], [40.4, 27.0], [40.5, 27.0], [40.6, 27.0], [40.7, 27.0], [40.8, 27.0], [40.9, 27.0], [41.0, 27.0], [41.1, 27.0], [41.2, 28.0], [41.3, 28.0], [41.4, 28.0], [41.5, 28.0], [41.6, 28.0], [41.7, 29.0], [41.8, 29.0], [41.9, 29.0], [42.0, 29.0], [42.1, 30.0], [42.2, 30.0], [42.3, 30.0], [42.4, 30.0], [42.5, 31.0], [42.6, 31.0], [42.7, 31.0], [42.8, 31.0], [42.9, 31.0], [43.0, 32.0], [43.1, 32.0], [43.2, 32.0], [43.3, 32.0], [43.4, 32.0], [43.5, 33.0], [43.6, 33.0], [43.7, 33.0], [43.8, 34.0], [43.9, 34.0], [44.0, 34.0], [44.1, 35.0], [44.2, 35.0], [44.3, 36.0], [44.4, 36.0], [44.5, 37.0], [44.6, 37.0], [44.7, 38.0], [44.8, 39.0], [44.9, 40.0], [45.0, 40.0], [45.1, 41.0], [45.2, 42.0], [45.3, 44.0], [45.4, 47.0], [45.5, 49.0], [45.6, 53.0], [45.7, 71.0], [45.8, 104.0], [45.9, 109.0], [46.0, 111.0], [46.1, 112.0], [46.2, 113.0], [46.3, 114.0], [46.4, 115.0], [46.5, 116.0], [46.6, 117.0], [46.7, 117.0], [46.8, 117.0], [46.9, 118.0], [47.0, 119.0], [47.1, 120.0], [47.2, 120.0], [47.3, 120.0], [47.4, 121.0], [47.5, 122.0], [47.6, 123.0], [47.7, 123.0], [47.8, 124.0], [47.9, 125.0], [48.0, 126.0], [48.1, 126.0], [48.2, 127.0], [48.3, 127.0], [48.4, 128.0], [48.5, 128.0], [48.6, 129.0], [48.7, 130.0], [48.8, 131.0], [48.9, 131.0], [49.0, 132.0], [49.1, 133.0], [49.2, 134.0], [49.3, 135.0], [49.4, 135.0], [49.5, 135.0], [49.6, 136.0], [49.7, 137.0], [49.8, 137.0], [49.9, 137.0], [50.0, 138.0], [50.1, 138.0], [50.2, 139.0], [50.3, 139.0], [50.4, 140.0], [50.5, 141.0], [50.6, 141.0], [50.7, 142.0], [50.8, 143.0], [50.9, 143.0], [51.0, 144.0], [51.1, 145.0], [51.2, 145.0], [51.3, 146.0], [51.4, 146.0], [51.5, 147.0], [51.6, 148.0], [51.7, 149.0], [51.8, 149.0], [51.9, 150.0], [52.0, 150.0], [52.1, 151.0], [52.2, 152.0], [52.3, 153.0], [52.4, 154.0], [52.5, 155.0], [52.6, 156.0], [52.7, 156.0], [52.8, 157.0], [52.9, 158.0], [53.0, 158.0], [53.1, 159.0], [53.2, 160.0], [53.3, 162.0], [53.4, 163.0], [53.5, 163.0], [53.6, 164.0], [53.7, 164.0], [53.8, 165.0], [53.9, 166.0], [54.0, 168.0], [54.1, 169.0], [54.2, 170.0], [54.3, 171.0], [54.4, 172.0], [54.5, 172.0], [54.6, 174.0], [54.7, 175.0], [54.8, 175.0], [54.9, 177.0], [55.0, 178.0], [55.1, 179.0], [55.2, 180.0], [55.3, 180.0], [55.4, 181.0], [55.5, 182.0], [55.6, 183.0], [55.7, 184.0], [55.8, 185.0], [55.9, 185.0], [56.0, 186.0], [56.1, 187.0], [56.2, 189.0], [56.3, 189.0], [56.4, 190.0], [56.5, 191.0], [56.6, 191.0], [56.7, 192.0], [56.8, 193.0], [56.9, 194.0], [57.0, 195.0], [57.1, 196.0], [57.2, 197.0], [57.3, 198.0], [57.4, 199.0], [57.5, 201.0], [57.6, 201.0], [57.7, 202.0], [57.8, 203.0], [57.9, 204.0], [58.0, 205.0], [58.1, 206.0], [58.2, 207.0], [58.3, 208.0], [58.4, 209.0], [58.5, 210.0], [58.6, 211.0], [58.7, 212.0], [58.8, 213.0], [58.9, 214.0], [59.0, 215.0], [59.1, 215.0], [59.2, 217.0], [59.3, 218.0], [59.4, 219.0], [59.5, 220.0], [59.6, 221.0], [59.7, 222.0], [59.8, 223.0], [59.9, 224.0], [60.0, 225.0], [60.1, 225.0], [60.2, 226.0], [60.3, 227.0], [60.4, 228.0], [60.5, 230.0], [60.6, 231.0], [60.7, 233.0], [60.8, 234.0], [60.9, 234.0], [61.0, 235.0], [61.1, 236.0], [61.2, 237.0], [61.3, 237.0], [61.4, 238.0], [61.5, 239.0], [61.6, 240.0], [61.7, 242.0], [61.8, 242.0], [61.9, 244.0], [62.0, 245.0], [62.1, 245.0], [62.2, 246.0], [62.3, 247.0], [62.4, 248.0], [62.5, 248.0], [62.6, 250.0], [62.7, 251.0], [62.8, 252.0], [62.9, 252.0], [63.0, 254.0], [63.1, 255.0], [63.2, 255.0], [63.3, 256.0], [63.4, 257.0], [63.5, 257.0], [63.6, 258.0], [63.7, 259.0], [63.8, 259.0], [63.9, 260.0], [64.0, 261.0], [64.1, 261.0], [64.2, 262.0], [64.3, 263.0], [64.4, 264.0], [64.5, 265.0], [64.6, 266.0], [64.7, 266.0], [64.8, 268.0], [64.9, 269.0], [65.0, 269.0], [65.1, 269.0], [65.2, 270.0], [65.3, 271.0], [65.4, 271.0], [65.5, 272.0], [65.6, 273.0], [65.7, 274.0], [65.8, 275.0], [65.9, 276.0], [66.0, 276.0], [66.1, 277.0], [66.2, 279.0], [66.3, 280.0], [66.4, 281.0], [66.5, 282.0], [66.6, 285.0], [66.7, 286.0], [66.8, 286.0], [66.9, 287.0], [67.0, 288.0], [67.1, 288.0], [67.2, 289.0], [67.3, 289.0], [67.4, 290.0], [67.5, 291.0], [67.6, 293.0], [67.7, 293.0], [67.8, 294.0], [67.9, 295.0], [68.0, 295.0], [68.1, 297.0], [68.2, 298.0], [68.3, 298.0], [68.4, 299.0], [68.5, 301.0], [68.6, 301.0], [68.7, 302.0], [68.8, 303.0], [68.9, 304.0], [69.0, 306.0], [69.1, 306.0], [69.2, 307.0], [69.3, 307.0], [69.4, 308.0], [69.5, 310.0], [69.6, 313.0], [69.7, 313.0], [69.8, 314.0], [69.9, 315.0], [70.0, 315.0], [70.1, 316.0], [70.2, 318.0], [70.3, 320.0], [70.4, 320.0], [70.5, 321.0], [70.6, 321.0], [70.7, 323.0], [70.8, 323.0], [70.9, 324.0], [71.0, 326.0], [71.1, 327.0], [71.2, 328.0], [71.3, 328.0], [71.4, 329.0], [71.5, 330.0], [71.6, 331.0], [71.7, 332.0], [71.8, 334.0], [71.9, 335.0], [72.0, 336.0], [72.1, 337.0], [72.2, 338.0], [72.3, 339.0], [72.4, 340.0], [72.5, 341.0], [72.6, 343.0], [72.7, 346.0], [72.8, 346.0], [72.9, 348.0], [73.0, 350.0], [73.1, 351.0], [73.2, 352.0], [73.3, 353.0], [73.4, 354.0], [73.5, 355.0], [73.6, 357.0], [73.7, 358.0], [73.8, 360.0], [73.9, 360.0], [74.0, 362.0], [74.1, 363.0], [74.2, 364.0], [74.3, 365.0], [74.4, 366.0], [74.5, 367.0], [74.6, 367.0], [74.7, 368.0], [74.8, 371.0], [74.9, 374.0], [75.0, 375.0], [75.1, 376.0], [75.2, 377.0], [75.3, 379.0], [75.4, 380.0], [75.5, 381.0], [75.6, 383.0], [75.7, 384.0], [75.8, 385.0], [75.9, 386.0], [76.0, 388.0], [76.1, 388.0], [76.2, 389.0], [76.3, 390.0], [76.4, 391.0], [76.5, 392.0], [76.6, 393.0], [76.7, 395.0], [76.8, 397.0], [76.9, 398.0], [77.0, 399.0], [77.1, 400.0], [77.2, 401.0], [77.3, 402.0], [77.4, 403.0], [77.5, 405.0], [77.6, 408.0], [77.7, 409.0], [77.8, 411.0], [77.9, 413.0], [78.0, 414.0], [78.1, 415.0], [78.2, 417.0], [78.3, 420.0], [78.4, 421.0], [78.5, 423.0], [78.6, 424.0], [78.7, 428.0], [78.8, 429.0], [78.9, 431.0], [79.0, 432.0], [79.1, 434.0], [79.2, 435.0], [79.3, 436.0], [79.4, 438.0], [79.5, 440.0], [79.6, 441.0], [79.7, 443.0], [79.8, 446.0], [79.9, 446.0], [80.0, 448.0], [80.1, 450.0], [80.2, 451.0], [80.3, 453.0], [80.4, 454.0], [80.5, 455.0], [80.6, 457.0], [80.7, 459.0], [80.8, 462.0], [80.9, 464.0], [81.0, 465.0], [81.1, 467.0], [81.2, 469.0], [81.3, 471.0], [81.4, 472.0], [81.5, 473.0], [81.6, 475.0], [81.7, 476.0], [81.8, 478.0], [81.9, 480.0], [82.0, 482.0], [82.1, 483.0], [82.2, 487.0], [82.3, 489.0], [82.4, 491.0], [82.5, 492.0], [82.6, 493.0], [82.7, 494.0], [82.8, 496.0], [82.9, 500.0], [83.0, 501.0], [83.1, 502.0], [83.2, 506.0], [83.3, 508.0], [83.4, 509.0], [83.5, 511.0], [83.6, 513.0], [83.7, 516.0], [83.8, 517.0], [83.9, 520.0], [84.0, 523.0], [84.1, 526.0], [84.2, 527.0], [84.3, 529.0], [84.4, 530.0], [84.5, 532.0], [84.6, 534.0], [84.7, 535.0], [84.8, 539.0], [84.9, 542.0], [85.0, 544.0], [85.1, 546.0], [85.2, 551.0], [85.3, 552.0], [85.4, 555.0], [85.5, 558.0], [85.6, 559.0], [85.7, 561.0], [85.8, 565.0], [85.9, 568.0], [86.0, 570.0], [86.1, 574.0], [86.2, 576.0], [86.3, 578.0], [86.4, 581.0], [86.5, 583.0], [86.6, 587.0], [86.7, 591.0], [86.8, 593.0], [86.9, 595.0], [87.0, 596.0], [87.1, 602.0], [87.2, 606.0], [87.3, 609.0], [87.4, 612.0], [87.5, 617.0], [87.6, 622.0], [87.7, 624.0], [87.8, 625.0], [87.9, 628.0], [88.0, 631.0], [88.1, 635.0], [88.2, 639.0], [88.3, 641.0], [88.4, 644.0], [88.5, 646.0], [88.6, 649.0], [88.7, 652.0], [88.8, 653.0], [88.9, 654.0], [89.0, 660.0], [89.1, 662.0], [89.2, 664.0], [89.3, 666.0], [89.4, 670.0], [89.5, 673.0], [89.6, 678.0], [89.7, 683.0], [89.8, 686.0], [89.9, 688.0], [90.0, 692.0], [90.1, 695.0], [90.2, 697.0], [90.3, 700.0], [90.4, 703.0], [90.5, 707.0], [90.6, 709.0], [90.7, 717.0], [90.8, 721.0], [90.9, 725.0], [91.0, 729.0], [91.1, 738.0], [91.2, 742.0], [91.3, 752.0], [91.4, 756.0], [91.5, 762.0], [91.6, 765.0], [91.7, 768.0], [91.8, 771.0], [91.9, 778.0], [92.0, 788.0], [92.1, 791.0], [92.2, 797.0], [92.3, 800.0], [92.4, 809.0], [92.5, 814.0], [92.6, 824.0], [92.7, 825.0], [92.8, 831.0], [92.9, 836.0], [93.0, 845.0], [93.1, 851.0], [93.2, 858.0], [93.3, 865.0], [93.4, 869.0], [93.5, 876.0], [93.6, 886.0], [93.7, 895.0], [93.8, 898.0], [93.9, 902.0], [94.0, 913.0], [94.1, 923.0], [94.2, 928.0], [94.3, 939.0], [94.4, 943.0], [94.5, 953.0], [94.6, 959.0], [94.7, 968.0], [94.8, 972.0], [94.9, 977.0], [95.0, 983.0], [95.1, 998.0], [95.2, 1007.0], [95.3, 1012.0], [95.4, 1018.0], [95.5, 1025.0], [95.6, 1036.0], [95.7, 1044.0], [95.8, 1047.0], [95.9, 1057.0], [96.0, 1070.0], [96.1, 1076.0], [96.2, 1084.0], [96.3, 1098.0], [96.4, 1101.0], [96.5, 1113.0], [96.6, 1125.0], [96.7, 1135.0], [96.8, 1142.0], [96.9, 1157.0], [97.0, 1169.0], [97.1, 1180.0], [97.2, 1201.0], [97.3, 1212.0], [97.4, 1234.0], [97.5, 1255.0], [97.6, 1268.0], [97.7, 1275.0], [97.8, 1296.0], [97.9, 1314.0], [98.0, 1331.0], [98.1, 1370.0], [98.2, 1390.0], [98.3, 1403.0], [98.4, 1415.0], [98.5, 1472.0], [98.6, 1494.0], [98.7, 1528.0], [98.8, 1565.0], [98.9, 1625.0], [99.0, 1717.0], [99.1, 1802.0], [99.2, 1942.0], [99.3, 2031.0], [99.4, 2093.0], [99.5, 2126.0], [99.6, 2181.0], [99.7, 2204.0], [99.8, 2324.0], [99.9, 2576.0], [100.0, 2785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2408.0, "series": [{"data": [[0.0, 2408.0], [600.0, 169.0], [700.0, 105.0], [800.0, 80.0], [900.0, 70.0], [1000.0, 65.0], [1100.0, 43.0], [1200.0, 35.0], [1300.0, 22.0], [1400.0, 19.0], [1500.0, 13.0], [100.0, 613.0], [1600.0, 6.0], [1700.0, 5.0], [1800.0, 3.0], [1900.0, 6.0], [2000.0, 8.0], [2100.0, 14.0], [2200.0, 5.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 3.0], [200.0, 579.0], [300.0, 453.0], [400.0, 309.0], [500.0, 220.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 72.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4367.0, "series": [{"data": [[0.0, 4367.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 823.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 72.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.509090909090908, "minX": 1.6050738E12, "maxY": 10.0, "series": [{"data": [[1.60507386E12, 10.0], [1.60507392E12, 10.0], [1.60507398E12, 9.90174672489083], [1.6050738E12, 9.509090909090908]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507398E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 247.0, "minX": 1.0, "maxY": 1157.0, "series": [{"data": [[4.0, 247.0], [8.0, 687.5], [2.0, 1119.0], [1.0, 1157.0], [9.0, 499.3333333333333], [5.0, 499.6666666666667], [10.0, 260.60209923664155], [6.0, 684.0], [3.0, 1036.0], [7.0, 613.3333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.981185860889394, 261.8641201064232]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 950.35, "minX": 1.6050738E12, "maxY": 2048326.5166666666, "series": [{"data": [[1.60507386E12, 2004019.3166666667], [1.60507392E12, 2048326.5166666666], [1.60507398E12, 468632.6666666667], [1.6050738E12, 50687.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507386E12, 18664.866666666665], [1.60507392E12, 21841.566666666666], [1.60507398E12, 4034.1666666666665], [1.6050738E12, 950.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507398E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 233.9811616954475, "minX": 1.6050738E12, "maxY": 327.2576419213974, "series": [{"data": [[1.60507386E12, 279.5358807082944], [1.60507392E12, 233.9811616954475], [1.60507398E12, 327.2576419213974], [1.6050738E12, 290.7]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507398E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 233.62833594976465, "minX": 1.6050738E12, "maxY": 326.6746724890832, "series": [{"data": [[1.60507386E12, 278.9175209692448], [1.60507392E12, 233.62833594976465], [1.60507398E12, 326.6746724890832], [1.6050738E12, 290.50909090909107]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507398E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005494505494505492, "minX": 1.6050738E12, "maxY": 0.9727272727272727, "series": [{"data": [[1.60507386E12, 0.00559179869524698], [1.60507392E12, 0.005494505494505492], [1.60507398E12, 0.019650655021834048], [1.6050738E12, 0.9727272727272727]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507398E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.6050738E12, "maxY": 2785.0, "series": [{"data": [[1.60507386E12, 2785.0], [1.60507392E12, 2699.0], [1.60507398E12, 2709.0], [1.6050738E12, 2204.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507386E12, 6.0], [1.60507392E12, 6.0], [1.60507398E12, 6.0], [1.6050738E12, 7.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507386E12, 6.0], [1.60507392E12, 6.0], [1.60507398E12, 6.0], [1.6050738E12, 7.098900010585785]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507386E12, 6.0], [1.60507392E12, 6.0], [1.60507398E12, 6.0], [1.6050738E12, 7.054499986767769]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507386E12, 6.0], [1.60507392E12, 5.0], [1.60507398E12, 6.0], [1.6050738E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507386E12, 137.0], [1.60507392E12, 140.5], [1.60507398E12, 127.0], [1.6050738E12, 47.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11.0, "minX": 1.0, "maxY": 1409.0, "series": [{"data": [[5.0, 1409.0], [6.0, 1089.5], [7.0, 1034.0], [8.0, 874.0], [10.0, 1088.5], [11.0, 944.5], [12.0, 581.0], [13.0, 675.5], [14.0, 511.5], [15.0, 502.0], [16.0, 518.5], [17.0, 377.0], [18.0, 533.5], [19.0, 385.5], [20.0, 429.5], [21.0, 19.5], [22.0, 328.5], [23.0, 395.0], [24.0, 218.5], [25.0, 230.5], [26.0, 298.5], [27.0, 366.0], [29.0, 275.0], [30.0, 335.0], [31.0, 89.5], [32.0, 295.0], [33.0, 420.0], [34.0, 253.0], [35.0, 300.0], [37.0, 226.0], [36.0, 206.0], [38.0, 160.0], [41.0, 22.0], [40.0, 220.5], [42.0, 133.0], [44.0, 173.5], [45.0, 186.0], [47.0, 24.5], [46.0, 178.0], [48.0, 26.5], [49.0, 120.0], [51.0, 134.0], [50.0, 227.0], [54.0, 20.5], [56.0, 27.0], [59.0, 126.5], [58.0, 19.0], [61.0, 132.0], [60.0, 147.5], [63.0, 143.5], [70.0, 121.5], [69.0, 18.0], [68.0, 21.5], [73.0, 16.0], [80.0, 23.0], [85.0, 21.0], [89.0, 15.0], [90.0, 14.5], [95.0, 19.0], [92.0, 11.0], [113.0, 17.0], [119.0, 16.0], [122.0, 16.0], [129.0, 17.0], [1.0, 1157.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.0, "minX": 1.0, "maxY": 1393.0, "series": [{"data": [[5.0, 1393.0], [6.0, 1088.5], [7.0, 1033.5], [8.0, 874.0], [10.0, 1085.0], [11.0, 943.0], [12.0, 574.5], [13.0, 675.0], [14.0, 511.0], [15.0, 492.0], [16.0, 515.0], [17.0, 377.0], [18.0, 532.5], [19.0, 385.0], [20.0, 429.0], [21.0, 19.5], [22.0, 328.5], [23.0, 394.5], [24.0, 218.5], [25.0, 230.0], [26.0, 298.5], [27.0, 366.0], [29.0, 275.0], [30.0, 335.0], [31.0, 89.5], [32.0, 295.0], [33.0, 420.0], [34.0, 252.5], [35.0, 300.0], [37.0, 226.0], [36.0, 205.5], [38.0, 160.0], [41.0, 22.0], [40.0, 220.0], [42.0, 133.0], [44.0, 173.5], [45.0, 186.0], [47.0, 24.5], [46.0, 178.0], [48.0, 26.5], [49.0, 120.0], [51.0, 134.0], [50.0, 226.0], [54.0, 20.5], [56.0, 27.0], [59.0, 126.5], [58.0, 19.0], [61.0, 131.5], [60.0, 147.5], [63.0, 143.5], [70.0, 121.5], [69.0, 18.0], [68.0, 21.5], [73.0, 16.0], [80.0, 23.0], [85.0, 20.5], [89.0, 15.0], [90.0, 14.5], [95.0, 19.0], [92.0, 11.0], [113.0, 17.0], [119.0, 16.0], [122.0, 16.0], [129.0, 17.0], [1.0, 1156.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 129.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6050738E12, "maxY": 42.46666666666667, "series": [{"data": [[1.60507386E12, 35.766666666666666], [1.60507392E12, 42.46666666666667], [1.60507398E12, 7.466666666666667], [1.6050738E12, 2.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507398E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.6050738E12, "maxY": 42.46666666666667, "series": [{"data": [[1.60507386E12, 35.766666666666666], [1.60507392E12, 42.46666666666667], [1.60507398E12, 7.633333333333334], [1.6050738E12, 1.8333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507398E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.6050738E12, "maxY": 42.46666666666667, "series": [{"data": [[1.60507386E12, 35.766666666666666], [1.60507392E12, 42.46666666666667], [1.60507398E12, 7.633333333333334], [1.6050738E12, 1.8333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507398E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.6050738E12, "maxY": 42.46666666666667, "series": [{"data": [[1.60507386E12, 35.766666666666666], [1.60507392E12, 42.46666666666667], [1.60507398E12, 7.633333333333334], [1.6050738E12, 1.8333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507398E12, "title": "Total Transactions Per Second"}},
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

