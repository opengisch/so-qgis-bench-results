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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2200.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 33.0], [2.1, 33.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 46.0], [9.5, 46.0], [9.6, 46.0], [9.7, 46.0], [9.8, 46.0], [9.9, 46.0], [10.0, 47.0], [10.1, 47.0], [10.2, 47.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 48.0], [10.7, 48.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 51.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 58.0], [15.4, 58.0], [15.5, 58.0], [15.6, 59.0], [15.7, 59.0], [15.8, 59.0], [15.9, 59.0], [16.0, 59.0], [16.1, 60.0], [16.2, 60.0], [16.3, 60.0], [16.4, 60.0], [16.5, 60.0], [16.6, 61.0], [16.7, 61.0], [16.8, 61.0], [16.9, 62.0], [17.0, 62.0], [17.1, 62.0], [17.2, 62.0], [17.3, 63.0], [17.4, 63.0], [17.5, 63.0], [17.6, 63.0], [17.7, 64.0], [17.8, 64.0], [17.9, 64.0], [18.0, 64.0], [18.1, 64.0], [18.2, 65.0], [18.3, 65.0], [18.4, 65.0], [18.5, 65.0], [18.6, 66.0], [18.7, 66.0], [18.8, 66.0], [18.9, 66.0], [19.0, 66.0], [19.1, 66.0], [19.2, 66.0], [19.3, 67.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 68.0], [19.9, 68.0], [20.0, 68.0], [20.1, 68.0], [20.2, 68.0], [20.3, 68.0], [20.4, 68.0], [20.5, 69.0], [20.6, 69.0], [20.7, 69.0], [20.8, 69.0], [20.9, 69.0], [21.0, 70.0], [21.1, 70.0], [21.2, 70.0], [21.3, 70.0], [21.4, 70.0], [21.5, 70.0], [21.6, 71.0], [21.7, 71.0], [21.8, 71.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 72.0], [22.3, 72.0], [22.4, 72.0], [22.5, 72.0], [22.6, 73.0], [22.7, 73.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 74.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 76.0], [24.4, 77.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 77.0], [24.9, 78.0], [25.0, 78.0], [25.1, 78.0], [25.2, 78.0], [25.3, 78.0], [25.4, 79.0], [25.5, 79.0], [25.6, 79.0], [25.7, 80.0], [25.8, 80.0], [25.9, 80.0], [26.0, 80.0], [26.1, 80.0], [26.2, 81.0], [26.3, 81.0], [26.4, 81.0], [26.5, 82.0], [26.6, 82.0], [26.7, 82.0], [26.8, 82.0], [26.9, 82.0], [27.0, 82.0], [27.1, 83.0], [27.2, 83.0], [27.3, 83.0], [27.4, 84.0], [27.5, 84.0], [27.6, 84.0], [27.7, 85.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 87.0], [29.4, 88.0], [29.5, 88.0], [29.6, 88.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 89.0], [30.1, 90.0], [30.2, 90.0], [30.3, 90.0], [30.4, 91.0], [30.5, 91.0], [30.6, 91.0], [30.7, 92.0], [30.8, 92.0], [30.9, 92.0], [31.0, 93.0], [31.1, 93.0], [31.2, 93.0], [31.3, 94.0], [31.4, 94.0], [31.5, 94.0], [31.6, 94.0], [31.7, 95.0], [31.8, 95.0], [31.9, 95.0], [32.0, 96.0], [32.1, 96.0], [32.2, 96.0], [32.3, 97.0], [32.4, 97.0], [32.5, 97.0], [32.6, 97.0], [32.7, 98.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 100.0], [33.3, 100.0], [33.4, 101.0], [33.5, 101.0], [33.6, 101.0], [33.7, 102.0], [33.8, 102.0], [33.9, 102.0], [34.0, 103.0], [34.1, 103.0], [34.2, 103.0], [34.3, 103.0], [34.4, 103.0], [34.5, 104.0], [34.6, 104.0], [34.7, 104.0], [34.8, 104.0], [34.9, 104.0], [35.0, 105.0], [35.1, 105.0], [35.2, 105.0], [35.3, 105.0], [35.4, 105.0], [35.5, 105.0], [35.6, 105.0], [35.7, 105.0], [35.8, 106.0], [35.9, 106.0], [36.0, 106.0], [36.1, 106.0], [36.2, 106.0], [36.3, 106.0], [36.4, 106.0], [36.5, 106.0], [36.6, 106.0], [36.7, 107.0], [36.8, 107.0], [36.9, 107.0], [37.0, 107.0], [37.1, 107.0], [37.2, 107.0], [37.3, 107.0], [37.4, 107.0], [37.5, 108.0], [37.6, 108.0], [37.7, 108.0], [37.8, 108.0], [37.9, 108.0], [38.0, 108.0], [38.1, 109.0], [38.2, 109.0], [38.3, 109.0], [38.4, 109.0], [38.5, 110.0], [38.6, 110.0], [38.7, 110.0], [38.8, 110.0], [38.9, 110.0], [39.0, 111.0], [39.1, 111.0], [39.2, 111.0], [39.3, 111.0], [39.4, 111.0], [39.5, 111.0], [39.6, 112.0], [39.7, 112.0], [39.8, 112.0], [39.9, 112.0], [40.0, 112.0], [40.1, 113.0], [40.2, 113.0], [40.3, 113.0], [40.4, 113.0], [40.5, 113.0], [40.6, 114.0], [40.7, 114.0], [40.8, 114.0], [40.9, 114.0], [41.0, 114.0], [41.1, 115.0], [41.2, 115.0], [41.3, 115.0], [41.4, 115.0], [41.5, 115.0], [41.6, 116.0], [41.7, 116.0], [41.8, 116.0], [41.9, 116.0], [42.0, 117.0], [42.1, 117.0], [42.2, 117.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 118.0], [42.7, 119.0], [42.8, 119.0], [42.9, 119.0], [43.0, 120.0], [43.1, 120.0], [43.2, 120.0], [43.3, 121.0], [43.4, 121.0], [43.5, 121.0], [43.6, 122.0], [43.7, 122.0], [43.8, 122.0], [43.9, 122.0], [44.0, 123.0], [44.1, 123.0], [44.2, 123.0], [44.3, 123.0], [44.4, 124.0], [44.5, 124.0], [44.6, 124.0], [44.7, 124.0], [44.8, 124.0], [44.9, 125.0], [45.0, 125.0], [45.1, 125.0], [45.2, 125.0], [45.3, 126.0], [45.4, 126.0], [45.5, 126.0], [45.6, 127.0], [45.7, 127.0], [45.8, 127.0], [45.9, 128.0], [46.0, 128.0], [46.1, 128.0], [46.2, 128.0], [46.3, 128.0], [46.4, 129.0], [46.5, 129.0], [46.6, 130.0], [46.7, 130.0], [46.8, 130.0], [46.9, 131.0], [47.0, 131.0], [47.1, 131.0], [47.2, 132.0], [47.3, 132.0], [47.4, 132.0], [47.5, 133.0], [47.6, 133.0], [47.7, 134.0], [47.8, 134.0], [47.9, 135.0], [48.0, 135.0], [48.1, 135.0], [48.2, 136.0], [48.3, 136.0], [48.4, 137.0], [48.5, 137.0], [48.6, 137.0], [48.7, 138.0], [48.8, 138.0], [48.9, 139.0], [49.0, 139.0], [49.1, 139.0], [49.2, 140.0], [49.3, 140.0], [49.4, 141.0], [49.5, 141.0], [49.6, 142.0], [49.7, 142.0], [49.8, 143.0], [49.9, 143.0], [50.0, 144.0], [50.1, 144.0], [50.2, 145.0], [50.3, 145.0], [50.4, 145.0], [50.5, 146.0], [50.6, 147.0], [50.7, 147.0], [50.8, 147.0], [50.9, 148.0], [51.0, 148.0], [51.1, 148.0], [51.2, 149.0], [51.3, 149.0], [51.4, 150.0], [51.5, 151.0], [51.6, 151.0], [51.7, 151.0], [51.8, 152.0], [51.9, 152.0], [52.0, 152.0], [52.1, 153.0], [52.2, 153.0], [52.3, 154.0], [52.4, 154.0], [52.5, 155.0], [52.6, 155.0], [52.7, 156.0], [52.8, 156.0], [52.9, 157.0], [53.0, 157.0], [53.1, 158.0], [53.2, 159.0], [53.3, 160.0], [53.4, 160.0], [53.5, 161.0], [53.6, 161.0], [53.7, 163.0], [53.8, 164.0], [53.9, 164.0], [54.0, 165.0], [54.1, 165.0], [54.2, 166.0], [54.3, 167.0], [54.4, 167.0], [54.5, 168.0], [54.6, 169.0], [54.7, 170.0], [54.8, 171.0], [54.9, 171.0], [55.0, 172.0], [55.1, 173.0], [55.2, 173.0], [55.3, 174.0], [55.4, 174.0], [55.5, 175.0], [55.6, 176.0], [55.7, 176.0], [55.8, 178.0], [55.9, 178.0], [56.0, 178.0], [56.1, 179.0], [56.2, 180.0], [56.3, 181.0], [56.4, 182.0], [56.5, 183.0], [56.6, 184.0], [56.7, 184.0], [56.8, 185.0], [56.9, 186.0], [57.0, 187.0], [57.1, 187.0], [57.2, 188.0], [57.3, 188.0], [57.4, 189.0], [57.5, 190.0], [57.6, 190.0], [57.7, 190.0], [57.8, 191.0], [57.9, 191.0], [58.0, 192.0], [58.1, 193.0], [58.2, 194.0], [58.3, 195.0], [58.4, 196.0], [58.5, 196.0], [58.6, 197.0], [58.7, 197.0], [58.8, 198.0], [58.9, 199.0], [59.0, 199.0], [59.1, 200.0], [59.2, 201.0], [59.3, 202.0], [59.4, 203.0], [59.5, 203.0], [59.6, 204.0], [59.7, 205.0], [59.8, 206.0], [59.9, 206.0], [60.0, 207.0], [60.1, 208.0], [60.2, 208.0], [60.3, 209.0], [60.4, 209.0], [60.5, 210.0], [60.6, 211.0], [60.7, 213.0], [60.8, 213.0], [60.9, 213.0], [61.0, 214.0], [61.1, 215.0], [61.2, 215.0], [61.3, 215.0], [61.4, 216.0], [61.5, 217.0], [61.6, 217.0], [61.7, 218.0], [61.8, 218.0], [61.9, 219.0], [62.0, 220.0], [62.1, 220.0], [62.2, 221.0], [62.3, 221.0], [62.4, 221.0], [62.5, 222.0], [62.6, 222.0], [62.7, 223.0], [62.8, 224.0], [62.9, 225.0], [63.0, 226.0], [63.1, 226.0], [63.2, 227.0], [63.3, 227.0], [63.4, 228.0], [63.5, 229.0], [63.6, 229.0], [63.7, 230.0], [63.8, 231.0], [63.9, 231.0], [64.0, 232.0], [64.1, 233.0], [64.2, 234.0], [64.3, 235.0], [64.4, 235.0], [64.5, 236.0], [64.6, 237.0], [64.7, 238.0], [64.8, 238.0], [64.9, 240.0], [65.0, 240.0], [65.1, 241.0], [65.2, 241.0], [65.3, 242.0], [65.4, 242.0], [65.5, 243.0], [65.6, 244.0], [65.7, 245.0], [65.8, 246.0], [65.9, 247.0], [66.0, 247.0], [66.1, 247.0], [66.2, 248.0], [66.3, 249.0], [66.4, 249.0], [66.5, 250.0], [66.6, 251.0], [66.7, 251.0], [66.8, 252.0], [66.9, 253.0], [67.0, 254.0], [67.1, 254.0], [67.2, 255.0], [67.3, 256.0], [67.4, 257.0], [67.5, 257.0], [67.6, 258.0], [67.7, 260.0], [67.8, 260.0], [67.9, 261.0], [68.0, 262.0], [68.1, 263.0], [68.2, 264.0], [68.3, 265.0], [68.4, 266.0], [68.5, 268.0], [68.6, 268.0], [68.7, 269.0], [68.8, 272.0], [68.9, 273.0], [69.0, 274.0], [69.1, 274.0], [69.2, 276.0], [69.3, 278.0], [69.4, 278.0], [69.5, 280.0], [69.6, 281.0], [69.7, 282.0], [69.8, 282.0], [69.9, 284.0], [70.0, 285.0], [70.1, 286.0], [70.2, 288.0], [70.3, 288.0], [70.4, 289.0], [70.5, 290.0], [70.6, 290.0], [70.7, 291.0], [70.8, 291.0], [70.9, 292.0], [71.0, 293.0], [71.1, 295.0], [71.2, 295.0], [71.3, 296.0], [71.4, 297.0], [71.5, 298.0], [71.6, 298.0], [71.7, 300.0], [71.8, 301.0], [71.9, 302.0], [72.0, 303.0], [72.1, 304.0], [72.2, 305.0], [72.3, 307.0], [72.4, 308.0], [72.5, 309.0], [72.6, 310.0], [72.7, 312.0], [72.8, 313.0], [72.9, 315.0], [73.0, 315.0], [73.1, 316.0], [73.2, 317.0], [73.3, 317.0], [73.4, 319.0], [73.5, 320.0], [73.6, 322.0], [73.7, 323.0], [73.8, 324.0], [73.9, 326.0], [74.0, 326.0], [74.1, 327.0], [74.2, 328.0], [74.3, 329.0], [74.4, 330.0], [74.5, 330.0], [74.6, 332.0], [74.7, 332.0], [74.8, 334.0], [74.9, 335.0], [75.0, 336.0], [75.1, 336.0], [75.2, 337.0], [75.3, 339.0], [75.4, 340.0], [75.5, 341.0], [75.6, 342.0], [75.7, 342.0], [75.8, 345.0], [75.9, 346.0], [76.0, 347.0], [76.1, 348.0], [76.2, 350.0], [76.3, 351.0], [76.4, 352.0], [76.5, 353.0], [76.6, 354.0], [76.7, 355.0], [76.8, 356.0], [76.9, 358.0], [77.0, 360.0], [77.1, 361.0], [77.2, 363.0], [77.3, 364.0], [77.4, 366.0], [77.5, 367.0], [77.6, 368.0], [77.7, 370.0], [77.8, 370.0], [77.9, 373.0], [78.0, 374.0], [78.1, 376.0], [78.2, 379.0], [78.3, 382.0], [78.4, 384.0], [78.5, 385.0], [78.6, 386.0], [78.7, 388.0], [78.8, 388.0], [78.9, 390.0], [79.0, 391.0], [79.1, 392.0], [79.2, 394.0], [79.3, 395.0], [79.4, 396.0], [79.5, 397.0], [79.6, 398.0], [79.7, 399.0], [79.8, 401.0], [79.9, 402.0], [80.0, 403.0], [80.1, 405.0], [80.2, 406.0], [80.3, 408.0], [80.4, 409.0], [80.5, 410.0], [80.6, 411.0], [80.7, 412.0], [80.8, 413.0], [80.9, 414.0], [81.0, 416.0], [81.1, 417.0], [81.2, 418.0], [81.3, 421.0], [81.4, 423.0], [81.5, 424.0], [81.6, 425.0], [81.7, 426.0], [81.8, 428.0], [81.9, 429.0], [82.0, 430.0], [82.1, 431.0], [82.2, 433.0], [82.3, 435.0], [82.4, 436.0], [82.5, 438.0], [82.6, 439.0], [82.7, 440.0], [82.8, 440.0], [82.9, 441.0], [83.0, 442.0], [83.1, 443.0], [83.2, 445.0], [83.3, 447.0], [83.4, 449.0], [83.5, 450.0], [83.6, 450.0], [83.7, 451.0], [83.8, 452.0], [83.9, 454.0], [84.0, 455.0], [84.1, 457.0], [84.2, 461.0], [84.3, 464.0], [84.4, 464.0], [84.5, 466.0], [84.6, 466.0], [84.7, 468.0], [84.8, 470.0], [84.9, 471.0], [85.0, 472.0], [85.1, 473.0], [85.2, 475.0], [85.3, 477.0], [85.4, 478.0], [85.5, 479.0], [85.6, 480.0], [85.7, 482.0], [85.8, 483.0], [85.9, 486.0], [86.0, 487.0], [86.1, 488.0], [86.2, 490.0], [86.3, 490.0], [86.4, 493.0], [86.5, 493.0], [86.6, 496.0], [86.7, 497.0], [86.8, 500.0], [86.9, 501.0], [87.0, 502.0], [87.1, 503.0], [87.2, 504.0], [87.3, 505.0], [87.4, 507.0], [87.5, 509.0], [87.6, 510.0], [87.7, 511.0], [87.8, 513.0], [87.9, 514.0], [88.0, 515.0], [88.1, 516.0], [88.2, 517.0], [88.3, 517.0], [88.4, 520.0], [88.5, 523.0], [88.6, 525.0], [88.7, 526.0], [88.8, 528.0], [88.9, 530.0], [89.0, 533.0], [89.1, 534.0], [89.2, 536.0], [89.3, 537.0], [89.4, 538.0], [89.5, 539.0], [89.6, 540.0], [89.7, 542.0], [89.8, 544.0], [89.9, 545.0], [90.0, 547.0], [90.1, 548.0], [90.2, 550.0], [90.3, 554.0], [90.4, 556.0], [90.5, 557.0], [90.6, 558.0], [90.7, 558.0], [90.8, 559.0], [90.9, 564.0], [91.0, 565.0], [91.1, 567.0], [91.2, 568.0], [91.3, 569.0], [91.4, 571.0], [91.5, 572.0], [91.6, 574.0], [91.7, 577.0], [91.8, 578.0], [91.9, 580.0], [92.0, 584.0], [92.1, 585.0], [92.2, 589.0], [92.3, 590.0], [92.4, 590.0], [92.5, 591.0], [92.6, 592.0], [92.7, 595.0], [92.8, 596.0], [92.9, 598.0], [93.0, 600.0], [93.1, 603.0], [93.2, 606.0], [93.3, 608.0], [93.4, 610.0], [93.5, 612.0], [93.6, 614.0], [93.7, 616.0], [93.8, 619.0], [93.9, 621.0], [94.0, 622.0], [94.1, 625.0], [94.2, 627.0], [94.3, 630.0], [94.4, 633.0], [94.5, 635.0], [94.6, 640.0], [94.7, 641.0], [94.8, 644.0], [94.9, 645.0], [95.0, 648.0], [95.1, 649.0], [95.2, 651.0], [95.3, 652.0], [95.4, 655.0], [95.5, 657.0], [95.6, 658.0], [95.7, 661.0], [95.8, 666.0], [95.9, 671.0], [96.0, 674.0], [96.1, 676.0], [96.2, 679.0], [96.3, 684.0], [96.4, 688.0], [96.5, 691.0], [96.6, 693.0], [96.7, 695.0], [96.8, 697.0], [96.9, 701.0], [97.0, 708.0], [97.1, 712.0], [97.2, 715.0], [97.3, 717.0], [97.4, 724.0], [97.5, 726.0], [97.6, 729.0], [97.7, 735.0], [97.8, 747.0], [97.9, 750.0], [98.0, 755.0], [98.1, 770.0], [98.2, 785.0], [98.3, 794.0], [98.4, 799.0], [98.5, 820.0], [98.6, 828.0], [98.7, 847.0], [98.8, 866.0], [98.9, 888.0], [99.0, 922.0], [99.1, 958.0], [99.2, 991.0], [99.3, 1029.0], [99.4, 1067.0], [99.5, 1109.0], [99.6, 1218.0], [99.7, 1421.0], [99.8, 1552.0], [99.9, 1753.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1719.0, "series": [{"data": [[0.0, 1719.0], [2200.0, 1.0], [600.0, 203.0], [700.0, 79.0], [200.0, 655.0], [800.0, 27.0], [900.0, 18.0], [1000.0, 10.0], [1100.0, 7.0], [300.0, 418.0], [1200.0, 1.0], [1300.0, 3.0], [1400.0, 5.0], [1500.0, 3.0], [100.0, 1346.0], [400.0, 366.0], [1600.0, 3.0], [1700.0, 3.0], [1900.0, 1.0], [500.0, 321.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4506.0, "series": [{"data": [[0.0, 4506.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 672.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.969325153374234, "minX": 1.60506024E12, "maxY": 10.0, "series": [{"data": [[1.60506036E12, 9.969325153374234], [1.6050603E12, 10.0], [1.60506024E12, 9.98717948717948]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506036E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 113.0, "minX": 1.0, "maxY": 798.0, "series": [{"data": [[4.0, 294.5], [8.0, 113.0], [2.0, 674.0], [1.0, 798.0], [9.0, 505.0], [5.0, 207.5], [10.0, 233.67594202898516], [6.0, 116.0], [3.0, 260.0], [7.0, 114.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98843930635841, 234.08034682080938]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8797.433333333332, "minX": 1.60506024E12, "maxY": 8375044.25, "series": [{"data": [[1.60506036E12, 5040754.216666667], [1.6050603E12, 8375044.25], [1.60506024E12, 3516251.683333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506036E12, 11407.25], [1.6050603E12, 19563.95], [1.60506024E12, 8797.433333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506036E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 232.35299145299163, "minX": 1.60506024E12, "maxY": 236.4451261077028, "series": [{"data": [[1.60506036E12, 236.4451261077028], [1.6050603E12, 233.51312181746977], [1.60506024E12, 232.35299145299163]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506036E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 230.8743589743592, "minX": 1.60506024E12, "maxY": 234.82481254260387, "series": [{"data": [[1.60506036E12, 234.82481254260387], [1.6050603E12, 231.82334508421457], [1.60506024E12, 230.8743589743592]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506036E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00545330606680301, "minX": 1.60506024E12, "maxY": 0.0811965811965813, "series": [{"data": [[1.60506036E12, 0.00545330606680301], [1.6050603E12, 0.009792401096748931], [1.60506024E12, 0.0811965811965813]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506036E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60506024E12, "maxY": 2200.0, "series": [{"data": [[1.60506036E12, 1552.0], [1.6050603E12, 1793.0], [1.60506024E12, 2200.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506036E12, 32.0], [1.6050603E12, 32.0], [1.60506024E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506036E12, 32.0], [1.6050603E12, 33.0], [1.60506024E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506036E12, 32.0], [1.6050603E12, 33.0], [1.60506024E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506036E12, 29.0], [1.6050603E12, 28.0], [1.60506024E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506036E12, 138.0], [1.6050603E12, 147.0], [1.60506024E12, 149.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506036E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 452.0, "series": [{"data": [[32.0, 249.0], [33.0, 199.0], [35.0, 236.5], [34.0, 236.0], [37.0, 188.0], [36.0, 245.0], [38.0, 247.0], [39.0, 219.5], [40.0, 232.0], [41.0, 191.0], [43.0, 139.0], [42.0, 231.0], [47.0, 171.0], [46.0, 102.0], [49.0, 186.0], [50.0, 105.0], [51.0, 123.0], [54.0, 122.0], [55.0, 72.0], [56.0, 142.0], [57.0, 110.5], [59.0, 145.5], [61.0, 109.5], [63.0, 99.0], [67.0, 78.0], [65.0, 70.0], [68.0, 59.5], [72.0, 94.0], [73.0, 93.0], [74.0, 72.5], [79.0, 43.0], [83.0, 87.0], [80.0, 77.0], [88.0, 91.0], [102.0, 47.5], [104.0, 52.0], [10.0, 265.5], [18.0, 251.0], [20.0, 383.5], [22.0, 452.0], [23.0, 433.0], [25.0, 197.0], [26.0, 276.5], [27.0, 372.0], [28.0, 249.5], [29.0, 262.0], [30.0, 250.5], [31.0, 224.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 43.0, "minX": 10.0, "maxY": 448.5, "series": [{"data": [[32.0, 248.5], [33.0, 198.5], [35.0, 234.0], [34.0, 235.5], [37.0, 188.0], [36.0, 243.5], [38.0, 238.0], [39.0, 219.0], [40.0, 231.0], [41.0, 191.0], [43.0, 139.0], [42.0, 230.5], [47.0, 170.0], [46.0, 102.0], [49.0, 185.0], [50.0, 105.0], [51.0, 123.0], [54.0, 121.5], [55.0, 71.0], [56.0, 142.0], [57.0, 110.5], [59.0, 143.0], [61.0, 109.5], [63.0, 99.0], [67.0, 78.0], [65.0, 70.0], [68.0, 59.5], [72.0, 94.0], [73.0, 93.0], [74.0, 72.5], [79.0, 43.0], [83.0, 87.0], [80.0, 77.0], [88.0, 91.0], [102.0, 47.0], [104.0, 52.0], [10.0, 263.5], [18.0, 249.0], [20.0, 381.0], [22.0, 448.5], [23.0, 431.0], [25.0, 197.0], [26.0, 276.5], [27.0, 367.5], [28.0, 249.0], [29.0, 262.0], [30.0, 248.5], [31.0, 224.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.666666666666668, "minX": 1.60506024E12, "maxY": 42.55, "series": [{"data": [[1.60506036E12, 24.283333333333335], [1.6050603E12, 42.55], [1.60506024E12, 19.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506036E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.5, "minX": 1.60506024E12, "maxY": 42.55, "series": [{"data": [[1.60506036E12, 24.45], [1.6050603E12, 42.55], [1.60506024E12, 19.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506036E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.5, "minX": 1.60506024E12, "maxY": 42.55, "series": [{"data": [[1.60506036E12, 24.45], [1.6050603E12, 42.55], [1.60506024E12, 19.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506036E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.5, "minX": 1.60506024E12, "maxY": 42.55, "series": [{"data": [[1.60506036E12, 24.45], [1.6050603E12, 42.55], [1.60506024E12, 19.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506036E12, "title": "Total Transactions Per Second"}},
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

