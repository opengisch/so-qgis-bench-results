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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2109.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 31.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 46.0], [9.7, 46.0], [9.8, 46.0], [9.9, 46.0], [10.0, 46.0], [10.1, 46.0], [10.2, 47.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 51.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 51.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 58.0], [15.5, 58.0], [15.6, 58.0], [15.7, 59.0], [15.8, 59.0], [15.9, 59.0], [16.0, 59.0], [16.1, 60.0], [16.2, 60.0], [16.3, 60.0], [16.4, 60.0], [16.5, 61.0], [16.6, 61.0], [16.7, 61.0], [16.8, 61.0], [16.9, 61.0], [17.0, 62.0], [17.1, 62.0], [17.2, 62.0], [17.3, 62.0], [17.4, 62.0], [17.5, 63.0], [17.6, 63.0], [17.7, 63.0], [17.8, 64.0], [17.9, 64.0], [18.0, 64.0], [18.1, 64.0], [18.2, 64.0], [18.3, 64.0], [18.4, 65.0], [18.5, 65.0], [18.6, 65.0], [18.7, 65.0], [18.8, 65.0], [18.9, 66.0], [19.0, 66.0], [19.1, 66.0], [19.2, 66.0], [19.3, 66.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 68.0], [20.7, 69.0], [20.8, 69.0], [20.9, 69.0], [21.0, 69.0], [21.1, 70.0], [21.2, 70.0], [21.3, 70.0], [21.4, 70.0], [21.5, 71.0], [21.6, 71.0], [21.7, 71.0], [21.8, 71.0], [21.9, 72.0], [22.0, 72.0], [22.1, 72.0], [22.2, 72.0], [22.3, 73.0], [22.4, 73.0], [22.5, 73.0], [22.6, 73.0], [22.7, 74.0], [22.8, 74.0], [22.9, 74.0], [23.0, 74.0], [23.1, 75.0], [23.2, 75.0], [23.3, 75.0], [23.4, 75.0], [23.5, 75.0], [23.6, 75.0], [23.7, 75.0], [23.8, 75.0], [23.9, 76.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 76.0], [24.4, 77.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 77.0], [24.9, 78.0], [25.0, 78.0], [25.1, 78.0], [25.2, 79.0], [25.3, 79.0], [25.4, 79.0], [25.5, 79.0], [25.6, 79.0], [25.7, 79.0], [25.8, 79.0], [25.9, 80.0], [26.0, 80.0], [26.1, 80.0], [26.2, 80.0], [26.3, 81.0], [26.4, 81.0], [26.5, 81.0], [26.6, 81.0], [26.7, 82.0], [26.8, 82.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 83.0], [27.3, 83.0], [27.4, 83.0], [27.5, 84.0], [27.6, 84.0], [27.7, 84.0], [27.8, 84.0], [27.9, 84.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 86.0], [28.4, 86.0], [28.5, 86.0], [28.6, 86.0], [28.7, 87.0], [28.8, 87.0], [28.9, 87.0], [29.0, 87.0], [29.1, 88.0], [29.2, 88.0], [29.3, 88.0], [29.4, 88.0], [29.5, 89.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 91.0], [30.0, 91.0], [30.1, 91.0], [30.2, 92.0], [30.3, 92.0], [30.4, 92.0], [30.5, 92.0], [30.6, 93.0], [30.7, 93.0], [30.8, 93.0], [30.9, 94.0], [31.0, 94.0], [31.1, 94.0], [31.2, 94.0], [31.3, 95.0], [31.4, 95.0], [31.5, 95.0], [31.6, 95.0], [31.7, 96.0], [31.8, 96.0], [31.9, 96.0], [32.0, 96.0], [32.1, 97.0], [32.2, 97.0], [32.3, 97.0], [32.4, 98.0], [32.5, 98.0], [32.6, 98.0], [32.7, 99.0], [32.8, 99.0], [32.9, 99.0], [33.0, 99.0], [33.1, 100.0], [33.2, 100.0], [33.3, 101.0], [33.4, 101.0], [33.5, 101.0], [33.6, 101.0], [33.7, 101.0], [33.8, 102.0], [33.9, 102.0], [34.0, 103.0], [34.1, 103.0], [34.2, 104.0], [34.3, 104.0], [34.4, 104.0], [34.5, 104.0], [34.6, 104.0], [34.7, 104.0], [34.8, 104.0], [34.9, 105.0], [35.0, 105.0], [35.1, 105.0], [35.2, 105.0], [35.3, 105.0], [35.4, 105.0], [35.5, 106.0], [35.6, 106.0], [35.7, 106.0], [35.8, 106.0], [35.9, 106.0], [36.0, 106.0], [36.1, 106.0], [36.2, 107.0], [36.3, 107.0], [36.4, 107.0], [36.5, 107.0], [36.6, 107.0], [36.7, 107.0], [36.8, 107.0], [36.9, 107.0], [37.0, 108.0], [37.1, 108.0], [37.2, 108.0], [37.3, 108.0], [37.4, 108.0], [37.5, 109.0], [37.6, 109.0], [37.7, 109.0], [37.8, 109.0], [37.9, 109.0], [38.0, 110.0], [38.1, 110.0], [38.2, 110.0], [38.3, 110.0], [38.4, 110.0], [38.5, 110.0], [38.6, 111.0], [38.7, 111.0], [38.8, 111.0], [38.9, 112.0], [39.0, 112.0], [39.1, 112.0], [39.2, 112.0], [39.3, 112.0], [39.4, 112.0], [39.5, 113.0], [39.6, 113.0], [39.7, 113.0], [39.8, 113.0], [39.9, 113.0], [40.0, 113.0], [40.1, 114.0], [40.2, 114.0], [40.3, 114.0], [40.4, 114.0], [40.5, 115.0], [40.6, 115.0], [40.7, 115.0], [40.8, 115.0], [40.9, 116.0], [41.0, 116.0], [41.1, 116.0], [41.2, 117.0], [41.3, 117.0], [41.4, 117.0], [41.5, 118.0], [41.6, 118.0], [41.7, 118.0], [41.8, 119.0], [41.9, 119.0], [42.0, 119.0], [42.1, 119.0], [42.2, 120.0], [42.3, 120.0], [42.4, 120.0], [42.5, 120.0], [42.6, 121.0], [42.7, 121.0], [42.8, 121.0], [42.9, 122.0], [43.0, 122.0], [43.1, 122.0], [43.2, 122.0], [43.3, 123.0], [43.4, 123.0], [43.5, 123.0], [43.6, 124.0], [43.7, 124.0], [43.8, 125.0], [43.9, 125.0], [44.0, 125.0], [44.1, 125.0], [44.2, 126.0], [44.3, 126.0], [44.4, 126.0], [44.5, 126.0], [44.6, 127.0], [44.7, 127.0], [44.8, 127.0], [44.9, 127.0], [45.0, 128.0], [45.1, 128.0], [45.2, 128.0], [45.3, 128.0], [45.4, 129.0], [45.5, 129.0], [45.6, 130.0], [45.7, 130.0], [45.8, 130.0], [45.9, 131.0], [46.0, 131.0], [46.1, 131.0], [46.2, 132.0], [46.3, 132.0], [46.4, 132.0], [46.5, 133.0], [46.6, 133.0], [46.7, 134.0], [46.8, 134.0], [46.9, 135.0], [47.0, 135.0], [47.1, 136.0], [47.2, 137.0], [47.3, 137.0], [47.4, 137.0], [47.5, 137.0], [47.6, 138.0], [47.7, 138.0], [47.8, 139.0], [47.9, 139.0], [48.0, 140.0], [48.1, 140.0], [48.2, 141.0], [48.3, 141.0], [48.4, 141.0], [48.5, 142.0], [48.6, 142.0], [48.7, 142.0], [48.8, 143.0], [48.9, 143.0], [49.0, 143.0], [49.1, 144.0], [49.2, 144.0], [49.3, 144.0], [49.4, 145.0], [49.5, 145.0], [49.6, 146.0], [49.7, 146.0], [49.8, 147.0], [49.9, 147.0], [50.0, 147.0], [50.1, 148.0], [50.2, 148.0], [50.3, 149.0], [50.4, 149.0], [50.5, 150.0], [50.6, 151.0], [50.7, 151.0], [50.8, 152.0], [50.9, 152.0], [51.0, 152.0], [51.1, 153.0], [51.2, 154.0], [51.3, 154.0], [51.4, 154.0], [51.5, 155.0], [51.6, 156.0], [51.7, 156.0], [51.8, 157.0], [51.9, 158.0], [52.0, 158.0], [52.1, 159.0], [52.2, 159.0], [52.3, 160.0], [52.4, 160.0], [52.5, 160.0], [52.6, 161.0], [52.7, 162.0], [52.8, 163.0], [52.9, 163.0], [53.0, 164.0], [53.1, 165.0], [53.2, 166.0], [53.3, 166.0], [53.4, 167.0], [53.5, 167.0], [53.6, 167.0], [53.7, 168.0], [53.8, 169.0], [53.9, 170.0], [54.0, 171.0], [54.1, 171.0], [54.2, 172.0], [54.3, 173.0], [54.4, 174.0], [54.5, 174.0], [54.6, 175.0], [54.7, 175.0], [54.8, 175.0], [54.9, 176.0], [55.0, 177.0], [55.1, 177.0], [55.2, 178.0], [55.3, 179.0], [55.4, 179.0], [55.5, 180.0], [55.6, 181.0], [55.7, 182.0], [55.8, 183.0], [55.9, 184.0], [56.0, 184.0], [56.1, 185.0], [56.2, 186.0], [56.3, 186.0], [56.4, 187.0], [56.5, 187.0], [56.6, 188.0], [56.7, 189.0], [56.8, 190.0], [56.9, 191.0], [57.0, 191.0], [57.1, 192.0], [57.2, 192.0], [57.3, 193.0], [57.4, 194.0], [57.5, 194.0], [57.6, 195.0], [57.7, 196.0], [57.8, 197.0], [57.9, 197.0], [58.0, 199.0], [58.1, 199.0], [58.2, 200.0], [58.3, 200.0], [58.4, 201.0], [58.5, 202.0], [58.6, 203.0], [58.7, 203.0], [58.8, 204.0], [58.9, 204.0], [59.0, 205.0], [59.1, 205.0], [59.2, 206.0], [59.3, 207.0], [59.4, 208.0], [59.5, 208.0], [59.6, 209.0], [59.7, 210.0], [59.8, 211.0], [59.9, 211.0], [60.0, 213.0], [60.1, 214.0], [60.2, 214.0], [60.3, 215.0], [60.4, 215.0], [60.5, 215.0], [60.6, 216.0], [60.7, 217.0], [60.8, 218.0], [60.9, 219.0], [61.0, 220.0], [61.1, 220.0], [61.2, 221.0], [61.3, 221.0], [61.4, 222.0], [61.5, 223.0], [61.6, 223.0], [61.7, 224.0], [61.8, 224.0], [61.9, 224.0], [62.0, 225.0], [62.1, 225.0], [62.2, 226.0], [62.3, 227.0], [62.4, 228.0], [62.5, 228.0], [62.6, 229.0], [62.7, 230.0], [62.8, 231.0], [62.9, 231.0], [63.0, 232.0], [63.1, 232.0], [63.2, 233.0], [63.3, 234.0], [63.4, 234.0], [63.5, 235.0], [63.6, 236.0], [63.7, 237.0], [63.8, 238.0], [63.9, 238.0], [64.0, 239.0], [64.1, 240.0], [64.2, 240.0], [64.3, 242.0], [64.4, 242.0], [64.5, 243.0], [64.6, 244.0], [64.7, 244.0], [64.8, 245.0], [64.9, 245.0], [65.0, 246.0], [65.1, 247.0], [65.2, 248.0], [65.3, 249.0], [65.4, 250.0], [65.5, 250.0], [65.6, 251.0], [65.7, 252.0], [65.8, 253.0], [65.9, 253.0], [66.0, 254.0], [66.1, 254.0], [66.2, 255.0], [66.3, 255.0], [66.4, 256.0], [66.5, 257.0], [66.6, 258.0], [66.7, 259.0], [66.8, 259.0], [66.9, 260.0], [67.0, 261.0], [67.1, 262.0], [67.2, 263.0], [67.3, 264.0], [67.4, 265.0], [67.5, 266.0], [67.6, 267.0], [67.7, 267.0], [67.8, 268.0], [67.9, 269.0], [68.0, 270.0], [68.1, 271.0], [68.2, 271.0], [68.3, 272.0], [68.4, 272.0], [68.5, 273.0], [68.6, 274.0], [68.7, 275.0], [68.8, 276.0], [68.9, 276.0], [69.0, 278.0], [69.1, 279.0], [69.2, 279.0], [69.3, 280.0], [69.4, 281.0], [69.5, 282.0], [69.6, 282.0], [69.7, 283.0], [69.8, 284.0], [69.9, 285.0], [70.0, 286.0], [70.1, 286.0], [70.2, 288.0], [70.3, 289.0], [70.4, 291.0], [70.5, 292.0], [70.6, 293.0], [70.7, 293.0], [70.8, 294.0], [70.9, 295.0], [71.0, 297.0], [71.1, 297.0], [71.2, 297.0], [71.3, 299.0], [71.4, 300.0], [71.5, 301.0], [71.6, 303.0], [71.7, 304.0], [71.8, 304.0], [71.9, 305.0], [72.0, 305.0], [72.1, 306.0], [72.2, 307.0], [72.3, 307.0], [72.4, 308.0], [72.5, 309.0], [72.6, 311.0], [72.7, 311.0], [72.8, 312.0], [72.9, 313.0], [73.0, 314.0], [73.1, 315.0], [73.2, 317.0], [73.3, 318.0], [73.4, 319.0], [73.5, 319.0], [73.6, 320.0], [73.7, 320.0], [73.8, 321.0], [73.9, 322.0], [74.0, 324.0], [74.1, 324.0], [74.2, 326.0], [74.3, 327.0], [74.4, 328.0], [74.5, 329.0], [74.6, 330.0], [74.7, 331.0], [74.8, 332.0], [74.9, 334.0], [75.0, 335.0], [75.1, 335.0], [75.2, 337.0], [75.3, 338.0], [75.4, 339.0], [75.5, 339.0], [75.6, 340.0], [75.7, 342.0], [75.8, 343.0], [75.9, 344.0], [76.0, 345.0], [76.1, 347.0], [76.2, 348.0], [76.3, 348.0], [76.4, 349.0], [76.5, 350.0], [76.6, 350.0], [76.7, 351.0], [76.8, 352.0], [76.9, 353.0], [77.0, 354.0], [77.1, 356.0], [77.2, 358.0], [77.3, 359.0], [77.4, 360.0], [77.5, 361.0], [77.6, 362.0], [77.7, 364.0], [77.8, 365.0], [77.9, 367.0], [78.0, 368.0], [78.1, 369.0], [78.2, 370.0], [78.3, 372.0], [78.4, 373.0], [78.5, 375.0], [78.6, 376.0], [78.7, 378.0], [78.8, 380.0], [78.9, 381.0], [79.0, 382.0], [79.1, 383.0], [79.2, 384.0], [79.3, 387.0], [79.4, 390.0], [79.5, 392.0], [79.6, 393.0], [79.7, 393.0], [79.8, 395.0], [79.9, 396.0], [80.0, 398.0], [80.1, 400.0], [80.2, 401.0], [80.3, 403.0], [80.4, 404.0], [80.5, 406.0], [80.6, 406.0], [80.7, 408.0], [80.8, 410.0], [80.9, 412.0], [81.0, 412.0], [81.1, 414.0], [81.2, 415.0], [81.3, 417.0], [81.4, 417.0], [81.5, 420.0], [81.6, 421.0], [81.7, 421.0], [81.8, 423.0], [81.9, 423.0], [82.0, 425.0], [82.1, 426.0], [82.2, 428.0], [82.3, 428.0], [82.4, 429.0], [82.5, 432.0], [82.6, 434.0], [82.7, 436.0], [82.8, 437.0], [82.9, 439.0], [83.0, 441.0], [83.1, 443.0], [83.2, 447.0], [83.3, 449.0], [83.4, 450.0], [83.5, 451.0], [83.6, 453.0], [83.7, 456.0], [83.8, 456.0], [83.9, 458.0], [84.0, 460.0], [84.1, 461.0], [84.2, 462.0], [84.3, 463.0], [84.4, 468.0], [84.5, 471.0], [84.6, 471.0], [84.7, 472.0], [84.8, 474.0], [84.9, 476.0], [85.0, 478.0], [85.1, 479.0], [85.2, 480.0], [85.3, 481.0], [85.4, 483.0], [85.5, 484.0], [85.6, 485.0], [85.7, 486.0], [85.8, 488.0], [85.9, 489.0], [86.0, 491.0], [86.1, 492.0], [86.2, 494.0], [86.3, 496.0], [86.4, 497.0], [86.5, 498.0], [86.6, 499.0], [86.7, 501.0], [86.8, 502.0], [86.9, 504.0], [87.0, 506.0], [87.1, 507.0], [87.2, 508.0], [87.3, 509.0], [87.4, 510.0], [87.5, 511.0], [87.6, 513.0], [87.7, 514.0], [87.8, 515.0], [87.9, 516.0], [88.0, 517.0], [88.1, 518.0], [88.2, 519.0], [88.3, 520.0], [88.4, 523.0], [88.5, 524.0], [88.6, 526.0], [88.7, 527.0], [88.8, 528.0], [88.9, 529.0], [89.0, 531.0], [89.1, 532.0], [89.2, 533.0], [89.3, 533.0], [89.4, 534.0], [89.5, 536.0], [89.6, 537.0], [89.7, 539.0], [89.8, 541.0], [89.9, 542.0], [90.0, 544.0], [90.1, 546.0], [90.2, 547.0], [90.3, 549.0], [90.4, 552.0], [90.5, 555.0], [90.6, 556.0], [90.7, 559.0], [90.8, 561.0], [90.9, 563.0], [91.0, 566.0], [91.1, 568.0], [91.2, 569.0], [91.3, 571.0], [91.4, 574.0], [91.5, 576.0], [91.6, 578.0], [91.7, 580.0], [91.8, 582.0], [91.9, 583.0], [92.0, 586.0], [92.1, 587.0], [92.2, 590.0], [92.3, 594.0], [92.4, 595.0], [92.5, 598.0], [92.6, 600.0], [92.7, 603.0], [92.8, 604.0], [92.9, 606.0], [93.0, 609.0], [93.1, 611.0], [93.2, 613.0], [93.3, 614.0], [93.4, 615.0], [93.5, 617.0], [93.6, 620.0], [93.7, 622.0], [93.8, 625.0], [93.9, 628.0], [94.0, 629.0], [94.1, 630.0], [94.2, 634.0], [94.3, 636.0], [94.4, 640.0], [94.5, 643.0], [94.6, 646.0], [94.7, 649.0], [94.8, 654.0], [94.9, 656.0], [95.0, 657.0], [95.1, 658.0], [95.2, 662.0], [95.3, 664.0], [95.4, 668.0], [95.5, 671.0], [95.6, 673.0], [95.7, 676.0], [95.8, 679.0], [95.9, 681.0], [96.0, 683.0], [96.1, 688.0], [96.2, 692.0], [96.3, 694.0], [96.4, 696.0], [96.5, 703.0], [96.6, 705.0], [96.7, 708.0], [96.8, 713.0], [96.9, 716.0], [97.0, 719.0], [97.1, 722.0], [97.2, 726.0], [97.3, 728.0], [97.4, 735.0], [97.5, 738.0], [97.6, 742.0], [97.7, 750.0], [97.8, 757.0], [97.9, 764.0], [98.0, 771.0], [98.1, 780.0], [98.2, 787.0], [98.3, 794.0], [98.4, 798.0], [98.5, 813.0], [98.6, 825.0], [98.7, 830.0], [98.8, 838.0], [98.9, 862.0], [99.0, 883.0], [99.1, 899.0], [99.2, 932.0], [99.3, 986.0], [99.4, 1045.0], [99.5, 1098.0], [99.6, 1176.0], [99.7, 1257.0], [99.8, 1469.0], [99.9, 1761.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1713.0, "series": [{"data": [[0.0, 1713.0], [2100.0, 1.0], [600.0, 202.0], [700.0, 100.0], [200.0, 686.0], [800.0, 37.0], [900.0, 11.0], [1000.0, 10.0], [1100.0, 6.0], [300.0, 448.0], [1200.0, 5.0], [1300.0, 1.0], [1400.0, 3.0], [1500.0, 2.0], [100.0, 1306.0], [400.0, 342.0], [1700.0, 4.0], [1900.0, 2.0], [500.0, 310.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4498.0, "series": [{"data": [[0.0, 4498.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 682.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.961767204757859, "minX": 1.60388208E12, "maxY": 10.0, "series": [{"data": [[1.6038822E12, 9.961767204757859], [1.60388208E12, 9.998651382333122], [1.60388214E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038822E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 112.0, "minX": 1.0, "maxY": 846.0, "series": [{"data": [[8.0, 112.0], [4.0, 383.0], [2.0, 327.0], [1.0, 846.0], [9.0, 556.6666666666666], [10.0, 235.07762116238712], [5.0, 205.0], [6.0, 148.0], [3.0, 625.0], [7.0, 128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 235.43564547206165]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9210.55, "minX": 1.60388208E12, "maxY": 8533433.15, "series": [{"data": [[1.6038822E12, 3703056.5166666666], [1.60388208E12, 4689027.65], [1.60388214E12, 8533433.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038822E12, 9210.55], [1.60388208E12, 11186.316666666668], [1.60388214E12, 19371.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038822E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 226.21750212404413, "minX": 1.60388208E12, "maxY": 241.44908968307507, "series": [{"data": [[1.6038822E12, 226.21750212404413], [1.60388208E12, 241.44908968307507], [1.60388214E12, 236.19920948616596]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038822E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 224.73491928632126, "minX": 1.60388208E12, "maxY": 239.86176668914385, "series": [{"data": [[1.6038822E12, 224.73491928632126], [1.60388208E12, 239.86176668914385], [1.60388214E12, 234.12687747035568]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038822E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005533596837944679, "minX": 1.60388208E12, "maxY": 0.05933917734322337, "series": [{"data": [[1.6038822E12, 0.005947323704333055], [1.60388208E12, 0.05933917734322337], [1.60388214E12, 0.005533596837944679]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038822E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60388208E12, "maxY": 2109.0, "series": [{"data": [[1.6038822E12, 1447.0], [1.60388208E12, 2109.0], [1.60388214E12, 1978.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038822E12, 32.60199971914291], [1.60388208E12, 35.0], [1.60388214E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038822E12, 33.0], [1.60388208E12, 35.0], [1.60388214E12, 32.05690024137497]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038822E12, 33.0], [1.60388208E12, 35.0], [1.60388214E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038822E12, 29.0], [1.60388208E12, 28.0], [1.60388214E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038822E12, 138.0], [1.60388208E12, 155.0], [1.60388214E12, 151.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038822E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.5, "minX": 1.0, "maxY": 846.0, "series": [{"data": [[33.0, 258.0], [32.0, 268.0], [35.0, 184.0], [34.0, 279.0], [37.0, 254.0], [36.0, 211.0], [38.0, 251.0], [39.0, 166.0], [40.0, 266.5], [41.0, 204.0], [43.0, 202.0], [45.0, 223.0], [44.0, 181.0], [46.0, 146.0], [47.0, 95.0], [48.0, 146.5], [49.0, 97.0], [50.0, 130.5], [51.0, 103.0], [54.0, 113.5], [56.0, 128.5], [58.0, 76.0], [62.0, 71.0], [63.0, 145.0], [65.0, 94.0], [66.0, 46.5], [67.0, 55.0], [70.0, 80.5], [79.0, 97.0], [76.0, 63.0], [77.0, 81.5], [87.0, 78.0], [88.0, 88.0], [104.0, 42.5], [116.0, 53.5], [14.0, 277.0], [1.0, 846.0], [21.0, 434.5], [23.0, 329.5], [24.0, 183.0], [25.0, 352.0], [26.0, 442.5], [27.0, 328.5], [28.0, 293.0], [29.0, 239.0], [30.0, 182.0], [31.0, 242.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 841.0, "series": [{"data": [[33.0, 256.0], [32.0, 266.0], [35.0, 184.0], [34.0, 278.0], [37.0, 252.0], [36.0, 210.5], [38.0, 248.0], [39.0, 165.0], [40.0, 266.0], [41.0, 203.0], [43.0, 202.0], [45.0, 223.0], [44.0, 173.5], [46.0, 145.0], [47.0, 95.0], [48.0, 146.0], [49.0, 97.0], [50.0, 130.0], [51.0, 103.0], [54.0, 113.0], [56.0, 128.5], [58.0, 76.0], [62.0, 71.0], [63.0, 144.0], [65.0, 94.0], [66.0, 46.5], [67.0, 55.0], [70.0, 80.5], [79.0, 97.0], [76.0, 63.0], [77.0, 80.5], [87.0, 78.0], [88.0, 87.0], [104.0, 42.0], [116.0, 53.5], [14.0, 276.0], [1.0, 841.0], [21.0, 433.0], [23.0, 328.0], [24.0, 182.5], [25.0, 351.0], [26.0, 439.0], [27.0, 322.5], [28.0, 292.5], [29.0, 237.0], [30.0, 182.0], [31.0, 241.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 116.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.45, "minX": 1.60388208E12, "maxY": 42.18333333333333, "series": [{"data": [[1.6038822E12, 19.45], [1.60388208E12, 24.866666666666667], [1.60388214E12, 42.18333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038822E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.616666666666667, "minX": 1.60388208E12, "maxY": 42.166666666666664, "series": [{"data": [[1.6038822E12, 19.616666666666667], [1.60388208E12, 24.716666666666665], [1.60388214E12, 42.166666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038822E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.616666666666667, "minX": 1.60388208E12, "maxY": 42.166666666666664, "series": [{"data": [[1.6038822E12, 19.616666666666667], [1.60388208E12, 24.716666666666665], [1.60388214E12, 42.166666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038822E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.616666666666667, "minX": 1.60388208E12, "maxY": 42.166666666666664, "series": [{"data": [[1.6038822E12, 19.616666666666667], [1.60388208E12, 24.716666666666665], [1.60388214E12, 42.166666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038822E12, "title": "Total Transactions Per Second"}},
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

