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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 1917.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 29.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 39.0], [6.7, 39.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 40.0], [7.4, 40.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 44.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 46.0], [9.7, 46.0], [9.8, 46.0], [9.9, 46.0], [10.0, 47.0], [10.1, 47.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 48.0], [10.6, 49.0], [10.7, 49.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 50.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 51.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 54.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 55.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 56.0], [14.4, 56.0], [14.5, 56.0], [14.6, 56.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 58.0], [15.6, 58.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 58.0], [16.2, 59.0], [16.3, 59.0], [16.4, 59.0], [16.5, 60.0], [16.6, 60.0], [16.7, 60.0], [16.8, 60.0], [16.9, 60.0], [17.0, 60.0], [17.1, 60.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 62.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 63.0], [18.2, 63.0], [18.3, 63.0], [18.4, 63.0], [18.5, 64.0], [18.6, 64.0], [18.7, 64.0], [18.8, 64.0], [18.9, 64.0], [19.0, 65.0], [19.1, 65.0], [19.2, 65.0], [19.3, 65.0], [19.4, 66.0], [19.5, 66.0], [19.6, 66.0], [19.7, 66.0], [19.8, 66.0], [19.9, 67.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 69.0], [21.0, 69.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 69.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 71.0], [21.9, 71.0], [22.0, 71.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 72.0], [22.6, 72.0], [22.7, 72.0], [22.8, 72.0], [22.9, 73.0], [23.0, 73.0], [23.1, 73.0], [23.2, 74.0], [23.3, 74.0], [23.4, 74.0], [23.5, 74.0], [23.6, 74.0], [23.7, 75.0], [23.8, 75.0], [23.9, 75.0], [24.0, 75.0], [24.1, 75.0], [24.2, 76.0], [24.3, 76.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 77.0], [24.8, 77.0], [24.9, 77.0], [25.0, 77.0], [25.1, 78.0], [25.2, 78.0], [25.3, 78.0], [25.4, 78.0], [25.5, 78.0], [25.6, 79.0], [25.7, 79.0], [25.8, 79.0], [25.9, 79.0], [26.0, 80.0], [26.1, 80.0], [26.2, 80.0], [26.3, 80.0], [26.4, 80.0], [26.5, 81.0], [26.6, 81.0], [26.7, 81.0], [26.8, 81.0], [26.9, 81.0], [27.0, 82.0], [27.1, 82.0], [27.2, 82.0], [27.3, 82.0], [27.4, 83.0], [27.5, 83.0], [27.6, 83.0], [27.7, 84.0], [27.8, 84.0], [27.9, 84.0], [28.0, 84.0], [28.1, 84.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 85.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 88.0], [29.4, 88.0], [29.5, 88.0], [29.6, 88.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 89.0], [30.1, 90.0], [30.2, 90.0], [30.3, 90.0], [30.4, 90.0], [30.5, 91.0], [30.6, 91.0], [30.7, 91.0], [30.8, 91.0], [30.9, 91.0], [31.0, 92.0], [31.1, 92.0], [31.2, 93.0], [31.3, 93.0], [31.4, 93.0], [31.5, 94.0], [31.6, 94.0], [31.7, 94.0], [31.8, 94.0], [31.9, 95.0], [32.0, 95.0], [32.1, 95.0], [32.2, 96.0], [32.3, 96.0], [32.4, 97.0], [32.5, 97.0], [32.6, 98.0], [32.7, 98.0], [32.8, 98.0], [32.9, 99.0], [33.0, 99.0], [33.1, 99.0], [33.2, 100.0], [33.3, 100.0], [33.4, 100.0], [33.5, 100.0], [33.6, 100.0], [33.7, 101.0], [33.8, 101.0], [33.9, 101.0], [34.0, 102.0], [34.1, 102.0], [34.2, 103.0], [34.3, 103.0], [34.4, 103.0], [34.5, 103.0], [34.6, 104.0], [34.7, 104.0], [34.8, 104.0], [34.9, 104.0], [35.0, 104.0], [35.1, 105.0], [35.2, 105.0], [35.3, 105.0], [35.4, 105.0], [35.5, 105.0], [35.6, 105.0], [35.7, 105.0], [35.8, 105.0], [35.9, 106.0], [36.0, 106.0], [36.1, 106.0], [36.2, 106.0], [36.3, 106.0], [36.4, 106.0], [36.5, 106.0], [36.6, 106.0], [36.7, 106.0], [36.8, 107.0], [36.9, 107.0], [37.0, 107.0], [37.1, 107.0], [37.2, 107.0], [37.3, 108.0], [37.4, 108.0], [37.5, 108.0], [37.6, 108.0], [37.7, 108.0], [37.8, 108.0], [37.9, 108.0], [38.0, 108.0], [38.1, 109.0], [38.2, 109.0], [38.3, 109.0], [38.4, 109.0], [38.5, 110.0], [38.6, 110.0], [38.7, 110.0], [38.8, 110.0], [38.9, 110.0], [39.0, 111.0], [39.1, 111.0], [39.2, 111.0], [39.3, 111.0], [39.4, 112.0], [39.5, 112.0], [39.6, 112.0], [39.7, 113.0], [39.8, 113.0], [39.9, 113.0], [40.0, 114.0], [40.1, 114.0], [40.2, 114.0], [40.3, 114.0], [40.4, 114.0], [40.5, 115.0], [40.6, 115.0], [40.7, 115.0], [40.8, 115.0], [40.9, 115.0], [41.0, 116.0], [41.1, 116.0], [41.2, 116.0], [41.3, 116.0], [41.4, 116.0], [41.5, 116.0], [41.6, 117.0], [41.7, 117.0], [41.8, 117.0], [41.9, 117.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 119.0], [42.6, 119.0], [42.7, 119.0], [42.8, 120.0], [42.9, 120.0], [43.0, 120.0], [43.1, 120.0], [43.2, 121.0], [43.3, 121.0], [43.4, 121.0], [43.5, 121.0], [43.6, 122.0], [43.7, 122.0], [43.8, 122.0], [43.9, 122.0], [44.0, 123.0], [44.1, 123.0], [44.2, 123.0], [44.3, 123.0], [44.4, 124.0], [44.5, 124.0], [44.6, 125.0], [44.7, 125.0], [44.8, 125.0], [44.9, 125.0], [45.0, 126.0], [45.1, 126.0], [45.2, 126.0], [45.3, 127.0], [45.4, 127.0], [45.5, 127.0], [45.6, 128.0], [45.7, 128.0], [45.8, 128.0], [45.9, 128.0], [46.0, 129.0], [46.1, 129.0], [46.2, 129.0], [46.3, 129.0], [46.4, 130.0], [46.5, 130.0], [46.6, 130.0], [46.7, 131.0], [46.8, 131.0], [46.9, 131.0], [47.0, 132.0], [47.1, 132.0], [47.2, 132.0], [47.3, 132.0], [47.4, 132.0], [47.5, 133.0], [47.6, 133.0], [47.7, 134.0], [47.8, 134.0], [47.9, 135.0], [48.0, 135.0], [48.1, 135.0], [48.2, 136.0], [48.3, 136.0], [48.4, 137.0], [48.5, 137.0], [48.6, 137.0], [48.7, 138.0], [48.8, 139.0], [48.9, 139.0], [49.0, 139.0], [49.1, 140.0], [49.2, 140.0], [49.3, 140.0], [49.4, 140.0], [49.5, 141.0], [49.6, 141.0], [49.7, 142.0], [49.8, 142.0], [49.9, 142.0], [50.0, 143.0], [50.1, 144.0], [50.2, 144.0], [50.3, 145.0], [50.4, 146.0], [50.5, 146.0], [50.6, 147.0], [50.7, 147.0], [50.8, 148.0], [50.9, 148.0], [51.0, 148.0], [51.1, 149.0], [51.2, 149.0], [51.3, 150.0], [51.4, 150.0], [51.5, 151.0], [51.6, 151.0], [51.7, 152.0], [51.8, 153.0], [51.9, 153.0], [52.0, 154.0], [52.1, 155.0], [52.2, 155.0], [52.3, 155.0], [52.4, 157.0], [52.5, 157.0], [52.6, 158.0], [52.7, 159.0], [52.8, 159.0], [52.9, 160.0], [53.0, 161.0], [53.1, 162.0], [53.2, 162.0], [53.3, 163.0], [53.4, 164.0], [53.5, 164.0], [53.6, 164.0], [53.7, 165.0], [53.8, 166.0], [53.9, 166.0], [54.0, 167.0], [54.1, 167.0], [54.2, 168.0], [54.3, 169.0], [54.4, 170.0], [54.5, 171.0], [54.6, 171.0], [54.7, 172.0], [54.8, 172.0], [54.9, 173.0], [55.0, 174.0], [55.1, 175.0], [55.2, 175.0], [55.3, 176.0], [55.4, 177.0], [55.5, 178.0], [55.6, 178.0], [55.7, 179.0], [55.8, 179.0], [55.9, 180.0], [56.0, 180.0], [56.1, 181.0], [56.2, 182.0], [56.3, 182.0], [56.4, 183.0], [56.5, 184.0], [56.6, 185.0], [56.7, 185.0], [56.8, 186.0], [56.9, 187.0], [57.0, 188.0], [57.1, 189.0], [57.2, 189.0], [57.3, 190.0], [57.4, 191.0], [57.5, 191.0], [57.6, 192.0], [57.7, 193.0], [57.8, 194.0], [57.9, 195.0], [58.0, 195.0], [58.1, 196.0], [58.2, 197.0], [58.3, 197.0], [58.4, 198.0], [58.5, 199.0], [58.6, 200.0], [58.7, 201.0], [58.8, 202.0], [58.9, 202.0], [59.0, 202.0], [59.1, 204.0], [59.2, 204.0], [59.3, 205.0], [59.4, 206.0], [59.5, 206.0], [59.6, 206.0], [59.7, 207.0], [59.8, 208.0], [59.9, 208.0], [60.0, 209.0], [60.1, 210.0], [60.2, 210.0], [60.3, 211.0], [60.4, 211.0], [60.5, 212.0], [60.6, 212.0], [60.7, 213.0], [60.8, 213.0], [60.9, 214.0], [61.0, 215.0], [61.1, 215.0], [61.2, 216.0], [61.3, 216.0], [61.4, 217.0], [61.5, 218.0], [61.6, 219.0], [61.7, 219.0], [61.8, 220.0], [61.9, 221.0], [62.0, 222.0], [62.1, 223.0], [62.2, 224.0], [62.3, 224.0], [62.4, 225.0], [62.5, 226.0], [62.6, 227.0], [62.7, 228.0], [62.8, 229.0], [62.9, 230.0], [63.0, 231.0], [63.1, 232.0], [63.2, 232.0], [63.3, 233.0], [63.4, 233.0], [63.5, 234.0], [63.6, 235.0], [63.7, 235.0], [63.8, 235.0], [63.9, 236.0], [64.0, 237.0], [64.1, 238.0], [64.2, 238.0], [64.3, 239.0], [64.4, 240.0], [64.5, 241.0], [64.6, 241.0], [64.7, 242.0], [64.8, 243.0], [64.9, 244.0], [65.0, 244.0], [65.1, 245.0], [65.2, 246.0], [65.3, 247.0], [65.4, 247.0], [65.5, 249.0], [65.6, 250.0], [65.7, 250.0], [65.8, 251.0], [65.9, 252.0], [66.0, 253.0], [66.1, 253.0], [66.2, 254.0], [66.3, 254.0], [66.4, 255.0], [66.5, 256.0], [66.6, 257.0], [66.7, 258.0], [66.8, 258.0], [66.9, 259.0], [67.0, 260.0], [67.1, 261.0], [67.2, 262.0], [67.3, 263.0], [67.4, 264.0], [67.5, 265.0], [67.6, 266.0], [67.7, 267.0], [67.8, 267.0], [67.9, 268.0], [68.0, 269.0], [68.1, 269.0], [68.2, 270.0], [68.3, 271.0], [68.4, 271.0], [68.5, 272.0], [68.6, 273.0], [68.7, 274.0], [68.8, 274.0], [68.9, 275.0], [69.0, 277.0], [69.1, 278.0], [69.2, 278.0], [69.3, 279.0], [69.4, 280.0], [69.5, 280.0], [69.6, 282.0], [69.7, 282.0], [69.8, 283.0], [69.9, 284.0], [70.0, 285.0], [70.1, 286.0], [70.2, 287.0], [70.3, 288.0], [70.4, 289.0], [70.5, 290.0], [70.6, 291.0], [70.7, 292.0], [70.8, 293.0], [70.9, 293.0], [71.0, 295.0], [71.1, 296.0], [71.2, 297.0], [71.3, 297.0], [71.4, 298.0], [71.5, 299.0], [71.6, 301.0], [71.7, 303.0], [71.8, 303.0], [71.9, 305.0], [72.0, 306.0], [72.1, 307.0], [72.2, 308.0], [72.3, 309.0], [72.4, 310.0], [72.5, 311.0], [72.6, 312.0], [72.7, 313.0], [72.8, 314.0], [72.9, 315.0], [73.0, 316.0], [73.1, 317.0], [73.2, 319.0], [73.3, 320.0], [73.4, 321.0], [73.5, 322.0], [73.6, 323.0], [73.7, 324.0], [73.8, 325.0], [73.9, 326.0], [74.0, 327.0], [74.1, 329.0], [74.2, 329.0], [74.3, 330.0], [74.4, 331.0], [74.5, 331.0], [74.6, 332.0], [74.7, 333.0], [74.8, 335.0], [74.9, 335.0], [75.0, 336.0], [75.1, 337.0], [75.2, 339.0], [75.3, 340.0], [75.4, 342.0], [75.5, 342.0], [75.6, 343.0], [75.7, 343.0], [75.8, 345.0], [75.9, 346.0], [76.0, 347.0], [76.1, 348.0], [76.2, 350.0], [76.3, 352.0], [76.4, 352.0], [76.5, 353.0], [76.6, 354.0], [76.7, 355.0], [76.8, 356.0], [76.9, 358.0], [77.0, 360.0], [77.1, 360.0], [77.2, 360.0], [77.3, 361.0], [77.4, 362.0], [77.5, 365.0], [77.6, 366.0], [77.7, 367.0], [77.8, 369.0], [77.9, 370.0], [78.0, 372.0], [78.1, 373.0], [78.2, 374.0], [78.3, 376.0], [78.4, 377.0], [78.5, 379.0], [78.6, 380.0], [78.7, 380.0], [78.8, 381.0], [78.9, 383.0], [79.0, 384.0], [79.1, 386.0], [79.2, 387.0], [79.3, 388.0], [79.4, 389.0], [79.5, 391.0], [79.6, 392.0], [79.7, 395.0], [79.8, 397.0], [79.9, 398.0], [80.0, 400.0], [80.1, 401.0], [80.2, 401.0], [80.3, 403.0], [80.4, 404.0], [80.5, 406.0], [80.6, 410.0], [80.7, 411.0], [80.8, 414.0], [80.9, 415.0], [81.0, 416.0], [81.1, 417.0], [81.2, 420.0], [81.3, 421.0], [81.4, 422.0], [81.5, 423.0], [81.6, 424.0], [81.7, 425.0], [81.8, 426.0], [81.9, 428.0], [82.0, 429.0], [82.1, 430.0], [82.2, 432.0], [82.3, 434.0], [82.4, 435.0], [82.5, 436.0], [82.6, 437.0], [82.7, 438.0], [82.8, 440.0], [82.9, 443.0], [83.0, 444.0], [83.1, 445.0], [83.2, 447.0], [83.3, 447.0], [83.4, 448.0], [83.5, 451.0], [83.6, 452.0], [83.7, 454.0], [83.8, 458.0], [83.9, 459.0], [84.0, 460.0], [84.1, 461.0], [84.2, 465.0], [84.3, 466.0], [84.4, 468.0], [84.5, 470.0], [84.6, 471.0], [84.7, 473.0], [84.8, 474.0], [84.9, 475.0], [85.0, 475.0], [85.1, 477.0], [85.2, 478.0], [85.3, 480.0], [85.4, 480.0], [85.5, 481.0], [85.6, 482.0], [85.7, 483.0], [85.8, 485.0], [85.9, 487.0], [86.0, 488.0], [86.1, 489.0], [86.2, 491.0], [86.3, 492.0], [86.4, 495.0], [86.5, 495.0], [86.6, 496.0], [86.7, 499.0], [86.8, 500.0], [86.9, 501.0], [87.0, 502.0], [87.1, 504.0], [87.2, 505.0], [87.3, 507.0], [87.4, 509.0], [87.5, 510.0], [87.6, 513.0], [87.7, 514.0], [87.8, 516.0], [87.9, 519.0], [88.0, 520.0], [88.1, 522.0], [88.2, 524.0], [88.3, 525.0], [88.4, 527.0], [88.5, 529.0], [88.6, 531.0], [88.7, 534.0], [88.8, 534.0], [88.9, 537.0], [89.0, 541.0], [89.1, 543.0], [89.2, 544.0], [89.3, 546.0], [89.4, 548.0], [89.5, 551.0], [89.6, 552.0], [89.7, 554.0], [89.8, 555.0], [89.9, 557.0], [90.0, 561.0], [90.1, 563.0], [90.2, 565.0], [90.3, 567.0], [90.4, 569.0], [90.5, 569.0], [90.6, 572.0], [90.7, 573.0], [90.8, 574.0], [90.9, 577.0], [91.0, 578.0], [91.1, 580.0], [91.2, 582.0], [91.3, 584.0], [91.4, 586.0], [91.5, 587.0], [91.6, 589.0], [91.7, 590.0], [91.8, 592.0], [91.9, 594.0], [92.0, 596.0], [92.1, 597.0], [92.2, 600.0], [92.3, 601.0], [92.4, 602.0], [92.5, 604.0], [92.6, 605.0], [92.7, 607.0], [92.8, 610.0], [92.9, 612.0], [93.0, 613.0], [93.1, 615.0], [93.2, 618.0], [93.3, 619.0], [93.4, 620.0], [93.5, 622.0], [93.6, 624.0], [93.7, 626.0], [93.8, 630.0], [93.9, 632.0], [94.0, 633.0], [94.1, 636.0], [94.2, 639.0], [94.3, 642.0], [94.4, 643.0], [94.5, 644.0], [94.6, 646.0], [94.7, 647.0], [94.8, 650.0], [94.9, 657.0], [95.0, 659.0], [95.1, 662.0], [95.2, 664.0], [95.3, 667.0], [95.4, 671.0], [95.5, 672.0], [95.6, 675.0], [95.7, 676.0], [95.8, 680.0], [95.9, 682.0], [96.0, 685.0], [96.1, 688.0], [96.2, 691.0], [96.3, 693.0], [96.4, 699.0], [96.5, 701.0], [96.6, 706.0], [96.7, 709.0], [96.8, 711.0], [96.9, 718.0], [97.0, 720.0], [97.1, 724.0], [97.2, 730.0], [97.3, 739.0], [97.4, 746.0], [97.5, 752.0], [97.6, 756.0], [97.7, 759.0], [97.8, 763.0], [97.9, 768.0], [98.0, 773.0], [98.1, 778.0], [98.2, 792.0], [98.3, 795.0], [98.4, 802.0], [98.5, 816.0], [98.6, 838.0], [98.7, 851.0], [98.8, 864.0], [98.9, 886.0], [99.0, 902.0], [99.1, 914.0], [99.2, 959.0], [99.3, 988.0], [99.4, 1072.0], [99.5, 1106.0], [99.6, 1211.0], [99.7, 1336.0], [99.8, 1525.0], [99.9, 1632.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1722.0, "series": [{"data": [[0.0, 1722.0], [600.0, 220.0], [700.0, 99.0], [200.0, 672.0], [800.0, 33.0], [900.0, 17.0], [1000.0, 9.0], [1100.0, 6.0], [300.0, 439.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 1.0], [1500.0, 6.0], [100.0, 1318.0], [400.0, 351.0], [1600.0, 2.0], [1800.0, 3.0], [1900.0, 1.0], [500.0, 283.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4506.0, "series": [{"data": [[0.0, 4506.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 673.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.865443425076453, "minX": 1.60266522E12, "maxY": 10.0, "series": [{"data": [[1.60266528E12, 10.0], [1.60266534E12, 9.865443425076453], [1.60266522E12, 9.997800263968317]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266534E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 152.0, "minX": 1.0, "maxY": 902.0, "series": [{"data": [[4.0, 312.0], [2.0, 778.0], [1.0, 902.0], [9.0, 208.0], [5.0, 243.0], [10.0, 235.1532818532819], [6.0, 152.0], [3.0, 417.0], [7.0, 167.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990558766859387, 235.39961464354496]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2551.233333333333, "minX": 1.60266522E12, "maxY": 8272035.516666667, "series": [{"data": [[1.60266528E12, 8272035.516666667], [1.60266534E12, 1119597.9666666666], [1.60266522E12, 7533883.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60266528E12, 19835.1], [1.60266534E12, 2551.233333333333], [1.60266522E12, 17382.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266534E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 221.07951070336398, "minX": 1.60266522E12, "maxY": 243.13462384513858, "series": [{"data": [[1.60266528E12, 230.41930501930483], [1.60266534E12, 221.07951070336398], [1.60266522E12, 243.13462384513858]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266534E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 219.5107033639143, "minX": 1.60266522E12, "maxY": 241.22129344478665, "series": [{"data": [[1.60266528E12, 228.64594594594584], [1.60266534E12, 219.5107033639143], [1.60266522E12, 241.22129344478665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266534E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006177606177606183, "minX": 1.60266522E12, "maxY": 0.05939287285525767, "series": [{"data": [[1.60266528E12, 0.006177606177606183], [1.60266534E12, 0.015290519877675858], [1.60266522E12, 0.05939287285525767]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266534E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60266522E12, "maxY": 1917.0, "series": [{"data": [[1.60266528E12, 1531.0], [1.60266534E12, 1012.0], [1.60266522E12, 1917.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60266528E12, 33.0], [1.60266534E12, 32.95199992179871], [1.60266522E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60266528E12, 33.0], [1.60266534E12, 33.0], [1.60266522E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60266528E12, 33.0], [1.60266534E12, 33.0], [1.60266522E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60266528E12, 28.0], [1.60266534E12, 32.0], [1.60266522E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60266528E12, 148.0], [1.60266534E12, 149.0], [1.60266522E12, 137.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266534E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 3.0, "maxY": 597.5, "series": [{"data": [[33.0, 236.5], [32.0, 239.0], [35.0, 218.0], [34.0, 252.5], [37.0, 232.0], [36.0, 204.5], [38.0, 145.5], [39.0, 208.0], [41.0, 211.5], [42.0, 172.0], [43.0, 65.0], [45.0, 143.5], [44.0, 200.5], [47.0, 142.0], [46.0, 155.5], [3.0, 544.0], [48.0, 155.5], [49.0, 220.0], [52.0, 115.0], [53.0, 105.0], [54.0, 84.5], [56.0, 152.0], [58.0, 128.0], [59.0, 116.0], [60.0, 87.5], [63.0, 90.0], [62.0, 79.0], [64.0, 90.5], [4.0, 597.5], [68.0, 63.5], [69.0, 63.0], [77.0, 83.0], [76.0, 78.5], [80.0, 60.5], [83.0, 75.0], [82.0, 88.0], [86.0, 55.5], [90.0, 86.5], [95.0, 46.0], [19.0, 460.0], [23.0, 425.0], [25.0, 264.0], [26.0, 346.0], [27.0, 309.0], [28.0, 209.0], [29.0, 310.0], [30.0, 288.0], [31.0, 244.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 3.0, "maxY": 595.5, "series": [{"data": [[33.0, 236.0], [32.0, 237.0], [35.0, 218.0], [34.0, 248.0], [37.0, 231.0], [36.0, 204.0], [38.0, 145.5], [39.0, 207.0], [41.0, 210.5], [42.0, 172.0], [43.0, 65.0], [45.0, 142.5], [44.0, 200.5], [47.0, 142.0], [46.0, 153.0], [3.0, 544.0], [48.0, 149.5], [49.0, 220.0], [52.0, 115.0], [53.0, 105.0], [54.0, 84.5], [56.0, 151.0], [58.0, 128.0], [59.0, 116.0], [60.0, 87.5], [63.0, 90.0], [62.0, 79.0], [64.0, 90.5], [4.0, 595.5], [68.0, 63.5], [69.0, 63.0], [77.0, 83.0], [76.0, 78.5], [80.0, 60.5], [83.0, 75.0], [82.0, 88.0], [86.0, 55.5], [90.0, 86.5], [95.0, 46.0], [19.0, 450.0], [23.0, 423.0], [25.0, 264.0], [26.0, 344.5], [27.0, 308.0], [28.0, 207.5], [29.0, 308.5], [30.0, 281.5], [31.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.283333333333333, "minX": 1.60266522E12, "maxY": 43.166666666666664, "series": [{"data": [[1.60266528E12, 43.166666666666664], [1.60266534E12, 5.283333333333333], [1.60266522E12, 38.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266534E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.60266522E12, "maxY": 43.166666666666664, "series": [{"data": [[1.60266528E12, 43.166666666666664], [1.60266534E12, 5.45], [1.60266522E12, 37.88333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60266534E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.60266522E12, "maxY": 43.166666666666664, "series": [{"data": [[1.60266528E12, 43.166666666666664], [1.60266534E12, 5.45], [1.60266522E12, 37.88333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266534E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.60266522E12, "maxY": 43.166666666666664, "series": [{"data": [[1.60266528E12, 43.166666666666664], [1.60266534E12, 5.45], [1.60266522E12, 37.88333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60266534E12, "title": "Total Transactions Per Second"}},
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

