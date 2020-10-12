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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2484.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 39.0], [4.2, 39.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 42.0], [6.7, 42.0], [6.8, 42.0], [6.9, 42.0], [7.0, 43.0], [7.1, 43.0], [7.2, 43.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 45.0], [7.9, 45.0], [8.0, 45.0], [8.1, 45.0], [8.2, 45.0], [8.3, 46.0], [8.4, 46.0], [8.5, 47.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 48.0], [9.0, 48.0], [9.1, 48.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 52.0], [10.9, 52.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 53.0], [11.4, 53.0], [11.5, 53.0], [11.6, 53.0], [11.7, 54.0], [11.8, 54.0], [11.9, 54.0], [12.0, 54.0], [12.1, 54.0], [12.2, 54.0], [12.3, 55.0], [12.4, 55.0], [12.5, 55.0], [12.6, 56.0], [12.7, 56.0], [12.8, 56.0], [12.9, 56.0], [13.0, 56.0], [13.1, 56.0], [13.2, 57.0], [13.3, 57.0], [13.4, 57.0], [13.5, 57.0], [13.6, 58.0], [13.7, 58.0], [13.8, 58.0], [13.9, 58.0], [14.0, 58.0], [14.1, 59.0], [14.2, 59.0], [14.3, 59.0], [14.4, 59.0], [14.5, 59.0], [14.6, 60.0], [14.7, 60.0], [14.8, 60.0], [14.9, 60.0], [15.0, 61.0], [15.1, 61.0], [15.2, 61.0], [15.3, 61.0], [15.4, 62.0], [15.5, 62.0], [15.6, 62.0], [15.7, 62.0], [15.8, 63.0], [15.9, 63.0], [16.0, 63.0], [16.1, 63.0], [16.2, 63.0], [16.3, 64.0], [16.4, 64.0], [16.5, 64.0], [16.6, 64.0], [16.7, 64.0], [16.8, 65.0], [16.9, 65.0], [17.0, 65.0], [17.1, 65.0], [17.2, 66.0], [17.3, 66.0], [17.4, 66.0], [17.5, 67.0], [17.6, 67.0], [17.7, 67.0], [17.8, 68.0], [17.9, 68.0], [18.0, 68.0], [18.1, 68.0], [18.2, 68.0], [18.3, 68.0], [18.4, 69.0], [18.5, 69.0], [18.6, 69.0], [18.7, 69.0], [18.8, 69.0], [18.9, 70.0], [19.0, 70.0], [19.1, 70.0], [19.2, 70.0], [19.3, 70.0], [19.4, 71.0], [19.5, 71.0], [19.6, 71.0], [19.7, 71.0], [19.8, 71.0], [19.9, 72.0], [20.0, 72.0], [20.1, 72.0], [20.2, 72.0], [20.3, 72.0], [20.4, 73.0], [20.5, 73.0], [20.6, 73.0], [20.7, 73.0], [20.8, 74.0], [20.9, 74.0], [21.0, 74.0], [21.1, 74.0], [21.2, 74.0], [21.3, 75.0], [21.4, 75.0], [21.5, 75.0], [21.6, 75.0], [21.7, 75.0], [21.8, 76.0], [21.9, 76.0], [22.0, 76.0], [22.1, 76.0], [22.2, 76.0], [22.3, 77.0], [22.4, 77.0], [22.5, 77.0], [22.6, 78.0], [22.7, 78.0], [22.8, 78.0], [22.9, 78.0], [23.0, 78.0], [23.1, 78.0], [23.2, 78.0], [23.3, 78.0], [23.4, 79.0], [23.5, 79.0], [23.6, 79.0], [23.7, 79.0], [23.8, 79.0], [23.9, 80.0], [24.0, 80.0], [24.1, 80.0], [24.2, 80.0], [24.3, 80.0], [24.4, 81.0], [24.5, 81.0], [24.6, 81.0], [24.7, 82.0], [24.8, 82.0], [24.9, 82.0], [25.0, 82.0], [25.1, 82.0], [25.2, 83.0], [25.3, 83.0], [25.4, 83.0], [25.5, 83.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 84.0], [26.1, 85.0], [26.2, 85.0], [26.3, 85.0], [26.4, 85.0], [26.5, 85.0], [26.6, 86.0], [26.7, 86.0], [26.8, 86.0], [26.9, 86.0], [27.0, 87.0], [27.1, 87.0], [27.2, 88.0], [27.3, 88.0], [27.4, 88.0], [27.5, 88.0], [27.6, 88.0], [27.7, 89.0], [27.8, 89.0], [27.9, 89.0], [28.0, 89.0], [28.1, 90.0], [28.2, 90.0], [28.3, 90.0], [28.4, 91.0], [28.5, 91.0], [28.6, 91.0], [28.7, 91.0], [28.8, 92.0], [28.9, 92.0], [29.0, 92.0], [29.1, 93.0], [29.2, 93.0], [29.3, 94.0], [29.4, 94.0], [29.5, 95.0], [29.6, 95.0], [29.7, 95.0], [29.8, 96.0], [29.9, 96.0], [30.0, 96.0], [30.1, 96.0], [30.2, 97.0], [30.3, 97.0], [30.4, 97.0], [30.5, 97.0], [30.6, 98.0], [30.7, 98.0], [30.8, 98.0], [30.9, 99.0], [31.0, 99.0], [31.1, 99.0], [31.2, 100.0], [31.3, 100.0], [31.4, 100.0], [31.5, 100.0], [31.6, 101.0], [31.7, 101.0], [31.8, 101.0], [31.9, 101.0], [32.0, 102.0], [32.1, 102.0], [32.2, 102.0], [32.3, 103.0], [32.4, 103.0], [32.5, 103.0], [32.6, 103.0], [32.7, 104.0], [32.8, 104.0], [32.9, 104.0], [33.0, 105.0], [33.1, 105.0], [33.2, 105.0], [33.3, 105.0], [33.4, 105.0], [33.5, 106.0], [33.6, 106.0], [33.7, 106.0], [33.8, 106.0], [33.9, 106.0], [34.0, 106.0], [34.1, 107.0], [34.2, 107.0], [34.3, 107.0], [34.4, 107.0], [34.5, 107.0], [34.6, 107.0], [34.7, 107.0], [34.8, 108.0], [34.9, 108.0], [35.0, 108.0], [35.1, 108.0], [35.2, 108.0], [35.3, 108.0], [35.4, 109.0], [35.5, 109.0], [35.6, 109.0], [35.7, 109.0], [35.8, 109.0], [35.9, 109.0], [36.0, 110.0], [36.1, 110.0], [36.2, 110.0], [36.3, 110.0], [36.4, 111.0], [36.5, 111.0], [36.6, 111.0], [36.7, 111.0], [36.8, 111.0], [36.9, 112.0], [37.0, 112.0], [37.1, 112.0], [37.2, 112.0], [37.3, 113.0], [37.4, 113.0], [37.5, 113.0], [37.6, 113.0], [37.7, 114.0], [37.8, 114.0], [37.9, 114.0], [38.0, 115.0], [38.1, 115.0], [38.2, 115.0], [38.3, 116.0], [38.4, 116.0], [38.5, 116.0], [38.6, 116.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 118.0], [39.2, 118.0], [39.3, 118.0], [39.4, 118.0], [39.5, 119.0], [39.6, 119.0], [39.7, 119.0], [39.8, 119.0], [39.9, 120.0], [40.0, 120.0], [40.1, 120.0], [40.2, 120.0], [40.3, 120.0], [40.4, 121.0], [40.5, 121.0], [40.6, 121.0], [40.7, 121.0], [40.8, 122.0], [40.9, 122.0], [41.0, 123.0], [41.1, 123.0], [41.2, 123.0], [41.3, 123.0], [41.4, 123.0], [41.5, 124.0], [41.6, 124.0], [41.7, 125.0], [41.8, 125.0], [41.9, 125.0], [42.0, 125.0], [42.1, 126.0], [42.2, 126.0], [42.3, 126.0], [42.4, 127.0], [42.5, 127.0], [42.6, 127.0], [42.7, 128.0], [42.8, 128.0], [42.9, 128.0], [43.0, 128.0], [43.1, 128.0], [43.2, 129.0], [43.3, 129.0], [43.4, 129.0], [43.5, 130.0], [43.6, 130.0], [43.7, 130.0], [43.8, 131.0], [43.9, 131.0], [44.0, 131.0], [44.1, 132.0], [44.2, 132.0], [44.3, 132.0], [44.4, 133.0], [44.5, 133.0], [44.6, 133.0], [44.7, 134.0], [44.8, 134.0], [44.9, 134.0], [45.0, 135.0], [45.1, 135.0], [45.2, 135.0], [45.3, 136.0], [45.4, 136.0], [45.5, 137.0], [45.6, 138.0], [45.7, 138.0], [45.8, 139.0], [45.9, 139.0], [46.0, 139.0], [46.1, 140.0], [46.2, 140.0], [46.3, 141.0], [46.4, 141.0], [46.5, 142.0], [46.6, 142.0], [46.7, 142.0], [46.8, 142.0], [46.9, 143.0], [47.0, 143.0], [47.1, 144.0], [47.2, 144.0], [47.3, 145.0], [47.4, 145.0], [47.5, 146.0], [47.6, 146.0], [47.7, 146.0], [47.8, 147.0], [47.9, 147.0], [48.0, 148.0], [48.1, 148.0], [48.2, 149.0], [48.3, 149.0], [48.4, 150.0], [48.5, 150.0], [48.6, 150.0], [48.7, 151.0], [48.8, 152.0], [48.9, 152.0], [49.0, 152.0], [49.1, 153.0], [49.2, 153.0], [49.3, 154.0], [49.4, 155.0], [49.5, 156.0], [49.6, 156.0], [49.7, 156.0], [49.8, 156.0], [49.9, 157.0], [50.0, 157.0], [50.1, 158.0], [50.2, 158.0], [50.3, 159.0], [50.4, 159.0], [50.5, 160.0], [50.6, 161.0], [50.7, 162.0], [50.8, 162.0], [50.9, 163.0], [51.0, 164.0], [51.1, 165.0], [51.2, 165.0], [51.3, 165.0], [51.4, 166.0], [51.5, 166.0], [51.6, 167.0], [51.7, 167.0], [51.8, 168.0], [51.9, 168.0], [52.0, 168.0], [52.1, 169.0], [52.2, 170.0], [52.3, 171.0], [52.4, 171.0], [52.5, 173.0], [52.6, 174.0], [52.7, 174.0], [52.8, 175.0], [52.9, 176.0], [53.0, 177.0], [53.1, 177.0], [53.2, 178.0], [53.3, 179.0], [53.4, 179.0], [53.5, 179.0], [53.6, 180.0], [53.7, 181.0], [53.8, 181.0], [53.9, 181.0], [54.0, 183.0], [54.1, 183.0], [54.2, 183.0], [54.3, 184.0], [54.4, 184.0], [54.5, 185.0], [54.6, 186.0], [54.7, 186.0], [54.8, 187.0], [54.9, 188.0], [55.0, 188.0], [55.1, 189.0], [55.2, 190.0], [55.3, 191.0], [55.4, 191.0], [55.5, 192.0], [55.6, 192.0], [55.7, 193.0], [55.8, 193.0], [55.9, 194.0], [56.0, 194.0], [56.1, 195.0], [56.2, 195.0], [56.3, 195.0], [56.4, 196.0], [56.5, 197.0], [56.6, 197.0], [56.7, 197.0], [56.8, 197.0], [56.9, 198.0], [57.0, 199.0], [57.1, 200.0], [57.2, 201.0], [57.3, 202.0], [57.4, 202.0], [57.5, 202.0], [57.6, 203.0], [57.7, 204.0], [57.8, 204.0], [57.9, 205.0], [58.0, 206.0], [58.1, 207.0], [58.2, 207.0], [58.3, 208.0], [58.4, 208.0], [58.5, 209.0], [58.6, 210.0], [58.7, 210.0], [58.8, 211.0], [58.9, 211.0], [59.0, 212.0], [59.1, 213.0], [59.2, 213.0], [59.3, 214.0], [59.4, 216.0], [59.5, 216.0], [59.6, 216.0], [59.7, 218.0], [59.8, 219.0], [59.9, 219.0], [60.0, 219.0], [60.1, 220.0], [60.2, 221.0], [60.3, 222.0], [60.4, 223.0], [60.5, 223.0], [60.6, 224.0], [60.7, 225.0], [60.8, 226.0], [60.9, 228.0], [61.0, 228.0], [61.1, 230.0], [61.2, 230.0], [61.3, 231.0], [61.4, 232.0], [61.5, 233.0], [61.6, 233.0], [61.7, 234.0], [61.8, 235.0], [61.9, 235.0], [62.0, 235.0], [62.1, 236.0], [62.2, 237.0], [62.3, 238.0], [62.4, 238.0], [62.5, 239.0], [62.6, 239.0], [62.7, 240.0], [62.8, 241.0], [62.9, 242.0], [63.0, 243.0], [63.1, 244.0], [63.2, 244.0], [63.3, 245.0], [63.4, 246.0], [63.5, 246.0], [63.6, 247.0], [63.7, 248.0], [63.8, 250.0], [63.9, 251.0], [64.0, 251.0], [64.1, 252.0], [64.2, 253.0], [64.3, 254.0], [64.4, 255.0], [64.5, 256.0], [64.6, 256.0], [64.7, 257.0], [64.8, 257.0], [64.9, 258.0], [65.0, 259.0], [65.1, 260.0], [65.2, 260.0], [65.3, 260.0], [65.4, 261.0], [65.5, 261.0], [65.6, 263.0], [65.7, 264.0], [65.8, 265.0], [65.9, 266.0], [66.0, 266.0], [66.1, 267.0], [66.2, 267.0], [66.3, 268.0], [66.4, 269.0], [66.5, 271.0], [66.6, 271.0], [66.7, 272.0], [66.8, 273.0], [66.9, 274.0], [67.0, 275.0], [67.1, 276.0], [67.2, 277.0], [67.3, 277.0], [67.4, 278.0], [67.5, 279.0], [67.6, 279.0], [67.7, 280.0], [67.8, 281.0], [67.9, 282.0], [68.0, 283.0], [68.1, 283.0], [68.2, 284.0], [68.3, 284.0], [68.4, 285.0], [68.5, 286.0], [68.6, 287.0], [68.7, 288.0], [68.8, 288.0], [68.9, 289.0], [69.0, 290.0], [69.1, 290.0], [69.2, 291.0], [69.3, 292.0], [69.4, 293.0], [69.5, 295.0], [69.6, 296.0], [69.7, 296.0], [69.8, 297.0], [69.9, 298.0], [70.0, 298.0], [70.1, 301.0], [70.2, 303.0], [70.3, 304.0], [70.4, 305.0], [70.5, 306.0], [70.6, 306.0], [70.7, 308.0], [70.8, 309.0], [70.9, 310.0], [71.0, 310.0], [71.1, 312.0], [71.2, 312.0], [71.3, 314.0], [71.4, 314.0], [71.5, 316.0], [71.6, 317.0], [71.7, 318.0], [71.8, 319.0], [71.9, 320.0], [72.0, 321.0], [72.1, 322.0], [72.2, 323.0], [72.3, 323.0], [72.4, 324.0], [72.5, 326.0], [72.6, 326.0], [72.7, 329.0], [72.8, 331.0], [72.9, 331.0], [73.0, 332.0], [73.1, 333.0], [73.2, 334.0], [73.3, 334.0], [73.4, 335.0], [73.5, 338.0], [73.6, 339.0], [73.7, 340.0], [73.8, 341.0], [73.9, 341.0], [74.0, 342.0], [74.1, 343.0], [74.2, 344.0], [74.3, 345.0], [74.4, 347.0], [74.5, 348.0], [74.6, 348.0], [74.7, 349.0], [74.8, 351.0], [74.9, 351.0], [75.0, 352.0], [75.1, 353.0], [75.2, 355.0], [75.3, 356.0], [75.4, 357.0], [75.5, 358.0], [75.6, 359.0], [75.7, 360.0], [75.8, 363.0], [75.9, 364.0], [76.0, 365.0], [76.1, 366.0], [76.2, 367.0], [76.3, 369.0], [76.4, 370.0], [76.5, 372.0], [76.6, 373.0], [76.7, 373.0], [76.8, 375.0], [76.9, 376.0], [77.0, 377.0], [77.1, 379.0], [77.2, 381.0], [77.3, 383.0], [77.4, 385.0], [77.5, 389.0], [77.6, 389.0], [77.7, 391.0], [77.8, 391.0], [77.9, 393.0], [78.0, 395.0], [78.1, 397.0], [78.2, 399.0], [78.3, 400.0], [78.4, 401.0], [78.5, 403.0], [78.6, 404.0], [78.7, 405.0], [78.8, 406.0], [78.9, 409.0], [79.0, 411.0], [79.1, 413.0], [79.2, 415.0], [79.3, 416.0], [79.4, 418.0], [79.5, 419.0], [79.6, 421.0], [79.7, 422.0], [79.8, 423.0], [79.9, 425.0], [80.0, 426.0], [80.1, 428.0], [80.2, 430.0], [80.3, 432.0], [80.4, 433.0], [80.5, 434.0], [80.6, 435.0], [80.7, 437.0], [80.8, 438.0], [80.9, 439.0], [81.0, 440.0], [81.1, 442.0], [81.2, 444.0], [81.3, 445.0], [81.4, 447.0], [81.5, 448.0], [81.6, 449.0], [81.7, 450.0], [81.8, 452.0], [81.9, 453.0], [82.0, 455.0], [82.1, 457.0], [82.2, 460.0], [82.3, 461.0], [82.4, 464.0], [82.5, 466.0], [82.6, 467.0], [82.7, 469.0], [82.8, 472.0], [82.9, 473.0], [83.0, 474.0], [83.1, 476.0], [83.2, 478.0], [83.3, 480.0], [83.4, 481.0], [83.5, 482.0], [83.6, 483.0], [83.7, 485.0], [83.8, 486.0], [83.9, 487.0], [84.0, 488.0], [84.1, 489.0], [84.2, 490.0], [84.3, 491.0], [84.4, 492.0], [84.5, 493.0], [84.6, 495.0], [84.7, 496.0], [84.8, 498.0], [84.9, 500.0], [85.0, 502.0], [85.1, 504.0], [85.2, 506.0], [85.3, 507.0], [85.4, 509.0], [85.5, 510.0], [85.6, 511.0], [85.7, 512.0], [85.8, 513.0], [85.9, 515.0], [86.0, 517.0], [86.1, 519.0], [86.2, 520.0], [86.3, 522.0], [86.4, 523.0], [86.5, 524.0], [86.6, 525.0], [86.7, 527.0], [86.8, 527.0], [86.9, 529.0], [87.0, 531.0], [87.1, 532.0], [87.2, 533.0], [87.3, 534.0], [87.4, 536.0], [87.5, 538.0], [87.6, 541.0], [87.7, 543.0], [87.8, 545.0], [87.9, 547.0], [88.0, 550.0], [88.1, 551.0], [88.2, 553.0], [88.3, 554.0], [88.4, 555.0], [88.5, 557.0], [88.6, 558.0], [88.7, 559.0], [88.8, 561.0], [88.9, 562.0], [89.0, 564.0], [89.1, 567.0], [89.2, 569.0], [89.3, 571.0], [89.4, 573.0], [89.5, 575.0], [89.6, 576.0], [89.7, 578.0], [89.8, 579.0], [89.9, 580.0], [90.0, 582.0], [90.1, 584.0], [90.2, 587.0], [90.3, 587.0], [90.4, 588.0], [90.5, 590.0], [90.6, 592.0], [90.7, 593.0], [90.8, 595.0], [90.9, 596.0], [91.0, 598.0], [91.1, 602.0], [91.2, 605.0], [91.3, 606.0], [91.4, 608.0], [91.5, 609.0], [91.6, 613.0], [91.7, 616.0], [91.8, 618.0], [91.9, 620.0], [92.0, 623.0], [92.1, 624.0], [92.2, 627.0], [92.3, 631.0], [92.4, 634.0], [92.5, 636.0], [92.6, 639.0], [92.7, 641.0], [92.8, 646.0], [92.9, 649.0], [93.0, 650.0], [93.1, 653.0], [93.2, 657.0], [93.3, 661.0], [93.4, 663.0], [93.5, 664.0], [93.6, 667.0], [93.7, 668.0], [93.8, 669.0], [93.9, 672.0], [94.0, 674.0], [94.1, 677.0], [94.2, 679.0], [94.3, 684.0], [94.4, 686.0], [94.5, 688.0], [94.6, 690.0], [94.7, 692.0], [94.8, 698.0], [94.9, 699.0], [95.0, 705.0], [95.1, 705.0], [95.2, 708.0], [95.3, 713.0], [95.4, 714.0], [95.5, 717.0], [95.6, 720.0], [95.7, 723.0], [95.8, 725.0], [95.9, 730.0], [96.0, 733.0], [96.1, 738.0], [96.2, 740.0], [96.3, 743.0], [96.4, 750.0], [96.5, 757.0], [96.6, 761.0], [96.7, 770.0], [96.8, 773.0], [96.9, 779.0], [97.0, 781.0], [97.1, 786.0], [97.2, 792.0], [97.3, 795.0], [97.4, 798.0], [97.5, 808.0], [97.6, 813.0], [97.7, 816.0], [97.8, 822.0], [97.9, 829.0], [98.0, 836.0], [98.1, 845.0], [98.2, 852.0], [98.3, 855.0], [98.4, 865.0], [98.5, 875.0], [98.6, 886.0], [98.7, 904.0], [98.8, 918.0], [98.9, 930.0], [99.0, 961.0], [99.1, 979.0], [99.2, 1027.0], [99.3, 1072.0], [99.4, 1113.0], [99.5, 1201.0], [99.6, 1281.0], [99.7, 1389.0], [99.8, 1778.0], [99.9, 1903.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1617.0, "series": [{"data": [[0.0, 1617.0], [2100.0, 1.0], [600.0, 199.0], [2400.0, 1.0], [700.0, 130.0], [200.0, 673.0], [800.0, 65.0], [900.0, 25.0], [1000.0, 11.0], [1100.0, 7.0], [1200.0, 7.0], [300.0, 425.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 1345.0], [400.0, 344.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 3.0], [500.0, 323.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4409.0, "series": [{"data": [[0.0, 4409.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 768.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.980451781059948, "minX": 1.60249386E12, "maxY": 10.0, "series": [{"data": [[1.60249398E12, 9.980451781059948], [1.60249392E12, 10.0], [1.60249386E12, 9.991539763113362]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249398E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 120.0, "minX": 1.0, "maxY": 851.0, "series": [{"data": [[8.0, 120.0], [4.0, 391.0], [2.0, 381.0], [1.0, 851.0], [9.0, 351.0], [5.0, 243.0], [10.0, 250.09787644787718], [6.0, 181.0], [3.0, 677.0], [7.0, 237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990366088632026, 250.32408477841952]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4443.4, "minX": 1.60249386E12, "maxY": 7866463.983333333, "series": [{"data": [[1.60249398E12, 7101661.25], [1.60249392E12, 7866463.983333333], [1.60249386E12, 1957391.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249398E12, 17685.583333333332], [1.60249392E12, 17639.65], [1.60249386E12, 4443.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249398E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 237.82710686359695, "minX": 1.60249386E12, "maxY": 263.60236886632833, "series": [{"data": [[1.60249398E12, 237.82710686359695], [1.60249392E12, 259.4318676534607], [1.60249386E12, 263.60236886632833]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249398E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 236.35186794092067, "minX": 1.60249386E12, "maxY": 261.96785109983125, "series": [{"data": [[1.60249398E12, 236.35186794092067], [1.60249392E12, 257.2033086634737], [1.60249386E12, 261.96785109983125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249398E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006950477845351862, "minX": 1.60249386E12, "maxY": 0.1539763113367173, "series": [{"data": [[1.60249398E12, 0.006950477845351862], [1.60249392E12, 0.007836308228123666], [1.60249386E12, 0.1539763113367173]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249398E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60249386E12, "maxY": 2484.0, "series": [{"data": [[1.60249398E12, 1871.0], [1.60249392E12, 2484.0], [1.60249386E12, 2047.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249398E12, 33.0], [1.60249392E12, 33.0], [1.60249386E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249398E12, 33.0], [1.60249392E12, 33.0], [1.60249386E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249398E12, 33.0], [1.60249392E12, 33.0], [1.60249386E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249398E12, 28.0], [1.60249392E12, 28.0], [1.60249386E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249398E12, 145.0], [1.60249392E12, 159.0], [1.60249386E12, 210.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 851.0, "series": [{"data": [[4.0, 423.5], [18.0, 205.5], [19.0, 524.0], [20.0, 208.0], [22.0, 430.0], [23.0, 369.5], [24.0, 244.5], [25.0, 313.0], [26.0, 351.0], [27.0, 256.0], [28.0, 243.0], [29.0, 289.0], [30.0, 266.5], [31.0, 297.0], [32.0, 229.5], [33.0, 199.0], [34.0, 232.0], [35.0, 162.5], [36.0, 275.0], [37.0, 168.0], [39.0, 248.5], [38.0, 142.0], [41.0, 197.0], [40.0, 142.0], [43.0, 161.0], [42.0, 249.5], [44.0, 118.0], [45.0, 97.5], [47.0, 208.0], [46.0, 197.5], [48.0, 152.0], [49.0, 137.5], [50.0, 160.0], [51.0, 107.0], [53.0, 151.0], [54.0, 65.0], [57.0, 133.5], [56.0, 192.5], [60.0, 74.0], [62.0, 114.5], [64.0, 79.5], [66.0, 69.0], [69.0, 104.0], [68.0, 57.5], [73.0, 105.0], [78.0, 76.0], [80.0, 90.5], [83.0, 61.0], [82.0, 54.0], [84.0, 92.0], [87.0, 54.0], [94.0, 58.5], [1.0, 851.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 54.0, "minX": 1.0, "maxY": 847.0, "series": [{"data": [[4.0, 421.5], [18.0, 205.0], [19.0, 521.0], [20.0, 208.0], [22.0, 421.5], [23.0, 368.0], [24.0, 244.5], [25.0, 307.5], [26.0, 350.5], [27.0, 255.0], [28.0, 243.0], [29.0, 288.0], [30.0, 265.0], [31.0, 295.0], [32.0, 228.0], [33.0, 199.0], [34.0, 230.5], [35.0, 162.5], [36.0, 274.5], [37.0, 168.0], [39.0, 247.5], [38.0, 142.0], [41.0, 190.0], [40.0, 142.0], [43.0, 160.5], [42.0, 249.0], [44.0, 118.0], [45.0, 97.5], [47.0, 207.0], [46.0, 194.5], [48.0, 152.0], [49.0, 137.0], [50.0, 159.5], [51.0, 107.0], [53.0, 150.0], [54.0, 65.0], [57.0, 133.0], [56.0, 192.0], [60.0, 74.0], [62.0, 114.5], [64.0, 79.5], [66.0, 69.0], [69.0, 103.0], [68.0, 57.5], [73.0, 105.0], [78.0, 76.0], [80.0, 90.5], [83.0, 61.0], [82.0, 54.0], [84.0, 92.0], [87.0, 54.0], [94.0, 58.5], [1.0, 847.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.016666666666667, "minX": 1.60249386E12, "maxY": 38.28333333333333, "series": [{"data": [[1.60249398E12, 38.2], [1.60249392E12, 38.28333333333333], [1.60249386E12, 10.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249398E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60249386E12, "maxY": 38.36666666666667, "series": [{"data": [[1.60249398E12, 38.36666666666667], [1.60249392E12, 38.28333333333333], [1.60249386E12, 9.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249398E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60249386E12, "maxY": 38.36666666666667, "series": [{"data": [[1.60249398E12, 38.36666666666667], [1.60249392E12, 38.28333333333333], [1.60249386E12, 9.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249398E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60249386E12, "maxY": 38.36666666666667, "series": [{"data": [[1.60249398E12, 38.36666666666667], [1.60249392E12, 38.28333333333333], [1.60249386E12, 9.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249398E12, "title": "Total Transactions Per Second"}},
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

