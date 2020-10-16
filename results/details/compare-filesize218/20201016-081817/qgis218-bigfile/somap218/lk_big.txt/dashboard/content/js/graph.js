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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 64065.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 8.0], [0.3, 8.0], [0.4, 8.0], [0.5, 8.0], [0.6, 8.0], [0.7, 8.0], [0.8, 8.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 9.0], [1.6, 9.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 9.0], [2.6, 9.0], [2.7, 9.0], [2.8, 9.0], [2.9, 9.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 10.0], [4.5, 10.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 13.0], [19.9, 13.0], [20.0, 13.0], [20.1, 13.0], [20.2, 13.0], [20.3, 13.0], [20.4, 13.0], [20.5, 13.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 16.0], [29.5, 16.0], [29.6, 16.0], [29.7, 16.0], [29.8, 16.0], [29.9, 16.0], [30.0, 16.0], [30.1, 16.0], [30.2, 16.0], [30.3, 16.0], [30.4, 16.0], [30.5, 16.0], [30.6, 16.0], [30.7, 16.0], [30.8, 16.0], [30.9, 16.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 17.0], [32.0, 17.0], [32.1, 17.0], [32.2, 17.0], [32.3, 17.0], [32.4, 17.0], [32.5, 17.0], [32.6, 17.0], [32.7, 17.0], [32.8, 17.0], [32.9, 17.0], [33.0, 17.0], [33.1, 17.0], [33.2, 17.0], [33.3, 17.0], [33.4, 17.0], [33.5, 17.0], [33.6, 17.0], [33.7, 18.0], [33.8, 18.0], [33.9, 18.0], [34.0, 18.0], [34.1, 18.0], [34.2, 18.0], [34.3, 18.0], [34.4, 18.0], [34.5, 18.0], [34.6, 18.0], [34.7, 18.0], [34.8, 18.0], [34.9, 18.0], [35.0, 18.0], [35.1, 18.0], [35.2, 18.0], [35.3, 18.0], [35.4, 18.0], [35.5, 19.0], [35.6, 19.0], [35.7, 19.0], [35.8, 19.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 19.0], [36.3, 19.0], [36.4, 19.0], [36.5, 19.0], [36.6, 19.0], [36.7, 19.0], [36.8, 19.0], [36.9, 19.0], [37.0, 19.0], [37.1, 20.0], [37.2, 20.0], [37.3, 20.0], [37.4, 20.0], [37.5, 20.0], [37.6, 20.0], [37.7, 20.0], [37.8, 20.0], [37.9, 20.0], [38.0, 20.0], [38.1, 21.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 21.0], [39.1, 22.0], [39.2, 22.0], [39.3, 22.0], [39.4, 22.0], [39.5, 22.0], [39.6, 22.0], [39.7, 22.0], [39.8, 22.0], [39.9, 22.0], [40.0, 22.0], [40.1, 23.0], [40.2, 23.0], [40.3, 23.0], [40.4, 23.0], [40.5, 23.0], [40.6, 23.0], [40.7, 23.0], [40.8, 23.0], [40.9, 23.0], [41.0, 24.0], [41.1, 24.0], [41.2, 24.0], [41.3, 24.0], [41.4, 24.0], [41.5, 24.0], [41.6, 24.0], [41.7, 25.0], [41.8, 25.0], [41.9, 25.0], [42.0, 25.0], [42.1, 25.0], [42.2, 25.0], [42.3, 25.0], [42.4, 26.0], [42.5, 26.0], [42.6, 26.0], [42.7, 26.0], [42.8, 26.0], [42.9, 27.0], [43.0, 27.0], [43.1, 27.0], [43.2, 27.0], [43.3, 27.0], [43.4, 27.0], [43.5, 27.0], [43.6, 28.0], [43.7, 28.0], [43.8, 28.0], [43.9, 29.0], [44.0, 29.0], [44.1, 29.0], [44.2, 30.0], [44.3, 30.0], [44.4, 31.0], [44.5, 32.0], [44.6, 32.0], [44.7, 33.0], [44.8, 34.0], [44.9, 34.0], [45.0, 35.0], [45.1, 39.0], [45.2, 41.0], [45.3, 46.0], [45.4, 47.0], [45.5, 101.0], [45.6, 109.0], [45.7, 111.0], [45.8, 113.0], [45.9, 114.0], [46.0, 115.0], [46.1, 115.0], [46.2, 116.0], [46.3, 117.0], [46.4, 118.0], [46.5, 118.0], [46.6, 119.0], [46.7, 119.0], [46.8, 119.0], [46.9, 120.0], [47.0, 121.0], [47.1, 121.0], [47.2, 122.0], [47.3, 123.0], [47.4, 123.0], [47.5, 124.0], [47.6, 124.0], [47.7, 125.0], [47.8, 125.0], [47.9, 126.0], [48.0, 127.0], [48.1, 127.0], [48.2, 128.0], [48.3, 129.0], [48.4, 129.0], [48.5, 130.0], [48.6, 131.0], [48.7, 131.0], [48.8, 131.0], [48.9, 132.0], [49.0, 133.0], [49.1, 133.0], [49.2, 134.0], [49.3, 134.0], [49.4, 135.0], [49.5, 135.0], [49.6, 136.0], [49.7, 136.0], [49.8, 137.0], [49.9, 137.0], [50.0, 138.0], [50.1, 138.0], [50.2, 138.0], [50.3, 139.0], [50.4, 139.0], [50.5, 140.0], [50.6, 140.0], [50.7, 140.0], [50.8, 141.0], [50.9, 141.0], [51.0, 141.0], [51.1, 142.0], [51.2, 142.0], [51.3, 143.0], [51.4, 143.0], [51.5, 144.0], [51.6, 144.0], [51.7, 144.0], [51.8, 144.0], [51.9, 145.0], [52.0, 145.0], [52.1, 145.0], [52.2, 146.0], [52.3, 146.0], [52.4, 146.0], [52.5, 147.0], [52.6, 147.0], [52.7, 147.0], [52.8, 148.0], [52.9, 148.0], [53.0, 148.0], [53.1, 149.0], [53.2, 150.0], [53.3, 151.0], [53.4, 151.0], [53.5, 152.0], [53.6, 152.0], [53.7, 152.0], [53.8, 153.0], [53.9, 154.0], [54.0, 155.0], [54.1, 156.0], [54.2, 156.0], [54.3, 157.0], [54.4, 158.0], [54.5, 158.0], [54.6, 160.0], [54.7, 161.0], [54.8, 163.0], [54.9, 164.0], [55.0, 165.0], [55.1, 165.0], [55.2, 166.0], [55.3, 168.0], [55.4, 168.0], [55.5, 169.0], [55.6, 171.0], [55.7, 172.0], [55.8, 173.0], [55.9, 174.0], [56.0, 174.0], [56.1, 175.0], [56.2, 177.0], [56.3, 178.0], [56.4, 179.0], [56.5, 180.0], [56.6, 180.0], [56.7, 182.0], [56.8, 183.0], [56.9, 184.0], [57.0, 185.0], [57.1, 186.0], [57.2, 187.0], [57.3, 188.0], [57.4, 189.0], [57.5, 190.0], [57.6, 191.0], [57.7, 192.0], [57.8, 192.0], [57.9, 194.0], [58.0, 195.0], [58.1, 196.0], [58.2, 197.0], [58.3, 198.0], [58.4, 198.0], [58.5, 199.0], [58.6, 200.0], [58.7, 202.0], [58.8, 202.0], [58.9, 203.0], [59.0, 205.0], [59.1, 206.0], [59.2, 206.0], [59.3, 207.0], [59.4, 209.0], [59.5, 211.0], [59.6, 212.0], [59.7, 212.0], [59.8, 214.0], [59.9, 215.0], [60.0, 217.0], [60.1, 217.0], [60.2, 218.0], [60.3, 219.0], [60.4, 220.0], [60.5, 221.0], [60.6, 222.0], [60.7, 223.0], [60.8, 224.0], [60.9, 226.0], [61.0, 227.0], [61.1, 228.0], [61.2, 228.0], [61.3, 229.0], [61.4, 230.0], [61.5, 230.0], [61.6, 232.0], [61.7, 232.0], [61.8, 233.0], [61.9, 234.0], [62.0, 235.0], [62.1, 236.0], [62.2, 236.0], [62.3, 238.0], [62.4, 239.0], [62.5, 239.0], [62.6, 240.0], [62.7, 241.0], [62.8, 241.0], [62.9, 242.0], [63.0, 242.0], [63.1, 243.0], [63.2, 244.0], [63.3, 245.0], [63.4, 246.0], [63.5, 247.0], [63.6, 248.0], [63.7, 249.0], [63.8, 250.0], [63.9, 250.0], [64.0, 252.0], [64.1, 253.0], [64.2, 253.0], [64.3, 254.0], [64.4, 254.0], [64.5, 255.0], [64.6, 257.0], [64.7, 257.0], [64.8, 258.0], [64.9, 259.0], [65.0, 261.0], [65.1, 262.0], [65.2, 263.0], [65.3, 264.0], [65.4, 265.0], [65.5, 265.0], [65.6, 266.0], [65.7, 267.0], [65.8, 268.0], [65.9, 269.0], [66.0, 269.0], [66.1, 270.0], [66.2, 271.0], [66.3, 272.0], [66.4, 272.0], [66.5, 274.0], [66.6, 275.0], [66.7, 275.0], [66.8, 276.0], [66.9, 277.0], [67.0, 277.0], [67.1, 278.0], [67.2, 279.0], [67.3, 279.0], [67.4, 280.0], [67.5, 280.0], [67.6, 281.0], [67.7, 282.0], [67.8, 282.0], [67.9, 283.0], [68.0, 283.0], [68.1, 283.0], [68.2, 284.0], [68.3, 285.0], [68.4, 285.0], [68.5, 286.0], [68.6, 287.0], [68.7, 288.0], [68.8, 288.0], [68.9, 289.0], [69.0, 289.0], [69.1, 290.0], [69.2, 290.0], [69.3, 291.0], [69.4, 291.0], [69.5, 292.0], [69.6, 292.0], [69.7, 293.0], [69.8, 293.0], [69.9, 294.0], [70.0, 295.0], [70.1, 296.0], [70.2, 296.0], [70.3, 297.0], [70.4, 297.0], [70.5, 299.0], [70.6, 299.0], [70.7, 300.0], [70.8, 300.0], [70.9, 302.0], [71.0, 302.0], [71.1, 303.0], [71.2, 303.0], [71.3, 304.0], [71.4, 305.0], [71.5, 306.0], [71.6, 308.0], [71.7, 309.0], [71.8, 309.0], [71.9, 310.0], [72.0, 312.0], [72.1, 312.0], [72.2, 313.0], [72.3, 314.0], [72.4, 315.0], [72.5, 316.0], [72.6, 316.0], [72.7, 318.0], [72.8, 318.0], [72.9, 319.0], [73.0, 320.0], [73.1, 320.0], [73.2, 321.0], [73.3, 322.0], [73.4, 324.0], [73.5, 326.0], [73.6, 327.0], [73.7, 329.0], [73.8, 330.0], [73.9, 333.0], [74.0, 334.0], [74.1, 335.0], [74.2, 336.0], [74.3, 337.0], [74.4, 338.0], [74.5, 340.0], [74.6, 340.0], [74.7, 342.0], [74.8, 342.0], [74.9, 344.0], [75.0, 346.0], [75.1, 348.0], [75.2, 348.0], [75.3, 349.0], [75.4, 350.0], [75.5, 352.0], [75.6, 354.0], [75.7, 355.0], [75.8, 356.0], [75.9, 357.0], [76.0, 360.0], [76.1, 361.0], [76.2, 363.0], [76.3, 364.0], [76.4, 365.0], [76.5, 367.0], [76.6, 368.0], [76.7, 369.0], [76.8, 371.0], [76.9, 372.0], [77.0, 375.0], [77.1, 377.0], [77.2, 379.0], [77.3, 381.0], [77.4, 385.0], [77.5, 387.0], [77.6, 388.0], [77.7, 389.0], [77.8, 390.0], [77.9, 391.0], [78.0, 393.0], [78.1, 394.0], [78.2, 397.0], [78.3, 399.0], [78.4, 400.0], [78.5, 402.0], [78.6, 402.0], [78.7, 405.0], [78.8, 408.0], [78.9, 409.0], [79.0, 410.0], [79.1, 413.0], [79.2, 415.0], [79.3, 416.0], [79.4, 417.0], [79.5, 419.0], [79.6, 421.0], [79.7, 422.0], [79.8, 424.0], [79.9, 425.0], [80.0, 427.0], [80.1, 429.0], [80.2, 430.0], [80.3, 433.0], [80.4, 435.0], [80.5, 435.0], [80.6, 439.0], [80.7, 440.0], [80.8, 441.0], [80.9, 443.0], [81.0, 446.0], [81.1, 449.0], [81.2, 450.0], [81.3, 451.0], [81.4, 452.0], [81.5, 453.0], [81.6, 455.0], [81.7, 457.0], [81.8, 458.0], [81.9, 460.0], [82.0, 460.0], [82.1, 463.0], [82.2, 464.0], [82.3, 466.0], [82.4, 467.0], [82.5, 469.0], [82.6, 471.0], [82.7, 473.0], [82.8, 474.0], [82.9, 477.0], [83.0, 479.0], [83.1, 481.0], [83.2, 482.0], [83.3, 483.0], [83.4, 487.0], [83.5, 489.0], [83.6, 491.0], [83.7, 491.0], [83.8, 493.0], [83.9, 495.0], [84.0, 497.0], [84.1, 498.0], [84.2, 500.0], [84.3, 501.0], [84.4, 502.0], [84.5, 503.0], [84.6, 504.0], [84.7, 508.0], [84.8, 511.0], [84.9, 513.0], [85.0, 515.0], [85.1, 517.0], [85.2, 519.0], [85.3, 521.0], [85.4, 523.0], [85.5, 525.0], [85.6, 528.0], [85.7, 530.0], [85.8, 531.0], [85.9, 533.0], [86.0, 535.0], [86.1, 539.0], [86.2, 542.0], [86.3, 547.0], [86.4, 548.0], [86.5, 551.0], [86.6, 552.0], [86.7, 556.0], [86.8, 558.0], [86.9, 562.0], [87.0, 564.0], [87.1, 566.0], [87.2, 569.0], [87.3, 573.0], [87.4, 575.0], [87.5, 580.0], [87.6, 583.0], [87.7, 587.0], [87.8, 590.0], [87.9, 592.0], [88.0, 597.0], [88.1, 598.0], [88.2, 602.0], [88.3, 604.0], [88.4, 609.0], [88.5, 612.0], [88.6, 616.0], [88.7, 618.0], [88.8, 620.0], [88.9, 622.0], [89.0, 625.0], [89.1, 628.0], [89.2, 629.0], [89.3, 633.0], [89.4, 638.0], [89.5, 641.0], [89.6, 643.0], [89.7, 646.0], [89.8, 648.0], [89.9, 651.0], [90.0, 657.0], [90.1, 660.0], [90.2, 663.0], [90.3, 665.0], [90.4, 669.0], [90.5, 674.0], [90.6, 679.0], [90.7, 684.0], [90.8, 688.0], [90.9, 690.0], [91.0, 691.0], [91.1, 696.0], [91.2, 703.0], [91.3, 711.0], [91.4, 712.0], [91.5, 718.0], [91.6, 723.0], [91.7, 728.0], [91.8, 732.0], [91.9, 738.0], [92.0, 741.0], [92.1, 747.0], [92.2, 748.0], [92.3, 752.0], [92.4, 755.0], [92.5, 760.0], [92.6, 763.0], [92.7, 765.0], [92.8, 774.0], [92.9, 781.0], [93.0, 786.0], [93.1, 790.0], [93.2, 799.0], [93.3, 808.0], [93.4, 814.0], [93.5, 819.0], [93.6, 829.0], [93.7, 834.0], [93.8, 841.0], [93.9, 846.0], [94.0, 848.0], [94.1, 857.0], [94.2, 865.0], [94.3, 870.0], [94.4, 878.0], [94.5, 880.0], [94.6, 887.0], [94.7, 901.0], [94.8, 904.0], [94.9, 916.0], [95.0, 925.0], [95.1, 936.0], [95.2, 941.0], [95.3, 950.0], [95.4, 958.0], [95.5, 964.0], [95.6, 974.0], [95.7, 980.0], [95.8, 992.0], [95.9, 1002.0], [96.0, 1006.0], [96.1, 1012.0], [96.2, 1020.0], [96.3, 1032.0], [96.4, 1039.0], [96.5, 1049.0], [96.6, 1061.0], [96.7, 1070.0], [96.8, 1077.0], [96.9, 1081.0], [97.0, 1096.0], [97.1, 1104.0], [97.2, 1117.0], [97.3, 1130.0], [97.4, 1146.0], [97.5, 1160.0], [97.6, 1179.0], [97.7, 1201.0], [97.8, 1215.0], [97.9, 1228.0], [98.0, 1247.0], [98.1, 1288.0], [98.2, 1305.0], [98.3, 1356.0], [98.4, 1397.0], [98.5, 1510.0], [98.6, 1657.0], [98.7, 1705.0], [98.8, 1792.0], [98.9, 1858.0], [99.0, 1888.0], [99.1, 1980.0], [99.2, 2078.0], [99.3, 2235.0], [99.4, 2368.0], [99.5, 3016.0], [99.6, 4571.0], [99.7, 7028.0], [99.8, 13031.0], [99.9, 17029.0], [100.0, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2394.0, "series": [{"data": [[0.0, 2394.0], [600.0, 159.0], [700.0, 108.0], [800.0, 77.0], [900.0, 64.0], [1000.0, 61.0], [1100.0, 33.0], [1200.0, 26.0], [1300.0, 12.0], [1400.0, 5.0], [1500.0, 4.0], [1600.0, 6.0], [1700.0, 6.0], [1800.0, 11.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 3.0], [2300.0, 3.0], [2200.0, 3.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5200.0, 1.0], [6300.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [9000.0, 1.0], [12000.0, 1.0], [13300.0, 1.0], [13000.0, 1.0], [14000.0, 1.0], [16400.0, 2.0], [17000.0, 1.0], [18000.0, 1.0], [100.0, 685.0], [27700.0, 1.0], [32000.0, 1.0], [38000.0, 1.0], [200.0, 636.0], [64000.0, 1.0], [300.0, 409.0], [400.0, 306.0], [500.0, 208.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4432.0, "series": [{"data": [[0.0, 4432.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 751.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 78.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.975793437331902, "minX": 1.60283634E12, "maxY": 10.0, "series": [{"data": [[1.60283634E12, 10.0], [1.6028364E12, 10.0], [1.60283646E12, 9.975793437331902]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283646E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 305.69636398248616, "minX": 1.0, "maxY": 7028.0, "series": [{"data": [[8.0, 1094.0], [4.0, 983.0], [2.0, 959.0], [1.0, 1188.0], [9.0, 7028.0], [10.0, 305.69636398248616], [5.0, 929.0], [6.0, 4027.0], [3.0, 975.0], [7.0, 976.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991448118586089, 308.6244773850247]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9828.6, "minX": 1.60283634E12, "maxY": 1800281.9833333334, "series": [{"data": [[1.60283634E12, 1213513.6833333333], [1.6028364E12, 1557387.2], [1.60283646E12, 1800281.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283634E12, 9828.6], [1.6028364E12, 19153.983333333334], [1.60283646E12, 16245.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283646E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 252.53982300884905, "minX": 1.60283634E12, "maxY": 388.71741032370954, "series": [{"data": [[1.60283634E12, 388.71741032370954], [1.6028364E12, 252.53982300884905], [1.60283646E12, 327.5621301775143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283646E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 252.30929203539813, "minX": 1.60283634E12, "maxY": 388.34733158355226, "series": [{"data": [[1.60283634E12, 388.34733158355226], [1.6028364E12, 252.30929203539813], [1.60283646E12, 327.2361484669167]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283646E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006993006993006995, "minX": 1.60283634E12, "maxY": 0.07874015748031499, "series": [{"data": [[1.60283634E12, 0.07874015748031499], [1.6028364E12, 0.007522123893805302], [1.60283646E12, 0.006993006993006995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283646E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.60283634E12, "maxY": 38058.0, "series": [{"data": [[1.60283634E12, 32078.0], [1.6028364E12, 27749.0], [1.60283646E12, 38058.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283634E12, 8.0], [1.6028364E12, 8.0], [1.60283646E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283634E12, 8.0], [1.6028364E12, 8.0], [1.60283646E12, 8.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283634E12, 8.0], [1.6028364E12, 8.0], [1.60283646E12, 8.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283634E12, 7.0], [1.6028364E12, 7.0], [1.60283646E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283634E12, 179.0], [1.6028364E12, 133.0], [1.60283646E12, 123.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283646E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 3.0, "maxY": 64065.0, "series": [{"data": [[3.0, 4246.0], [5.0, 1002.0], [7.0, 449.0], [8.0, 1024.0], [9.0, 826.0], [10.0, 817.5], [11.0, 621.5], [12.0, 395.5], [13.0, 659.0], [14.0, 620.0], [15.0, 440.0], [16.0, 436.0], [17.0, 433.5], [18.0, 427.0], [19.0, 379.0], [20.0, 366.0], [21.0, 23.0], [22.0, 183.5], [23.0, 337.0], [24.0, 285.0], [25.0, 300.0], [26.0, 274.0], [27.0, 232.0], [28.0, 181.0], [29.0, 446.0], [30.0, 157.5], [31.0, 248.0], [32.0, 239.5], [33.0, 161.0], [34.0, 241.5], [35.0, 17.0], [37.0, 174.5], [38.0, 191.0], [39.0, 27.0], [40.0, 18.0], [41.0, 23.0], [42.0, 14.5], [44.0, 18.0], [45.0, 134.0], [46.0, 14.5], [47.0, 143.5], [49.0, 135.5], [48.0, 14.0], [50.0, 148.0], [53.0, 121.0], [52.0, 75.0], [56.0, 98.0], [60.0, 18.0], [61.0, 132.0], [63.0, 17.5], [65.0, 17.0], [67.0, 17.0], [64.0, 16.0], [69.0, 18.0], [73.0, 19.0], [78.0, 19.0], [80.0, 16.5], [87.0, 13.0], [85.0, 17.0], [91.0, 14.0], [102.0, 14.0], [108.0, 20.0], [115.0, 13.0], [118.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 3.0, "maxY": 64065.0, "series": [{"data": [[3.0, 4246.0], [5.0, 1001.0], [7.0, 449.0], [8.0, 1022.5], [9.0, 823.5], [10.0, 816.0], [11.0, 620.0], [12.0, 395.0], [13.0, 657.0], [14.0, 619.5], [15.0, 439.0], [16.0, 435.5], [17.0, 432.5], [18.0, 427.0], [19.0, 379.0], [20.0, 366.0], [21.0, 23.0], [22.0, 183.5], [23.0, 337.0], [24.0, 285.0], [25.0, 299.0], [26.0, 274.0], [27.0, 231.0], [28.0, 180.5], [29.0, 446.0], [30.0, 157.0], [31.0, 248.0], [32.0, 239.5], [33.0, 161.0], [34.0, 241.5], [35.0, 17.0], [37.0, 174.0], [38.0, 191.0], [39.0, 27.0], [40.0, 18.0], [41.0, 23.0], [42.0, 14.5], [44.0, 18.0], [45.0, 134.0], [46.0, 14.5], [47.0, 143.5], [49.0, 135.5], [48.0, 14.0], [50.0, 148.0], [53.0, 121.0], [52.0, 75.0], [56.0, 98.0], [60.0, 18.0], [61.0, 132.0], [63.0, 17.0], [65.0, 17.0], [67.0, 17.0], [64.0, 16.0], [69.0, 18.0], [73.0, 19.0], [78.0, 19.0], [80.0, 16.5], [87.0, 13.0], [85.0, 17.0], [91.0, 14.0], [102.0, 14.0], [108.0, 20.0], [115.0, 13.0], [118.0, 14.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[69.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.216666666666665, "minX": 1.60283634E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60283634E12, 19.216666666666665], [1.6028364E12, 37.666666666666664], [1.60283646E12, 30.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283646E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283634E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60283634E12, 19.05], [1.6028364E12, 37.666666666666664], [1.60283646E12, 30.966666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60283646E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283646E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283634E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60283634E12, 19.05], [1.6028364E12, 37.666666666666664], [1.60283646E12, 30.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60283646E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283646E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60283634E12, "maxY": 37.666666666666664, "series": [{"data": [[1.60283634E12, 19.05], [1.6028364E12, 37.666666666666664], [1.60283646E12, 30.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60283646E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283646E12, "title": "Total Transactions Per Second"}},
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

