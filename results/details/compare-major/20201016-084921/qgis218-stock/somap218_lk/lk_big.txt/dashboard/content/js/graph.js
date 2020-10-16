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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 7696.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 11.0], [17.4, 11.0], [17.5, 11.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 16.0], [25.5, 16.0], [25.6, 16.0], [25.7, 16.0], [25.8, 16.0], [25.9, 16.0], [26.0, 16.0], [26.1, 16.0], [26.2, 16.0], [26.3, 16.0], [26.4, 16.0], [26.5, 16.0], [26.6, 16.0], [26.7, 16.0], [26.8, 16.0], [26.9, 16.0], [27.0, 16.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 18.0], [28.5, 18.0], [28.6, 18.0], [28.7, 18.0], [28.8, 18.0], [28.9, 18.0], [29.0, 18.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 19.0], [29.8, 19.0], [29.9, 19.0], [30.0, 19.0], [30.1, 19.0], [30.2, 19.0], [30.3, 19.0], [30.4, 19.0], [30.5, 19.0], [30.6, 19.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 20.0], [31.1, 20.0], [31.2, 20.0], [31.3, 20.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 21.0], [32.7, 21.0], [32.8, 21.0], [32.9, 21.0], [33.0, 21.0], [33.1, 21.0], [33.2, 21.0], [33.3, 21.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 22.0], [34.1, 22.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 23.0], [35.3, 23.0], [35.4, 23.0], [35.5, 23.0], [35.6, 23.0], [35.7, 23.0], [35.8, 23.0], [35.9, 23.0], [36.0, 23.0], [36.1, 23.0], [36.2, 24.0], [36.3, 24.0], [36.4, 24.0], [36.5, 24.0], [36.6, 24.0], [36.7, 24.0], [36.8, 24.0], [36.9, 24.0], [37.0, 24.0], [37.1, 24.0], [37.2, 24.0], [37.3, 25.0], [37.4, 25.0], [37.5, 25.0], [37.6, 25.0], [37.7, 25.0], [37.8, 25.0], [37.9, 25.0], [38.0, 25.0], [38.1, 25.0], [38.2, 26.0], [38.3, 26.0], [38.4, 26.0], [38.5, 26.0], [38.6, 26.0], [38.7, 26.0], [38.8, 26.0], [38.9, 27.0], [39.0, 27.0], [39.1, 27.0], [39.2, 27.0], [39.3, 27.0], [39.4, 27.0], [39.5, 27.0], [39.6, 27.0], [39.7, 28.0], [39.8, 28.0], [39.9, 28.0], [40.0, 28.0], [40.1, 28.0], [40.2, 28.0], [40.3, 28.0], [40.4, 28.0], [40.5, 29.0], [40.6, 29.0], [40.7, 29.0], [40.8, 29.0], [40.9, 30.0], [41.0, 30.0], [41.1, 30.0], [41.2, 30.0], [41.3, 30.0], [41.4, 30.0], [41.5, 31.0], [41.6, 31.0], [41.7, 31.0], [41.8, 31.0], [41.9, 32.0], [42.0, 32.0], [42.1, 32.0], [42.2, 32.0], [42.3, 32.0], [42.4, 33.0], [42.5, 33.0], [42.6, 33.0], [42.7, 33.0], [42.8, 34.0], [42.9, 34.0], [43.0, 35.0], [43.1, 35.0], [43.2, 35.0], [43.3, 36.0], [43.4, 36.0], [43.5, 36.0], [43.6, 36.0], [43.7, 37.0], [43.8, 38.0], [43.9, 38.0], [44.0, 38.0], [44.1, 39.0], [44.2, 40.0], [44.3, 40.0], [44.4, 41.0], [44.5, 42.0], [44.6, 43.0], [44.7, 44.0], [44.8, 44.0], [44.9, 45.0], [45.0, 46.0], [45.1, 48.0], [45.2, 50.0], [45.3, 52.0], [45.4, 54.0], [45.5, 59.0], [45.6, 65.0], [45.7, 78.0], [45.8, 96.0], [45.9, 105.0], [46.0, 110.0], [46.1, 113.0], [46.2, 114.0], [46.3, 115.0], [46.4, 115.0], [46.5, 116.0], [46.6, 117.0], [46.7, 118.0], [46.8, 119.0], [46.9, 120.0], [47.0, 122.0], [47.1, 123.0], [47.2, 123.0], [47.3, 125.0], [47.4, 126.0], [47.5, 127.0], [47.6, 128.0], [47.7, 129.0], [47.8, 130.0], [47.9, 132.0], [48.0, 132.0], [48.1, 133.0], [48.2, 134.0], [48.3, 135.0], [48.4, 135.0], [48.5, 137.0], [48.6, 137.0], [48.7, 139.0], [48.8, 140.0], [48.9, 141.0], [49.0, 142.0], [49.1, 144.0], [49.2, 144.0], [49.3, 146.0], [49.4, 146.0], [49.5, 147.0], [49.6, 148.0], [49.7, 149.0], [49.8, 149.0], [49.9, 150.0], [50.0, 150.0], [50.1, 151.0], [50.2, 152.0], [50.3, 153.0], [50.4, 153.0], [50.5, 154.0], [50.6, 156.0], [50.7, 159.0], [50.8, 160.0], [50.9, 160.0], [51.0, 161.0], [51.1, 161.0], [51.2, 162.0], [51.3, 162.0], [51.4, 163.0], [51.5, 164.0], [51.6, 165.0], [51.7, 165.0], [51.8, 166.0], [51.9, 167.0], [52.0, 168.0], [52.1, 169.0], [52.2, 170.0], [52.3, 171.0], [52.4, 172.0], [52.5, 172.0], [52.6, 174.0], [52.7, 175.0], [52.8, 176.0], [52.9, 177.0], [53.0, 178.0], [53.1, 179.0], [53.2, 180.0], [53.3, 181.0], [53.4, 182.0], [53.5, 182.0], [53.6, 183.0], [53.7, 184.0], [53.8, 185.0], [53.9, 186.0], [54.0, 187.0], [54.1, 188.0], [54.2, 188.0], [54.3, 189.0], [54.4, 190.0], [54.5, 190.0], [54.6, 192.0], [54.7, 192.0], [54.8, 194.0], [54.9, 194.0], [55.0, 196.0], [55.1, 196.0], [55.2, 197.0], [55.3, 197.0], [55.4, 198.0], [55.5, 199.0], [55.6, 200.0], [55.7, 201.0], [55.8, 202.0], [55.9, 203.0], [56.0, 203.0], [56.1, 204.0], [56.2, 205.0], [56.3, 205.0], [56.4, 206.0], [56.5, 207.0], [56.6, 209.0], [56.7, 210.0], [56.8, 211.0], [56.9, 211.0], [57.0, 212.0], [57.1, 213.0], [57.2, 214.0], [57.3, 215.0], [57.4, 216.0], [57.5, 217.0], [57.6, 218.0], [57.7, 219.0], [57.8, 220.0], [57.9, 222.0], [58.0, 223.0], [58.1, 223.0], [58.2, 224.0], [58.3, 224.0], [58.4, 226.0], [58.5, 227.0], [58.6, 228.0], [58.7, 229.0], [58.8, 230.0], [58.9, 231.0], [59.0, 232.0], [59.1, 233.0], [59.2, 233.0], [59.3, 234.0], [59.4, 235.0], [59.5, 236.0], [59.6, 237.0], [59.7, 238.0], [59.8, 239.0], [59.9, 239.0], [60.0, 240.0], [60.1, 240.0], [60.2, 241.0], [60.3, 243.0], [60.4, 244.0], [60.5, 245.0], [60.6, 247.0], [60.7, 248.0], [60.8, 249.0], [60.9, 250.0], [61.0, 251.0], [61.1, 252.0], [61.2, 253.0], [61.3, 254.0], [61.4, 255.0], [61.5, 256.0], [61.6, 256.0], [61.7, 257.0], [61.8, 257.0], [61.9, 258.0], [62.0, 259.0], [62.1, 260.0], [62.2, 262.0], [62.3, 263.0], [62.4, 264.0], [62.5, 264.0], [62.6, 265.0], [62.7, 267.0], [62.8, 267.0], [62.9, 267.0], [63.0, 268.0], [63.1, 269.0], [63.2, 270.0], [63.3, 270.0], [63.4, 271.0], [63.5, 272.0], [63.6, 273.0], [63.7, 274.0], [63.8, 275.0], [63.9, 277.0], [64.0, 277.0], [64.1, 278.0], [64.2, 279.0], [64.3, 280.0], [64.4, 281.0], [64.5, 281.0], [64.6, 283.0], [64.7, 284.0], [64.8, 285.0], [64.9, 286.0], [65.0, 287.0], [65.1, 288.0], [65.2, 289.0], [65.3, 290.0], [65.4, 291.0], [65.5, 292.0], [65.6, 293.0], [65.7, 295.0], [65.8, 297.0], [65.9, 298.0], [66.0, 298.0], [66.1, 299.0], [66.2, 299.0], [66.3, 300.0], [66.4, 301.0], [66.5, 302.0], [66.6, 303.0], [66.7, 305.0], [66.8, 306.0], [66.9, 307.0], [67.0, 308.0], [67.1, 308.0], [67.2, 309.0], [67.3, 310.0], [67.4, 311.0], [67.5, 313.0], [67.6, 314.0], [67.7, 315.0], [67.8, 316.0], [67.9, 318.0], [68.0, 319.0], [68.1, 321.0], [68.2, 322.0], [68.3, 323.0], [68.4, 325.0], [68.5, 326.0], [68.6, 326.0], [68.7, 327.0], [68.8, 329.0], [68.9, 330.0], [69.0, 331.0], [69.1, 332.0], [69.2, 333.0], [69.3, 333.0], [69.4, 334.0], [69.5, 335.0], [69.6, 337.0], [69.7, 338.0], [69.8, 339.0], [69.9, 340.0], [70.0, 340.0], [70.1, 341.0], [70.2, 342.0], [70.3, 344.0], [70.4, 344.0], [70.5, 345.0], [70.6, 347.0], [70.7, 348.0], [70.8, 349.0], [70.9, 350.0], [71.0, 350.0], [71.1, 352.0], [71.2, 353.0], [71.3, 354.0], [71.4, 355.0], [71.5, 357.0], [71.6, 358.0], [71.7, 359.0], [71.8, 361.0], [71.9, 362.0], [72.0, 363.0], [72.1, 365.0], [72.2, 366.0], [72.3, 367.0], [72.4, 369.0], [72.5, 369.0], [72.6, 370.0], [72.7, 372.0], [72.8, 373.0], [72.9, 374.0], [73.0, 376.0], [73.1, 377.0], [73.2, 378.0], [73.3, 379.0], [73.4, 380.0], [73.5, 382.0], [73.6, 383.0], [73.7, 384.0], [73.8, 385.0], [73.9, 387.0], [74.0, 388.0], [74.1, 389.0], [74.2, 390.0], [74.3, 392.0], [74.4, 393.0], [74.5, 394.0], [74.6, 396.0], [74.7, 397.0], [74.8, 398.0], [74.9, 399.0], [75.0, 400.0], [75.1, 401.0], [75.2, 404.0], [75.3, 406.0], [75.4, 406.0], [75.5, 408.0], [75.6, 409.0], [75.7, 409.0], [75.8, 410.0], [75.9, 411.0], [76.0, 412.0], [76.1, 414.0], [76.2, 415.0], [76.3, 417.0], [76.4, 418.0], [76.5, 420.0], [76.6, 422.0], [76.7, 423.0], [76.8, 425.0], [76.9, 427.0], [77.0, 429.0], [77.1, 430.0], [77.2, 431.0], [77.3, 433.0], [77.4, 433.0], [77.5, 435.0], [77.6, 436.0], [77.7, 437.0], [77.8, 440.0], [77.9, 441.0], [78.0, 442.0], [78.1, 444.0], [78.2, 447.0], [78.3, 449.0], [78.4, 450.0], [78.5, 452.0], [78.6, 454.0], [78.7, 456.0], [78.8, 458.0], [78.9, 459.0], [79.0, 462.0], [79.1, 463.0], [79.2, 464.0], [79.3, 465.0], [79.4, 467.0], [79.5, 468.0], [79.6, 469.0], [79.7, 471.0], [79.8, 472.0], [79.9, 474.0], [80.0, 476.0], [80.1, 478.0], [80.2, 480.0], [80.3, 481.0], [80.4, 483.0], [80.5, 484.0], [80.6, 486.0], [80.7, 487.0], [80.8, 489.0], [80.9, 490.0], [81.0, 492.0], [81.1, 494.0], [81.2, 496.0], [81.3, 500.0], [81.4, 501.0], [81.5, 502.0], [81.6, 504.0], [81.7, 505.0], [81.8, 508.0], [81.9, 511.0], [82.0, 512.0], [82.1, 513.0], [82.2, 514.0], [82.3, 515.0], [82.4, 516.0], [82.5, 521.0], [82.6, 522.0], [82.7, 523.0], [82.8, 526.0], [82.9, 527.0], [83.0, 529.0], [83.1, 532.0], [83.2, 534.0], [83.3, 535.0], [83.4, 537.0], [83.5, 539.0], [83.6, 542.0], [83.7, 544.0], [83.8, 546.0], [83.9, 548.0], [84.0, 551.0], [84.1, 552.0], [84.2, 554.0], [84.3, 557.0], [84.4, 562.0], [84.5, 563.0], [84.6, 568.0], [84.7, 570.0], [84.8, 572.0], [84.9, 574.0], [85.0, 576.0], [85.1, 578.0], [85.2, 582.0], [85.3, 584.0], [85.4, 587.0], [85.5, 588.0], [85.6, 591.0], [85.7, 593.0], [85.8, 595.0], [85.9, 596.0], [86.0, 601.0], [86.1, 603.0], [86.2, 608.0], [86.3, 611.0], [86.4, 613.0], [86.5, 619.0], [86.6, 621.0], [86.7, 625.0], [86.8, 629.0], [86.9, 630.0], [87.0, 634.0], [87.1, 638.0], [87.2, 641.0], [87.3, 645.0], [87.4, 647.0], [87.5, 649.0], [87.6, 652.0], [87.7, 654.0], [87.8, 658.0], [87.9, 662.0], [88.0, 663.0], [88.1, 668.0], [88.2, 672.0], [88.3, 675.0], [88.4, 679.0], [88.5, 685.0], [88.6, 690.0], [88.7, 692.0], [88.8, 696.0], [88.9, 697.0], [89.0, 702.0], [89.1, 704.0], [89.2, 709.0], [89.3, 712.0], [89.4, 716.0], [89.5, 719.0], [89.6, 719.0], [89.7, 723.0], [89.8, 728.0], [89.9, 734.0], [90.0, 737.0], [90.1, 742.0], [90.2, 745.0], [90.3, 746.0], [90.4, 749.0], [90.5, 755.0], [90.6, 757.0], [90.7, 758.0], [90.8, 762.0], [90.9, 767.0], [91.0, 772.0], [91.1, 779.0], [91.2, 784.0], [91.3, 787.0], [91.4, 791.0], [91.5, 794.0], [91.6, 797.0], [91.7, 801.0], [91.8, 806.0], [91.9, 811.0], [92.0, 819.0], [92.1, 823.0], [92.2, 830.0], [92.3, 834.0], [92.4, 843.0], [92.5, 850.0], [92.6, 855.0], [92.7, 864.0], [92.8, 872.0], [92.9, 882.0], [93.0, 889.0], [93.1, 893.0], [93.2, 900.0], [93.3, 915.0], [93.4, 922.0], [93.5, 932.0], [93.6, 936.0], [93.7, 940.0], [93.8, 948.0], [93.9, 963.0], [94.0, 968.0], [94.1, 983.0], [94.2, 988.0], [94.3, 997.0], [94.4, 1001.0], [94.5, 1008.0], [94.6, 1017.0], [94.7, 1028.0], [94.8, 1039.0], [94.9, 1043.0], [95.0, 1051.0], [95.1, 1062.0], [95.2, 1065.0], [95.3, 1079.0], [95.4, 1085.0], [95.5, 1095.0], [95.6, 1100.0], [95.7, 1105.0], [95.8, 1116.0], [95.9, 1130.0], [96.0, 1139.0], [96.1, 1149.0], [96.2, 1167.0], [96.3, 1179.0], [96.4, 1191.0], [96.5, 1196.0], [96.6, 1202.0], [96.7, 1212.0], [96.8, 1232.0], [96.9, 1247.0], [97.0, 1264.0], [97.1, 1284.0], [97.2, 1299.0], [97.3, 1309.0], [97.4, 1334.0], [97.5, 1352.0], [97.6, 1379.0], [97.7, 1404.0], [97.8, 1426.0], [97.9, 1445.0], [98.0, 1474.0], [98.1, 1487.0], [98.2, 1501.0], [98.3, 1526.0], [98.4, 1547.0], [98.5, 1603.0], [98.6, 1635.0], [98.7, 1671.0], [98.8, 1750.0], [98.9, 1799.0], [99.0, 1831.0], [99.1, 1882.0], [99.2, 1929.0], [99.3, 2100.0], [99.4, 2170.0], [99.5, 2244.0], [99.6, 2348.0], [99.7, 2492.0], [99.8, 2827.0], [99.9, 3011.0], [100.0, 7696.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2412.0, "series": [{"data": [[0.0, 2412.0], [600.0, 158.0], [700.0, 143.0], [800.0, 79.0], [900.0, 61.0], [1000.0, 63.0], [1100.0, 52.0], [1200.0, 36.0], [1300.0, 24.0], [1400.0, 27.0], [1500.0, 16.0], [100.0, 513.0], [1600.0, 13.0], [1700.0, 10.0], [1800.0, 11.0], [1900.0, 5.0], [2000.0, 3.0], [2100.0, 7.0], [2300.0, 3.0], [2200.0, 8.0], [2400.0, 4.0], [2600.0, 4.0], [2800.0, 4.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 559.0], [3700.0, 1.0], [4500.0, 1.0], [300.0, 459.0], [400.0, 335.0], [7600.0, 1.0], [500.0, 246.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 95.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4279.0, "series": [{"data": [[0.0, 4279.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 888.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 95.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.897494305239178, "minX": 1.60283814E12, "maxY": 10.0, "series": [{"data": [[1.6028382E12, 10.0], [1.60283832E12, 9.897494305239178], [1.60283814E12, 9.92371134020618], [1.60283826E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283832E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 280.03508771929853, "minX": 1.0, "maxY": 1513.0, "series": [{"data": [[4.0, 291.25], [8.0, 670.0], [2.0, 1513.0], [1.0, 1123.0], [9.0, 755.0], [10.0, 280.03508771929853], [5.0, 962.0], [3.0, 655.5], [6.0, 725.5], [7.0, 809.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.984416571645733, 281.48365640440954]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3879.15, "minX": 1.60283814E12, "maxY": 1987770.9666666666, "series": [{"data": [[1.6028382E12, 1855370.3], [1.60283832E12, 430501.0], [1.60283814E12, 298447.25], [1.60283826E12, 1987770.9666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028382E12, 16901.116666666665], [1.60283832E12, 3879.15], [1.60283814E12, 4215.1], [1.60283826E12, 20495.583333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283832E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 253.0669491525419, "minX": 1.60283814E12, "maxY": 337.72209567198155, "series": [{"data": [[1.6028382E12, 303.4666329625884], [1.60283832E12, 337.72209567198155], [1.60283814E12, 279.2], [1.60283826E12, 253.0669491525419]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283832E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 252.6483050847455, "minX": 1.60283814E12, "maxY": 337.1753986332574, "series": [{"data": [[1.6028382E12, 302.810920121335], [1.60283832E12, 337.1753986332574], [1.60283814E12, 278.91134020618557], [1.60283826E12, 252.6483050847455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283832E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0045558086560364445, "minX": 1.60283814E12, "maxY": 0.1731958762886598, "series": [{"data": [[1.6028382E12, 0.005561172901921145], [1.60283832E12, 0.0045558086560364445], [1.60283814E12, 0.1731958762886598], [1.60283826E12, 0.005932203389830519]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283832E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60283814E12, "maxY": 7696.0, "series": [{"data": [[1.6028382E12, 3782.0], [1.60283832E12, 3104.0], [1.60283814E12, 7696.0], [1.60283826E12, 4554.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028382E12, 6.810999528169631], [1.60283832E12, 6.0], [1.60283814E12, 7.0], [1.60283826E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028382E12, 7.0], [1.60283832E12, 6.0], [1.60283814E12, 7.0], [1.60283826E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028382E12, 7.0], [1.60283832E12, 6.0], [1.60283814E12, 7.0], [1.60283826E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028382E12, 5.0], [1.60283832E12, 6.0], [1.60283814E12, 6.0], [1.60283826E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028382E12, 171.0], [1.60283832E12, 37.0], [1.60283814E12, 150.0], [1.60283826E12, 133.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283832E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 3.0, "maxY": 1150.0, "series": [{"data": [[3.0, 1074.0], [4.0, 45.0], [5.0, 1150.0], [6.0, 1019.5], [7.0, 1125.0], [9.0, 461.0], [10.0, 949.5], [11.0, 597.0], [12.0, 580.0], [13.0, 609.0], [14.0, 723.0], [15.0, 678.5], [16.0, 701.0], [17.0, 350.0], [18.0, 390.5], [19.0, 522.0], [20.0, 427.5], [21.0, 451.0], [22.0, 410.0], [23.0, 387.0], [24.0, 329.0], [25.0, 311.0], [26.0, 334.5], [29.0, 28.0], [30.0, 305.5], [33.0, 190.0], [32.0, 28.0], [34.0, 268.0], [35.0, 236.0], [36.0, 280.5], [37.0, 279.0], [38.0, 171.5], [39.0, 165.0], [40.0, 237.0], [43.0, 172.0], [42.0, 52.5], [44.0, 29.0], [45.0, 23.0], [47.0, 188.0], [46.0, 35.5], [49.0, 15.0], [51.0, 201.0], [50.0, 190.5], [52.0, 32.0], [53.0, 146.0], [55.0, 133.0], [54.0, 212.5], [57.0, 21.0], [59.0, 17.0], [60.0, 15.5], [63.0, 17.0], [64.0, 19.0], [67.0, 17.0], [65.0, 27.0], [71.0, 15.0], [69.0, 19.0], [73.0, 14.0], [79.0, 17.0], [78.0, 20.0], [76.0, 21.0], [80.0, 14.5], [84.0, 21.5], [85.0, 21.0], [94.0, 21.0], [95.0, 20.0], [92.0, 19.0], [106.0, 15.0], [112.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 3.0, "maxY": 1149.0, "series": [{"data": [[3.0, 1058.0], [4.0, 45.0], [5.0, 1149.0], [6.0, 1017.0], [7.0, 1118.5], [9.0, 460.0], [10.0, 949.5], [11.0, 597.0], [12.0, 579.0], [13.0, 609.0], [14.0, 718.5], [15.0, 677.0], [16.0, 700.5], [17.0, 350.0], [18.0, 390.5], [19.0, 519.0], [20.0, 427.0], [21.0, 446.0], [22.0, 410.0], [23.0, 387.0], [24.0, 328.0], [25.0, 311.0], [26.0, 334.5], [29.0, 28.0], [30.0, 305.5], [33.0, 190.0], [32.0, 28.0], [34.0, 268.0], [35.0, 236.0], [36.0, 279.5], [37.0, 279.0], [38.0, 171.5], [39.0, 165.0], [40.0, 236.0], [43.0, 172.0], [42.0, 52.5], [44.0, 29.0], [45.0, 23.0], [47.0, 188.0], [46.0, 35.5], [49.0, 15.0], [51.0, 201.0], [50.0, 190.5], [52.0, 32.0], [53.0, 146.0], [55.0, 133.0], [54.0, 212.5], [57.0, 21.0], [59.0, 17.0], [60.0, 15.5], [63.0, 17.0], [64.0, 19.0], [67.0, 17.0], [65.0, 27.0], [71.0, 15.0], [69.0, 19.0], [73.0, 14.0], [79.0, 17.0], [78.0, 20.0], [76.0, 21.0], [80.0, 14.5], [84.0, 21.0], [85.0, 21.0], [94.0, 21.0], [95.0, 20.0], [92.0, 19.0], [106.0, 15.0], [112.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.15, "minX": 1.60283814E12, "maxY": 39.333333333333336, "series": [{"data": [[1.6028382E12, 32.96666666666667], [1.60283832E12, 7.15], [1.60283814E12, 8.25], [1.60283826E12, 39.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283832E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.60283814E12, "maxY": 39.333333333333336, "series": [{"data": [[1.6028382E12, 32.96666666666667], [1.60283832E12, 7.316666666666666], [1.60283814E12, 8.083333333333334], [1.60283826E12, 39.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283832E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.60283814E12, "maxY": 39.333333333333336, "series": [{"data": [[1.6028382E12, 32.96666666666667], [1.60283832E12, 7.316666666666666], [1.60283814E12, 8.083333333333334], [1.60283826E12, 39.333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283832E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.60283814E12, "maxY": 39.333333333333336, "series": [{"data": [[1.6028382E12, 32.96666666666667], [1.60283832E12, 7.316666666666666], [1.60283814E12, 8.083333333333334], [1.60283826E12, 39.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283832E12, "title": "Total Transactions Per Second"}},
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

