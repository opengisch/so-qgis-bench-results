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
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 2376.0, "series": [{"data": [[0.0, 29.0], [0.1, 29.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 39.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 42.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 43.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 45.0], [8.1, 45.0], [8.2, 46.0], [8.3, 46.0], [8.4, 46.0], [8.5, 46.0], [8.6, 47.0], [8.7, 47.0], [8.8, 47.0], [8.9, 47.0], [9.0, 48.0], [9.1, 48.0], [9.2, 48.0], [9.3, 48.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 53.0], [11.5, 53.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 54.0], [12.0, 54.0], [12.1, 54.0], [12.2, 54.0], [12.3, 54.0], [12.4, 55.0], [12.5, 55.0], [12.6, 55.0], [12.7, 55.0], [12.8, 55.0], [12.9, 56.0], [13.0, 56.0], [13.1, 56.0], [13.2, 56.0], [13.3, 56.0], [13.4, 56.0], [13.5, 57.0], [13.6, 57.0], [13.7, 57.0], [13.8, 58.0], [13.9, 58.0], [14.0, 58.0], [14.1, 58.0], [14.2, 59.0], [14.3, 59.0], [14.4, 59.0], [14.5, 60.0], [14.6, 60.0], [14.7, 60.0], [14.8, 60.0], [14.9, 60.0], [15.0, 61.0], [15.1, 61.0], [15.2, 61.0], [15.3, 61.0], [15.4, 62.0], [15.5, 62.0], [15.6, 62.0], [15.7, 62.0], [15.8, 63.0], [15.9, 63.0], [16.0, 63.0], [16.1, 63.0], [16.2, 63.0], [16.3, 63.0], [16.4, 64.0], [16.5, 64.0], [16.6, 64.0], [16.7, 64.0], [16.8, 64.0], [16.9, 64.0], [17.0, 65.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 65.0], [17.5, 66.0], [17.6, 66.0], [17.7, 66.0], [17.8, 66.0], [17.9, 66.0], [18.0, 66.0], [18.1, 66.0], [18.2, 67.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 67.0], [18.7, 68.0], [18.8, 68.0], [18.9, 68.0], [19.0, 68.0], [19.1, 68.0], [19.2, 69.0], [19.3, 69.0], [19.4, 69.0], [19.5, 69.0], [19.6, 70.0], [19.7, 70.0], [19.8, 70.0], [19.9, 70.0], [20.0, 71.0], [20.1, 71.0], [20.2, 71.0], [20.3, 71.0], [20.4, 72.0], [20.5, 72.0], [20.6, 72.0], [20.7, 72.0], [20.8, 72.0], [20.9, 73.0], [21.0, 73.0], [21.1, 73.0], [21.2, 74.0], [21.3, 74.0], [21.4, 74.0], [21.5, 74.0], [21.6, 74.0], [21.7, 75.0], [21.8, 75.0], [21.9, 75.0], [22.0, 75.0], [22.1, 75.0], [22.2, 75.0], [22.3, 76.0], [22.4, 76.0], [22.5, 76.0], [22.6, 76.0], [22.7, 76.0], [22.8, 77.0], [22.9, 77.0], [23.0, 77.0], [23.1, 77.0], [23.2, 77.0], [23.3, 78.0], [23.4, 78.0], [23.5, 78.0], [23.6, 78.0], [23.7, 79.0], [23.8, 79.0], [23.9, 79.0], [24.0, 79.0], [24.1, 79.0], [24.2, 79.0], [24.3, 80.0], [24.4, 80.0], [24.5, 80.0], [24.6, 80.0], [24.7, 81.0], [24.8, 81.0], [24.9, 81.0], [25.0, 81.0], [25.1, 81.0], [25.2, 82.0], [25.3, 82.0], [25.4, 82.0], [25.5, 83.0], [25.6, 83.0], [25.7, 83.0], [25.8, 83.0], [25.9, 83.0], [26.0, 84.0], [26.1, 84.0], [26.2, 84.0], [26.3, 84.0], [26.4, 84.0], [26.5, 85.0], [26.6, 85.0], [26.7, 86.0], [26.8, 86.0], [26.9, 86.0], [27.0, 86.0], [27.1, 86.0], [27.2, 87.0], [27.3, 87.0], [27.4, 87.0], [27.5, 87.0], [27.6, 88.0], [27.7, 88.0], [27.8, 88.0], [27.9, 88.0], [28.0, 88.0], [28.1, 89.0], [28.2, 89.0], [28.3, 89.0], [28.4, 89.0], [28.5, 90.0], [28.6, 90.0], [28.7, 90.0], [28.8, 91.0], [28.9, 91.0], [29.0, 92.0], [29.1, 92.0], [29.2, 92.0], [29.3, 92.0], [29.4, 92.0], [29.5, 93.0], [29.6, 93.0], [29.7, 94.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 95.0], [30.2, 95.0], [30.3, 95.0], [30.4, 96.0], [30.5, 96.0], [30.6, 96.0], [30.7, 97.0], [30.8, 97.0], [30.9, 97.0], [31.0, 97.0], [31.1, 98.0], [31.2, 98.0], [31.3, 98.0], [31.4, 98.0], [31.5, 99.0], [31.6, 99.0], [31.7, 99.0], [31.8, 100.0], [31.9, 100.0], [32.0, 100.0], [32.1, 101.0], [32.2, 101.0], [32.3, 101.0], [32.4, 102.0], [32.5, 102.0], [32.6, 102.0], [32.7, 103.0], [32.8, 103.0], [32.9, 104.0], [33.0, 104.0], [33.1, 104.0], [33.2, 104.0], [33.3, 104.0], [33.4, 105.0], [33.5, 105.0], [33.6, 105.0], [33.7, 105.0], [33.8, 105.0], [33.9, 105.0], [34.0, 106.0], [34.1, 106.0], [34.2, 106.0], [34.3, 106.0], [34.4, 106.0], [34.5, 106.0], [34.6, 106.0], [34.7, 106.0], [34.8, 107.0], [34.9, 107.0], [35.0, 107.0], [35.1, 107.0], [35.2, 107.0], [35.3, 107.0], [35.4, 107.0], [35.5, 107.0], [35.6, 108.0], [35.7, 108.0], [35.8, 108.0], [35.9, 108.0], [36.0, 108.0], [36.1, 108.0], [36.2, 109.0], [36.3, 109.0], [36.4, 109.0], [36.5, 109.0], [36.6, 109.0], [36.7, 109.0], [36.8, 109.0], [36.9, 110.0], [37.0, 110.0], [37.1, 110.0], [37.2, 111.0], [37.3, 111.0], [37.4, 111.0], [37.5, 111.0], [37.6, 111.0], [37.7, 111.0], [37.8, 112.0], [37.9, 112.0], [38.0, 112.0], [38.1, 112.0], [38.2, 113.0], [38.3, 113.0], [38.4, 113.0], [38.5, 113.0], [38.6, 113.0], [38.7, 114.0], [38.8, 114.0], [38.9, 114.0], [39.0, 115.0], [39.1, 115.0], [39.2, 115.0], [39.3, 116.0], [39.4, 116.0], [39.5, 116.0], [39.6, 116.0], [39.7, 116.0], [39.8, 117.0], [39.9, 117.0], [40.0, 117.0], [40.1, 117.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 119.0], [40.7, 119.0], [40.8, 119.0], [40.9, 119.0], [41.0, 120.0], [41.1, 120.0], [41.2, 120.0], [41.3, 121.0], [41.4, 121.0], [41.5, 121.0], [41.6, 121.0], [41.7, 122.0], [41.8, 122.0], [41.9, 122.0], [42.0, 122.0], [42.1, 123.0], [42.2, 123.0], [42.3, 123.0], [42.4, 123.0], [42.5, 124.0], [42.6, 124.0], [42.7, 124.0], [42.8, 125.0], [42.9, 125.0], [43.0, 126.0], [43.1, 126.0], [43.2, 126.0], [43.3, 127.0], [43.4, 127.0], [43.5, 127.0], [43.6, 127.0], [43.7, 127.0], [43.8, 128.0], [43.9, 128.0], [44.0, 128.0], [44.1, 129.0], [44.2, 129.0], [44.3, 129.0], [44.4, 129.0], [44.5, 130.0], [44.6, 130.0], [44.7, 130.0], [44.8, 131.0], [44.9, 131.0], [45.0, 132.0], [45.1, 132.0], [45.2, 133.0], [45.3, 133.0], [45.4, 134.0], [45.5, 134.0], [45.6, 134.0], [45.7, 135.0], [45.8, 135.0], [45.9, 136.0], [46.0, 136.0], [46.1, 136.0], [46.2, 136.0], [46.3, 136.0], [46.4, 137.0], [46.5, 137.0], [46.6, 137.0], [46.7, 138.0], [46.8, 138.0], [46.9, 138.0], [47.0, 139.0], [47.1, 139.0], [47.2, 139.0], [47.3, 140.0], [47.4, 140.0], [47.5, 140.0], [47.6, 141.0], [47.7, 141.0], [47.8, 142.0], [47.9, 142.0], [48.0, 143.0], [48.1, 143.0], [48.2, 143.0], [48.3, 143.0], [48.4, 144.0], [48.5, 144.0], [48.6, 144.0], [48.7, 145.0], [48.8, 145.0], [48.9, 145.0], [49.0, 146.0], [49.1, 147.0], [49.2, 147.0], [49.3, 147.0], [49.4, 148.0], [49.5, 148.0], [49.6, 149.0], [49.7, 149.0], [49.8, 150.0], [49.9, 150.0], [50.0, 150.0], [50.1, 151.0], [50.2, 151.0], [50.3, 152.0], [50.4, 152.0], [50.5, 153.0], [50.6, 154.0], [50.7, 154.0], [50.8, 155.0], [50.9, 155.0], [51.0, 156.0], [51.1, 156.0], [51.2, 157.0], [51.3, 157.0], [51.4, 157.0], [51.5, 158.0], [51.6, 159.0], [51.7, 160.0], [51.8, 160.0], [51.9, 161.0], [52.0, 161.0], [52.1, 162.0], [52.2, 162.0], [52.3, 163.0], [52.4, 163.0], [52.5, 164.0], [52.6, 164.0], [52.7, 165.0], [52.8, 165.0], [52.9, 166.0], [53.0, 167.0], [53.1, 168.0], [53.2, 168.0], [53.3, 169.0], [53.4, 169.0], [53.5, 170.0], [53.6, 171.0], [53.7, 172.0], [53.8, 172.0], [53.9, 173.0], [54.0, 173.0], [54.1, 174.0], [54.2, 175.0], [54.3, 176.0], [54.4, 176.0], [54.5, 177.0], [54.6, 178.0], [54.7, 178.0], [54.8, 179.0], [54.9, 180.0], [55.0, 180.0], [55.1, 181.0], [55.2, 181.0], [55.3, 182.0], [55.4, 182.0], [55.5, 183.0], [55.6, 184.0], [55.7, 185.0], [55.8, 186.0], [55.9, 186.0], [56.0, 187.0], [56.1, 187.0], [56.2, 188.0], [56.3, 188.0], [56.4, 189.0], [56.5, 191.0], [56.6, 192.0], [56.7, 192.0], [56.8, 193.0], [56.9, 194.0], [57.0, 194.0], [57.1, 195.0], [57.2, 195.0], [57.3, 196.0], [57.4, 197.0], [57.5, 197.0], [57.6, 199.0], [57.7, 200.0], [57.8, 200.0], [57.9, 201.0], [58.0, 202.0], [58.1, 203.0], [58.2, 203.0], [58.3, 204.0], [58.4, 205.0], [58.5, 206.0], [58.6, 207.0], [58.7, 207.0], [58.8, 208.0], [58.9, 209.0], [59.0, 210.0], [59.1, 211.0], [59.2, 211.0], [59.3, 212.0], [59.4, 212.0], [59.5, 213.0], [59.6, 214.0], [59.7, 215.0], [59.8, 216.0], [59.9, 216.0], [60.0, 217.0], [60.1, 217.0], [60.2, 218.0], [60.3, 219.0], [60.4, 220.0], [60.5, 220.0], [60.6, 221.0], [60.7, 221.0], [60.8, 223.0], [60.9, 223.0], [61.0, 224.0], [61.1, 224.0], [61.2, 225.0], [61.3, 225.0], [61.4, 225.0], [61.5, 226.0], [61.6, 227.0], [61.7, 229.0], [61.8, 230.0], [61.9, 230.0], [62.0, 230.0], [62.1, 231.0], [62.2, 232.0], [62.3, 233.0], [62.4, 234.0], [62.5, 235.0], [62.6, 235.0], [62.7, 236.0], [62.8, 236.0], [62.9, 237.0], [63.0, 238.0], [63.1, 238.0], [63.2, 239.0], [63.3, 241.0], [63.4, 242.0], [63.5, 242.0], [63.6, 243.0], [63.7, 244.0], [63.8, 245.0], [63.9, 245.0], [64.0, 246.0], [64.1, 247.0], [64.2, 248.0], [64.3, 249.0], [64.4, 250.0], [64.5, 251.0], [64.6, 252.0], [64.7, 253.0], [64.8, 254.0], [64.9, 255.0], [65.0, 256.0], [65.1, 257.0], [65.2, 257.0], [65.3, 258.0], [65.4, 259.0], [65.5, 259.0], [65.6, 260.0], [65.7, 261.0], [65.8, 261.0], [65.9, 262.0], [66.0, 262.0], [66.1, 263.0], [66.2, 264.0], [66.3, 265.0], [66.4, 266.0], [66.5, 268.0], [66.6, 270.0], [66.7, 270.0], [66.8, 271.0], [66.9, 272.0], [67.0, 273.0], [67.1, 273.0], [67.2, 274.0], [67.3, 275.0], [67.4, 276.0], [67.5, 277.0], [67.6, 278.0], [67.7, 279.0], [67.8, 280.0], [67.9, 280.0], [68.0, 282.0], [68.1, 283.0], [68.2, 284.0], [68.3, 284.0], [68.4, 285.0], [68.5, 286.0], [68.6, 287.0], [68.7, 288.0], [68.8, 289.0], [68.9, 290.0], [69.0, 291.0], [69.1, 291.0], [69.2, 292.0], [69.3, 293.0], [69.4, 294.0], [69.5, 295.0], [69.6, 296.0], [69.7, 298.0], [69.8, 299.0], [69.9, 299.0], [70.0, 300.0], [70.1, 300.0], [70.2, 301.0], [70.3, 302.0], [70.4, 303.0], [70.5, 304.0], [70.6, 305.0], [70.7, 305.0], [70.8, 306.0], [70.9, 307.0], [71.0, 308.0], [71.1, 308.0], [71.2, 309.0], [71.3, 311.0], [71.4, 312.0], [71.5, 313.0], [71.6, 314.0], [71.7, 315.0], [71.8, 316.0], [71.9, 317.0], [72.0, 318.0], [72.1, 319.0], [72.2, 319.0], [72.3, 320.0], [72.4, 321.0], [72.5, 322.0], [72.6, 324.0], [72.7, 325.0], [72.8, 326.0], [72.9, 326.0], [73.0, 328.0], [73.1, 330.0], [73.2, 332.0], [73.3, 333.0], [73.4, 334.0], [73.5, 335.0], [73.6, 337.0], [73.7, 338.0], [73.8, 339.0], [73.9, 340.0], [74.0, 341.0], [74.1, 343.0], [74.2, 343.0], [74.3, 344.0], [74.4, 344.0], [74.5, 346.0], [74.6, 347.0], [74.7, 347.0], [74.8, 349.0], [74.9, 350.0], [75.0, 350.0], [75.1, 352.0], [75.2, 353.0], [75.3, 355.0], [75.4, 356.0], [75.5, 357.0], [75.6, 358.0], [75.7, 360.0], [75.8, 361.0], [75.9, 362.0], [76.0, 363.0], [76.1, 364.0], [76.2, 366.0], [76.3, 366.0], [76.4, 368.0], [76.5, 368.0], [76.6, 370.0], [76.7, 371.0], [76.8, 373.0], [76.9, 374.0], [77.0, 374.0], [77.1, 375.0], [77.2, 377.0], [77.3, 378.0], [77.4, 378.0], [77.5, 380.0], [77.6, 380.0], [77.7, 382.0], [77.8, 384.0], [77.9, 385.0], [78.0, 387.0], [78.1, 388.0], [78.2, 391.0], [78.3, 393.0], [78.4, 394.0], [78.5, 395.0], [78.6, 396.0], [78.7, 397.0], [78.8, 398.0], [78.9, 399.0], [79.0, 402.0], [79.1, 403.0], [79.2, 404.0], [79.3, 406.0], [79.4, 408.0], [79.5, 409.0], [79.6, 410.0], [79.7, 411.0], [79.8, 414.0], [79.9, 414.0], [80.0, 416.0], [80.1, 417.0], [80.2, 419.0], [80.3, 421.0], [80.4, 422.0], [80.5, 424.0], [80.6, 425.0], [80.7, 427.0], [80.8, 429.0], [80.9, 430.0], [81.0, 431.0], [81.1, 433.0], [81.2, 434.0], [81.3, 436.0], [81.4, 437.0], [81.5, 438.0], [81.6, 440.0], [81.7, 441.0], [81.8, 442.0], [81.9, 444.0], [82.0, 445.0], [82.1, 448.0], [82.2, 449.0], [82.3, 451.0], [82.4, 454.0], [82.5, 456.0], [82.6, 457.0], [82.7, 459.0], [82.8, 459.0], [82.9, 461.0], [83.0, 463.0], [83.1, 464.0], [83.2, 465.0], [83.3, 466.0], [83.4, 468.0], [83.5, 471.0], [83.6, 473.0], [83.7, 474.0], [83.8, 474.0], [83.9, 475.0], [84.0, 477.0], [84.1, 478.0], [84.2, 480.0], [84.3, 482.0], [84.4, 484.0], [84.5, 486.0], [84.6, 488.0], [84.7, 490.0], [84.8, 492.0], [84.9, 493.0], [85.0, 494.0], [85.1, 496.0], [85.2, 497.0], [85.3, 499.0], [85.4, 501.0], [85.5, 503.0], [85.6, 505.0], [85.7, 506.0], [85.8, 509.0], [85.9, 510.0], [86.0, 511.0], [86.1, 512.0], [86.2, 514.0], [86.3, 515.0], [86.4, 518.0], [86.5, 520.0], [86.6, 521.0], [86.7, 522.0], [86.8, 523.0], [86.9, 525.0], [87.0, 526.0], [87.1, 527.0], [87.2, 528.0], [87.3, 529.0], [87.4, 530.0], [87.5, 532.0], [87.6, 534.0], [87.7, 536.0], [87.8, 537.0], [87.9, 539.0], [88.0, 540.0], [88.1, 542.0], [88.2, 542.0], [88.3, 544.0], [88.4, 545.0], [88.5, 546.0], [88.6, 548.0], [88.7, 550.0], [88.8, 551.0], [88.9, 554.0], [89.0, 555.0], [89.1, 556.0], [89.2, 557.0], [89.3, 559.0], [89.4, 562.0], [89.5, 564.0], [89.6, 565.0], [89.7, 566.0], [89.8, 567.0], [89.9, 569.0], [90.0, 570.0], [90.1, 572.0], [90.2, 573.0], [90.3, 575.0], [90.4, 576.0], [90.5, 577.0], [90.6, 580.0], [90.7, 581.0], [90.8, 585.0], [90.9, 586.0], [91.0, 588.0], [91.1, 592.0], [91.2, 592.0], [91.3, 596.0], [91.4, 597.0], [91.5, 601.0], [91.6, 603.0], [91.7, 604.0], [91.8, 605.0], [91.9, 607.0], [92.0, 610.0], [92.1, 611.0], [92.2, 613.0], [92.3, 616.0], [92.4, 618.0], [92.5, 620.0], [92.6, 623.0], [92.7, 625.0], [92.8, 626.0], [92.9, 627.0], [93.0, 629.0], [93.1, 631.0], [93.2, 633.0], [93.3, 634.0], [93.4, 635.0], [93.5, 637.0], [93.6, 639.0], [93.7, 642.0], [93.8, 644.0], [93.9, 646.0], [94.0, 648.0], [94.1, 650.0], [94.2, 653.0], [94.3, 654.0], [94.4, 657.0], [94.5, 660.0], [94.6, 661.0], [94.7, 663.0], [94.8, 667.0], [94.9, 670.0], [95.0, 675.0], [95.1, 678.0], [95.2, 682.0], [95.3, 693.0], [95.4, 695.0], [95.5, 696.0], [95.6, 699.0], [95.7, 701.0], [95.8, 704.0], [95.9, 708.0], [96.0, 713.0], [96.1, 718.0], [96.2, 723.0], [96.3, 725.0], [96.4, 727.0], [96.5, 729.0], [96.6, 733.0], [96.7, 734.0], [96.8, 736.0], [96.9, 745.0], [97.0, 750.0], [97.1, 752.0], [97.2, 760.0], [97.3, 763.0], [97.4, 768.0], [97.5, 774.0], [97.6, 777.0], [97.7, 782.0], [97.8, 785.0], [97.9, 795.0], [98.0, 801.0], [98.1, 810.0], [98.2, 817.0], [98.3, 821.0], [98.4, 829.0], [98.5, 835.0], [98.6, 841.0], [98.7, 854.0], [98.8, 875.0], [98.9, 906.0], [99.0, 936.0], [99.1, 956.0], [99.2, 987.0], [99.3, 1025.0], [99.4, 1079.0], [99.5, 1164.0], [99.6, 1225.0], [99.7, 1333.0], [99.8, 1467.0], [99.9, 1717.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1647.0, "series": [{"data": [[0.0, 1647.0], [2100.0, 1.0], [2300.0, 1.0], [600.0, 216.0], [700.0, 123.0], [200.0, 639.0], [800.0, 47.0], [900.0, 18.0], [1000.0, 10.0], [1100.0, 9.0], [300.0, 464.0], [1200.0, 5.0], [1300.0, 2.0], [1400.0, 6.0], [400.0, 333.0], [100.0, 1346.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 317.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4432.0, "series": [{"data": [[0.0, 4432.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 750.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.970705725699068, "minX": 1.6040499E12, "maxY": 10.0, "series": [{"data": [[1.60405002E12, 9.970705725699068], [1.6040499E12, 9.998322147651024], [1.60404996E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405002E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 147.0, "minX": 1.0, "maxY": 942.0, "series": [{"data": [[8.0, 157.0], [4.0, 305.0], [2.0, 779.0], [1.0, 942.0], [9.0, 685.5], [10.0, 244.09420849420835], [5.0, 147.0], [6.0, 161.0], [3.0, 379.0], [7.0, 187.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99113680154139, 244.47707129094434]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8960.05, "minX": 1.6040499E12, "maxY": 8050750.2, "series": [{"data": [[1.60405002E12, 5228566.916666667], [1.6040499E12, 3646200.283333333], [1.60404996E12, 8050750.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405002E12, 11675.733333333334], [1.6040499E12, 8960.05], [1.60404996E12, 19132.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405002E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 239.3874198717949, "minX": 1.6040499E12, "maxY": 250.27363515312928, "series": [{"data": [[1.60405002E12, 250.27363515312928], [1.6040499E12, 247.83053691275177], [1.60404996E12, 239.3874198717949]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405002E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 237.2976762820509, "minX": 1.6040499E12, "maxY": 248.53395472703093, "series": [{"data": [[1.60405002E12, 248.53395472703093], [1.6040499E12, 246.21728187919476], [1.60404996E12, 237.2976762820509]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405002E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006410256410256408, "minX": 1.6040499E12, "maxY": 0.08389261744966454, "series": [{"data": [[1.60405002E12, 0.007323568575233016], [1.6040499E12, 0.08389261744966454], [1.60404996E12, 0.006410256410256408]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405002E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.6040499E12, "maxY": 2376.0, "series": [{"data": [[1.60405002E12, 1711.0], [1.6040499E12, 2376.0], [1.60404996E12, 1486.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405002E12, 33.0], [1.6040499E12, 36.73699971556664], [1.60404996E12, 33.47299940466881]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405002E12, 33.0], [1.6040499E12, 37.0], [1.60404996E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405002E12, 33.0], [1.6040499E12, 37.0], [1.60404996E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405002E12, 29.0], [1.6040499E12, 29.0], [1.60404996E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405002E12, 148.0], [1.6040499E12, 164.5], [1.60404996E12, 148.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405002E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 942.0, "series": [{"data": [[8.0, 448.5], [18.0, 448.0], [19.0, 571.0], [21.0, 364.0], [22.0, 189.0], [24.0, 425.0], [25.0, 341.5], [26.0, 288.5], [27.0, 304.0], [28.0, 348.5], [29.0, 230.0], [30.0, 284.5], [31.0, 194.0], [32.0, 249.5], [33.0, 193.0], [35.0, 222.5], [34.0, 219.0], [36.0, 231.0], [37.0, 149.0], [39.0, 109.0], [38.0, 158.5], [41.0, 202.0], [40.0, 232.5], [42.0, 215.0], [43.0, 127.0], [44.0, 263.0], [45.0, 183.0], [46.0, 172.5], [47.0, 112.0], [48.0, 136.5], [49.0, 164.0], [50.0, 72.0], [51.0, 107.0], [53.0, 55.0], [55.0, 127.5], [54.0, 130.0], [57.0, 77.0], [59.0, 81.5], [58.0, 145.5], [63.0, 58.0], [64.0, 65.0], [70.0, 81.5], [69.0, 63.0], [75.0, 102.0], [78.0, 92.0], [83.0, 86.0], [84.0, 71.5], [85.0, 88.0], [87.0, 77.0], [97.0, 51.0], [106.0, 55.0], [112.0, 56.0], [1.0, 942.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 938.0, "series": [{"data": [[8.0, 447.0], [18.0, 443.0], [19.0, 562.0], [21.0, 363.0], [22.0, 189.0], [24.0, 420.5], [25.0, 339.5], [26.0, 287.5], [27.0, 304.0], [28.0, 343.0], [29.0, 229.0], [30.0, 284.0], [31.0, 194.0], [32.0, 246.5], [33.0, 192.5], [35.0, 221.5], [34.0, 218.5], [36.0, 230.5], [37.0, 149.0], [39.0, 109.0], [38.0, 158.5], [41.0, 201.0], [40.0, 232.0], [42.0, 214.5], [43.0, 126.0], [44.0, 262.0], [45.0, 183.0], [46.0, 171.5], [47.0, 111.0], [48.0, 136.5], [49.0, 163.0], [50.0, 71.5], [51.0, 107.0], [53.0, 55.0], [55.0, 127.5], [54.0, 130.0], [57.0, 77.0], [59.0, 81.5], [58.0, 145.0], [63.0, 58.0], [64.0, 65.0], [70.0, 81.5], [69.0, 63.0], [75.0, 102.0], [78.0, 92.0], [83.0, 86.0], [84.0, 71.5], [85.0, 88.0], [87.0, 77.0], [97.0, 51.0], [106.0, 55.0], [112.0, 56.0], [1.0, 938.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 112.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.033333333333335, "minX": 1.6040499E12, "maxY": 41.6, "series": [{"data": [[1.60405002E12, 24.866666666666667], [1.6040499E12, 20.033333333333335], [1.60404996E12, 41.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405002E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.866666666666667, "minX": 1.6040499E12, "maxY": 41.6, "series": [{"data": [[1.60405002E12, 25.033333333333335], [1.6040499E12, 19.866666666666667], [1.60404996E12, 41.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405002E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.866666666666667, "minX": 1.6040499E12, "maxY": 41.6, "series": [{"data": [[1.60405002E12, 25.033333333333335], [1.6040499E12, 19.866666666666667], [1.60404996E12, 41.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405002E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.866666666666667, "minX": 1.6040499E12, "maxY": 41.6, "series": [{"data": [[1.60405002E12, 25.033333333333335], [1.6040499E12, 19.866666666666667], [1.60404996E12, 41.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405002E12, "title": "Total Transactions Per Second"}},
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

