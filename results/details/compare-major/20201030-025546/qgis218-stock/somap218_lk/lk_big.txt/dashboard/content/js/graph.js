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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 2758.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 16.0], [27.2, 16.0], [27.3, 16.0], [27.4, 16.0], [27.5, 16.0], [27.6, 16.0], [27.7, 16.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 18.0], [30.8, 18.0], [30.9, 18.0], [31.0, 18.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 19.0], [31.5, 19.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 19.0], [32.3, 19.0], [32.4, 19.0], [32.5, 19.0], [32.6, 19.0], [32.7, 19.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 20.0], [33.5, 20.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 20.0], [34.0, 20.0], [34.1, 20.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 21.0], [34.8, 21.0], [34.9, 21.0], [35.0, 21.0], [35.1, 21.0], [35.2, 21.0], [35.3, 21.0], [35.4, 21.0], [35.5, 22.0], [35.6, 22.0], [35.7, 22.0], [35.8, 22.0], [35.9, 22.0], [36.0, 22.0], [36.1, 22.0], [36.2, 22.0], [36.3, 22.0], [36.4, 22.0], [36.5, 23.0], [36.6, 23.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 23.0], [37.5, 23.0], [37.6, 23.0], [37.7, 23.0], [37.8, 24.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 24.0], [38.3, 24.0], [38.4, 24.0], [38.5, 24.0], [38.6, 24.0], [38.7, 24.0], [38.8, 24.0], [38.9, 25.0], [39.0, 25.0], [39.1, 25.0], [39.2, 25.0], [39.3, 25.0], [39.4, 25.0], [39.5, 25.0], [39.6, 25.0], [39.7, 26.0], [39.8, 26.0], [39.9, 26.0], [40.0, 26.0], [40.1, 26.0], [40.2, 26.0], [40.3, 27.0], [40.4, 27.0], [40.5, 27.0], [40.6, 27.0], [40.7, 27.0], [40.8, 27.0], [40.9, 27.0], [41.0, 27.0], [41.1, 27.0], [41.2, 27.0], [41.3, 28.0], [41.4, 28.0], [41.5, 28.0], [41.6, 28.0], [41.7, 28.0], [41.8, 28.0], [41.9, 28.0], [42.0, 29.0], [42.1, 29.0], [42.2, 29.0], [42.3, 29.0], [42.4, 29.0], [42.5, 29.0], [42.6, 30.0], [42.7, 30.0], [42.8, 30.0], [42.9, 30.0], [43.0, 31.0], [43.1, 31.0], [43.2, 31.0], [43.3, 32.0], [43.4, 32.0], [43.5, 32.0], [43.6, 33.0], [43.7, 33.0], [43.8, 33.0], [43.9, 33.0], [44.0, 34.0], [44.1, 34.0], [44.2, 35.0], [44.3, 35.0], [44.4, 36.0], [44.5, 37.0], [44.6, 37.0], [44.7, 38.0], [44.8, 39.0], [44.9, 39.0], [45.0, 40.0], [45.1, 41.0], [45.2, 44.0], [45.3, 45.0], [45.4, 49.0], [45.5, 55.0], [45.6, 61.0], [45.7, 79.0], [45.8, 99.0], [45.9, 106.0], [46.0, 109.0], [46.1, 110.0], [46.2, 111.0], [46.3, 112.0], [46.4, 114.0], [46.5, 114.0], [46.6, 115.0], [46.7, 116.0], [46.8, 116.0], [46.9, 117.0], [47.0, 117.0], [47.1, 118.0], [47.2, 118.0], [47.3, 119.0], [47.4, 119.0], [47.5, 120.0], [47.6, 121.0], [47.7, 123.0], [47.8, 123.0], [47.9, 124.0], [48.0, 125.0], [48.1, 126.0], [48.2, 127.0], [48.3, 128.0], [48.4, 128.0], [48.5, 130.0], [48.6, 130.0], [48.7, 131.0], [48.8, 131.0], [48.9, 131.0], [49.0, 132.0], [49.1, 132.0], [49.2, 132.0], [49.3, 133.0], [49.4, 134.0], [49.5, 135.0], [49.6, 135.0], [49.7, 136.0], [49.8, 136.0], [49.9, 137.0], [50.0, 138.0], [50.1, 138.0], [50.2, 139.0], [50.3, 140.0], [50.4, 140.0], [50.5, 142.0], [50.6, 142.0], [50.7, 143.0], [50.8, 144.0], [50.9, 144.0], [51.0, 146.0], [51.1, 147.0], [51.2, 147.0], [51.3, 148.0], [51.4, 149.0], [51.5, 149.0], [51.6, 151.0], [51.7, 151.0], [51.8, 152.0], [51.9, 152.0], [52.0, 153.0], [52.1, 154.0], [52.2, 155.0], [52.3, 157.0], [52.4, 157.0], [52.5, 158.0], [52.6, 158.0], [52.7, 159.0], [52.8, 159.0], [52.9, 160.0], [53.0, 160.0], [53.1, 161.0], [53.2, 162.0], [53.3, 163.0], [53.4, 163.0], [53.5, 163.0], [53.6, 164.0], [53.7, 165.0], [53.8, 165.0], [53.9, 166.0], [54.0, 167.0], [54.1, 168.0], [54.2, 169.0], [54.3, 170.0], [54.4, 170.0], [54.5, 171.0], [54.6, 172.0], [54.7, 172.0], [54.8, 173.0], [54.9, 174.0], [55.0, 175.0], [55.1, 176.0], [55.2, 176.0], [55.3, 177.0], [55.4, 178.0], [55.5, 180.0], [55.6, 181.0], [55.7, 182.0], [55.8, 182.0], [55.9, 184.0], [56.0, 184.0], [56.1, 186.0], [56.2, 187.0], [56.3, 188.0], [56.4, 189.0], [56.5, 189.0], [56.6, 190.0], [56.7, 191.0], [56.8, 191.0], [56.9, 192.0], [57.0, 193.0], [57.1, 194.0], [57.2, 194.0], [57.3, 195.0], [57.4, 196.0], [57.5, 197.0], [57.6, 197.0], [57.7, 199.0], [57.8, 199.0], [57.9, 200.0], [58.0, 201.0], [58.1, 202.0], [58.2, 202.0], [58.3, 203.0], [58.4, 204.0], [58.5, 205.0], [58.6, 206.0], [58.7, 206.0], [58.8, 207.0], [58.9, 208.0], [59.0, 209.0], [59.1, 210.0], [59.2, 211.0], [59.3, 212.0], [59.4, 213.0], [59.5, 215.0], [59.6, 215.0], [59.7, 216.0], [59.8, 217.0], [59.9, 219.0], [60.0, 221.0], [60.1, 222.0], [60.2, 223.0], [60.3, 224.0], [60.4, 225.0], [60.5, 226.0], [60.6, 226.0], [60.7, 227.0], [60.8, 228.0], [60.9, 229.0], [61.0, 230.0], [61.1, 231.0], [61.2, 231.0], [61.3, 233.0], [61.4, 234.0], [61.5, 234.0], [61.6, 235.0], [61.7, 236.0], [61.8, 237.0], [61.9, 238.0], [62.0, 240.0], [62.1, 241.0], [62.2, 242.0], [62.3, 242.0], [62.4, 243.0], [62.5, 244.0], [62.6, 245.0], [62.7, 245.0], [62.8, 247.0], [62.9, 247.0], [63.0, 249.0], [63.1, 250.0], [63.2, 251.0], [63.3, 251.0], [63.4, 252.0], [63.5, 253.0], [63.6, 254.0], [63.7, 254.0], [63.8, 256.0], [63.9, 257.0], [64.0, 258.0], [64.1, 259.0], [64.2, 260.0], [64.3, 261.0], [64.4, 261.0], [64.5, 262.0], [64.6, 263.0], [64.7, 263.0], [64.8, 265.0], [64.9, 266.0], [65.0, 266.0], [65.1, 268.0], [65.2, 269.0], [65.3, 270.0], [65.4, 270.0], [65.5, 271.0], [65.6, 272.0], [65.7, 273.0], [65.8, 274.0], [65.9, 275.0], [66.0, 276.0], [66.1, 277.0], [66.2, 277.0], [66.3, 278.0], [66.4, 279.0], [66.5, 280.0], [66.6, 281.0], [66.7, 282.0], [66.8, 283.0], [66.9, 285.0], [67.0, 287.0], [67.1, 287.0], [67.2, 289.0], [67.3, 290.0], [67.4, 291.0], [67.5, 292.0], [67.6, 293.0], [67.7, 294.0], [67.8, 295.0], [67.9, 296.0], [68.0, 297.0], [68.1, 297.0], [68.2, 299.0], [68.3, 300.0], [68.4, 301.0], [68.5, 303.0], [68.6, 304.0], [68.7, 305.0], [68.8, 306.0], [68.9, 307.0], [69.0, 308.0], [69.1, 309.0], [69.2, 310.0], [69.3, 311.0], [69.4, 313.0], [69.5, 314.0], [69.6, 314.0], [69.7, 316.0], [69.8, 317.0], [69.9, 318.0], [70.0, 318.0], [70.1, 319.0], [70.2, 319.0], [70.3, 320.0], [70.4, 320.0], [70.5, 322.0], [70.6, 322.0], [70.7, 324.0], [70.8, 324.0], [70.9, 325.0], [71.0, 327.0], [71.1, 328.0], [71.2, 329.0], [71.3, 329.0], [71.4, 331.0], [71.5, 332.0], [71.6, 334.0], [71.7, 335.0], [71.8, 336.0], [71.9, 336.0], [72.0, 337.0], [72.1, 338.0], [72.2, 340.0], [72.3, 341.0], [72.4, 342.0], [72.5, 343.0], [72.6, 344.0], [72.7, 345.0], [72.8, 348.0], [72.9, 349.0], [73.0, 350.0], [73.1, 350.0], [73.2, 351.0], [73.3, 352.0], [73.4, 353.0], [73.5, 354.0], [73.6, 356.0], [73.7, 357.0], [73.8, 358.0], [73.9, 359.0], [74.0, 359.0], [74.1, 360.0], [74.2, 361.0], [74.3, 362.0], [74.4, 362.0], [74.5, 364.0], [74.6, 365.0], [74.7, 366.0], [74.8, 367.0], [74.9, 368.0], [75.0, 369.0], [75.1, 370.0], [75.2, 374.0], [75.3, 374.0], [75.4, 376.0], [75.5, 377.0], [75.6, 379.0], [75.7, 380.0], [75.8, 381.0], [75.9, 381.0], [76.0, 382.0], [76.1, 383.0], [76.2, 384.0], [76.3, 385.0], [76.4, 386.0], [76.5, 388.0], [76.6, 390.0], [76.7, 391.0], [76.8, 394.0], [76.9, 395.0], [77.0, 396.0], [77.1, 398.0], [77.2, 400.0], [77.3, 401.0], [77.4, 402.0], [77.5, 404.0], [77.6, 406.0], [77.7, 406.0], [77.8, 407.0], [77.9, 408.0], [78.0, 410.0], [78.1, 412.0], [78.2, 412.0], [78.3, 413.0], [78.4, 415.0], [78.5, 417.0], [78.6, 418.0], [78.7, 420.0], [78.8, 421.0], [78.9, 423.0], [79.0, 425.0], [79.1, 427.0], [79.2, 430.0], [79.3, 431.0], [79.4, 433.0], [79.5, 435.0], [79.6, 436.0], [79.7, 438.0], [79.8, 439.0], [79.9, 440.0], [80.0, 441.0], [80.1, 443.0], [80.2, 444.0], [80.3, 446.0], [80.4, 448.0], [80.5, 449.0], [80.6, 451.0], [80.7, 452.0], [80.8, 454.0], [80.9, 456.0], [81.0, 458.0], [81.1, 458.0], [81.2, 461.0], [81.3, 463.0], [81.4, 464.0], [81.5, 466.0], [81.6, 469.0], [81.7, 470.0], [81.8, 471.0], [81.9, 472.0], [82.0, 474.0], [82.1, 475.0], [82.2, 478.0], [82.3, 481.0], [82.4, 482.0], [82.5, 484.0], [82.6, 486.0], [82.7, 488.0], [82.8, 489.0], [82.9, 492.0], [83.0, 492.0], [83.1, 493.0], [83.2, 496.0], [83.3, 498.0], [83.4, 499.0], [83.5, 502.0], [83.6, 506.0], [83.7, 509.0], [83.8, 512.0], [83.9, 514.0], [84.0, 516.0], [84.1, 518.0], [84.2, 521.0], [84.3, 524.0], [84.4, 528.0], [84.5, 532.0], [84.6, 534.0], [84.7, 535.0], [84.8, 537.0], [84.9, 540.0], [85.0, 545.0], [85.1, 547.0], [85.2, 549.0], [85.3, 551.0], [85.4, 553.0], [85.5, 556.0], [85.6, 559.0], [85.7, 560.0], [85.8, 561.0], [85.9, 564.0], [86.0, 569.0], [86.1, 570.0], [86.2, 573.0], [86.3, 575.0], [86.4, 577.0], [86.5, 582.0], [86.6, 585.0], [86.7, 591.0], [86.8, 592.0], [86.9, 592.0], [87.0, 595.0], [87.1, 598.0], [87.2, 599.0], [87.3, 605.0], [87.4, 608.0], [87.5, 613.0], [87.6, 619.0], [87.7, 624.0], [87.8, 627.0], [87.9, 630.0], [88.0, 634.0], [88.1, 638.0], [88.2, 644.0], [88.3, 650.0], [88.4, 651.0], [88.5, 654.0], [88.6, 657.0], [88.7, 658.0], [88.8, 660.0], [88.9, 667.0], [89.0, 671.0], [89.1, 672.0], [89.2, 677.0], [89.3, 680.0], [89.4, 683.0], [89.5, 686.0], [89.6, 689.0], [89.7, 692.0], [89.8, 696.0], [89.9, 698.0], [90.0, 699.0], [90.1, 702.0], [90.2, 704.0], [90.3, 707.0], [90.4, 709.0], [90.5, 712.0], [90.6, 714.0], [90.7, 716.0], [90.8, 719.0], [90.9, 723.0], [91.0, 728.0], [91.1, 731.0], [91.2, 733.0], [91.3, 740.0], [91.4, 743.0], [91.5, 749.0], [91.6, 752.0], [91.7, 754.0], [91.8, 759.0], [91.9, 763.0], [92.0, 766.0], [92.1, 771.0], [92.2, 775.0], [92.3, 780.0], [92.4, 785.0], [92.5, 790.0], [92.6, 794.0], [92.7, 797.0], [92.8, 801.0], [92.9, 805.0], [93.0, 812.0], [93.1, 823.0], [93.2, 833.0], [93.3, 842.0], [93.4, 851.0], [93.5, 858.0], [93.6, 863.0], [93.7, 867.0], [93.8, 871.0], [93.9, 876.0], [94.0, 881.0], [94.1, 884.0], [94.2, 886.0], [94.3, 892.0], [94.4, 907.0], [94.5, 912.0], [94.6, 930.0], [94.7, 937.0], [94.8, 947.0], [94.9, 958.0], [95.0, 963.0], [95.1, 970.0], [95.2, 976.0], [95.3, 981.0], [95.4, 985.0], [95.5, 992.0], [95.6, 997.0], [95.7, 1009.0], [95.8, 1013.0], [95.9, 1028.0], [96.0, 1033.0], [96.1, 1043.0], [96.2, 1058.0], [96.3, 1067.0], [96.4, 1089.0], [96.5, 1109.0], [96.6, 1116.0], [96.7, 1144.0], [96.8, 1173.0], [96.9, 1185.0], [97.0, 1200.0], [97.1, 1205.0], [97.2, 1214.0], [97.3, 1225.0], [97.4, 1246.0], [97.5, 1263.0], [97.6, 1280.0], [97.7, 1286.0], [97.8, 1305.0], [97.9, 1322.0], [98.0, 1336.0], [98.1, 1385.0], [98.2, 1414.0], [98.3, 1429.0], [98.4, 1436.0], [98.5, 1461.0], [98.6, 1496.0], [98.7, 1520.0], [98.8, 1533.0], [98.9, 1575.0], [99.0, 1622.0], [99.1, 1720.0], [99.2, 1834.0], [99.3, 1919.0], [99.4, 2032.0], [99.5, 2091.0], [99.6, 2184.0], [99.7, 2268.0], [99.8, 2315.0], [99.9, 2457.0], [100.0, 2758.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2410.0, "series": [{"data": [[0.0, 2410.0], [600.0, 147.0], [700.0, 144.0], [800.0, 85.0], [900.0, 65.0], [1000.0, 43.0], [1100.0, 30.0], [1200.0, 41.0], [1300.0, 22.0], [1400.0, 23.0], [1500.0, 18.0], [100.0, 632.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 7.0], [1900.0, 5.0], [2000.0, 6.0], [2100.0, 7.0], [2200.0, 6.0], [2300.0, 6.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 3.0], [200.0, 549.0], [300.0, 471.0], [400.0, 327.0], [500.0, 201.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 72.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4389.0, "series": [{"data": [[0.0, 4389.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 801.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 72.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.953846153846154, "minX": 1.60402656E12, "maxY": 10.0, "series": [{"data": [[1.60402656E12, 9.975274725274733], [1.60402662E12, 10.0], [1.60402668E12, 9.953846153846154]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402668E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.69769216097717, "minX": 1.0, "maxY": 1238.0, "series": [{"data": [[4.0, 271.25], [8.0, 727.0], [2.0, 1003.0], [1.0, 974.0], [9.0, 647.5], [10.0, 257.69769216097717], [5.0, 1238.0], [3.0, 633.0], [6.0, 710.0], [7.0, 1214.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.984606613454945, 259.23223109083966]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8575.833333333334, "minX": 1.60402656E12, "maxY": 1862071.95, "series": [{"data": [[1.60402656E12, 1692885.4166666667], [1.60402662E12, 1862071.95], [1.60402668E12, 1016979.1333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402656E12, 12559.366666666667], [1.60402662E12, 24355.75], [1.60402668E12, 8575.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402668E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 212.3285058283292, "minX": 1.60402656E12, "maxY": 327.3255494505486, "series": [{"data": [[1.60402656E12, 327.3255494505486], [1.60402662E12, 212.3285058283292], [1.60402668E12, 293.73538461538453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402668E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 212.0042387848819, "minX": 1.60402656E12, "maxY": 326.63324175824175, "series": [{"data": [[1.60402656E12, 326.63324175824175], [1.60402662E12, 212.0042387848819], [1.60402668E12, 293.23384615384623]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402668E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004102564102564103, "minX": 1.60402656E12, "maxY": 0.06868131868131881, "series": [{"data": [[1.60402656E12, 0.06868131868131881], [1.60402662E12, 0.004945249028611811], [1.60402668E12, 0.004102564102564103]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402668E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60402656E12, "maxY": 2758.0, "series": [{"data": [[1.60402656E12, 2757.0], [1.60402662E12, 2758.0], [1.60402668E12, 2547.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402656E12, 6.0], [1.60402662E12, 6.0], [1.60402668E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402656E12, 6.0], [1.60402662E12, 6.0], [1.60402668E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402656E12, 6.0], [1.60402662E12, 6.0], [1.60402668E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402656E12, 6.0], [1.60402662E12, 5.0], [1.60402668E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402656E12, 204.0], [1.60402662E12, 118.0], [1.60402668E12, 204.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402668E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 3.0, "maxY": 1458.0, "series": [{"data": [[3.0, 1458.0], [4.0, 992.5], [7.0, 637.0], [8.0, 746.5], [9.0, 908.0], [10.0, 923.5], [11.0, 454.5], [12.0, 640.5], [13.0, 635.0], [14.0, 693.5], [15.0, 476.0], [16.0, 701.5], [17.0, 469.0], [18.0, 434.0], [19.0, 444.0], [20.0, 150.5], [21.0, 430.0], [22.0, 480.0], [24.0, 370.5], [25.0, 366.0], [26.0, 28.5], [27.0, 33.0], [28.0, 27.0], [29.0, 288.0], [30.0, 13.0], [31.0, 253.0], [33.0, 59.0], [32.0, 242.0], [34.0, 281.0], [37.0, 188.5], [36.0, 169.0], [39.0, 205.0], [38.0, 218.5], [40.0, 43.5], [41.0, 305.0], [42.0, 168.5], [43.0, 168.5], [44.0, 22.0], [45.0, 31.0], [47.0, 23.0], [46.0, 193.0], [50.0, 167.5], [51.0, 126.0], [52.0, 153.0], [54.0, 16.5], [56.0, 16.0], [57.0, 25.0], [58.0, 161.0], [61.0, 159.0], [63.0, 126.0], [64.0, 137.0], [71.0, 27.0], [69.0, 20.0], [75.0, 18.0], [72.0, 19.0], [73.0, 20.0], [77.0, 16.0], [83.0, 21.0], [80.0, 27.0], [86.0, 13.0], [88.0, 13.5], [110.0, 17.5], [109.0, 17.0], [115.0, 15.0], [114.0, 19.0], [121.0, 15.0], [144.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 3.0, "maxY": 1454.0, "series": [{"data": [[3.0, 1454.0], [4.0, 992.5], [7.0, 637.0], [8.0, 744.5], [9.0, 899.5], [10.0, 923.0], [11.0, 453.5], [12.0, 639.5], [13.0, 633.5], [14.0, 693.0], [15.0, 475.5], [16.0, 701.0], [17.0, 469.0], [18.0, 432.5], [19.0, 444.0], [20.0, 150.0], [21.0, 430.0], [22.0, 479.5], [24.0, 370.5], [25.0, 366.0], [26.0, 28.5], [27.0, 33.0], [28.0, 27.0], [29.0, 288.0], [30.0, 13.0], [31.0, 252.0], [33.0, 59.0], [32.0, 242.0], [34.0, 281.0], [37.0, 188.5], [36.0, 169.0], [39.0, 205.0], [38.0, 218.0], [40.0, 43.5], [41.0, 304.0], [42.0, 168.5], [43.0, 168.5], [44.0, 22.0], [45.0, 31.0], [47.0, 23.0], [46.0, 193.0], [50.0, 167.5], [51.0, 126.0], [52.0, 153.0], [54.0, 16.5], [56.0, 16.0], [57.0, 25.0], [58.0, 161.0], [61.0, 159.0], [63.0, 126.0], [64.0, 137.0], [71.0, 27.0], [69.0, 20.0], [75.0, 18.0], [72.0, 19.0], [73.0, 20.0], [77.0, 16.0], [83.0, 21.0], [80.0, 27.0], [86.0, 13.0], [88.0, 13.5], [110.0, 17.5], [109.0, 17.0], [115.0, 15.0], [114.0, 19.0], [121.0, 15.0], [144.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 144.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.083333333333332, "minX": 1.60402656E12, "maxY": 47.18333333333333, "series": [{"data": [[1.60402656E12, 24.433333333333334], [1.60402662E12, 47.18333333333333], [1.60402668E12, 16.083333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402668E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.25, "minX": 1.60402656E12, "maxY": 47.18333333333333, "series": [{"data": [[1.60402656E12, 24.266666666666666], [1.60402662E12, 47.18333333333333], [1.60402668E12, 16.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402668E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.25, "minX": 1.60402656E12, "maxY": 47.18333333333333, "series": [{"data": [[1.60402656E12, 24.266666666666666], [1.60402662E12, 47.18333333333333], [1.60402668E12, 16.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402668E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.25, "minX": 1.60402656E12, "maxY": 47.18333333333333, "series": [{"data": [[1.60402656E12, 24.266666666666666], [1.60402662E12, 47.18333333333333], [1.60402668E12, 16.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402668E12, "title": "Total Transactions Per Second"}},
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

