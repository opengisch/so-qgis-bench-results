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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 52295.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 11.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 12.0], [24.4, 12.0], [24.5, 12.0], [24.6, 12.0], [24.7, 12.0], [24.8, 12.0], [24.9, 12.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 13.0], [29.0, 13.0], [29.1, 13.0], [29.2, 13.0], [29.3, 13.0], [29.4, 13.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 13.0], [30.9, 13.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 14.0], [32.3, 14.0], [32.4, 14.0], [32.5, 14.0], [32.6, 14.0], [32.7, 14.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 14.0], [33.3, 14.0], [33.4, 14.0], [33.5, 14.0], [33.6, 14.0], [33.7, 14.0], [33.8, 14.0], [33.9, 14.0], [34.0, 14.0], [34.1, 14.0], [34.2, 14.0], [34.3, 14.0], [34.4, 14.0], [34.5, 14.0], [34.6, 14.0], [34.7, 14.0], [34.8, 14.0], [34.9, 14.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 15.0], [36.5, 15.0], [36.6, 15.0], [36.7, 15.0], [36.8, 15.0], [36.9, 15.0], [37.0, 15.0], [37.1, 15.0], [37.2, 15.0], [37.3, 16.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 16.0], [38.0, 16.0], [38.1, 16.0], [38.2, 16.0], [38.3, 16.0], [38.4, 16.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 16.0], [39.1, 16.0], [39.2, 16.0], [39.3, 16.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 17.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 17.0], [40.4, 17.0], [40.5, 17.0], [40.6, 17.0], [40.7, 17.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 18.0], [41.6, 18.0], [41.7, 18.0], [41.8, 18.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 19.0], [42.9, 20.0], [43.0, 20.0], [43.1, 20.0], [43.2, 20.0], [43.3, 20.0], [43.4, 21.0], [43.5, 21.0], [43.6, 21.0], [43.7, 22.0], [43.8, 22.0], [43.9, 22.0], [44.0, 22.0], [44.1, 22.0], [44.2, 23.0], [44.3, 24.0], [44.4, 24.0], [44.5, 25.0], [44.6, 25.0], [44.7, 26.0], [44.8, 27.0], [44.9, 27.0], [45.0, 28.0], [45.1, 28.0], [45.2, 29.0], [45.3, 30.0], [45.4, 32.0], [45.5, 36.0], [45.6, 45.0], [45.7, 105.0], [45.8, 108.0], [45.9, 109.0], [46.0, 111.0], [46.1, 112.0], [46.2, 114.0], [46.3, 116.0], [46.4, 116.0], [46.5, 117.0], [46.6, 118.0], [46.7, 119.0], [46.8, 120.0], [46.9, 120.0], [47.0, 121.0], [47.1, 122.0], [47.2, 122.0], [47.3, 123.0], [47.4, 124.0], [47.5, 126.0], [47.6, 127.0], [47.7, 127.0], [47.8, 127.0], [47.9, 128.0], [48.0, 129.0], [48.1, 130.0], [48.2, 131.0], [48.3, 131.0], [48.4, 132.0], [48.5, 133.0], [48.6, 133.0], [48.7, 134.0], [48.8, 134.0], [48.9, 135.0], [49.0, 136.0], [49.1, 136.0], [49.2, 136.0], [49.3, 137.0], [49.4, 137.0], [49.5, 138.0], [49.6, 138.0], [49.7, 138.0], [49.8, 139.0], [49.9, 139.0], [50.0, 139.0], [50.1, 140.0], [50.2, 140.0], [50.3, 140.0], [50.4, 141.0], [50.5, 141.0], [50.6, 141.0], [50.7, 142.0], [50.8, 142.0], [50.9, 142.0], [51.0, 143.0], [51.1, 143.0], [51.2, 143.0], [51.3, 144.0], [51.4, 144.0], [51.5, 145.0], [51.6, 145.0], [51.7, 145.0], [51.8, 146.0], [51.9, 146.0], [52.0, 147.0], [52.1, 147.0], [52.2, 147.0], [52.3, 148.0], [52.4, 148.0], [52.5, 148.0], [52.6, 149.0], [52.7, 149.0], [52.8, 149.0], [52.9, 149.0], [53.0, 150.0], [53.1, 150.0], [53.2, 150.0], [53.3, 151.0], [53.4, 151.0], [53.5, 152.0], [53.6, 152.0], [53.7, 153.0], [53.8, 153.0], [53.9, 154.0], [54.0, 154.0], [54.1, 155.0], [54.2, 155.0], [54.3, 156.0], [54.4, 157.0], [54.5, 157.0], [54.6, 157.0], [54.7, 158.0], [54.8, 159.0], [54.9, 159.0], [55.0, 160.0], [55.1, 160.0], [55.2, 161.0], [55.3, 161.0], [55.4, 162.0], [55.5, 163.0], [55.6, 164.0], [55.7, 165.0], [55.8, 167.0], [55.9, 168.0], [56.0, 168.0], [56.1, 170.0], [56.2, 171.0], [56.3, 171.0], [56.4, 173.0], [56.5, 174.0], [56.6, 175.0], [56.7, 176.0], [56.8, 176.0], [56.9, 178.0], [57.0, 179.0], [57.1, 180.0], [57.2, 181.0], [57.3, 181.0], [57.4, 182.0], [57.5, 183.0], [57.6, 185.0], [57.7, 186.0], [57.8, 188.0], [57.9, 188.0], [58.0, 189.0], [58.1, 190.0], [58.2, 191.0], [58.3, 192.0], [58.4, 193.0], [58.5, 193.0], [58.6, 194.0], [58.7, 195.0], [58.8, 195.0], [58.9, 197.0], [59.0, 198.0], [59.1, 198.0], [59.2, 200.0], [59.3, 203.0], [59.4, 204.0], [59.5, 205.0], [59.6, 207.0], [59.7, 207.0], [59.8, 208.0], [59.9, 209.0], [60.0, 210.0], [60.1, 211.0], [60.2, 212.0], [60.3, 213.0], [60.4, 215.0], [60.5, 215.0], [60.6, 216.0], [60.7, 217.0], [60.8, 218.0], [60.9, 219.0], [61.0, 219.0], [61.1, 220.0], [61.2, 221.0], [61.3, 222.0], [61.4, 223.0], [61.5, 225.0], [61.6, 226.0], [61.7, 227.0], [61.8, 227.0], [61.9, 228.0], [62.0, 229.0], [62.1, 230.0], [62.2, 231.0], [62.3, 232.0], [62.4, 232.0], [62.5, 233.0], [62.6, 233.0], [62.7, 236.0], [62.8, 236.0], [62.9, 237.0], [63.0, 238.0], [63.1, 239.0], [63.2, 240.0], [63.3, 240.0], [63.4, 241.0], [63.5, 241.0], [63.6, 243.0], [63.7, 243.0], [63.8, 244.0], [63.9, 245.0], [64.0, 245.0], [64.1, 247.0], [64.2, 247.0], [64.3, 248.0], [64.4, 248.0], [64.5, 248.0], [64.6, 249.0], [64.7, 250.0], [64.8, 250.0], [64.9, 251.0], [65.0, 252.0], [65.1, 253.0], [65.2, 253.0], [65.3, 254.0], [65.4, 255.0], [65.5, 256.0], [65.6, 256.0], [65.7, 257.0], [65.8, 258.0], [65.9, 259.0], [66.0, 260.0], [66.1, 261.0], [66.2, 263.0], [66.3, 263.0], [66.4, 264.0], [66.5, 265.0], [66.6, 265.0], [66.7, 266.0], [66.8, 267.0], [66.9, 268.0], [67.0, 269.0], [67.1, 269.0], [67.2, 270.0], [67.3, 270.0], [67.4, 271.0], [67.5, 272.0], [67.6, 273.0], [67.7, 274.0], [67.8, 274.0], [67.9, 275.0], [68.0, 277.0], [68.1, 278.0], [68.2, 278.0], [68.3, 279.0], [68.4, 280.0], [68.5, 281.0], [68.6, 282.0], [68.7, 283.0], [68.8, 284.0], [68.9, 285.0], [69.0, 285.0], [69.1, 286.0], [69.2, 287.0], [69.3, 287.0], [69.4, 288.0], [69.5, 288.0], [69.6, 289.0], [69.7, 289.0], [69.8, 290.0], [69.9, 291.0], [70.0, 291.0], [70.1, 292.0], [70.2, 293.0], [70.3, 294.0], [70.4, 295.0], [70.5, 295.0], [70.6, 296.0], [70.7, 297.0], [70.8, 298.0], [70.9, 298.0], [71.0, 299.0], [71.1, 300.0], [71.2, 301.0], [71.3, 302.0], [71.4, 302.0], [71.5, 303.0], [71.6, 304.0], [71.7, 305.0], [71.8, 306.0], [71.9, 307.0], [72.0, 308.0], [72.1, 309.0], [72.2, 309.0], [72.3, 310.0], [72.4, 310.0], [72.5, 311.0], [72.6, 311.0], [72.7, 312.0], [72.8, 313.0], [72.9, 314.0], [73.0, 314.0], [73.1, 315.0], [73.2, 316.0], [73.3, 317.0], [73.4, 318.0], [73.5, 319.0], [73.6, 320.0], [73.7, 321.0], [73.8, 322.0], [73.9, 323.0], [74.0, 324.0], [74.1, 326.0], [74.2, 327.0], [74.3, 327.0], [74.4, 328.0], [74.5, 329.0], [74.6, 330.0], [74.7, 330.0], [74.8, 332.0], [74.9, 333.0], [75.0, 335.0], [75.1, 335.0], [75.2, 337.0], [75.3, 338.0], [75.4, 340.0], [75.5, 341.0], [75.6, 343.0], [75.7, 344.0], [75.8, 346.0], [75.9, 347.0], [76.0, 348.0], [76.1, 351.0], [76.2, 354.0], [76.3, 355.0], [76.4, 356.0], [76.5, 358.0], [76.6, 360.0], [76.7, 361.0], [76.8, 363.0], [76.9, 364.0], [77.0, 366.0], [77.1, 367.0], [77.2, 368.0], [77.3, 370.0], [77.4, 371.0], [77.5, 373.0], [77.6, 374.0], [77.7, 376.0], [77.8, 378.0], [77.9, 379.0], [78.0, 380.0], [78.1, 382.0], [78.2, 382.0], [78.3, 383.0], [78.4, 385.0], [78.5, 387.0], [78.6, 389.0], [78.7, 390.0], [78.8, 392.0], [78.9, 393.0], [79.0, 394.0], [79.1, 396.0], [79.2, 398.0], [79.3, 399.0], [79.4, 400.0], [79.5, 402.0], [79.6, 404.0], [79.7, 407.0], [79.8, 410.0], [79.9, 410.0], [80.0, 412.0], [80.1, 413.0], [80.2, 415.0], [80.3, 416.0], [80.4, 417.0], [80.5, 418.0], [80.6, 420.0], [80.7, 421.0], [80.8, 422.0], [80.9, 426.0], [81.0, 428.0], [81.1, 430.0], [81.2, 431.0], [81.3, 432.0], [81.4, 433.0], [81.5, 435.0], [81.6, 437.0], [81.7, 439.0], [81.8, 440.0], [81.9, 441.0], [82.0, 442.0], [82.1, 444.0], [82.2, 444.0], [82.3, 446.0], [82.4, 447.0], [82.5, 449.0], [82.6, 450.0], [82.7, 452.0], [82.8, 454.0], [82.9, 457.0], [83.0, 459.0], [83.1, 461.0], [83.2, 462.0], [83.3, 464.0], [83.4, 465.0], [83.5, 467.0], [83.6, 469.0], [83.7, 472.0], [83.8, 474.0], [83.9, 477.0], [84.0, 479.0], [84.1, 481.0], [84.2, 483.0], [84.3, 485.0], [84.4, 487.0], [84.5, 488.0], [84.6, 490.0], [84.7, 491.0], [84.8, 493.0], [84.9, 496.0], [85.0, 499.0], [85.1, 501.0], [85.2, 505.0], [85.3, 506.0], [85.4, 508.0], [85.5, 509.0], [85.6, 509.0], [85.7, 512.0], [85.8, 515.0], [85.9, 517.0], [86.0, 519.0], [86.1, 521.0], [86.2, 525.0], [86.3, 527.0], [86.4, 530.0], [86.5, 533.0], [86.6, 536.0], [86.7, 540.0], [86.8, 543.0], [86.9, 544.0], [87.0, 545.0], [87.1, 548.0], [87.2, 550.0], [87.3, 553.0], [87.4, 554.0], [87.5, 556.0], [87.6, 559.0], [87.7, 563.0], [87.8, 567.0], [87.9, 570.0], [88.0, 572.0], [88.1, 576.0], [88.2, 578.0], [88.3, 579.0], [88.4, 581.0], [88.5, 584.0], [88.6, 590.0], [88.7, 592.0], [88.8, 595.0], [88.9, 597.0], [89.0, 601.0], [89.1, 605.0], [89.2, 607.0], [89.3, 610.0], [89.4, 613.0], [89.5, 616.0], [89.6, 619.0], [89.7, 623.0], [89.8, 625.0], [89.9, 627.0], [90.0, 631.0], [90.1, 633.0], [90.2, 637.0], [90.3, 642.0], [90.4, 647.0], [90.5, 649.0], [90.6, 653.0], [90.7, 656.0], [90.8, 657.0], [90.9, 663.0], [91.0, 667.0], [91.1, 668.0], [91.2, 673.0], [91.3, 676.0], [91.4, 680.0], [91.5, 685.0], [91.6, 691.0], [91.7, 695.0], [91.8, 700.0], [91.9, 702.0], [92.0, 706.0], [92.1, 710.0], [92.2, 714.0], [92.3, 717.0], [92.4, 723.0], [92.5, 728.0], [92.6, 731.0], [92.7, 733.0], [92.8, 740.0], [92.9, 742.0], [93.0, 745.0], [93.1, 749.0], [93.2, 761.0], [93.3, 770.0], [93.4, 778.0], [93.5, 779.0], [93.6, 788.0], [93.7, 792.0], [93.8, 796.0], [93.9, 804.0], [94.0, 812.0], [94.1, 820.0], [94.2, 827.0], [94.3, 832.0], [94.4, 843.0], [94.5, 849.0], [94.6, 858.0], [94.7, 867.0], [94.8, 877.0], [94.9, 886.0], [95.0, 892.0], [95.1, 900.0], [95.2, 908.0], [95.3, 918.0], [95.4, 940.0], [95.5, 950.0], [95.6, 961.0], [95.7, 976.0], [95.8, 981.0], [95.9, 985.0], [96.0, 995.0], [96.1, 1011.0], [96.2, 1034.0], [96.3, 1041.0], [96.4, 1050.0], [96.5, 1054.0], [96.6, 1068.0], [96.7, 1075.0], [96.8, 1086.0], [96.9, 1098.0], [97.0, 1116.0], [97.1, 1128.0], [97.2, 1137.0], [97.3, 1141.0], [97.4, 1147.0], [97.5, 1161.0], [97.6, 1178.0], [97.7, 1189.0], [97.8, 1221.0], [97.9, 1239.0], [98.0, 1252.0], [98.1, 1308.0], [98.2, 1329.0], [98.3, 1381.0], [98.4, 1466.0], [98.5, 1536.0], [98.6, 1591.0], [98.7, 1649.0], [98.8, 1699.0], [98.9, 1746.0], [99.0, 1794.0], [99.1, 1843.0], [99.2, 1936.0], [99.3, 1991.0], [99.4, 2023.0], [99.5, 2111.0], [99.6, 2199.0], [99.7, 4835.0], [99.8, 12128.0], [99.9, 18859.0], [100.0, 52295.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2403.0, "series": [{"data": [[0.0, 2403.0], [600.0, 150.0], [10400.0, 1.0], [700.0, 108.0], [12100.0, 1.0], [800.0, 66.0], [14200.0, 1.0], [900.0, 50.0], [15300.0, 1.0], [15100.0, 1.0], [1000.0, 45.0], [16000.0, 1.0], [1100.0, 43.0], [1200.0, 20.0], [18800.0, 1.0], [1300.0, 12.0], [1400.0, 6.0], [22700.0, 1.0], [1500.0, 9.0], [100.0, 711.0], [1600.0, 10.0], [1700.0, 11.0], [1800.0, 9.0], [1900.0, 8.0], [29700.0, 1.0], [2000.0, 7.0], [31800.0, 1.0], [2100.0, 7.0], [33000.0, 1.0], [2200.0, 1.0], [2600.0, 1.0], [200.0, 627.0], [3300.0, 1.0], [52200.0, 1.0], [3400.0, 1.0], [4000.0, 1.0], [300.0, 435.0], [4800.0, 1.0], [5600.0, 1.0], [400.0, 300.0], [7300.0, 1.0], [500.0, 204.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 52200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 82.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4476.0, "series": [{"data": [[0.0, 4476.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 704.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 82.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.895104895104895, "minX": 1.6040505E12, "maxY": 10.0, "series": [{"data": [[1.6040505E12, 9.953101361573372], [1.60405068E12, 9.895104895104895], [1.60405056E12, 10.0], [1.60405062E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405068E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 282.68248522965496, "minX": 1.0, "maxY": 31804.0, "series": [{"data": [[4.0, 326.5], [8.0, 647.0], [2.0, 18859.0], [1.0, 31804.0], [9.0, 967.0], [10.0, 282.68248522965496], [5.0, 1336.0], [3.0, 618.5], [6.0, 718.0], [7.0, 1141.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.985556822500968, 293.1613454960088]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3799.9666666666667, "minX": 1.6040505E12, "maxY": 1878418.6666666667, "series": [{"data": [[1.6040505E12, 442081.2166666667], [1.60405068E12, 391176.23333333334], [1.60405056E12, 1878418.6666666667], [1.60405062E12, 1860300.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040505E12, 5659.733333333334], [1.60405068E12, 3799.9666666666667], [1.60405056E12, 16271.0], [1.60405062E12, 19760.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405068E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 269.98940998487143, "minX": 1.6040505E12, "maxY": 389.96969696969705, "series": [{"data": [[1.6040505E12, 269.98940998487143], [1.60405068E12, 389.96969696969705], [1.60405056E12, 297.32655190401726], [1.60405062E12, 277.99556541019854]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405068E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.73827534039384, "minX": 1.6040505E12, "maxY": 389.6130536130536, "series": [{"data": [[1.6040505E12, 269.73827534039384], [1.60405068E12, 389.6130536130536], [1.60405056E12, 296.96139801773575], [1.60405062E12, 277.689135254989]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405068E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006993006993006995, "minX": 1.6040505E12, "maxY": 0.136157337367625, "series": [{"data": [[1.6040505E12, 0.136157337367625], [1.60405068E12, 0.006993006993006995], [1.60405056E12, 0.008346374543557638], [1.60405062E12, 0.007982261640798214]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405068E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6040505E12, "maxY": 52295.0, "series": [{"data": [[1.6040505E12, 12128.0], [1.60405068E12, 31804.0], [1.60405056E12, 33051.0], [1.60405062E12, 52295.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040505E12, 7.0], [1.60405068E12, 7.0], [1.60405056E12, 6.0], [1.60405062E12, 7.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040505E12, 7.0], [1.60405068E12, 7.0], [1.60405056E12, 6.0], [1.60405062E12, 7.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040505E12, 7.0], [1.60405068E12, 7.0], [1.60405056E12, 6.0], [1.60405062E12, 7.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040505E12, 7.0], [1.60405068E12, 7.0], [1.60405056E12, 6.0], [1.60405062E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040505E12, 159.0], [1.60405068E12, 25.0], [1.60405056E12, 143.0], [1.60405062E12, 117.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 31804.0, "series": [{"data": [[4.0, 1838.0], [5.0, 594.5], [6.0, 647.0], [7.0, 1139.0], [8.0, 940.5], [9.0, 474.5], [10.0, 779.5], [11.0, 695.0], [12.0, 680.0], [13.0, 720.0], [14.0, 425.0], [15.0, 492.0], [16.0, 616.0], [17.0, 373.0], [18.0, 449.5], [19.0, 396.0], [20.0, 385.0], [21.0, 290.0], [22.0, 294.0], [23.0, 15.0], [24.0, 425.5], [25.0, 354.0], [26.0, 276.0], [27.0, 149.5], [29.0, 302.5], [30.0, 19.5], [31.0, 190.0], [32.0, 221.5], [33.0, 253.0], [35.0, 150.0], [34.0, 194.0], [37.0, 19.0], [36.0, 234.0], [39.0, 132.0], [38.0, 267.5], [40.0, 15.0], [41.0, 154.0], [43.0, 132.0], [42.0, 181.0], [45.0, 139.0], [46.0, 15.5], [47.0, 18.0], [48.0, 146.5], [49.0, 16.0], [51.0, 130.5], [50.0, 142.5], [53.0, 148.5], [52.0, 9.5], [55.0, 11.0], [54.0, 132.0], [57.0, 14.0], [58.0, 9.0], [61.0, 14.0], [60.0, 19.5], [62.0, 18.5], [65.0, 13.0], [66.0, 12.0], [69.0, 12.0], [71.0, 15.0], [68.0, 14.0], [72.0, 13.0], [75.0, 11.0], [79.0, 18.0], [77.0, 13.0], [80.0, 15.0], [86.0, 14.0], [89.0, 11.0], [100.0, 13.0], [112.0, 12.0], [117.0, 13.0], [1.0, 31804.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 31802.0, "series": [{"data": [[4.0, 1820.5], [5.0, 594.5], [6.0, 646.5], [7.0, 1139.0], [8.0, 940.0], [9.0, 474.5], [10.0, 778.0], [11.0, 694.0], [12.0, 680.0], [13.0, 720.0], [14.0, 423.5], [15.0, 491.0], [16.0, 615.0], [17.0, 372.0], [18.0, 449.0], [19.0, 396.0], [20.0, 385.0], [21.0, 290.0], [22.0, 294.0], [23.0, 15.0], [24.0, 425.0], [25.0, 353.5], [26.0, 276.0], [27.0, 149.0], [29.0, 302.5], [30.0, 19.5], [31.0, 190.0], [32.0, 221.0], [33.0, 253.0], [35.0, 150.0], [34.0, 193.5], [37.0, 19.0], [36.0, 233.5], [39.0, 131.5], [38.0, 267.5], [40.0, 15.0], [41.0, 154.0], [43.0, 132.0], [42.0, 180.5], [45.0, 139.0], [46.0, 15.5], [47.0, 18.0], [48.0, 146.0], [49.0, 16.0], [51.0, 130.5], [50.0, 142.5], [53.0, 148.5], [52.0, 9.5], [55.0, 11.0], [54.0, 132.0], [57.0, 14.0], [58.0, 9.0], [61.0, 14.0], [60.0, 19.5], [62.0, 18.5], [65.0, 13.0], [66.0, 12.0], [69.0, 12.0], [71.0, 15.0], [68.0, 14.0], [72.0, 13.0], [75.0, 11.0], [79.0, 18.0], [77.0, 13.0], [80.0, 15.0], [86.0, 14.0], [89.0, 11.0], [100.0, 13.0], [112.0, 12.0], [117.0, 13.0], [1.0, 31802.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.983333333333333, "minX": 1.6040505E12, "maxY": 37.583333333333336, "series": [{"data": [[1.6040505E12, 11.183333333333334], [1.60405068E12, 6.983333333333333], [1.60405056E12, 31.95], [1.60405062E12, 37.583333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405068E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.15, "minX": 1.6040505E12, "maxY": 37.583333333333336, "series": [{"data": [[1.6040505E12, 11.016666666666667], [1.60405068E12, 7.15], [1.60405056E12, 31.95], [1.60405062E12, 37.583333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405068E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.15, "minX": 1.6040505E12, "maxY": 37.583333333333336, "series": [{"data": [[1.6040505E12, 11.016666666666667], [1.60405068E12, 7.15], [1.60405056E12, 31.95], [1.60405062E12, 37.583333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405068E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.15, "minX": 1.6040505E12, "maxY": 37.583333333333336, "series": [{"data": [[1.6040505E12, 11.016666666666667], [1.60405068E12, 7.15], [1.60405056E12, 31.95], [1.60405062E12, 37.583333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405068E12, "title": "Total Transactions Per Second"}},
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

