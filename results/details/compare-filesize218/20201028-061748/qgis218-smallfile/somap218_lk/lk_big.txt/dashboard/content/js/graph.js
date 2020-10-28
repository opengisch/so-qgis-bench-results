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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 39052.0, "series": [{"data": [[0.0, 5.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 8.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 8.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 9.0], [14.8, 9.0], [14.9, 9.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 10.0], [21.5, 10.0], [21.6, 10.0], [21.7, 10.0], [21.8, 10.0], [21.9, 10.0], [22.0, 10.0], [22.1, 10.0], [22.2, 10.0], [22.3, 10.0], [22.4, 10.0], [22.5, 10.0], [22.6, 10.0], [22.7, 10.0], [22.8, 10.0], [22.9, 10.0], [23.0, 10.0], [23.1, 10.0], [23.2, 10.0], [23.3, 10.0], [23.4, 10.0], [23.5, 10.0], [23.6, 10.0], [23.7, 10.0], [23.8, 10.0], [23.9, 10.0], [24.0, 10.0], [24.1, 10.0], [24.2, 10.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 11.0], [29.1, 11.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 11.0], [29.6, 11.0], [29.7, 11.0], [29.8, 11.0], [29.9, 11.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 14.0], [35.9, 14.0], [36.0, 14.0], [36.1, 14.0], [36.2, 14.0], [36.3, 14.0], [36.4, 14.0], [36.5, 14.0], [36.6, 14.0], [36.7, 14.0], [36.8, 14.0], [36.9, 14.0], [37.0, 14.0], [37.1, 14.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 15.0], [38.3, 15.0], [38.4, 15.0], [38.5, 15.0], [38.6, 15.0], [38.7, 15.0], [38.8, 15.0], [38.9, 15.0], [39.0, 15.0], [39.1, 15.0], [39.2, 15.0], [39.3, 15.0], [39.4, 15.0], [39.5, 15.0], [39.6, 15.0], [39.7, 15.0], [39.8, 16.0], [39.9, 16.0], [40.0, 16.0], [40.1, 16.0], [40.2, 16.0], [40.3, 16.0], [40.4, 16.0], [40.5, 16.0], [40.6, 16.0], [40.7, 16.0], [40.8, 16.0], [40.9, 16.0], [41.0, 17.0], [41.1, 17.0], [41.2, 17.0], [41.3, 17.0], [41.4, 17.0], [41.5, 17.0], [41.6, 17.0], [41.7, 17.0], [41.8, 17.0], [41.9, 17.0], [42.0, 17.0], [42.1, 18.0], [42.2, 18.0], [42.3, 18.0], [42.4, 18.0], [42.5, 18.0], [42.6, 18.0], [42.7, 19.0], [42.8, 19.0], [42.9, 19.0], [43.0, 19.0], [43.1, 19.0], [43.2, 20.0], [43.3, 20.0], [43.4, 20.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 21.0], [43.9, 21.0], [44.0, 21.0], [44.1, 21.0], [44.2, 21.0], [44.3, 22.0], [44.4, 22.0], [44.5, 22.0], [44.6, 23.0], [44.7, 23.0], [44.8, 24.0], [44.9, 24.0], [45.0, 25.0], [45.1, 27.0], [45.2, 28.0], [45.3, 29.0], [45.4, 29.0], [45.5, 32.0], [45.6, 34.0], [45.7, 72.0], [45.8, 102.0], [45.9, 106.0], [46.0, 108.0], [46.1, 109.0], [46.2, 111.0], [46.3, 111.0], [46.4, 113.0], [46.5, 113.0], [46.6, 114.0], [46.7, 114.0], [46.8, 115.0], [46.9, 116.0], [47.0, 117.0], [47.1, 117.0], [47.2, 117.0], [47.3, 118.0], [47.4, 119.0], [47.5, 119.0], [47.6, 119.0], [47.7, 119.0], [47.8, 120.0], [47.9, 121.0], [48.0, 121.0], [48.1, 121.0], [48.2, 122.0], [48.3, 122.0], [48.4, 123.0], [48.5, 123.0], [48.6, 124.0], [48.7, 124.0], [48.8, 125.0], [48.9, 125.0], [49.0, 126.0], [49.1, 126.0], [49.2, 127.0], [49.3, 128.0], [49.4, 129.0], [49.5, 129.0], [49.6, 129.0], [49.7, 129.0], [49.8, 130.0], [49.9, 130.0], [50.0, 131.0], [50.1, 131.0], [50.2, 132.0], [50.3, 132.0], [50.4, 132.0], [50.5, 133.0], [50.6, 133.0], [50.7, 134.0], [50.8, 134.0], [50.9, 134.0], [51.0, 134.0], [51.1, 135.0], [51.2, 135.0], [51.3, 136.0], [51.4, 136.0], [51.5, 136.0], [51.6, 137.0], [51.7, 137.0], [51.8, 137.0], [51.9, 138.0], [52.0, 138.0], [52.1, 138.0], [52.2, 138.0], [52.3, 139.0], [52.4, 139.0], [52.5, 139.0], [52.6, 139.0], [52.7, 140.0], [52.8, 140.0], [52.9, 140.0], [53.0, 141.0], [53.1, 141.0], [53.2, 142.0], [53.3, 142.0], [53.4, 142.0], [53.5, 143.0], [53.6, 143.0], [53.7, 143.0], [53.8, 144.0], [53.9, 144.0], [54.0, 144.0], [54.1, 145.0], [54.2, 145.0], [54.3, 146.0], [54.4, 146.0], [54.5, 146.0], [54.6, 147.0], [54.7, 147.0], [54.8, 147.0], [54.9, 148.0], [55.0, 148.0], [55.1, 149.0], [55.2, 149.0], [55.3, 150.0], [55.4, 151.0], [55.5, 151.0], [55.6, 152.0], [55.7, 152.0], [55.8, 153.0], [55.9, 153.0], [56.0, 154.0], [56.1, 155.0], [56.2, 155.0], [56.3, 156.0], [56.4, 156.0], [56.5, 157.0], [56.6, 158.0], [56.7, 159.0], [56.8, 159.0], [56.9, 160.0], [57.0, 161.0], [57.1, 161.0], [57.2, 162.0], [57.3, 163.0], [57.4, 164.0], [57.5, 164.0], [57.6, 166.0], [57.7, 167.0], [57.8, 168.0], [57.9, 169.0], [58.0, 170.0], [58.1, 171.0], [58.2, 172.0], [58.3, 172.0], [58.4, 174.0], [58.5, 174.0], [58.6, 175.0], [58.7, 176.0], [58.8, 176.0], [58.9, 177.0], [59.0, 178.0], [59.1, 178.0], [59.2, 181.0], [59.3, 182.0], [59.4, 183.0], [59.5, 183.0], [59.6, 184.0], [59.7, 185.0], [59.8, 187.0], [59.9, 189.0], [60.0, 190.0], [60.1, 191.0], [60.2, 192.0], [60.3, 193.0], [60.4, 195.0], [60.5, 197.0], [60.6, 197.0], [60.7, 198.0], [60.8, 200.0], [60.9, 201.0], [61.0, 202.0], [61.1, 203.0], [61.2, 204.0], [61.3, 204.0], [61.4, 205.0], [61.5, 206.0], [61.6, 207.0], [61.7, 209.0], [61.8, 210.0], [61.9, 211.0], [62.0, 212.0], [62.1, 213.0], [62.2, 214.0], [62.3, 215.0], [62.4, 216.0], [62.5, 216.0], [62.6, 218.0], [62.7, 220.0], [62.8, 220.0], [62.9, 220.0], [63.0, 221.0], [63.1, 222.0], [63.2, 222.0], [63.3, 224.0], [63.4, 225.0], [63.5, 226.0], [63.6, 228.0], [63.7, 229.0], [63.8, 229.0], [63.9, 230.0], [64.0, 230.0], [64.1, 231.0], [64.2, 233.0], [64.3, 233.0], [64.4, 234.0], [64.5, 235.0], [64.6, 236.0], [64.7, 237.0], [64.8, 237.0], [64.9, 238.0], [65.0, 239.0], [65.1, 239.0], [65.2, 240.0], [65.3, 240.0], [65.4, 241.0], [65.5, 242.0], [65.6, 242.0], [65.7, 243.0], [65.8, 243.0], [65.9, 244.0], [66.0, 244.0], [66.1, 245.0], [66.2, 246.0], [66.3, 246.0], [66.4, 246.0], [66.5, 247.0], [66.6, 248.0], [66.7, 249.0], [66.8, 249.0], [66.9, 250.0], [67.0, 251.0], [67.1, 252.0], [67.2, 252.0], [67.3, 253.0], [67.4, 253.0], [67.5, 254.0], [67.6, 255.0], [67.7, 255.0], [67.8, 255.0], [67.9, 256.0], [68.0, 257.0], [68.1, 258.0], [68.2, 259.0], [68.3, 259.0], [68.4, 260.0], [68.5, 260.0], [68.6, 261.0], [68.7, 261.0], [68.8, 262.0], [68.9, 263.0], [69.0, 263.0], [69.1, 264.0], [69.2, 265.0], [69.3, 266.0], [69.4, 266.0], [69.5, 266.0], [69.6, 267.0], [69.7, 268.0], [69.8, 268.0], [69.9, 269.0], [70.0, 270.0], [70.1, 272.0], [70.2, 272.0], [70.3, 273.0], [70.4, 274.0], [70.5, 274.0], [70.6, 275.0], [70.7, 275.0], [70.8, 276.0], [70.9, 277.0], [71.0, 277.0], [71.1, 278.0], [71.2, 279.0], [71.3, 279.0], [71.4, 281.0], [71.5, 282.0], [71.6, 282.0], [71.7, 283.0], [71.8, 283.0], [71.9, 284.0], [72.0, 285.0], [72.1, 285.0], [72.2, 286.0], [72.3, 287.0], [72.4, 287.0], [72.5, 288.0], [72.6, 288.0], [72.7, 289.0], [72.8, 290.0], [72.9, 290.0], [73.0, 290.0], [73.1, 291.0], [73.2, 291.0], [73.3, 292.0], [73.4, 293.0], [73.5, 293.0], [73.6, 294.0], [73.7, 295.0], [73.8, 296.0], [73.9, 297.0], [74.0, 298.0], [74.1, 298.0], [74.2, 299.0], [74.3, 300.0], [74.4, 300.0], [74.5, 301.0], [74.6, 303.0], [74.7, 303.0], [74.8, 305.0], [74.9, 305.0], [75.0, 306.0], [75.1, 307.0], [75.2, 308.0], [75.3, 309.0], [75.4, 311.0], [75.5, 311.0], [75.6, 312.0], [75.7, 313.0], [75.8, 314.0], [75.9, 315.0], [76.0, 316.0], [76.1, 317.0], [76.2, 319.0], [76.3, 320.0], [76.4, 321.0], [76.5, 323.0], [76.6, 324.0], [76.7, 325.0], [76.8, 326.0], [76.9, 327.0], [77.0, 328.0], [77.1, 330.0], [77.2, 333.0], [77.3, 334.0], [77.4, 335.0], [77.5, 337.0], [77.6, 339.0], [77.7, 342.0], [77.8, 343.0], [77.9, 345.0], [78.0, 347.0], [78.1, 348.0], [78.2, 349.0], [78.3, 352.0], [78.4, 353.0], [78.5, 356.0], [78.6, 359.0], [78.7, 359.0], [78.8, 361.0], [78.9, 362.0], [79.0, 364.0], [79.1, 364.0], [79.2, 366.0], [79.3, 367.0], [79.4, 369.0], [79.5, 372.0], [79.6, 374.0], [79.7, 376.0], [79.8, 378.0], [79.9, 381.0], [80.0, 382.0], [80.1, 384.0], [80.2, 387.0], [80.3, 388.0], [80.4, 391.0], [80.5, 392.0], [80.6, 394.0], [80.7, 396.0], [80.8, 399.0], [80.9, 401.0], [81.0, 403.0], [81.1, 404.0], [81.2, 406.0], [81.3, 409.0], [81.4, 409.0], [81.5, 411.0], [81.6, 414.0], [81.7, 416.0], [81.8, 419.0], [81.9, 420.0], [82.0, 422.0], [82.1, 424.0], [82.2, 425.0], [82.3, 426.0], [82.4, 427.0], [82.5, 428.0], [82.6, 430.0], [82.7, 432.0], [82.8, 433.0], [82.9, 436.0], [83.0, 437.0], [83.1, 439.0], [83.2, 441.0], [83.3, 443.0], [83.4, 445.0], [83.5, 446.0], [83.6, 448.0], [83.7, 450.0], [83.8, 450.0], [83.9, 451.0], [84.0, 453.0], [84.1, 454.0], [84.2, 457.0], [84.3, 458.0], [84.4, 461.0], [84.5, 462.0], [84.6, 464.0], [84.7, 466.0], [84.8, 468.0], [84.9, 469.0], [85.0, 470.0], [85.1, 472.0], [85.2, 473.0], [85.3, 475.0], [85.4, 478.0], [85.5, 480.0], [85.6, 482.0], [85.7, 482.0], [85.8, 483.0], [85.9, 486.0], [86.0, 488.0], [86.1, 490.0], [86.2, 490.0], [86.3, 493.0], [86.4, 493.0], [86.5, 496.0], [86.6, 497.0], [86.7, 498.0], [86.8, 500.0], [86.9, 501.0], [87.0, 503.0], [87.1, 506.0], [87.2, 507.0], [87.3, 510.0], [87.4, 512.0], [87.5, 513.0], [87.6, 516.0], [87.7, 518.0], [87.8, 521.0], [87.9, 524.0], [88.0, 526.0], [88.1, 527.0], [88.2, 529.0], [88.3, 532.0], [88.4, 534.0], [88.5, 535.0], [88.6, 540.0], [88.7, 547.0], [88.8, 551.0], [88.9, 556.0], [89.0, 559.0], [89.1, 561.0], [89.2, 568.0], [89.3, 571.0], [89.4, 575.0], [89.5, 577.0], [89.6, 580.0], [89.7, 584.0], [89.8, 588.0], [89.9, 593.0], [90.0, 597.0], [90.1, 601.0], [90.2, 604.0], [90.3, 607.0], [90.4, 611.0], [90.5, 616.0], [90.6, 618.0], [90.7, 621.0], [90.8, 623.0], [90.9, 626.0], [91.0, 632.0], [91.1, 635.0], [91.2, 638.0], [91.3, 642.0], [91.4, 646.0], [91.5, 647.0], [91.6, 649.0], [91.7, 660.0], [91.8, 664.0], [91.9, 667.0], [92.0, 670.0], [92.1, 673.0], [92.2, 678.0], [92.3, 681.0], [92.4, 689.0], [92.5, 691.0], [92.6, 693.0], [92.7, 697.0], [92.8, 706.0], [92.9, 713.0], [93.0, 721.0], [93.1, 727.0], [93.2, 728.0], [93.3, 733.0], [93.4, 738.0], [93.5, 743.0], [93.6, 751.0], [93.7, 759.0], [93.8, 765.0], [93.9, 769.0], [94.0, 776.0], [94.1, 782.0], [94.2, 788.0], [94.3, 793.0], [94.4, 798.0], [94.5, 804.0], [94.6, 817.0], [94.7, 823.0], [94.8, 835.0], [94.9, 845.0], [95.0, 857.0], [95.1, 866.0], [95.2, 872.0], [95.3, 879.0], [95.4, 887.0], [95.5, 895.0], [95.6, 907.0], [95.7, 911.0], [95.8, 925.0], [95.9, 937.0], [96.0, 944.0], [96.1, 948.0], [96.2, 959.0], [96.3, 964.0], [96.4, 976.0], [96.5, 981.0], [96.6, 989.0], [96.7, 994.0], [96.8, 1001.0], [96.9, 1006.0], [97.0, 1012.0], [97.1, 1026.0], [97.2, 1032.0], [97.3, 1041.0], [97.4, 1059.0], [97.5, 1073.0], [97.6, 1082.0], [97.7, 1097.0], [97.8, 1110.0], [97.9, 1129.0], [98.0, 1150.0], [98.1, 1163.0], [98.2, 1173.0], [98.3, 1192.0], [98.4, 1232.0], [98.5, 1254.0], [98.6, 1318.0], [98.7, 1427.0], [98.8, 1470.0], [98.9, 1626.0], [99.0, 1684.0], [99.1, 1748.0], [99.2, 1783.0], [99.3, 1845.0], [99.4, 1936.0], [99.5, 2021.0], [99.6, 2092.0], [99.7, 3384.0], [99.8, 10160.0], [99.9, 26075.0], [100.0, 39052.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2407.0, "series": [{"data": [[0.0, 2407.0], [600.0, 140.0], [10200.0, 1.0], [10100.0, 1.0], [700.0, 90.0], [800.0, 58.0], [13400.0, 1.0], [14300.0, 1.0], [900.0, 65.0], [1000.0, 50.0], [1100.0, 32.0], [1200.0, 13.0], [20000.0, 1.0], [1300.0, 5.0], [1400.0, 7.0], [1500.0, 3.0], [100.0, 790.0], [1600.0, 10.0], [26000.0, 1.0], [1700.0, 10.0], [1800.0, 6.0], [29400.0, 1.0], [1900.0, 7.0], [30100.0, 1.0], [2000.0, 6.0], [2100.0, 2.0], [2200.0, 2.0], [36000.0, 1.0], [38400.0, 1.0], [2400.0, 1.0], [39000.0, 1.0], [200.0, 712.0], [3300.0, 1.0], [3500.0, 1.0], [4100.0, 1.0], [300.0, 343.0], [6000.0, 1.0], [400.0, 315.0], [500.0, 172.0], [8100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4571.0, "series": [{"data": [[0.0, 4571.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 629.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 62.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.96611909650926, "minX": 1.60386684E12, "maxY": 10.0, "series": [{"data": [[1.60386696E12, 9.97380675203725], [1.60386684E12, 9.96611909650926], [1.6038669E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386696E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 267.31605032405685, "minX": 1.0, "maxY": 26075.0, "series": [{"data": [[4.0, 305.25], [8.0, 953.0], [2.0, 26075.0], [1.0, 10160.0], [9.0, 532.0], [10.0, 267.31605032405685], [5.0, 1045.0], [3.0, 520.5], [6.0, 553.5], [7.0, 552.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98517673888255, 274.8215507411623]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8430.766666666666, "minX": 1.60386684E12, "maxY": 1793238.0333333334, "series": [{"data": [[1.60386696E12, 1793238.0333333334], [1.60386684E12, 1084614.4666666666], [1.6038669E12, 1694017.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386696E12, 15023.266666666666], [1.60386684E12, 8430.766666666666], [1.6038669E12, 22036.916666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386696E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 225.82607003891053, "minX": 1.60386684E12, "maxY": 331.5995893223816, "series": [{"data": [[1.60386696E12, 315.92549476135014], [1.60386684E12, 331.5995893223816], [1.6038669E12, 225.82607003891053]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386696E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 225.6167315175096, "minX": 1.60386684E12, "maxY": 331.1878850102673, "series": [{"data": [[1.60386696E12, 315.5727590221188], [1.60386684E12, 331.1878850102673], [1.6038669E12, 225.6167315175096]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386696E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006402793946449365, "minX": 1.60386684E12, "maxY": 0.09445585215605756, "series": [{"data": [[1.60386696E12, 0.006402793946449365], [1.60386684E12, 0.09445585215605756], [1.6038669E12, 0.007782101167315177]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386696E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60386684E12, "maxY": 39052.0, "series": [{"data": [[1.60386696E12, 36045.0], [1.60386684E12, 30167.0], [1.6038669E12, 39052.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386696E12, 6.0], [1.60386684E12, 6.0], [1.6038669E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386696E12, 6.0], [1.60386684E12, 6.0], [1.6038669E12, 6.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386696E12, 6.0], [1.60386684E12, 6.0], [1.6038669E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386696E12, 5.0], [1.60386684E12, 6.0], [1.6038669E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386696E12, 141.5], [1.60386684E12, 148.0], [1.6038669E12, 121.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386696E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 2.0, "maxY": 18117.5, "series": [{"data": [[2.0, 18117.5], [4.0, 1685.5], [6.0, 878.0], [7.0, 217.0], [8.0, 977.5], [9.0, 795.0], [10.0, 681.5], [11.0, 534.0], [12.0, 420.5], [13.0, 488.0], [14.0, 517.0], [15.0, 501.0], [16.0, 624.5], [17.0, 382.0], [18.0, 438.0], [19.0, 387.0], [20.0, 311.0], [21.0, 320.0], [22.0, 234.5], [23.0, 360.0], [24.0, 260.5], [25.0, 245.0], [26.0, 351.0], [27.0, 255.0], [28.0, 265.5], [29.0, 130.5], [30.0, 259.0], [33.0, 259.0], [35.0, 167.0], [34.0, 268.0], [37.0, 203.0], [36.0, 134.0], [38.0, 175.5], [41.0, 13.0], [40.0, 20.5], [42.0, 111.0], [43.0, 20.0], [45.0, 14.0], [47.0, 206.0], [48.0, 10.0], [49.0, 144.0], [50.0, 137.5], [52.0, 118.0], [53.0, 168.0], [54.0, 138.0], [55.0, 9.0], [57.0, 139.0], [56.0, 138.0], [58.0, 121.5], [60.0, 132.0], [61.0, 23.0], [62.0, 11.0], [64.0, 10.5], [67.0, 14.0], [65.0, 17.0], [66.0, 14.0], [69.0, 13.0], [68.0, 10.0], [70.0, 14.0], [79.0, 12.0], [87.0, 12.0], [86.0, 11.0], [88.0, 13.0], [90.0, 13.0], [94.0, 10.0], [103.0, 13.5], [110.0, 10.0], [113.0, 10.0], [119.0, 11.0], [117.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 2.0, "maxY": 18117.0, "series": [{"data": [[2.0, 18117.0], [4.0, 1682.5], [6.0, 876.5], [7.0, 217.0], [8.0, 977.5], [9.0, 792.0], [10.0, 681.0], [11.0, 534.0], [12.0, 420.0], [13.0, 485.0], [14.0, 516.0], [15.0, 500.0], [16.0, 624.5], [17.0, 382.0], [18.0, 438.0], [19.0, 387.0], [20.0, 310.0], [21.0, 320.0], [22.0, 234.5], [23.0, 360.0], [24.0, 260.5], [25.0, 245.0], [26.0, 351.0], [27.0, 255.0], [28.0, 265.0], [29.0, 130.0], [30.0, 259.0], [33.0, 259.0], [35.0, 167.0], [34.0, 268.0], [37.0, 203.0], [36.0, 134.0], [38.0, 175.5], [41.0, 13.0], [40.0, 20.5], [42.0, 110.5], [43.0, 20.0], [45.0, 14.0], [47.0, 206.0], [48.0, 10.0], [49.0, 144.0], [50.0, 137.5], [52.0, 117.5], [53.0, 168.0], [54.0, 138.0], [55.0, 9.0], [57.0, 139.0], [56.0, 138.0], [58.0, 121.5], [60.0, 131.5], [61.0, 23.0], [62.0, 11.0], [64.0, 10.0], [67.0, 14.0], [65.0, 17.0], [66.0, 14.0], [69.0, 13.0], [68.0, 10.0], [70.0, 14.0], [79.0, 12.0], [87.0, 12.0], [86.0, 11.0], [88.0, 13.0], [90.0, 13.0], [94.0, 10.0], [103.0, 13.0], [110.0, 10.0], [113.0, 10.0], [119.0, 11.0], [117.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.4, "minX": 1.60386684E12, "maxY": 42.833333333333336, "series": [{"data": [[1.60386696E12, 28.466666666666665], [1.60386684E12, 16.4], [1.6038669E12, 42.833333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386696E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.233333333333334, "minX": 1.60386684E12, "maxY": 42.833333333333336, "series": [{"data": [[1.60386696E12, 28.633333333333333], [1.60386684E12, 16.233333333333334], [1.6038669E12, 42.833333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386696E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.233333333333334, "minX": 1.60386684E12, "maxY": 42.833333333333336, "series": [{"data": [[1.60386696E12, 28.633333333333333], [1.60386684E12, 16.233333333333334], [1.6038669E12, 42.833333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386696E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.233333333333334, "minX": 1.60386684E12, "maxY": 42.833333333333336, "series": [{"data": [[1.60386696E12, 28.633333333333333], [1.60386684E12, 16.233333333333334], [1.6038669E12, 42.833333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386696E12, "title": "Total Transactions Per Second"}},
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

