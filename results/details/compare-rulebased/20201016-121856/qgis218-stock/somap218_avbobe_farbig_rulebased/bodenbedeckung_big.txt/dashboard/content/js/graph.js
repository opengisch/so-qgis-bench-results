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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 2562.0, "series": [{"data": [[0.0, 27.0], [0.1, 29.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 42.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 45.0], [8.0, 45.0], [8.1, 45.0], [8.2, 45.0], [8.3, 46.0], [8.4, 46.0], [8.5, 46.0], [8.6, 46.0], [8.7, 47.0], [8.8, 47.0], [8.9, 48.0], [9.0, 48.0], [9.1, 48.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 54.0], [12.4, 54.0], [12.5, 54.0], [12.6, 54.0], [12.7, 54.0], [12.8, 55.0], [12.9, 55.0], [13.0, 55.0], [13.1, 55.0], [13.2, 56.0], [13.3, 56.0], [13.4, 56.0], [13.5, 56.0], [13.6, 56.0], [13.7, 56.0], [13.8, 56.0], [13.9, 57.0], [14.0, 57.0], [14.1, 57.0], [14.2, 57.0], [14.3, 57.0], [14.4, 58.0], [14.5, 58.0], [14.6, 58.0], [14.7, 58.0], [14.8, 59.0], [14.9, 59.0], [15.0, 59.0], [15.1, 59.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 60.0], [15.7, 60.0], [15.8, 61.0], [15.9, 61.0], [16.0, 61.0], [16.1, 61.0], [16.2, 61.0], [16.3, 61.0], [16.4, 62.0], [16.5, 62.0], [16.6, 62.0], [16.7, 62.0], [16.8, 62.0], [16.9, 63.0], [17.0, 63.0], [17.1, 63.0], [17.2, 63.0], [17.3, 64.0], [17.4, 64.0], [17.5, 64.0], [17.6, 64.0], [17.7, 64.0], [17.8, 65.0], [17.9, 65.0], [18.0, 65.0], [18.1, 65.0], [18.2, 65.0], [18.3, 66.0], [18.4, 66.0], [18.5, 66.0], [18.6, 66.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 67.0], [19.2, 67.0], [19.3, 68.0], [19.4, 68.0], [19.5, 68.0], [19.6, 68.0], [19.7, 68.0], [19.8, 68.0], [19.9, 69.0], [20.0, 69.0], [20.1, 69.0], [20.2, 69.0], [20.3, 70.0], [20.4, 70.0], [20.5, 70.0], [20.6, 70.0], [20.7, 70.0], [20.8, 70.0], [20.9, 71.0], [21.0, 71.0], [21.1, 71.0], [21.2, 71.0], [21.3, 72.0], [21.4, 72.0], [21.5, 72.0], [21.6, 72.0], [21.7, 72.0], [21.8, 72.0], [21.9, 73.0], [22.0, 73.0], [22.1, 73.0], [22.2, 73.0], [22.3, 74.0], [22.4, 74.0], [22.5, 74.0], [22.6, 74.0], [22.7, 74.0], [22.8, 75.0], [22.9, 75.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 76.0], [23.4, 76.0], [23.5, 76.0], [23.6, 76.0], [23.7, 77.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 78.0], [24.2, 78.0], [24.3, 78.0], [24.4, 78.0], [24.5, 79.0], [24.6, 79.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 80.0], [25.1, 80.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 81.0], [25.6, 81.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 82.0], [26.1, 82.0], [26.2, 82.0], [26.3, 82.0], [26.4, 83.0], [26.5, 83.0], [26.6, 83.0], [26.7, 84.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 85.0], [27.3, 85.0], [27.4, 85.0], [27.5, 85.0], [27.6, 85.0], [27.7, 86.0], [27.8, 86.0], [27.9, 86.0], [28.0, 86.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 88.0], [28.6, 88.0], [28.7, 88.0], [28.8, 89.0], [28.9, 89.0], [29.0, 90.0], [29.1, 90.0], [29.2, 91.0], [29.3, 91.0], [29.4, 91.0], [29.5, 91.0], [29.6, 91.0], [29.7, 92.0], [29.8, 92.0], [29.9, 92.0], [30.0, 92.0], [30.1, 93.0], [30.2, 93.0], [30.3, 93.0], [30.4, 94.0], [30.5, 94.0], [30.6, 94.0], [30.7, 95.0], [30.8, 95.0], [30.9, 95.0], [31.0, 95.0], [31.1, 95.0], [31.2, 96.0], [31.3, 97.0], [31.4, 97.0], [31.5, 97.0], [31.6, 98.0], [31.7, 98.0], [31.8, 99.0], [31.9, 99.0], [32.0, 99.0], [32.1, 100.0], [32.2, 100.0], [32.3, 100.0], [32.4, 101.0], [32.5, 101.0], [32.6, 101.0], [32.7, 102.0], [32.8, 102.0], [32.9, 102.0], [33.0, 102.0], [33.1, 103.0], [33.2, 103.0], [33.3, 103.0], [33.4, 103.0], [33.5, 104.0], [33.6, 104.0], [33.7, 104.0], [33.8, 104.0], [33.9, 105.0], [34.0, 105.0], [34.1, 105.0], [34.2, 105.0], [34.3, 105.0], [34.4, 105.0], [34.5, 105.0], [34.6, 106.0], [34.7, 106.0], [34.8, 106.0], [34.9, 106.0], [35.0, 106.0], [35.1, 106.0], [35.2, 106.0], [35.3, 107.0], [35.4, 107.0], [35.5, 107.0], [35.6, 107.0], [35.7, 107.0], [35.8, 107.0], [35.9, 107.0], [36.0, 107.0], [36.1, 108.0], [36.2, 108.0], [36.3, 108.0], [36.4, 108.0], [36.5, 108.0], [36.6, 108.0], [36.7, 109.0], [36.8, 109.0], [36.9, 109.0], [37.0, 109.0], [37.1, 109.0], [37.2, 110.0], [37.3, 110.0], [37.4, 110.0], [37.5, 110.0], [37.6, 111.0], [37.7, 111.0], [37.8, 111.0], [37.9, 112.0], [38.0, 112.0], [38.1, 112.0], [38.2, 113.0], [38.3, 113.0], [38.4, 113.0], [38.5, 113.0], [38.6, 113.0], [38.7, 114.0], [38.8, 114.0], [38.9, 114.0], [39.0, 115.0], [39.1, 115.0], [39.2, 115.0], [39.3, 115.0], [39.4, 116.0], [39.5, 116.0], [39.6, 116.0], [39.7, 116.0], [39.8, 116.0], [39.9, 117.0], [40.0, 117.0], [40.1, 117.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 118.0], [40.7, 119.0], [40.8, 119.0], [40.9, 119.0], [41.0, 120.0], [41.1, 120.0], [41.2, 120.0], [41.3, 120.0], [41.4, 121.0], [41.5, 121.0], [41.6, 122.0], [41.7, 122.0], [41.8, 122.0], [41.9, 122.0], [42.0, 122.0], [42.1, 123.0], [42.2, 123.0], [42.3, 124.0], [42.4, 124.0], [42.5, 124.0], [42.6, 124.0], [42.7, 125.0], [42.8, 125.0], [42.9, 125.0], [43.0, 126.0], [43.1, 126.0], [43.2, 126.0], [43.3, 126.0], [43.4, 126.0], [43.5, 127.0], [43.6, 127.0], [43.7, 127.0], [43.8, 128.0], [43.9, 128.0], [44.0, 128.0], [44.1, 129.0], [44.2, 129.0], [44.3, 129.0], [44.4, 130.0], [44.5, 130.0], [44.6, 130.0], [44.7, 131.0], [44.8, 131.0], [44.9, 131.0], [45.0, 132.0], [45.1, 132.0], [45.2, 133.0], [45.3, 133.0], [45.4, 134.0], [45.5, 134.0], [45.6, 134.0], [45.7, 135.0], [45.8, 135.0], [45.9, 135.0], [46.0, 136.0], [46.1, 136.0], [46.2, 136.0], [46.3, 137.0], [46.4, 137.0], [46.5, 138.0], [46.6, 138.0], [46.7, 138.0], [46.8, 139.0], [46.9, 139.0], [47.0, 140.0], [47.1, 140.0], [47.2, 140.0], [47.3, 141.0], [47.4, 141.0], [47.5, 142.0], [47.6, 142.0], [47.7, 142.0], [47.8, 143.0], [47.9, 143.0], [48.0, 143.0], [48.1, 144.0], [48.2, 144.0], [48.3, 145.0], [48.4, 145.0], [48.5, 146.0], [48.6, 146.0], [48.7, 146.0], [48.8, 146.0], [48.9, 147.0], [49.0, 148.0], [49.1, 148.0], [49.2, 148.0], [49.3, 148.0], [49.4, 149.0], [49.5, 150.0], [49.6, 150.0], [49.7, 150.0], [49.8, 151.0], [49.9, 151.0], [50.0, 152.0], [50.1, 152.0], [50.2, 153.0], [50.3, 153.0], [50.4, 154.0], [50.5, 154.0], [50.6, 155.0], [50.7, 156.0], [50.8, 156.0], [50.9, 157.0], [51.0, 157.0], [51.1, 158.0], [51.2, 158.0], [51.3, 158.0], [51.4, 159.0], [51.5, 159.0], [51.6, 160.0], [51.7, 160.0], [51.8, 161.0], [51.9, 161.0], [52.0, 162.0], [52.1, 163.0], [52.2, 163.0], [52.3, 164.0], [52.4, 164.0], [52.5, 164.0], [52.6, 165.0], [52.7, 166.0], [52.8, 167.0], [52.9, 167.0], [53.0, 168.0], [53.1, 168.0], [53.2, 169.0], [53.3, 169.0], [53.4, 170.0], [53.5, 171.0], [53.6, 171.0], [53.7, 172.0], [53.8, 172.0], [53.9, 173.0], [54.0, 174.0], [54.1, 175.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 177.0], [54.6, 178.0], [54.7, 179.0], [54.8, 179.0], [54.9, 180.0], [55.0, 181.0], [55.1, 181.0], [55.2, 182.0], [55.3, 183.0], [55.4, 184.0], [55.5, 185.0], [55.6, 185.0], [55.7, 186.0], [55.8, 186.0], [55.9, 187.0], [56.0, 189.0], [56.1, 189.0], [56.2, 190.0], [56.3, 190.0], [56.4, 191.0], [56.5, 192.0], [56.6, 193.0], [56.7, 194.0], [56.8, 195.0], [56.9, 195.0], [57.0, 196.0], [57.1, 196.0], [57.2, 196.0], [57.3, 197.0], [57.4, 198.0], [57.5, 198.0], [57.6, 199.0], [57.7, 200.0], [57.8, 200.0], [57.9, 201.0], [58.0, 202.0], [58.1, 203.0], [58.2, 204.0], [58.3, 204.0], [58.4, 205.0], [58.5, 206.0], [58.6, 206.0], [58.7, 207.0], [58.8, 208.0], [58.9, 208.0], [59.0, 209.0], [59.1, 210.0], [59.2, 210.0], [59.3, 211.0], [59.4, 211.0], [59.5, 213.0], [59.6, 213.0], [59.7, 214.0], [59.8, 215.0], [59.9, 215.0], [60.0, 216.0], [60.1, 216.0], [60.2, 217.0], [60.3, 218.0], [60.4, 218.0], [60.5, 219.0], [60.6, 220.0], [60.7, 220.0], [60.8, 221.0], [60.9, 222.0], [61.0, 222.0], [61.1, 224.0], [61.2, 224.0], [61.3, 225.0], [61.4, 226.0], [61.5, 227.0], [61.6, 227.0], [61.7, 228.0], [61.8, 229.0], [61.9, 229.0], [62.0, 230.0], [62.1, 230.0], [62.2, 231.0], [62.3, 232.0], [62.4, 232.0], [62.5, 233.0], [62.6, 234.0], [62.7, 235.0], [62.8, 236.0], [62.9, 236.0], [63.0, 237.0], [63.1, 238.0], [63.2, 239.0], [63.3, 240.0], [63.4, 241.0], [63.5, 242.0], [63.6, 243.0], [63.7, 244.0], [63.8, 245.0], [63.9, 246.0], [64.0, 247.0], [64.1, 248.0], [64.2, 249.0], [64.3, 250.0], [64.4, 250.0], [64.5, 251.0], [64.6, 252.0], [64.7, 252.0], [64.8, 253.0], [64.9, 253.0], [65.0, 254.0], [65.1, 254.0], [65.2, 255.0], [65.3, 256.0], [65.4, 258.0], [65.5, 259.0], [65.6, 259.0], [65.7, 260.0], [65.8, 261.0], [65.9, 262.0], [66.0, 263.0], [66.1, 263.0], [66.2, 264.0], [66.3, 265.0], [66.4, 266.0], [66.5, 266.0], [66.6, 267.0], [66.7, 267.0], [66.8, 268.0], [66.9, 269.0], [67.0, 270.0], [67.1, 271.0], [67.2, 272.0], [67.3, 273.0], [67.4, 274.0], [67.5, 275.0], [67.6, 275.0], [67.7, 276.0], [67.8, 278.0], [67.9, 279.0], [68.0, 281.0], [68.1, 281.0], [68.2, 281.0], [68.3, 282.0], [68.4, 283.0], [68.5, 284.0], [68.6, 285.0], [68.7, 285.0], [68.8, 286.0], [68.9, 287.0], [69.0, 288.0], [69.1, 289.0], [69.2, 289.0], [69.3, 291.0], [69.4, 291.0], [69.5, 293.0], [69.6, 293.0], [69.7, 296.0], [69.8, 297.0], [69.9, 298.0], [70.0, 298.0], [70.1, 299.0], [70.2, 299.0], [70.3, 300.0], [70.4, 301.0], [70.5, 302.0], [70.6, 303.0], [70.7, 304.0], [70.8, 305.0], [70.9, 306.0], [71.0, 307.0], [71.1, 308.0], [71.2, 309.0], [71.3, 309.0], [71.4, 311.0], [71.5, 312.0], [71.6, 314.0], [71.7, 315.0], [71.8, 315.0], [71.9, 316.0], [72.0, 317.0], [72.1, 318.0], [72.2, 319.0], [72.3, 320.0], [72.4, 321.0], [72.5, 322.0], [72.6, 324.0], [72.7, 325.0], [72.8, 325.0], [72.9, 326.0], [73.0, 327.0], [73.1, 329.0], [73.2, 329.0], [73.3, 331.0], [73.4, 332.0], [73.5, 333.0], [73.6, 334.0], [73.7, 336.0], [73.8, 337.0], [73.9, 338.0], [74.0, 339.0], [74.1, 340.0], [74.2, 340.0], [74.3, 341.0], [74.4, 343.0], [74.5, 345.0], [74.6, 346.0], [74.7, 347.0], [74.8, 348.0], [74.9, 349.0], [75.0, 350.0], [75.1, 352.0], [75.2, 353.0], [75.3, 354.0], [75.4, 355.0], [75.5, 356.0], [75.6, 357.0], [75.7, 358.0], [75.8, 360.0], [75.9, 360.0], [76.0, 362.0], [76.1, 364.0], [76.2, 366.0], [76.3, 367.0], [76.4, 369.0], [76.5, 370.0], [76.6, 373.0], [76.7, 374.0], [76.8, 375.0], [76.9, 376.0], [77.0, 377.0], [77.1, 378.0], [77.2, 379.0], [77.3, 381.0], [77.4, 382.0], [77.5, 382.0], [77.6, 383.0], [77.7, 384.0], [77.8, 386.0], [77.9, 387.0], [78.0, 388.0], [78.1, 390.0], [78.2, 392.0], [78.3, 393.0], [78.4, 394.0], [78.5, 396.0], [78.6, 398.0], [78.7, 400.0], [78.8, 401.0], [78.9, 401.0], [79.0, 403.0], [79.1, 403.0], [79.2, 405.0], [79.3, 405.0], [79.4, 406.0], [79.5, 409.0], [79.6, 410.0], [79.7, 411.0], [79.8, 413.0], [79.9, 415.0], [80.0, 417.0], [80.1, 418.0], [80.2, 420.0], [80.3, 422.0], [80.4, 423.0], [80.5, 424.0], [80.6, 426.0], [80.7, 427.0], [80.8, 429.0], [80.9, 431.0], [81.0, 432.0], [81.1, 434.0], [81.2, 435.0], [81.3, 437.0], [81.4, 438.0], [81.5, 438.0], [81.6, 439.0], [81.7, 441.0], [81.8, 442.0], [81.9, 443.0], [82.0, 445.0], [82.1, 447.0], [82.2, 449.0], [82.3, 450.0], [82.4, 452.0], [82.5, 455.0], [82.6, 456.0], [82.7, 458.0], [82.8, 460.0], [82.9, 461.0], [83.0, 462.0], [83.1, 465.0], [83.2, 467.0], [83.3, 470.0], [83.4, 473.0], [83.5, 475.0], [83.6, 476.0], [83.7, 478.0], [83.8, 479.0], [83.9, 480.0], [84.0, 482.0], [84.1, 483.0], [84.2, 485.0], [84.3, 487.0], [84.4, 489.0], [84.5, 490.0], [84.6, 491.0], [84.7, 492.0], [84.8, 494.0], [84.9, 495.0], [85.0, 498.0], [85.1, 499.0], [85.2, 500.0], [85.3, 502.0], [85.4, 504.0], [85.5, 506.0], [85.6, 507.0], [85.7, 508.0], [85.8, 510.0], [85.9, 510.0], [86.0, 511.0], [86.1, 513.0], [86.2, 514.0], [86.3, 516.0], [86.4, 518.0], [86.5, 520.0], [86.6, 521.0], [86.7, 523.0], [86.8, 525.0], [86.9, 526.0], [87.0, 528.0], [87.1, 529.0], [87.2, 531.0], [87.3, 532.0], [87.4, 534.0], [87.5, 535.0], [87.6, 537.0], [87.7, 539.0], [87.8, 540.0], [87.9, 544.0], [88.0, 546.0], [88.1, 548.0], [88.2, 549.0], [88.3, 551.0], [88.4, 552.0], [88.5, 554.0], [88.6, 556.0], [88.7, 557.0], [88.8, 559.0], [88.9, 560.0], [89.0, 561.0], [89.1, 563.0], [89.2, 565.0], [89.3, 567.0], [89.4, 568.0], [89.5, 570.0], [89.6, 571.0], [89.7, 573.0], [89.8, 576.0], [89.9, 577.0], [90.0, 579.0], [90.1, 580.0], [90.2, 581.0], [90.3, 585.0], [90.4, 586.0], [90.5, 588.0], [90.6, 590.0], [90.7, 591.0], [90.8, 592.0], [90.9, 595.0], [91.0, 596.0], [91.1, 597.0], [91.2, 599.0], [91.3, 601.0], [91.4, 602.0], [91.5, 607.0], [91.6, 608.0], [91.7, 609.0], [91.8, 612.0], [91.9, 613.0], [92.0, 614.0], [92.1, 615.0], [92.2, 617.0], [92.3, 619.0], [92.4, 621.0], [92.5, 623.0], [92.6, 624.0], [92.7, 626.0], [92.8, 629.0], [92.9, 632.0], [93.0, 635.0], [93.1, 637.0], [93.2, 640.0], [93.3, 641.0], [93.4, 642.0], [93.5, 644.0], [93.6, 647.0], [93.7, 651.0], [93.8, 654.0], [93.9, 655.0], [94.0, 657.0], [94.1, 661.0], [94.2, 665.0], [94.3, 670.0], [94.4, 675.0], [94.5, 676.0], [94.6, 677.0], [94.7, 681.0], [94.8, 688.0], [94.9, 691.0], [95.0, 696.0], [95.1, 697.0], [95.2, 701.0], [95.3, 704.0], [95.4, 706.0], [95.5, 712.0], [95.6, 718.0], [95.7, 720.0], [95.8, 722.0], [95.9, 723.0], [96.0, 727.0], [96.1, 731.0], [96.2, 734.0], [96.3, 738.0], [96.4, 742.0], [96.5, 745.0], [96.6, 749.0], [96.7, 752.0], [96.8, 759.0], [96.9, 762.0], [97.0, 767.0], [97.1, 771.0], [97.2, 779.0], [97.3, 784.0], [97.4, 787.0], [97.5, 791.0], [97.6, 798.0], [97.7, 803.0], [97.8, 811.0], [97.9, 822.0], [98.0, 830.0], [98.1, 838.0], [98.2, 844.0], [98.3, 859.0], [98.4, 869.0], [98.5, 877.0], [98.6, 899.0], [98.7, 910.0], [98.8, 933.0], [98.9, 941.0], [99.0, 963.0], [99.1, 981.0], [99.2, 1015.0], [99.3, 1039.0], [99.4, 1115.0], [99.5, 1227.0], [99.6, 1289.0], [99.7, 1357.0], [99.8, 1543.0], [99.9, 1876.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1664.0, "series": [{"data": [[0.0, 1664.0], [2100.0, 2.0], [600.0, 205.0], [2500.0, 1.0], [700.0, 127.0], [200.0, 654.0], [800.0, 51.0], [900.0, 28.0], [1000.0, 11.0], [1100.0, 6.0], [300.0, 434.0], [1200.0, 8.0], [1300.0, 5.0], [1400.0, 2.0], [1500.0, 4.0], [100.0, 1330.0], [400.0, 335.0], [1600.0, 1.0], [1800.0, 2.0], [500.0, 318.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4422.0, "series": [{"data": [[0.0, 4422.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 756.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.963621665319321, "minX": 1.60285074E12, "maxY": 10.0, "series": [{"data": [[1.60285074E12, 9.996776273372014], [1.6028508E12, 10.0], [1.60285086E12, 9.963621665319321]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285086E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 109.0, "minX": 1.0, "maxY": 872.0, "series": [{"data": [[8.0, 109.0], [4.0, 470.0], [2.0, 769.0], [1.0, 872.0], [9.0, 127.0], [5.0, 255.5], [10.0, 245.96756756756733], [6.0, 215.0], [3.0, 411.0], [7.0, 172.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990366088632026, 246.19807321772652]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9675.516666666666, "minX": 1.60285074E12, "maxY": 8218346.366666666, "series": [{"data": [[1.60285074E12, 4874950.333333333], [1.6028508E12, 8218346.366666666], [1.60285086E12, 3832221.4166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60285074E12, 11714.583333333334], [1.6028508E12, 18378.533333333333], [1.60285086E12, 9675.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285086E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 234.0929668552952, "minX": 1.60285074E12, "maxY": 251.4642166344294, "series": [{"data": [[1.60285074E12, 251.4642166344294], [1.6028508E12, 249.03164029975073], [1.60285086E12, 234.0929668552952]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285086E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 232.607922392886, "minX": 1.60285074E12, "maxY": 249.50548033526718, "series": [{"data": [[1.60285074E12, 249.50548033526718], [1.6028508E12, 246.97585345545403], [1.60285086E12, 232.607922392886]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285086E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005658852061438971, "minX": 1.60285074E12, "maxY": 0.08317214700193441, "series": [{"data": [[1.60285074E12, 0.08317214700193441], [1.6028508E12, 0.006661115736885928], [1.60285086E12, 0.005658852061438971]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285086E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60285074E12, "maxY": 2562.0, "series": [{"data": [[1.60285074E12, 2562.0], [1.6028508E12, 1587.0], [1.60285086E12, 1584.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60285074E12, 36.0], [1.6028508E12, 33.0], [1.60285086E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60285074E12, 37.0], [1.6028508E12, 33.0], [1.60285086E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60285074E12, 36.743999814987184], [1.6028508E12, 33.0], [1.60285086E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60285074E12, 28.0], [1.6028508E12, 28.0], [1.60285086E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60285074E12, 155.0], [1.6028508E12, 160.0], [1.60285086E12, 138.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285086E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 562.5, "series": [{"data": [[18.0, 157.5], [20.0, 460.5], [21.0, 393.5], [22.0, 381.5], [23.0, 449.0], [24.0, 379.0], [25.0, 381.0], [26.0, 280.5], [27.0, 337.5], [28.0, 201.0], [29.0, 265.0], [30.0, 221.0], [31.0, 241.5], [33.0, 267.0], [32.0, 189.0], [34.0, 251.5], [35.0, 244.0], [37.0, 171.0], [36.0, 301.0], [38.0, 161.0], [40.0, 238.0], [41.0, 207.0], [43.0, 148.5], [42.0, 79.0], [44.0, 151.0], [45.0, 196.0], [46.0, 138.0], [47.0, 136.0], [48.0, 116.5], [49.0, 91.0], [50.0, 126.5], [51.0, 119.5], [53.0, 153.0], [55.0, 75.0], [56.0, 146.5], [57.0, 83.0], [58.0, 104.5], [61.0, 148.0], [63.0, 162.0], [62.0, 127.5], [65.0, 73.0], [66.0, 72.5], [67.0, 78.0], [71.0, 70.0], [70.0, 89.0], [75.0, 81.0], [74.0, 61.0], [72.0, 58.0], [76.0, 95.0], [81.0, 92.0], [80.0, 65.0], [82.0, 92.0], [98.0, 54.0], [97.0, 45.0], [1.0, 562.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.0, "minX": 1.0, "maxY": 557.0, "series": [{"data": [[18.0, 157.5], [20.0, 452.0], [21.0, 388.5], [22.0, 380.5], [23.0, 442.0], [24.0, 375.5], [25.0, 380.0], [26.0, 279.5], [27.0, 333.0], [28.0, 201.0], [29.0, 264.0], [30.0, 220.5], [31.0, 239.0], [33.0, 266.0], [32.0, 189.0], [34.0, 250.5], [35.0, 243.5], [37.0, 171.0], [36.0, 295.5], [38.0, 159.5], [40.0, 237.5], [41.0, 206.0], [43.0, 148.0], [42.0, 79.0], [44.0, 150.5], [45.0, 195.0], [46.0, 138.0], [47.0, 135.5], [48.0, 116.5], [49.0, 91.0], [50.0, 126.5], [51.0, 119.0], [53.0, 152.0], [55.0, 75.0], [56.0, 145.5], [57.0, 82.0], [58.0, 104.5], [61.0, 148.0], [63.0, 162.0], [62.0, 126.5], [65.0, 73.0], [66.0, 72.5], [67.0, 78.0], [71.0, 70.0], [70.0, 89.0], [75.0, 81.0], [74.0, 61.0], [72.0, 58.0], [76.0, 95.0], [81.0, 91.5], [80.0, 64.5], [82.0, 91.5], [98.0, 54.0], [97.0, 45.0], [1.0, 557.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.45, "minX": 1.60285074E12, "maxY": 40.03333333333333, "series": [{"data": [[1.60285074E12, 26.016666666666666], [1.6028508E12, 40.03333333333333], [1.60285086E12, 20.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285086E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.616666666666667, "minX": 1.60285074E12, "maxY": 40.03333333333333, "series": [{"data": [[1.60285074E12, 25.85], [1.6028508E12, 40.03333333333333], [1.60285086E12, 20.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60285086E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.616666666666667, "minX": 1.60285074E12, "maxY": 40.03333333333333, "series": [{"data": [[1.60285074E12, 25.85], [1.6028508E12, 40.03333333333333], [1.60285086E12, 20.616666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285086E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.616666666666667, "minX": 1.60285074E12, "maxY": 40.03333333333333, "series": [{"data": [[1.60285074E12, 25.85], [1.6028508E12, 40.03333333333333], [1.60285086E12, 20.616666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60285086E12, "title": "Total Transactions Per Second"}},
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

