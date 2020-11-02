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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2094.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 32.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 42.0], [6.5, 42.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 43.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 45.0], [8.0, 45.0], [8.1, 45.0], [8.2, 45.0], [8.3, 45.0], [8.4, 45.0], [8.5, 46.0], [8.6, 46.0], [8.7, 46.0], [8.8, 46.0], [8.9, 46.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 48.0], [9.4, 48.0], [9.5, 48.0], [9.6, 48.0], [9.7, 49.0], [9.8, 49.0], [9.9, 49.0], [10.0, 49.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 53.0], [12.4, 54.0], [12.5, 54.0], [12.6, 54.0], [12.7, 54.0], [12.8, 54.0], [12.9, 54.0], [13.0, 55.0], [13.1, 55.0], [13.2, 55.0], [13.3, 55.0], [13.4, 56.0], [13.5, 56.0], [13.6, 56.0], [13.7, 56.0], [13.8, 57.0], [13.9, 57.0], [14.0, 57.0], [14.1, 57.0], [14.2, 58.0], [14.3, 58.0], [14.4, 58.0], [14.5, 58.0], [14.6, 58.0], [14.7, 59.0], [14.8, 59.0], [14.9, 59.0], [15.0, 59.0], [15.1, 59.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 60.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 61.0], [16.1, 61.0], [16.2, 62.0], [16.3, 62.0], [16.4, 62.0], [16.5, 62.0], [16.6, 62.0], [16.7, 63.0], [16.8, 63.0], [16.9, 63.0], [17.0, 63.0], [17.1, 63.0], [17.2, 64.0], [17.3, 64.0], [17.4, 64.0], [17.5, 64.0], [17.6, 65.0], [17.7, 65.0], [17.8, 65.0], [17.9, 65.0], [18.0, 65.0], [18.1, 66.0], [18.2, 66.0], [18.3, 66.0], [18.4, 66.0], [18.5, 67.0], [18.6, 67.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 67.0], [19.2, 68.0], [19.3, 68.0], [19.4, 68.0], [19.5, 68.0], [19.6, 68.0], [19.7, 68.0], [19.8, 68.0], [19.9, 69.0], [20.0, 69.0], [20.1, 69.0], [20.2, 69.0], [20.3, 69.0], [20.4, 70.0], [20.5, 70.0], [20.6, 70.0], [20.7, 70.0], [20.8, 70.0], [20.9, 70.0], [21.0, 71.0], [21.1, 71.0], [21.2, 71.0], [21.3, 71.0], [21.4, 71.0], [21.5, 71.0], [21.6, 72.0], [21.7, 72.0], [21.8, 72.0], [21.9, 72.0], [22.0, 72.0], [22.1, 73.0], [22.2, 73.0], [22.3, 73.0], [22.4, 73.0], [22.5, 74.0], [22.6, 74.0], [22.7, 74.0], [22.8, 74.0], [22.9, 75.0], [23.0, 75.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 76.0], [23.6, 76.0], [23.7, 76.0], [23.8, 76.0], [23.9, 77.0], [24.0, 77.0], [24.1, 77.0], [24.2, 77.0], [24.3, 78.0], [24.4, 78.0], [24.5, 78.0], [24.6, 78.0], [24.7, 79.0], [24.8, 79.0], [24.9, 79.0], [25.0, 79.0], [25.1, 79.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 80.0], [25.6, 80.0], [25.7, 81.0], [25.8, 81.0], [25.9, 81.0], [26.0, 82.0], [26.1, 82.0], [26.2, 82.0], [26.3, 82.0], [26.4, 82.0], [26.5, 83.0], [26.6, 83.0], [26.7, 83.0], [26.8, 83.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 85.0], [27.5, 85.0], [27.6, 85.0], [27.7, 86.0], [27.8, 86.0], [27.9, 86.0], [28.0, 86.0], [28.1, 86.0], [28.2, 86.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 88.0], [29.2, 89.0], [29.3, 89.0], [29.4, 89.0], [29.5, 89.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 90.0], [30.0, 91.0], [30.1, 91.0], [30.2, 91.0], [30.3, 92.0], [30.4, 92.0], [30.5, 92.0], [30.6, 93.0], [30.7, 93.0], [30.8, 93.0], [30.9, 94.0], [31.0, 94.0], [31.1, 94.0], [31.2, 95.0], [31.3, 95.0], [31.4, 95.0], [31.5, 95.0], [31.6, 96.0], [31.7, 96.0], [31.8, 96.0], [31.9, 96.0], [32.0, 97.0], [32.1, 97.0], [32.2, 97.0], [32.3, 98.0], [32.4, 98.0], [32.5, 98.0], [32.6, 99.0], [32.7, 99.0], [32.8, 99.0], [32.9, 100.0], [33.0, 100.0], [33.1, 100.0], [33.2, 101.0], [33.3, 101.0], [33.4, 101.0], [33.5, 101.0], [33.6, 102.0], [33.7, 103.0], [33.8, 103.0], [33.9, 103.0], [34.0, 103.0], [34.1, 104.0], [34.2, 104.0], [34.3, 104.0], [34.4, 104.0], [34.5, 104.0], [34.6, 104.0], [34.7, 105.0], [34.8, 105.0], [34.9, 105.0], [35.0, 105.0], [35.1, 105.0], [35.2, 105.0], [35.3, 105.0], [35.4, 106.0], [35.5, 106.0], [35.6, 106.0], [35.7, 106.0], [35.8, 106.0], [35.9, 106.0], [36.0, 107.0], [36.1, 107.0], [36.2, 107.0], [36.3, 107.0], [36.4, 107.0], [36.5, 107.0], [36.6, 108.0], [36.7, 108.0], [36.8, 108.0], [36.9, 108.0], [37.0, 109.0], [37.1, 109.0], [37.2, 109.0], [37.3, 109.0], [37.4, 109.0], [37.5, 110.0], [37.6, 110.0], [37.7, 110.0], [37.8, 110.0], [37.9, 111.0], [38.0, 111.0], [38.1, 111.0], [38.2, 111.0], [38.3, 112.0], [38.4, 112.0], [38.5, 112.0], [38.6, 112.0], [38.7, 112.0], [38.8, 113.0], [38.9, 113.0], [39.0, 113.0], [39.1, 114.0], [39.2, 114.0], [39.3, 114.0], [39.4, 115.0], [39.5, 115.0], [39.6, 115.0], [39.7, 115.0], [39.8, 115.0], [39.9, 115.0], [40.0, 116.0], [40.1, 116.0], [40.2, 116.0], [40.3, 117.0], [40.4, 117.0], [40.5, 117.0], [40.6, 117.0], [40.7, 118.0], [40.8, 118.0], [40.9, 118.0], [41.0, 118.0], [41.1, 119.0], [41.2, 119.0], [41.3, 119.0], [41.4, 120.0], [41.5, 120.0], [41.6, 120.0], [41.7, 120.0], [41.8, 120.0], [41.9, 121.0], [42.0, 121.0], [42.1, 121.0], [42.2, 121.0], [42.3, 122.0], [42.4, 122.0], [42.5, 122.0], [42.6, 123.0], [42.7, 123.0], [42.8, 123.0], [42.9, 124.0], [43.0, 124.0], [43.1, 124.0], [43.2, 125.0], [43.3, 125.0], [43.4, 125.0], [43.5, 125.0], [43.6, 125.0], [43.7, 126.0], [43.8, 126.0], [43.9, 126.0], [44.0, 126.0], [44.1, 126.0], [44.2, 127.0], [44.3, 127.0], [44.4, 127.0], [44.5, 127.0], [44.6, 127.0], [44.7, 128.0], [44.8, 128.0], [44.9, 128.0], [45.0, 128.0], [45.1, 129.0], [45.2, 129.0], [45.3, 130.0], [45.4, 130.0], [45.5, 130.0], [45.6, 130.0], [45.7, 131.0], [45.8, 131.0], [45.9, 132.0], [46.0, 132.0], [46.1, 132.0], [46.2, 133.0], [46.3, 133.0], [46.4, 134.0], [46.5, 134.0], [46.6, 134.0], [46.7, 135.0], [46.8, 135.0], [46.9, 136.0], [47.0, 136.0], [47.1, 136.0], [47.2, 137.0], [47.3, 137.0], [47.4, 137.0], [47.5, 138.0], [47.6, 138.0], [47.7, 139.0], [47.8, 139.0], [47.9, 140.0], [48.0, 140.0], [48.1, 141.0], [48.2, 141.0], [48.3, 141.0], [48.4, 142.0], [48.5, 142.0], [48.6, 142.0], [48.7, 143.0], [48.8, 143.0], [48.9, 144.0], [49.0, 144.0], [49.1, 144.0], [49.2, 144.0], [49.3, 145.0], [49.4, 145.0], [49.5, 145.0], [49.6, 145.0], [49.7, 146.0], [49.8, 146.0], [49.9, 147.0], [50.0, 147.0], [50.1, 148.0], [50.2, 148.0], [50.3, 149.0], [50.4, 150.0], [50.5, 150.0], [50.6, 150.0], [50.7, 151.0], [50.8, 152.0], [50.9, 152.0], [51.0, 153.0], [51.1, 153.0], [51.2, 154.0], [51.3, 154.0], [51.4, 155.0], [51.5, 155.0], [51.6, 155.0], [51.7, 156.0], [51.8, 156.0], [51.9, 157.0], [52.0, 158.0], [52.1, 159.0], [52.2, 159.0], [52.3, 159.0], [52.4, 160.0], [52.5, 160.0], [52.6, 161.0], [52.7, 162.0], [52.8, 162.0], [52.9, 163.0], [53.0, 164.0], [53.1, 164.0], [53.2, 165.0], [53.3, 165.0], [53.4, 165.0], [53.5, 166.0], [53.6, 166.0], [53.7, 167.0], [53.8, 168.0], [53.9, 168.0], [54.0, 169.0], [54.1, 169.0], [54.2, 170.0], [54.3, 171.0], [54.4, 171.0], [54.5, 172.0], [54.6, 173.0], [54.7, 174.0], [54.8, 175.0], [54.9, 176.0], [55.0, 176.0], [55.1, 177.0], [55.2, 178.0], [55.3, 179.0], [55.4, 179.0], [55.5, 179.0], [55.6, 180.0], [55.7, 181.0], [55.8, 181.0], [55.9, 181.0], [56.0, 183.0], [56.1, 183.0], [56.2, 184.0], [56.3, 184.0], [56.4, 186.0], [56.5, 186.0], [56.6, 186.0], [56.7, 187.0], [56.8, 187.0], [56.9, 188.0], [57.0, 188.0], [57.1, 189.0], [57.2, 189.0], [57.3, 190.0], [57.4, 191.0], [57.5, 192.0], [57.6, 193.0], [57.7, 193.0], [57.8, 193.0], [57.9, 194.0], [58.0, 195.0], [58.1, 196.0], [58.2, 197.0], [58.3, 198.0], [58.4, 198.0], [58.5, 199.0], [58.6, 199.0], [58.7, 200.0], [58.8, 201.0], [58.9, 201.0], [59.0, 202.0], [59.1, 203.0], [59.2, 203.0], [59.3, 204.0], [59.4, 204.0], [59.5, 205.0], [59.6, 205.0], [59.7, 205.0], [59.8, 206.0], [59.9, 207.0], [60.0, 208.0], [60.1, 209.0], [60.2, 210.0], [60.3, 211.0], [60.4, 211.0], [60.5, 212.0], [60.6, 213.0], [60.7, 213.0], [60.8, 214.0], [60.9, 214.0], [61.0, 216.0], [61.1, 216.0], [61.2, 217.0], [61.3, 218.0], [61.4, 219.0], [61.5, 219.0], [61.6, 221.0], [61.7, 221.0], [61.8, 223.0], [61.9, 223.0], [62.0, 223.0], [62.1, 225.0], [62.2, 226.0], [62.3, 226.0], [62.4, 227.0], [62.5, 228.0], [62.6, 229.0], [62.7, 230.0], [62.8, 231.0], [62.9, 231.0], [63.0, 232.0], [63.1, 233.0], [63.2, 234.0], [63.3, 235.0], [63.4, 235.0], [63.5, 236.0], [63.6, 236.0], [63.7, 237.0], [63.8, 239.0], [63.9, 239.0], [64.0, 240.0], [64.1, 241.0], [64.2, 242.0], [64.3, 243.0], [64.4, 244.0], [64.5, 245.0], [64.6, 246.0], [64.7, 247.0], [64.8, 248.0], [64.9, 249.0], [65.0, 249.0], [65.1, 250.0], [65.2, 251.0], [65.3, 252.0], [65.4, 253.0], [65.5, 253.0], [65.6, 255.0], [65.7, 256.0], [65.8, 257.0], [65.9, 257.0], [66.0, 258.0], [66.1, 260.0], [66.2, 261.0], [66.3, 262.0], [66.4, 263.0], [66.5, 264.0], [66.6, 265.0], [66.7, 265.0], [66.8, 266.0], [66.9, 268.0], [67.0, 268.0], [67.1, 269.0], [67.2, 269.0], [67.3, 271.0], [67.4, 272.0], [67.5, 272.0], [67.6, 274.0], [67.7, 274.0], [67.8, 275.0], [67.9, 276.0], [68.0, 277.0], [68.1, 279.0], [68.2, 280.0], [68.3, 281.0], [68.4, 281.0], [68.5, 282.0], [68.6, 283.0], [68.7, 284.0], [68.8, 284.0], [68.9, 284.0], [69.0, 286.0], [69.1, 287.0], [69.2, 287.0], [69.3, 288.0], [69.4, 290.0], [69.5, 291.0], [69.6, 292.0], [69.7, 293.0], [69.8, 294.0], [69.9, 295.0], [70.0, 295.0], [70.1, 296.0], [70.2, 297.0], [70.3, 298.0], [70.4, 299.0], [70.5, 300.0], [70.6, 302.0], [70.7, 303.0], [70.8, 304.0], [70.9, 305.0], [71.0, 306.0], [71.1, 307.0], [71.2, 308.0], [71.3, 309.0], [71.4, 309.0], [71.5, 310.0], [71.6, 312.0], [71.7, 312.0], [71.8, 313.0], [71.9, 314.0], [72.0, 314.0], [72.1, 315.0], [72.2, 317.0], [72.3, 318.0], [72.4, 318.0], [72.5, 320.0], [72.6, 321.0], [72.7, 322.0], [72.8, 322.0], [72.9, 323.0], [73.0, 323.0], [73.1, 324.0], [73.2, 326.0], [73.3, 327.0], [73.4, 328.0], [73.5, 329.0], [73.6, 330.0], [73.7, 331.0], [73.8, 332.0], [73.9, 333.0], [74.0, 334.0], [74.1, 336.0], [74.2, 336.0], [74.3, 338.0], [74.4, 339.0], [74.5, 340.0], [74.6, 342.0], [74.7, 343.0], [74.8, 345.0], [74.9, 346.0], [75.0, 347.0], [75.1, 347.0], [75.2, 348.0], [75.3, 350.0], [75.4, 351.0], [75.5, 352.0], [75.6, 352.0], [75.7, 353.0], [75.8, 355.0], [75.9, 356.0], [76.0, 357.0], [76.1, 359.0], [76.2, 361.0], [76.3, 363.0], [76.4, 363.0], [76.5, 364.0], [76.6, 365.0], [76.7, 366.0], [76.8, 367.0], [76.9, 369.0], [77.0, 370.0], [77.1, 371.0], [77.2, 371.0], [77.3, 372.0], [77.4, 373.0], [77.5, 376.0], [77.6, 378.0], [77.7, 379.0], [77.8, 381.0], [77.9, 382.0], [78.0, 383.0], [78.1, 385.0], [78.2, 385.0], [78.3, 386.0], [78.4, 387.0], [78.5, 389.0], [78.6, 390.0], [78.7, 392.0], [78.8, 393.0], [78.9, 394.0], [79.0, 394.0], [79.1, 396.0], [79.2, 396.0], [79.3, 397.0], [79.4, 398.0], [79.5, 400.0], [79.6, 401.0], [79.7, 402.0], [79.8, 404.0], [79.9, 405.0], [80.0, 406.0], [80.1, 409.0], [80.2, 410.0], [80.3, 411.0], [80.4, 413.0], [80.5, 414.0], [80.6, 414.0], [80.7, 415.0], [80.8, 417.0], [80.9, 418.0], [81.0, 419.0], [81.1, 420.0], [81.2, 422.0], [81.3, 423.0], [81.4, 425.0], [81.5, 427.0], [81.6, 429.0], [81.7, 431.0], [81.8, 432.0], [81.9, 435.0], [82.0, 437.0], [82.1, 438.0], [82.2, 439.0], [82.3, 440.0], [82.4, 441.0], [82.5, 443.0], [82.6, 445.0], [82.7, 447.0], [82.8, 449.0], [82.9, 452.0], [83.0, 453.0], [83.1, 456.0], [83.2, 460.0], [83.3, 462.0], [83.4, 464.0], [83.5, 465.0], [83.6, 466.0], [83.7, 468.0], [83.8, 470.0], [83.9, 471.0], [84.0, 473.0], [84.1, 475.0], [84.2, 476.0], [84.3, 478.0], [84.4, 480.0], [84.5, 481.0], [84.6, 482.0], [84.7, 484.0], [84.8, 485.0], [84.9, 486.0], [85.0, 487.0], [85.1, 489.0], [85.2, 490.0], [85.3, 492.0], [85.4, 493.0], [85.5, 494.0], [85.6, 495.0], [85.7, 496.0], [85.8, 500.0], [85.9, 502.0], [86.0, 503.0], [86.1, 504.0], [86.2, 505.0], [86.3, 506.0], [86.4, 508.0], [86.5, 509.0], [86.6, 510.0], [86.7, 512.0], [86.8, 512.0], [86.9, 514.0], [87.0, 516.0], [87.1, 518.0], [87.2, 518.0], [87.3, 520.0], [87.4, 521.0], [87.5, 523.0], [87.6, 526.0], [87.7, 527.0], [87.8, 528.0], [87.9, 529.0], [88.0, 531.0], [88.1, 533.0], [88.2, 534.0], [88.3, 536.0], [88.4, 537.0], [88.5, 538.0], [88.6, 541.0], [88.7, 542.0], [88.8, 546.0], [88.9, 548.0], [89.0, 550.0], [89.1, 553.0], [89.2, 555.0], [89.3, 555.0], [89.4, 557.0], [89.5, 559.0], [89.6, 561.0], [89.7, 561.0], [89.8, 563.0], [89.9, 564.0], [90.0, 567.0], [90.1, 570.0], [90.2, 571.0], [90.3, 573.0], [90.4, 576.0], [90.5, 576.0], [90.6, 580.0], [90.7, 582.0], [90.8, 583.0], [90.9, 586.0], [91.0, 587.0], [91.1, 589.0], [91.2, 591.0], [91.3, 592.0], [91.4, 595.0], [91.5, 598.0], [91.6, 599.0], [91.7, 600.0], [91.8, 601.0], [91.9, 602.0], [92.0, 604.0], [92.1, 607.0], [92.2, 609.0], [92.3, 610.0], [92.4, 612.0], [92.5, 615.0], [92.6, 618.0], [92.7, 619.0], [92.8, 624.0], [92.9, 626.0], [93.0, 630.0], [93.1, 632.0], [93.2, 635.0], [93.3, 637.0], [93.4, 639.0], [93.5, 642.0], [93.6, 643.0], [93.7, 648.0], [93.8, 651.0], [93.9, 652.0], [94.0, 655.0], [94.1, 656.0], [94.2, 658.0], [94.3, 659.0], [94.4, 663.0], [94.5, 664.0], [94.6, 666.0], [94.7, 667.0], [94.8, 668.0], [94.9, 671.0], [95.0, 675.0], [95.1, 682.0], [95.2, 685.0], [95.3, 688.0], [95.4, 691.0], [95.5, 697.0], [95.6, 698.0], [95.7, 700.0], [95.8, 702.0], [95.9, 706.0], [96.0, 709.0], [96.1, 709.0], [96.2, 713.0], [96.3, 715.0], [96.4, 719.0], [96.5, 722.0], [96.6, 725.0], [96.7, 728.0], [96.8, 732.0], [96.9, 737.0], [97.0, 739.0], [97.1, 745.0], [97.2, 749.0], [97.3, 752.0], [97.4, 756.0], [97.5, 762.0], [97.6, 765.0], [97.7, 777.0], [97.8, 786.0], [97.9, 791.0], [98.0, 799.0], [98.1, 802.0], [98.2, 810.0], [98.3, 821.0], [98.4, 827.0], [98.5, 836.0], [98.6, 846.0], [98.7, 861.0], [98.8, 880.0], [98.9, 902.0], [99.0, 923.0], [99.1, 944.0], [99.2, 980.0], [99.3, 1015.0], [99.4, 1050.0], [99.5, 1158.0], [99.6, 1271.0], [99.7, 1362.0], [99.8, 1532.0], [99.9, 1754.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1706.0, "series": [{"data": [[0.0, 1706.0], [600.0, 210.0], [700.0, 121.0], [200.0, 614.0], [800.0, 45.0], [900.0, 19.0], [1000.0, 11.0], [1100.0, 6.0], [300.0, 470.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 1.0], [1500.0, 6.0], [100.0, 1336.0], [400.0, 326.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 2.0], [500.0, 304.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4454.0, "series": [{"data": [[0.0, 4454.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 723.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.968986905582357, "minX": 1.60422066E12, "maxY": 10.0, "series": [{"data": [[1.60422066E12, 9.999179655455293], [1.60422078E12, 9.968986905582357], [1.60422072E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422078E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 116.0, "minX": 1.0, "maxY": 808.0, "series": [{"data": [[8.0, 116.0], [4.0, 345.0], [2.0, 808.0], [1.0, 770.0], [9.0, 490.5], [10.0, 240.67760617760604], [5.0, 272.0], [6.0, 166.0], [3.0, 441.0], [7.0, 138.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 240.99171483622365]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9158.533333333333, "minX": 1.60422066E12, "maxY": 8207385.816666666, "series": [{"data": [[1.60422066E12, 3795611.05], [1.60422078E12, 4922521.116666666], [1.60422072E12, 8207385.816666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422066E12, 9158.533333333333], [1.60422078E12, 11280.666666666666], [1.60422072E12, 19329.433333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422078E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 236.8750000000002, "minX": 1.60422066E12, "maxY": 248.47497949138616, "series": [{"data": [[1.60422066E12, 248.47497949138616], [1.60422078E12, 241.8545830461752], [1.60422072E12, 236.8750000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422078E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 234.83690476190495, "minX": 1.60422066E12, "maxY": 246.6751435602955, "series": [{"data": [[1.60422066E12, 246.6751435602955], [1.60422078E12, 240.32529290144743], [1.60422072E12, 234.83690476190495]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422078E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006746031746031736, "minX": 1.60422066E12, "maxY": 0.08695652173913063, "series": [{"data": [[1.60422066E12, 0.08695652173913063], [1.60422078E12, 0.008959338387319087], [1.60422072E12, 0.006746031746031736]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422078E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60422066E12, "maxY": 2094.0, "series": [{"data": [[1.60422066E12, 2094.0], [1.60422078E12, 1851.0], [1.60422072E12, 1754.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422066E12, 36.0], [1.60422078E12, 33.0], [1.60422072E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422066E12, 36.078000116348264], [1.60422078E12, 33.0], [1.60422072E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422066E12, 36.0], [1.60422078E12, 33.0], [1.60422072E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422066E12, 32.0], [1.60422078E12, 29.0], [1.60422072E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422066E12, 164.0], [1.60422078E12, 142.0], [1.60422072E12, 147.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422078E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 57.0, "minX": 3.0, "maxY": 770.0, "series": [{"data": [[3.0, 770.0], [5.0, 556.0], [18.0, 211.0], [21.0, 394.0], [22.0, 452.5], [23.0, 429.0], [24.0, 405.0], [25.0, 418.0], [26.0, 294.5], [27.0, 339.0], [28.0, 250.5], [29.0, 244.5], [30.0, 256.0], [31.0, 237.5], [33.0, 236.0], [32.0, 165.5], [34.0, 191.5], [35.0, 254.5], [37.0, 193.5], [36.0, 231.5], [38.0, 229.5], [39.0, 171.0], [41.0, 253.0], [40.0, 181.0], [43.0, 162.0], [44.0, 125.5], [45.0, 128.5], [46.0, 138.5], [47.0, 165.5], [48.0, 225.5], [49.0, 134.0], [51.0, 187.0], [50.0, 101.0], [55.0, 144.0], [57.0, 84.0], [56.0, 125.5], [58.0, 84.0], [59.0, 87.0], [60.0, 128.5], [61.0, 77.0], [64.0, 67.0], [70.0, 82.0], [71.0, 63.0], [68.0, 68.5], [75.0, 96.0], [74.0, 66.0], [80.0, 99.5], [82.0, 57.0], [84.0, 95.5], [89.0, 69.0], [108.0, 58.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 57.0, "minX": 3.0, "maxY": 765.0, "series": [{"data": [[3.0, 765.0], [5.0, 556.0], [18.0, 210.0], [21.0, 393.0], [22.0, 440.0], [23.0, 418.0], [24.0, 393.0], [25.0, 410.5], [26.0, 292.5], [27.0, 339.0], [28.0, 249.0], [29.0, 239.5], [30.0, 255.5], [31.0, 237.0], [33.0, 236.0], [32.0, 165.5], [34.0, 191.0], [35.0, 250.0], [37.0, 190.5], [36.0, 227.0], [38.0, 229.5], [39.0, 170.5], [41.0, 252.5], [40.0, 180.0], [43.0, 161.0], [44.0, 124.5], [45.0, 128.0], [46.0, 138.5], [47.0, 164.5], [48.0, 225.5], [49.0, 134.0], [51.0, 187.0], [50.0, 101.0], [55.0, 144.0], [57.0, 84.0], [56.0, 123.0], [58.0, 84.0], [59.0, 87.0], [60.0, 128.5], [61.0, 77.0], [64.0, 67.0], [70.0, 82.0], [71.0, 63.0], [68.0, 68.5], [75.0, 96.0], [74.0, 66.0], [80.0, 99.5], [82.0, 57.0], [84.0, 95.5], [89.0, 69.0], [108.0, 58.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.466666666666665, "minX": 1.60422066E12, "maxY": 42.016666666666666, "series": [{"data": [[1.60422066E12, 20.466666666666665], [1.60422078E12, 24.016666666666666], [1.60422072E12, 42.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422078E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.316666666666666, "minX": 1.60422066E12, "maxY": 42.0, "series": [{"data": [[1.60422066E12, 20.316666666666666], [1.60422078E12, 24.183333333333334], [1.60422072E12, 42.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422078E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.316666666666666, "minX": 1.60422066E12, "maxY": 42.0, "series": [{"data": [[1.60422066E12, 20.316666666666666], [1.60422078E12, 24.183333333333334], [1.60422072E12, 42.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422078E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.316666666666666, "minX": 1.60422066E12, "maxY": 42.0, "series": [{"data": [[1.60422066E12, 20.316666666666666], [1.60422078E12, 24.183333333333334], [1.60422072E12, 42.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422078E12, "title": "Total Transactions Per Second"}},
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

